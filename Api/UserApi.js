import { MODO } from "../Config/config.js";
import Factory from "../DAOs/Factory.js";
import { esTextoAlfabetico, esMailValido, esTextoNumerico } from "../utils/validaciones.js";

class UserApi { 
        constructor() {
            this.factory = Factory.factory(MODO)
         }
    
        create = async (info) => { 
            try {
                //validar la info
                if (!esTextoAlfabetico(info.name) || !esMailValido(info.email)) { 
                    throw new Error("Name o Email inválidos")
                }
                const data = await this.factory.userDao.create(info)
                return await data;
            } catch (error) {
                throw error;
            }
    }
    
        getAll = async () => { 
            try {
                //validar la info
                const data = await this.factory.userDao.getAll()
                return await data;
            } catch (error) {
                throw error;
            }
    }
    
    getUserById = async (id) => { 
        try {
            //validar la info
            if (!esTextoNumerico(id)) { 
                throw new Error("No es un id válido. Sólo pueden ser ids numericos.")
            }
            const data = await this.factory.userDao.getUserById(id)
            if (data.length == 0) { 
                throw new Error("No se encontró el usuario")
            }
            return await data;
        } catch (error) {
            throw error;
        }
    }

    updateUser = async (id, name, email) => { 
        try {
            const error = new Error()
            
            if (!esTextoNumerico(id)) {
                error.message = "No es un id válido. Sólo pueden ser ids numericos."
                error.code = 400
                throw error
            }

            if (!esTextoAlfabetico(name) || !esMailValido(email)) { 
                error.message = "Solicitud Inválida."
                error.code = 400
                throw error
            }

            
            const data = await this.factory.userDao.updateUser(id, name, email)
            if (data == -1) { 
                error.message = "Usuario no encontrado."
                error.code = 404
                throw error
            }
        } catch (error) {
            throw error
        }
    }

    deleteUser = async (id) => {
        try {
            const error = new Error()
            
            if (!esTextoNumerico(id)) {
                error.message = "No es un id válido. Sólo pueden ser ids numericos."
                error.code = 400
                throw error
            }

            
            const data = await this.factory.userDao.deleteUser(id)
            if (data == -1) { 
                error.message = "Usuario no encontrado."
                error.code = 404
                throw error
            }
        } catch (error) {
            throw error;
        }
    }
}
    
export default UserApi