import { useState } from "react";
import { toast } from "react-toastify";
import Spinner from './../components/Spinner';
import { useLocation } from 'react-router-dom';






export default function CreateListing() {    

    const [loading, setLoading] = useState(false);
    const [getLocate, setGetLocate] = useState(true);    

      
    const [formData, setFormData] = useState({        
        name: "",
        description: "",
        price: "",
        images: {},
        latitude: 0,
        longitude: 0,

    });

    const { name, description, price, images, latitude, longitude } = formData;

    function onChange(e) {
        let boolean = null;
        if (e.target.value === "true") {
          boolean = true;
        }
        if (e.target.value === "false") {
          boolean = false;
        }
        // Files
        if (e.target.files) {
          setFormData((prevState) => ({
            ...prevState,
            images: e.target.files,
          }));
        }
        // Text/Boolean/Number
        if (!e.target.files) {
          setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: boolean ?? e.target.value,
          }));
        }
    }

    async function onSubmit(e) {
      e.preventDefault();
      setLoading(true);
      return;
      }
      if (images.length > 6) {
        setLoading(false);
        toast.error("maximum 6 images are allowed");
        return;
      }
      let geolocation = {};
      let location;
      if (geolocationEnabled) {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_GEOCODE_API_KEY}`
        );
        const data = await response.json();
        console.log(data);
        geolocation.lat = data.results[0]?.geometry.location.lat ?? 0;
        geolocation.lng = data.results[0]?.geometry.location.lng ?? 0;
  
        location = data.status === "ZERO_RESULTS" && undefined;
  
        if (location === undefined) {
          setLoading(false);
          toast.error("please enter a correct address");
          return;
        }
      } else {
        geolocation.lat = latitude;
        geolocation.lng = longitude;
      }  

            
    
  return (

    <main className="max-w-md px-2 mx-auto">
        <h1 className="text-3xl text-center mt-6 font-bold">Create a new Listing</h1>

      <form onSubmit={onSubmit}>
                
        <div>
          <input 
            type="text" 
            name="name" 
            id="name"
            value={name} 
            onChange={onChange}
            placeholder="Listing Title" 
            maxLength="80" 
            minLength="3" 
            required
            className=" mt-8 mb-6 w-full px-4 py-2 text-xl rounded-lg shadow-md focus:bg-white focus:shadow-outline text-gray-600 font-medium" 
          />

          <textarea
              type="text"
              id="description"
              value={description}
              onChange={onChange}
              placeholder="Describe your Stuff"
              required
              className= "mt-2 mb-6 w-full px-4 py-2 text-xl rounded-lg shadow-md focus:bg-white focus:shadow-outline text-gray-600 font-medium"
          /> 

          {!getLocate && (
            <div className="flex space-x-6">

              <div className="">
                <p className="text-lg font-semibold">Latitude</p>
                <input type="number" id="latitude" value={latitude} onChange={onChange} className="w-full px-4 py-2 text-xl rounded-lg shadow-md focus:bg-white focus:shadow-outline text-gray-600 font-medium" />
              </div>

              <div className="">
                <p className="text-lg font-semibold">Longitude</p>
                <input type="number" id="longitude" value={longitude} onChange={onChange} className="w-full px-4 py-2 text-xl rounded-lg shadow-md focus:bg-white focus:shadow-outline text-gray-600 font-medium" />
              </div>

            </div>
          )}


        </div>                   

        <div className="flex items-center mb-6">          
          <div className="flex w-full justify-center items-center space-x-6">
            <input
              type="number"
              id="price"
              value={price}
              onChange={onChange}
              placeholder="Price in $" 
              min="1"
              max="400000000"
              className="w-full mt-6 px-4 py-2 text-xl rounded-lg shadow-md focus:bg-white focus:shadow-outline text-gray-600 font-medium"
            />            

          </div>       
        </div>


          
        
        <div className="mb-6">
          <p className="text-lg font-semibold">Images</p>
          <p className="text-gray-600">
              The first image will be the cover (max 6)
          </p>
          <input
              type="file"
              id="images"
              onChange={onChange}
              accept=".jpg,.png,.jpeg"
              multiple
              required
              className="w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-white focus:border-slate-600"
          />
        </div>

        <button
        type="submit"
        className="mb-6 w-full px-7 py-3 bg-blue-600 text-white font-medium text-sm uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
        Create Listing
        </button>

      </form>
    </main>

  )
}
}