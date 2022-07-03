import * as admin from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';

export class FirebaseConnection {
    createConnection(): admin.firestore.Firestore {
        admin.initializeApp({ credential: admin.credential.applicationDefault() });
        return getFirestore();
    }
}

const dbConnection = new FirebaseConnection();
export default dbConnection;
