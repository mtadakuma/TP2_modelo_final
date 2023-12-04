import XMemoryDao from "./Memory/XMemoryDao.js"
import UserMemoryDao from "./Memory/UserMemoryDao.js"

class Factory { 
    constructor() {

     }

    static factory = (modo) =>{ 
        if (modo === "memory") { 
            return {
                xDao: new XMemoryDao(),
                userDao: new UserMemoryDao()
            }
        }

        if (modo === "sql") { 
            return {
                xDao: "new XSqlDao()"
            }
        }

        if (modo === "mongo") { 
            return {
                xDao: "new XMongoDao()"
            }
        }
    }
}

export default Factory