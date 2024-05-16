import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello</h1>
      <a href="/about" className="block">
        About us
      </a>
      {/* avoid using anchor tag as it reload the
      webpage and network requests need to be made again resulting loading time
      of app high */}
      <Link href={"/about/company"}>About company</Link>

      {/* use Link instead of anchor tag it doesnot reload the application and only make network request required for that page we are going to navigate */}
    </div>
  );
}
