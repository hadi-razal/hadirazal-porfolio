import Link from "next/link";
import { RiInstagramFill, RiTwitterFill } from "react-icons/ri";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10">
     // <div className="flex items-center justify-center">
       // <h1 className="text-[30px] ">Coming Soon...</h1>
     // </div>
      <div className="flex items-center justify-center gap-6">

        <div className="flex items-center justify-center">
          <h1>Follow On</h1>
        </div>

        <div className="flex items-center justify-center gap-6">
          <Link target="_blank" href={'https://x.com/Hadi_Razal'}>
            <RiTwitterFill />
          </Link>
          <Link target="_blank" href={'https://www.instagram.com/hadi_razal/'}>
            <RiInstagramFill />
          </Link>
        </div>

      </div>
    </div>
  );
}
