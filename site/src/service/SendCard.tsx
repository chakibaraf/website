import Axios from "./caller.service";

export const sendDataToBackend = async (data:any) => {
  try {
    const response = await Axios.post('/card', data);
    console.log(response.data); // afficher la réponse du backend si besoin
  } catch (error) {
    console.error(error);
  }
}