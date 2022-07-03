import { Request, Response } from 'express';
import { EHttpStatusCode } from '../../enums/EHttpStatusCode';
import firebaseService from '../services/firebase.service';

class FirebaseController {

    public testFoo = async (req: Request, res: Response) => {
        try {
            const { test } = req.query;
            const testParam = String(test);
            const data = await firebaseService.testService(testParam);
            return res.status(EHttpStatusCode.Ok).json({ title: 'Controlador funcionando', data });
        } catch (error) {
            return res.status(EHttpStatusCode.InternalServerError).json(error);
        }
    };

}

const firebaseController = new FirebaseController();
export default firebaseController;
