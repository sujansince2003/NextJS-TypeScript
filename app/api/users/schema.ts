import {z} from "zod"

const Userschema=z.object(
    {
        username:z.string().min(3),
        email:z.string().min(3)
    }
)

export default Userschema

