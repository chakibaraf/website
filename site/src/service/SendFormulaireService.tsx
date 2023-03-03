import axios from 'axios';

export const sendFormulaireService = async (data: { subject: string; email: string; message: string; nom: string; }) => {
  try {
    const response = await axios.post('http://localhost:3001/contact', data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}