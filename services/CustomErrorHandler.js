
class CustomErrorHandler extends Error{
    constructor(status, message) {
        super();
        this.status = status;
        this.message = message;
    }

    /**
     * To Create Custom Errors ex. not found Error.
     * @param {number} status 
     * @param {string} message 
     */

    static notFound(status, message){
        new CustomErrorHandler(401, message);
    }

    // 
}


export default CustomErrorHandler;