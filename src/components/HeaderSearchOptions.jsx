"use client";

import { AiOutlineCamera, AiOutlineSearch } from "react-icons/ai";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const HeaderSearchOptions = () => {

    const pathName = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const searchTerm = searchParams.get("searchTerm");


    const selectTab= tab=> {
        router.push(`/search/${tab === "Images" ? "image" : "web"}?searchTerm=${searchTerm}`);
      }



  return (
    <div className="flex justify-center lg:justify-start gap-x-5 border-b w-full lg:pl-48 text-gray-700 text-sm">
    
    <div onClick={()=>selectTab("All")}
     className={`flex items-center gap-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3  ${pathName === "/search/web" && "!text-blue-600 !border-blue-600"} `}>
      <AiOutlineSearch/>
      <p>All</p>
    </div>

    <div onClick={()=>selectTab("Images")} 
    className={`flex items-center gap-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 ${pathName === "/search/image" && "!text-blue-600 !border-blue-600"} `}>
      <AiOutlineCamera />
      <p>Images</p>
    </div>

  </div>
  )
}

export default HeaderSearchOptions