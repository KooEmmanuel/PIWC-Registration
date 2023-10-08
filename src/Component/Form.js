import React, { useState } from "react";
import styled from "styled-components";
import { db } from "../firebase"; // Import your Firebase configuration
import { collection, addDoc } from "firebase/firestore"; // Import Firestore functions
import piwcLogo from "./piwc-logo-2.png"; // Import the image
import backgroundImg  from "./back.jpg"; // Import the image


const Container = styled.div`
   background-image: url(${backgroundImg});
  background-size: cover; /* Cover the entire viewport */
  background-repeat: no-repeat;
  background-attachment: fixed; /* Fixed background */
  min-height: 100vh;
  overflow: hidden; /* Prevent content overflow */
  padding: 20px 10px; /* Adjust the padding for smaller screens */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */
  overflow: hidden; /* Prevent content overflow */

  @media (max-width: 1000px) {
    padding: 20px 10px; /* Adjust the padding for smaller screens */
    width: 100%;
  }
`;

const Card = styled.div`
  border-radius: 2px;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.2); /* Adjust the values as needed */
  padding: 100px;
  width: 50%; /* Set the width to 100% */
  text-align: center;
  margin: auto;
  @media (max-width: 1000px) {
    padding: 20px 20px; /* Adjust the padding for smaller screens */
    width: 100%;
  }
`;


const Title = styled.h2`
  text-align: center;
  margin-top: 200px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
  max-width: 300px;
  text-align: left;
`;
const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
`;

const Button = styled.button`
  background-color: #063970; /* Set the background color to yellow */
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%; /* Set the width to 100% */
`;


const Footer = styled.div`
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  padding: 20px; /* Add padding for space on both sides */
  margin-top: 20px; /* Add margin-top for space */
`;

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    phone: "",
    city: "",
    membership: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a reference to the Firestore collection (replace "form" with your collection name)
    const formCollectionRef = collection(db, "form");

    try {
      // Add the form data to Firestore
      await addDoc(formCollectionRef, formData);

      // Clear the form fields after successful submission
      setFormData({
        name: "",
        email: "",
        gender: "",
        phone: "",
        city: "",
        membership: "",
      });

      // You can also display a success message or redirect the user to a confirmation page
      console.log("Form data submitted successfully!");
    } catch (error) {
      // Handle any errors that occur during submission
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Container>
      <Title>Register for Service</Title>
      <Card>
        <FormContainer>
          <form onSubmit={handleSubmit}>
            <FormField>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </FormField>
            <FormField>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </FormField>
            <FormField>
              <Label htmlFor="gender">Gender</Label>
              <Select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Select>
            </FormField>
            <FormField>
              <Label htmlFor="phone">Phone</Label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </FormField>
            <FormField>
              <Label htmlFor="city">City</Label>
              <Input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
              />
            </FormField>
            <FormField>
              <Label htmlFor="membership">Membership</Label>
              <Select
                id="membership"
                name="membership"
                value={formData.membership}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Membership</option>
                <option value="1st time Guest">1st time Guest</option>
                <option value="2nd time Guest">2nd time Guest</option>
                <option value="Regular Attendant">Regular Attendant</option>
                <option value="Member">Member</option>
                <option value="Mature Saint">Mature Saint</option>
              </Select>
            </FormField>
            <Button type="submit">Submit</Button>
          </form>
        </FormContainer>
      </Card>
      <Footer>
      <img src={piwcLogo} alt="Your Logo" width="220" height="70" /> {/* Use the imported image */}
        <div>&copy; {new Date().getFullYear()} Pentecost International Worship Center </div>
      </Footer>
    </Container>
  );
}

export default Form;
