

import ImageSearchResult from "@/components/ImageSearchResult";
import axios from "axios";
import Link from "next/link";

const ImageSearch = async ({ searchParams }) => {
  const startIndex = searchParams.start || "1";
  const { data } =
    await axios.get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyByy-HG9eS-FD_5wr4pjlYKdshtkDpOwWg&cx=97b4948a6c9c14e02
    &cx=97b4948a6c9c14e02&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}`);
  const results = data.items;
  

  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">No results found</h1>
        <p className="text-lg">
          Try searching for something else or go back to the homepage{" "}
          <Link href="/" className="text-blue-500">
            Home
          </Link>
        </p>
      </div>
    );
  }






  return (
    <>
     {results&&<ImageSearchResult results={data} />}
    </>  
  );
};

export default ImageSearch;
