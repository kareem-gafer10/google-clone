import axios from "axios";

 const getApiCountry = async () => {
   const { data } = await axios.get(
     `https://extreme-ip-lookup.com/json/?key=61ay5z47Vhdi9jr2ehS9`
   );
   return data;
 };

 const Country = async () => {
   const getCountry = await getApiCountry();
   return <div>{getCountry.country}</div>;
 };

 export default Country;





