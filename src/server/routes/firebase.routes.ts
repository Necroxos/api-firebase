import { Router } from 'express';
import validate from '../middlewares/validate';
import firebaseController from '../controllers/firebase.controller';
import paramsValidator from '../middlewares/query-validate';

class FirebaseRoutes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        this.router.get('/', paramsValidator.queryValidationRule(), validate, firebaseController.testFoo);
    }
}

const firebaseRoutes = new FirebaseRoutes();
export default firebaseRoutes.router;
