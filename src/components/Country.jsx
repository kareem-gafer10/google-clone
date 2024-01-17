import axios from "axios";

const getApiCountry = async () => {
  const { data } = await axios.get(
    `https://extreme-ip-lookup.com/json/?key=${process.env.IP_API_KEY}`
  );
  return data;
};

const Country = async () => {
  const getCountry = await getApiCountry();
  return <div>{getCountry.country}</div>;
};

export default Country;
