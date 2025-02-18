
import { StaticImageData } from "next/image"

export type category = 
    {
        image?:StaticImageData | string,
        category: "V-Day" | "Cribs" | "Strollers" | "Travel_Combas" | "Bassinets" | "Car_Seats"| "Baby_Bottels" | "High chairs" | "Diaper_Bags"
        
        
        }



export type categoryType =category[]