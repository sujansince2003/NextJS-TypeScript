import Image from "next/image";
import Link from "next/link";
import ProductCard from "./Components/ProductCard";
import { getServerSession } from "next-auth";

import type { Metadata } from "next";
import Heavycomp from "./Components/Heavycomp";
import { options } from "./api/auth/options";

export default async function Home() {
  const session = await getServerSession(options);
  return (
    <div>
      <h1 className="font-poppins">Hello {session && session.user!.email}</h1>
      <a href="/about" className="block">
        About us
      </a>
      {/* avoid using anchor tag as it reload the
      webpage and network requests need to be made again resulting loading time
      of app high */}
      <Link href={"/about/company"}>About company</Link>
      {/* use Link instead of anchor tag it doesnot reload the application and only make network request required for that page we are going to navigate */}
      <ProductCard />
      <Heavycomp />
    </div>
  );
}

// we can have metadata for individual pages.lets say we are in product page and we are fetching product and genreating metadata then
export async function generateMetadata(): Promise<Metadata> {
  // fetch product data  // generateMetadata is naming convention
  return {
    // title:product?.title,
    // description:product?.description
  };
}
