import mongoose from "mongoose";
const Schema = mongoose.Schema;

const exampleModel = new Schema({
    /**
     * Your Schema Code Goes Here...
     */
    prop: { type: String, required: true }
})

export default mongoose.model('Example', exampleModel);