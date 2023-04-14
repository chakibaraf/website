
import { useForm, SubmitHandler } from "react-hook-form";
import { useSnackbar } from 'notistack';

import { Carte } from '../components/Carte';
import '../style/Carte.css'
import { sendFormulaireService } from '../service/SendFormulaireService';

type FormInputs = {
    subject: string,
    email: string,
    message: string
    nom: string

}

export const FormulaireContact = () => {
    const {enqueueSnackbar} = useSnackbar();
   
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormInputs>()

    const handleFormSubmit: SubmitHandler<FormInputs> = async (data) => {
        try {

            const response = await sendFormulaireService(data);
            enqueueSnackbar('formuliare envoyé avec succés', {variant: 'success'});
            console.log(response);
            
            reset();
        } catch (error) {
            enqueueSnackbar('erreur', {variant: 'error'});
            console.error(error);
        }
    };



    return (
        <>
           
            
            <h3 className=' font-extrabold ml-20 mt-40 text-3xl sm:flex mt-40'>Contactez-nous</h3>
            <div className='flex justify-center items-center'>

                <div className='w-full sm:flex'>





                    <form onSubmit={handleSubmit(handleFormSubmit)} className='sm:contactform  item-center rounded mt-20 sm:ml-60 mr-20 '>
                        <h3 className='font-extrabold mt-1 text-3xl sm:flex '>Any Questions ?</h3>
                        <span className='mt-2 flex '> Bienvenue au  centre  d'assistance
                        </span>
                         
                        <div className='center '>

                            <label className='block mt-5' htmlFor='subject'></label>
                            <input {...register("subject")} className='border rounded-lg p-1' type="text" name="subject" id="subject" placeholder='sujet *' />



                            <label className='block mt-3' htmlFor='email'> </label>
                            <input {...register("email", { required: true })} className='border rounded-lg p-1' type="email" name="email" id="email" placeholder='email*' />
                            {errors.email && <p className='text-[red]'>Email requis !</p>}



                            <label className='block mt-3' htmlFor='nom'> </label>
                            <input {...register("nom", { required: true })} className='border rounded-lg p-1 ' type="text" name="nom" id="nom" placeholder='Nom*' />
                            {errors.nom && <p className='text-[red]'>Nom requis !</p>}



                            <label className='block mt-3 align' htmlFor='message'></label>

                            <textarea {...register("message", { required: true })} cols={30} rows={4} className='border resize-none rounded-lg p-2' name="message" id="message" placeholder='message*' />
                            {errors.message && <p className='text-[red]'>Message requis !</p>}

                        </div>


                        <input type="submit" className='block bg-[black] rounded-lg opacity-100 text-[white] py-3 px-3 hover:bg-[gray]  ' />
                    </form>



                    <div className='map-container mt-40 sm:ml-40 sticky top-96 z-10 '>

                        <Carte position={[50.689211, 3.178093]} text={`GMA International 14 rue du coq français 59100 roubaix`} />

                    </div>


                </ div>

            </div>
            <h3 className='font-extrabold mt-5 mb-5 text-2xl flex flex-col items-center '> Questions Frequentes ?</h3>
            

        </>
    )
}