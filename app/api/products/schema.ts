import {z} from "zod"

 const Productschema= z.object(
    {
        id:z.string(),
        name:z.string(),
        price:z.number()
    }
)
    
export default Productschema