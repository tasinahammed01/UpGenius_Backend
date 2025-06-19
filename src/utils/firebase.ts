import admin from "firebase-admin";

const serviceAccount = require("../../firebasePrivateKey/upgenius-d2641-firebase-adminsdk-fbsvc-b57c6ee6d3.json"); // path to your Firebase service account

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export default admin;
