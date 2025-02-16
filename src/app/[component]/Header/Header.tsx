
import { bgColors } from "@/app/utils/color";
import Navbar from "./Navbar";


const Header = () => {
    return (

        <>
        <div className={`${bgColors.primary} text-white text-center font-bold p-3`}>
            <h1> {`"Children are the hands of heaven." – Henry Ward Beecher`}</h1>
        
        </div>

        <div className="">
        <Navbar/>

        </div>
    
        </>
    );
};

export default Header;