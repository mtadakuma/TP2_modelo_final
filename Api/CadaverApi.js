import { MODO } from "../Config/config.js";
import Factory from "../DAOs/Factory.js";
import { loggear, esTextoVacio, esTextoAlfabetico, esTextoNumerico } from "../utils/validaciones.js";


class CadaverApi { 
    constructor() {
        this.factory = Factory.factory(MODO)
    }

    createWord = async (info) => { 
        try {
            //validar la info
            loggear()
            if (esTextoVacio(info)) { 
                throw new Error('Palabra vacía.')
            }

            if (!esTextoAlfabetico(info)) { 
                throw new Error(`[${info}] No es una palabra con caracteres alfabéticos.`)
            }
            const data = await this.factory.cadaverDao.createWord(info)
            return await info;
        } catch (error) {
            throw error;
        }
    }
    
    getAll = async () => { 
        try {
            const data = await this.factory.cadaverDao.getAll()
            return await data;
        } catch (error) {
            throw error;
        }
    }

    deleteWord = async (word) => {
        try {
            if (esTextoVacio(word)) { 
                throw new Error('Palabra vacía.')
            }

            if (!esTextoAlfabetico(word)) { 
                throw new Error(`[${word}] No es una palabra con caracteres alfabéticos.`)
            }
            const data = await this.factory.cadaverDao.deleteWord(word)
            return await data;
        } catch (error) {
            throw error
        }
    }
    
    getAmount = async (amount) => { 
        try {
            if (!esTextoNumerico(amount)) { 
                throw new Error("No es un número.")
            }
            const data = await this.factory.cadaverDao.getAmount(amount)
            return await data;
        } catch (error) {
            throw error;
        }
    }
}

export default CadaverApi