// server.ts
import express from 'express';
import { initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const app = express();
const port = process.env.PORT || 3000;

// Firebase configuration
initializeApp();
const db = getFirestore();

app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});