import Moment from "react-moment";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";




export default function ListingItem({listing, id, onEdit, onDelete }) {
  return (
    
    <li className="relative bg-white flex flex-col justify-between items-center shadow-md hover:shadow-xl rounded-md overflow-hidden transition-shadow duration-150 m-[10px]">

      <Link className="contents" to={`/category/${listing.type}/${id}`}>

      <img
          className="h-[170px] w-full object-cover hover:scale-105 transition-scale duration-200 ease-in"
          loading="lazy"
          src={listing.imgUrls[0]} alt="listing"
        />

        <Moment
          className="absolute top-2 left-2 bg-[#3377cc] text-white uppercase text-xs font-semibold rounded-md px-2 py-1 shadow-lg"
          fromNow
        >
          {listing.timestamp?.toDate()}
        </Moment>

        <div className="w-full p-[10px] ">
          <p className="font-semibold text-xl mb-0 text-gray-600 truncate">{listing.address}</p>
        </div>

        <p className="font-semibold mt-2 text-lg text[#457b9d]">{listing.name}</p>

        <p>${listing.offer ? listing.discountedPrice 
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          : listing.regularPrice
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          {listing.type === "rent" && " / month"}
        </p>
      </Link>
      {onEdit && (
       <MdModeEdit className="absolute bottom-2 right-7 h-4 cursor-pointer text-red-500 "
        onClick={() => onEdit(listing.id)} />        
        )}
        {onDelete && (
       <FaTrash className="absolute bottom-2 right-2 h-[14px] cursor-pointer text-red-500 "
        onClick={() => onDelete(listing.id)} />        
        )}
    </li>
  )
}
