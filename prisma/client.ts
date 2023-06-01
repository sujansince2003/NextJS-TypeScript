// import { PrismaClient } from "@prisma/client";

// const prisma=new PrismaClient()  //now inside instance of prismaclient  , we have access to  models we have defined in schema  eg: prisma.user.create()


// export default prisma


// in nextjs we have fast refresh  anytime we change our source code so when modules are rfreshed we end up in situation where there are too many prisma clients so we use nextjs code from prisma docs
import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()   

//first the instance is created and stored in globalThis var then when module are refreshed this var is checked if instance is not found new instance is created

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma

