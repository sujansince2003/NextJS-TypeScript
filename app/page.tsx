import Image from "next/image";
import Link from "next/link";
import ProductCard from "./Components/ProductCard";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(options);
  return (
    <div>
      <h1>Hello {session && session.user!.name}</h1>
      <a href="/about" className="block">
        About us
      </a>
      {/* avoid using anchor tag as it reload the
      webpage and network requests need to be made again resulting loading time
      of app high */}
      <Link href={"/about/company"}>About company</Link>
      {/* use Link instead of anchor tag it doesnot reload the application and only make network request required for that page we are going to navigate */}
      <ProductCard />
    </div>
  );
}
