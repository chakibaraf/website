import Axios from "./caller.service";


export const sendFormulaireService = async (data: { subject: string; email: string; message: string; nom: string; }) => {

  try {
    const response = await Axios.post('/contact', data);
    
    return response.data;
  } catch (error) {
   
    console.error(error);
  }
}