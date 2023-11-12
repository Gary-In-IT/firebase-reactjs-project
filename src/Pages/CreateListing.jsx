import { useState } from "react";




export default function CreateListing() {    

    
    const [formData, setFormData] = useState({
        type: "trade",
        name: "",
        description: "",
        price: "",
        
    });

    const { type, name, description, price } = formData;

    function onChange() {}


  return (

    <main className="max-w-md px-2 mx-auto">
        <h1 className="text-3xl text-center mt-6 font-bold">Create a new Listing</h1>

        <form>

             {/* <p className="text-lg mt-6 font-semibold"> </p> */}

         <div className="flex mt-12">
            
            <button 
                type="button" 
                id="type" 
                value="trade" 
                onClick={onChange} 
                className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
                type === "Sell"
                ? "bg-white text-black"
                : "bg-slate-600 text-white"
                }`}                
            >
                Sell
            </button>

            <button 
                type="button" 
                id="type" 
                value="trade" 
                onClick={onChange} 
                className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
                type === "Sell"
                ? "bg-white text-black"
                : "bg-slate-600 text-white"
                }`}                
            >
                Trade
            </button>
          </div>

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

            <input
                type="number"
                id="regularPrice"
                value={price}
                onChange={onChange}
                placeholder="Price"
                min="1"
                max="400000000"
                required
                className="mt-2 mb-6 w-full px-4 py-2 text-xl rounded-lg shadow-md focus:bg-white focus:shadow-outline text-gray-600 font-medium"
            />
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
