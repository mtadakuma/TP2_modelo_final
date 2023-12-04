class UserMemoryDao { 
    constructor() {
        this.memory = [{
            id: 1,
            name: "Miguel", 
            email: "miguel@gmail.com"
        }]
     }

    create = async (info) => { 
        try {
            // const id = this.memory.length + 1

            const ids = this.memory.map(user => {
                return user.id;
            });
            const id = Math.max(...ids) + 1;
            
            const { name, email } = info
            const user = {id, name, email}
            this.memory.push(user)
            return await user;
        } catch (error) {
            throw error;
        }
    }

    getAll = async () => { 
        try {
            const info = await this.memory
            return info;
        } catch (error) {
            throw error;
        }
    }

    getUserById = async (id) => { 
        try {
            const data = await this.memory.filter(user => user.id == id)
            return data;
        } catch (error) {
            throw error;
        }
    }

    updateUser = async (id, name, email) => { 
        try {
            const idx = this.memory.findIndex(user => user.id == id)
            let modificado = -1
            if (idx != -1) { 
                this.memory[idx].name = name
                this.memory[idx].email = email
                modificado = 1
            }
            return await modificado
        } catch (error) {
            throw error
        }
    }

    deleteUser = async (id) => { 
        try {
            const idx = this.memory.findIndex(user => user.id == id)
            let eliminado = -1
            if (idx != -1) { 
                this.memory = this.memory.filter(user => user.id != id)
                eliminado = 1
            }
            return await eliminado
        } catch (error) {
            
        }
    }

}

export default UserMemoryDao