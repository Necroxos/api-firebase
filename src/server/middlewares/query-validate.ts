import { check } from 'express-validator';

class QueryValidator {

    public queryValidationRule = () => (
        check('test').isString().isLength({ min: 4 }).optional()
    );
}

const paramsValidator = new QueryValidator();
export default paramsValidator;
