import jwt from "jsonwebtoken";
import { tokenVerificationErrors } from "../configs/jwtfunciones.js";

export const requireToken = (req, res, next) => {
    try {
        let token = req.headers?.authorization;

        if (!token) throw new Error("No Bearer");

        token = token.split(" ")[1];
        const { uid } = jwt.verify(token, process.env.JWTPRIVATEKEY);

        req.uid = uid;
        console.log(req.headers);
        next();
    } catch (error) {
        console.log(error.message);
        return res
            .status(401)
            .send({ error: tokenVerificationErrors[error.message] });
    }
};
export default requireToken;
