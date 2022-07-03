import { Router } from 'express';
import firebaseRoutes from './firebase.routes';

class IndexRoutes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        this.router.use('/appConfig', firebaseRoutes);
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;
