import * as admin from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';

export class FirebaseConnection {
    createConnection(): void {
        admin.initializeApp({ credential: admin.credential.applicationDefault() });
    }

    createDB(): admin.firestore.Firestore {
        return getFirestore();
    }
}

const dbConnection = new FirebaseConnection();
export default dbConnection;
