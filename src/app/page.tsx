


import Banner from "@/components/banner/Banner";

import  { Category2 } from "@/components/shared/Category";
import Sponser from "@/components/home/Sponser";
import Gallary, { Gallary2 } from "@/components/home/Gallary";
import Promotion from "@/components/home/Promotion";


export default function Home() {
  return (
    <div>

 
<Banner/>
{/* <Category/> */}

<Sponser/>
      
      <Gallary/>
      <Promotion/>
      <Gallary2/>
      <Category2/>
     
    </div>
  );
}
