import { ITest } from '../../interfaces/test';
import dbConnection from '../connection/index';

class FirebaseService {

    /**
     * Test function
     * @returns {string} Test message
     */
    testService = async (test: string): Promise<ITest> => {
        const db = dbConnection.createDB();
        const querySnapshot = await db.collection('appConfig').get();
        const data = querySnapshot.docs[0].data();
        console.log(data);
        return { message: 'Servicio activo', test, connection: data.urlVariant };
    };

}

const firebaseService = new FirebaseService();
export default firebaseService;
