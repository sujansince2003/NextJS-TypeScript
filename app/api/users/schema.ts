import {z} from "zod"

const Userschema=z.object(
    {
        name:z.string().min(3)
    }
)

export default Userschema

