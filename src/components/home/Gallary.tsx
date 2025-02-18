import image from '@/asset/banner.jpg';
import image2 from '@/asset/banner2.jpg';  
import image3 from '@/asset/banner3.jpg';
import image4 from '@/asset/banner4.jpg';
import image5 from '@/asset/banner5.jpg';
import Image from 'next/image';
import img1 from '@/asset/gallary/gallary1.jpg'
import img2 from '@/asset/gallary/gallary2.jpg'
import img3 from '@/asset/gallary/gallary3.jpeg'
import img4 from '@/asset/gallary/gallary4.jpg'
import img5 from '@/asset/gallary/gallary5.jpg'

import { bgColors } from '@/app/utils/color';

const Gallary = () => {
    return (
        <div className='container px-4 lg:px-0 mx-auto mt-16'>

            <h1 className='font-bold text-3xl pb-2'>Premium Baby Products</h1>
           <div className='lg:flex gap-8 justify-between'>

        <section className='flex-1 relative'>
            <Image src={image} alt='image'  className='rounded-md lora text-sm md:text-base'/>
            <h1 className='font-semibold text-sm md:text-base'>Create a nursery for sweet dreams, playtime, and endless cuddles!</h1>
<div className=''>
    <h1 className='font-semibold absolute top-12 left-[25%] text-white text-3xl'>{"Your Baby's Happy Place"}</h1>
    <button
            className={`px-6 py-2 ${bgColors.secondary} text-black absolute top-20 left-[40%] lora rounded-full text-center font-bold mt-6 `}
           
          >

            Explore now
            </button>
</div>
        </section>
        <section className='flex-1 '>

            <div className='gap-4 flex'>
            <div>

<Image src={image2} alt='image' className='rounded-md text-sm md:text-base'/>
<h1 className='font-semibold text-sm md:text-base'>Comfort with every glides!</h1>
</div>
<div>

<Image src={image3} alt='image' className='rounded-md '/>
<h1 className='font-semibold text-sm md:text-base'>Keep an eye, always!</h1>
</div>
            </div>
            <div className='gap-4 flex mt-1'>
            <div>

<Image src={image4} alt='image' className='rounded-md text-sm md:text-base'/>
<h1 className='font-semibold'>Essential feeding support</h1>
</div>
<div>

<Image src={image5} alt='image' className='rounded-md'/>
<h1 className='font-semibold text-sm md:text-base'>Dreamy nights start here</h1>
</div>
            </div>
            

        </section>
           </div>

        </div>
    );
};

export const Gallary2 = () => {
    return (
        <div className='container px-4 lg:px-0 mx-auto mt-16'>

            <h1 className='font-bold text-3xl pb-2'>Play. Pretend. Grow!</h1>
           <div className='lg:flex gap-8 justify-between'>

        <section className='flex-1 relative'>
            <Image src={img1} alt='image'  className='rounded-md lora text-sm md:text-base'/>
            <h1 className='font-semibold text-sm md:text-base'>Watch their creativity explode with toys that turn playtime into an adventure.</h1>
{/* <div className=''>
    <h1 className='font-semibold absolute top-12 left-[25%] text-white text-3xl'>{"Your Baby's Happy Place"}</h1>
    <button
            className={`px-6 py-2 ${bgColors.secondary} text-black absolute top-20 left-[40%] lora rounded-full text-center font-bold mt-6 `}
           
          >

            Explore now
            </button>
</div> */}
        </section>
        <section className='flex-1 '>

            <div className='gap-4 flex'>
            <div>

<Image src={img2} alt='image' className='rounded-md text-sm md:text-base'/>
<h1 className='font-semibold text-sm md:text-base'>Montessori-inspired play</h1>
</div>
<div>

<Image src={img3} alt='image' className='rounded-md '/>
<h1 className='font-semibold text-sm md:text-base'>Interactive & stimulating</h1>
</div>
            </div>
            <div className='gap-4 flex mt-1'>
            <div>

<Image src={img4} alt='image' className='rounded-md text-sm md:text-base'/>
<h1 className='font-semibold'>Imagination starts here</h1>
</div>
<div>

<Image src={img5} alt='image' className='rounded-md'/>
<h1 className='font-semibold text-sm md:text-base'>Memory skills, boosted</h1>
</div>
            </div>
            

        </section>
           </div>

        </div>
    );
};

export default Gallary;