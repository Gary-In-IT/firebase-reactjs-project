import { useState } from "react";




export default function CreateListing() {    

    
    const [formData, setFormData] = useState({
        type: "trade",
        
    });

    const { type } = formData;

    function onChange() {}


  return (

    <main className="max-w-md px-2 mx-auto">
        <h1 className="text-3xl text-center mt-6 font-bold">Create a Listing</h1>

        <form>

        <p className="text-lg mt-6 font-semibold">Sell / Trade </p>

         <div className="flex">

            <button 
                type="button" 
                id="type" 
                value="sell" 
                onClick={onChange} 
                className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
                type === "trade"
                ? "bg-white text-black"
                : "bg-slate-600 text-white"
                }`}                
            >
                trade
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
                Sell
            </button>

         </div>

        </form>

    </main>

  )
}
