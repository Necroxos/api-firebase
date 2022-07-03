import dotenv from 'dotenv';
import Joi from 'joi';
import { IConfigInfo } from '../interfaces/config';
import { IFirebaseConfig } from '../interfaces/firebase-config';

dotenv.config();

class LoadConfig {

    baseConfig(): IConfigInfo {
        const configSchema = Joi.object<IConfigInfo>({
            NODE_ENV: Joi.string().valid('development', 'production').required(),
            PORT: Joi.number().required(),
        });
        const { error, value } = configSchema.validate(process.env, { allowUnknown: true });
    
        if (error) {
            throw error;
        }
        return { ...value } as IConfigInfo;
    }

    firebaseConfig(): IFirebaseConfig {
        const configSchema = Joi.object<IFirebaseConfig>({
            GOOGLE_APPLICATION_CREDENTIALS: Joi.string().required()
        });
        const { error, value } = configSchema.validate(process.env, { allowUnknown: true });
    
        if (error) {
            throw error;
        }
        return { ...value } as IFirebaseConfig;
    }

}

const loadConfig = new LoadConfig();
export default loadConfig;
