class CadaverMemoryDao {
    constructor() {
        this.memory = ["Cadaver", "Memory"]
        // this.memory = []
    }

    createWord = async (info) => {
        try {
            this.memory.push(info)
            return await info;
        } catch (error) {
            throw error;
        }
    }

    getAll = async () => {
        try {
            const info = await this.memory.join(' ')
            return info;
        } catch (error) {
            throw error;
        }
    }

    deleteWord = async (word) => { 
        try {
            const exists = await this.memory.includes(word)
            let data = -1

            if (exists) { 
                this.memory = await this.memory.filter(w => w !== word)
                data = "Palabra eliminada"
            }
            return data;
        } catch (error) {
            throw error;
        }
    }

    getAmount  = async (amount) => { 
        try {
            const info = await fetch(`https://texto.deno.dev/palabras?cantidad=${amount}`)
            const data = await info.json()
            return data;
        } catch (error) {
            throw error;
        }
    }
}

export default CadaverMemoryDao