import UserApi from "../Api/UserApi.js"

class UserController { 
    constructor() { 
        this.userApi = new UserApi()
    }

    create = async (req, res) => { 
        try {
            const { name, email } = req.body;
            if (!name) throw new Error("Campo nombre vacío.")
            if (!email) throw new Error("Campo email vacío.")

            const info = {name, email}
            const data = await this.userApi.create(info);
            res.status(201).send({success:true, data: data, message:"creado"})
        } catch (error) {
            res.status(400).send({success:false, message: error.message})
        }
    }

    getAll = async (req, res) => { 
        try {
            const data  = await this.userApi.getAll();
            res.status(200).send({ success: true, data: data });
        } catch (error) {
            res.status(400).send({success: false, data: error.message})
            
        }
    }

    getUserById = async (req, res) => { 
        try {
            const { id } = req.params
            const data = await this.userApi.getUserById(id)
            res.status(200).send({success:true, data:data})
        } catch (error) {
            res.status(404).send({success:false, message:error.message})
        }
    }

    updateUser = async (req, res) => { 
        try {
            const { id } = req.params
            const { name, email } = req.body
            const data = await this.userApi.updateUser(id, name, email)

            res.status(200).send({success:true, data:data, message:"Modificado"})
            
        } catch (error) {
            if (error.code == 404) { 
                res.status(404).send({success:false, message:error.message})
            }

            if (error.code == 400) { 
                res.status(400).send({success:false, message:error.message})
            }
            
        }
    }

    deleteUser = async (req, res) => { 
        try {
            const { id } = req.params

            const data = await this.userApi.deleteUser(id)

            res.status(200).send({ success: true, message: "Eliminado" })
        } catch (error) {
            if (error.code == 404) { 
                res.status(404).send({success:false, message:error.message})
            }

            if (error.code == 400) { 
                res.status(400).send({success:false, message:error.message})
            }
        }
    }
}

export default UserController