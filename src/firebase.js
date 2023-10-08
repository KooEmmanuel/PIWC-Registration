import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    type: "service_account",
    projectId: "piwc-57cb5", // Use "projectId" with a capital "P"
    private_key_id: "bc4fddc16f855b0e8a33483c3e085ff2dc8bf0cd",
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC48hacGflUtnHy\nR4JPXrLz99kpRUeSwl/mllb27fd2Rm7JGYnfZaFbKT1zfw6GBgJM4cy6iqf6SVrH\n9JvfXi9v/NyJTa9tdzCvtwCnGuxL3J6WTg5TB6r7rnBq4JIJL6g8z4w0ydtPBD7z\n0vTlnbf32MdreEYyliNKRWna2DSQMWL+krB5ao+w4fWTIIvMkZyHuDYN9T4XcA+O\nWeMUjUNNUW47iMfa6DXBIjCAJ8YAIHQgU9AADgRs2H3FjlqK/M0aHTM+BlN4qW2+\nGvOZSB49scfz0UnShVdqKex7Y1lqkRUaNeGrkmYJT+xkXKgWk70phVZT8EuLaQIp\n12SmSosBAgMBAAECggEABqbvXJY6Il1WBBfeIeckaNx4FCEoyjaqdQuLfXA2Zrni\n7Dc6Yp9o2HPHZJzc+sHDBIfLDhsLvMlubs4SFaHjD5Q42uYWh8mHXuG0hU4qtdkm\nl/4QvSo8qZpZnXIOJ4RuTiC+ul7mFUBFgvGYhg6lpPrWUkoHEpEqxqtwQrTy+ppz\nmVXInpdzPfkPxHo2FDXFKXf+yd4ruPFxiGTnvaGz64kjct/eifUIeoCJW/tpGrEf\n04XSO1wXa89CDONeVpylK1+0ktxkGZvCjUou5F0cTbk0ogMbSTyjay1FstVlpR/s\nMz/xfspLFY7VYWYZXnH2uvOpEE51cMWTgNlnVV9ETQKBgQDeZOnFlw7xqR+3wn+N\nY3Eqh3JN2k+augXi1GL2jxS1l4sR9TQskeaIwxvN+qS1eDhPArivPdr+Bh3ZHgJ7\n6+jugGJH38yJUfG2tlq2jB7EYLgIE+rMe+SedJwRa/jVIB8F/7jAfS3dRM809wAx\nQ0xhlLORIefnhTt3cKs3vW+wewKBgQDU5ISKZ46kbZhG18NDiFYN88p1YCd/q6zH\n4GX/WQpiA5BjAbUfDQIJ6O4oTXZAjueqlxLlEWVLpu+Vfp48KpjoNz3Kfx/A4kbx\nsb4SIVlmx+AkF0qvZyrwOMCTEchq/XghLE7hb7jPsGVqbU8hnB7wR3z/l0cneKrK\neZocBzXfswKBgHV3Z+Lt/v62DgLJwQW1WLjWAhINFa7sQt+kvwDsYkvoV5SMp5pD\nFjl2lOEfWpBfh550GYi2a01xfaKIr1c1LDuNpFvCYg7GMZ4Ig7GYIUgorgvWOVb4\nubDYdvbcyPoJlVld0QAbHnaZObkIHhnnKhkAqjgmaI9pWBemc0llzfCxAoGARpuj\n+eNuw8o1fwmAkZ1eLTJ2K4fAke92VrRuH8qATxGviaa/U5UU4ASJOIS4e6Dp5QJG\nGgMy/WxYedSM1peqLxpjPA39khN6RB8XUxwMcrJH/LBc7N/itdmcxSpYtmNqvFXd\ns5dCTF/MwweN/y+wczDCnGKoDsdOnejG3BToIVECgYEAnJ4s8ZU8t0nA4vBw4bvC\nrFsSSFLhWUG6Sz50ly2Ag8feeGQBqyG8qKEFfybYz0CY/iY46sC1SnOgIqjZoLfF\ncxbuHee0xIpM1NbRcmr8nRBKcMG9hE7hNadHKffDlyzWW1mWdNVVFQPj41n+ToT8\nlTFt6HSsoZutosRvP4hyzW8=\n-----END PRIVATE KEY-----\n",
    client_email: "firebase-adminsdk-pt5pt@piwc-57cb5.iam.gserviceaccount.com",
    client_id: "107065498161354046299",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-pt5pt%40piwc-57cb5.iam.gserviceaccount.com",
    universe_domain: "googleapis.com"
  };
  
  
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };