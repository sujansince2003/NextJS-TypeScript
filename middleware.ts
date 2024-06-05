//protecting routes 
// import middleware from "next-auth/middleware";
// export default middleware
// instead of import and export in 2 lines we can do it in one go

export {default} from "next-auth/middleware"

export const config=
{
    matcher:["/users/:id*"]        //pages which we need to protect so that only login user can access. if we wanna protect pages after a page name : /users/:id*  
}