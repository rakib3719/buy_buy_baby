import axios from 'axios'
export const postApi = async( api:string, data:object,)=>{
console.log(data, 'akhjane to asca re vai');
const datas = await axios.post(api,data);
return datas?.data;
}

