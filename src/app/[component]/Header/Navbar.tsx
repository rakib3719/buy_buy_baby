
import { NavigationMenuDemo } from "./DropDown.Menu";
import ResponsiveSearchbar from "../shared/SearchVar";
import { CiHeart } from "react-icons/ci";
import { DropdownMenuDemo } from "./Profile";
import { IoCartOutline } from "react-icons/io5";

import { SheetDemo } from "./SideBar";
import Ad from "./Ad";
import { colors } from "@/app/utils/color";



const Navbar = () => {


    return (
<div>
        <div className="shadow md:border-b pb-2 md:pb-0">
        <div className="flex md:justify-between p-3  items-center ">

<div className="md:hidden">
    <SheetDemo/>
</div>

        <div className="text-center mx-auto">
        <h1 className={`$ ${colors.primary}  font-semibold`}>Buy Buy Baby</h1>
        </div>

 <div className="hidden md:block">
 <NavigationMenuDemo/>
 </div>

    <div className="flex mx-auto text-center mr-10 justify-between items-center">
    <div className="hidden mx-auto text-center md:block">
    <ResponsiveSearchbar/>
    </div>
        <div className="flex ml-8 md:ml-3 justify-between items-center">

        <CiHeart  className="text-3xl"/>
<DropdownMenuDemo/>
<IoCartOutline className="text-3xl"/>
        </div>
    </div>

        </div>
      <div className="  p-2 md:hidden">
      <ResponsiveSearchbar/>
      </div>
      
        </div>
        <Ad/>
        </div>
    );
};

export default Navbar;