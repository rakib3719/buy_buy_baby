

// react icons
import {IoIosSearch} from "react-icons/io";


// data


const ResponsiveSearchbar = () => {




   

   
    return (
        <div className="relative w-full sm:w-[80%] product_search_input">
            <input
                className="px-4 py-1 border border-gray-600 border-border text-black w-full rounded-full pl-[40px] outline-none focus:border-[#3B9DF8]  placeholder-black "
                placeholder="What can we help you find?"
               />
            <IoIosSearch className="absolute top-[4px] left-2 text-[1.5rem] text-[#adadad]"/>

            
        </div>
    );
};

export default ResponsiveSearchbar;
