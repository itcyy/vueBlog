import data1 from "./f1.md?raw"
import data2 from "./f2.md?raw"
import data3 from "./f3.md?raw"
import data4 from "./f4.md?raw"
export function setmd(id : any){
        if(id == 1){
                return data1 
        }
        if (id == 2) {
                return data2
        }
        if (id == 3) {
                return data3
        }
        if (id == 4) {
                return data4
        }
           
}
