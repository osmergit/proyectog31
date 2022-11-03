import mongoose from "mongoose";

const userSchema = new mongoose.Schema (
    {
        nameuser: {
            type: String,
            require: true,
                  },
        password: {
            type: String,
            require: true
        },
        correo: {
            type: String,
            require: true,
            unique: true
        },
    }
);
export const user =mongoose.model('user',userSchema);
//module.exports = user;
//export default mongoose.model( "user", usuarioSchema);
export default user;