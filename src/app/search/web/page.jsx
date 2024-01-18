import axios from "axios";

const WebSearch = async ({ searchParams }) => {
  const { data } =
    await axios.get(`https://www.googleapis.com/customsearch/v1?key=
  AIzaSyC5AnILqdoHY9NOKe09QMSzrXNSMWLYCSE&cx=97b4948a6c9c14e02&q=${searchParams.searchTerm}`);
  const result = data.items;

  return (
    <>
      {result.map(({ title }) => (
        <h1 key={title}>{title}</h1>
      ))}
    </>
  );
};

export default WebSearch;
