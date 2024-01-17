import HeaderHome from "@/components/HeaderHome";
import SearchHome from "@/components/SearchHome";
import Logo from "../assets/Google_2015_logo.svg.png";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <HeaderHome />
      <div className="flex flex-col items-center mt-24">
        <Image src={Logo} alt="logo-google" width="300" height="100" />
        <SearchHome />
      </div>
    </>
  );
};

export default Home;
