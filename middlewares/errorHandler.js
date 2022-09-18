import { DEBUG_MODE } from "../config";
import { ValidationError } from "joi";

const errorHandler = (err, req, res, next) => {
    let statusCode = 500;
    let data = {
        message: "Internal Server Error",
        ...(DEBUG_MODE === 'true' && { originalError: err.message })
    }

    // Check Error Type
    if(err instanceof ValidationError){
        statusCode = err.status;
        data = {
            message: err.message
        }
    }

    // Check if Error Is Custom Error.
    
}

export default errorHandler;