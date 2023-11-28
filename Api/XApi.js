// class XApi {
//     constructor() {
//         this.memory = []
//      }
//     create = async (info) => {
//         try {
//             this.memory.push(info)
//             return await info;
//         } catch (error) {
//             throw error;
//         }
//     }
// }
// export default XApi

import { MODO } from "../Config/config.js";
import Factory from "../DAOs/Factory.js";

class XApi { 
        constructor() {
            this.factory = Factory.factory(MODO)
         }
    
        create = async (info) => { 
            try {
                const data = await this.factory.xDao.create(info)
                return await info;
            } catch (error) {
                throw error;
            }
        }
    }
    
    export default XApi