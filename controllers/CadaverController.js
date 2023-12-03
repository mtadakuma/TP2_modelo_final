import CadaverApi from "../Api/CadaverApi.js"



class CadaverController { 
    constructor() { 
        this.cadaverApi = new CadaverApi()
    }

    create = async (req, res) => { 
        try {
            const { info } = req.body;
            if (!info) throw new Error("No hay info")

            const data = await this.cadaverApi.createWord(info);
            res.status(200).send({message: data})
        } catch (error) {
            res.status(422).send({message: error.message})
        }
    }

    getAll = async (req, res) => { 
        try {
            const data  = await this.cadaverApi.getAll();
            res.status(200).send({ message: data });
        } catch (error) {
            res.status(422).send({message:error.message})
            
        }
    }

    delete = async (req, res) => { 
        try {
            const { word } = req.params;
            if (!word) throw new Error("Palabra vacía.")

            const data = await this.cadaverApi.deleteWord(word);
            if (data == -1) { 
                res.status(404).send({message: `[${word}] Palabra no encontrada.`}) 
            } else {
                res.status(200).send({message: data})
            }
            
        } catch (error) {
            res.status(422).send({message: error.message})
        }
    }

    getAmount = async (req, res) => { 
        try {
            const { amount } = req.params
            if (!amount) throw new Error("No hay cantidad")
            const data = await this.cadaverApi.getAmount(amount)
            res.status(200).send({message:data})
        } catch (error) {
            res.status(422).send({message:error.message})
            
        }
    }
}

export default CadaverController