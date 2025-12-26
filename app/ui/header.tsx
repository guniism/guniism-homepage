import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="absolute h-14 max-w-3xl w-full m-5 flex justify-center px-5">
      <div className="bg-con max-w-2xl w-full rounded-lg border border-bd flex flex-row justify-between items-center px-4">
        {/* <h1 className="text-4xl">Guniism</h1> */}
        <Link href="#">
          <Image
            src="/Logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="w-full h-auto"
          />
        </Link>
        <ul className="flex flex-row space-x-8 text-xl">
          {/* <li>Home</li> */}
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#project">Projects</Link>
          </li>
          {/* <li>Uses</li> */}
        </ul>
      </div>
    </div>
  );
}
