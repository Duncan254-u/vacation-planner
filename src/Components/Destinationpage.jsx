import React, {useState, useEffect} from "react";
import axios from "axios";
function DestinationPage (){
    const [desinations, setDestinations]= useState([]);

   const [loading, setLoading] = useState(true);

   const [error, setError]= useState(null);

const getAccessToken = async () => {
    try {
        const response = await axios.get("https://test.api.amadeus.com/v1/reference-data/locations",
            {
                params: {
                    keyword: "Paris",
                    subType: "City"
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
        setDestinationData(response.data.data[0]);
        setLoading(false);
    }catch (error) {
        setError("Failed to fetch city details");
        setLoading(false);
        console.log(error);
    }
};
useEffect(() => {
    fetchCityDetails();

   }, []);
   if (loading) return <p>Loading destination details..</p>

   if (error) return <p>{error}</p>

   ret
}