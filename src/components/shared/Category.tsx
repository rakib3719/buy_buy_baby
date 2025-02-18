import {  categoryType } from '@/app/utils/type/category.type'
import img1 from '@/asset/home/cat1.png'
import img2 from '@/asset/home/cat2.png'
import img3 from '@/asset/home/cat3.png'
import img4 from '@/asset/home/cat4.png'
import img5 from '@/asset/home/cat5.png'
import img6 from '@/asset/home/cat6.png'
import img7 from '@/asset/home/cat7.png'
import img8 from '@/asset/home/cat8.png'

import Image from 'next/image'

import image1 from '@/asset/category/category1.jpg'
import image2 from '@/asset/category/category2.jpg'
import image3 from '@/asset/category/category3.jpg'
import image4 from '@/asset/category/category4.jpg'


const Category = () => {



const category:categoryType =[
    {
        image:img1,
        category:"V-Day"
    
    },
    {
        image:img2,
        category: 'Travel_Combas'
    },
    {
        image:img3,
        category: 'Strollers'
    },
    {
        image:img4,
        category: 'High chairs'
    },
    {
        image:img5,
        category: 'Diaper_Bags'
    },
    {
        image:img6,
        category: 'Cribs'
    },
    {
        image:img7,
        category: 'Bassinets'
    },
    {
        image:img8,
        category: 'Baby_Bottels'
    },
]

    return (
        <div  className='flex gap-4 container mx-auto items-center mt-8 '>
           {
   category.map((c, index)=><div key={index}>

<Image src={c?.image as string} alt="image"/>
<h1>  {c?.category} </h1>

   </div>)
           } 
        </div>
    );
};
export const Category2 = () => {





    return (
        <div  className='container px-4 md:px-0 mt-16 mx-auto'>
          <h1 className='font-semibold text-2xl pb-4'>Your Favorites Priced Just Right</h1>

<section className='grid grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-4'>
    <div className='bg-gray-200 hover:scale-105 transition-transform duration-500  rounded-md  mx-auto p-8 text-center'>
<Image  src={image1} alt='image' className='rounded-full'/>
<h1 className='font-semibold mt-4 text-2xl' >under</h1>
<h2 className='font-semibold text-3xl mt-2'>৳40</h2>
    </div>
    <div className='bg-gray-200 hover:scale-105 transition-transform duration-500  rounded-md  mx-auto p-8 text-center'>
<Image  src={image2} alt='image' className='rounded-full'/>
<h1 className='font-semibold mt-4 text-2xl' >under</h1>
<h2 className='font-semibold text-3xl mt-2'>৳50</h2>
    </div>
    <div className='bg-gray-200 hover:scale-105 transition-transform duration-500  rounded-md  mx-auto p-8 text-center'>
<Image  src={image3} alt='image' className='rounded-full'/>
<h1 className='font-semibold mt-4 text-2xl' >under</h1>
<h2 className='font-semibold text-3xl mt-2'>৳75</h2>
    </div>
    <div className='bg-gray-200 hover:scale-105 transition-transform duration-500  rounded-md  mx-auto p-8 text-center'>
<Image  src={image4} alt='image' className='rounded-full'/>
<h1 className='font-semibold mt-4 text-2xl' >under</h1>
<h2 className='font-semibold text-3xl mt-2'>৳100</h2>
    </div>
   
    
</section>
        </div>
    );
};



export default Category;