import UserModel from "./user.model.js";

export default class UserController{

    signUp(req, res){
        const {name, email, password, type} = req.body;
        const user = UserModel.SignUp(name, email, password, type);

        res.status(201).send(user);
    }

    signIn(req, res){
        const {email, password} = req.body;
        const user = UserModel.SignIn(email, password);

        if(!user){
            return res.status(400).send("Invalid user credential!");
        }else{
            return res.send("Successfully Login!");
        }
    }

}