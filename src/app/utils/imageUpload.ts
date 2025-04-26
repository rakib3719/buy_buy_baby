import axios from "axios";

export const uploadImage = async (img: string| undefined)=> {
    const form = new FormData();
    form.append("image", img);
    
    const {data} = await axios.post(
        'https://api.imgbb.com/1/upload?expiration=600&key=737238cd1ca9db74fb6d8f10c246b68e', 
        form
    );
    
  return data.data.display_url


};
