import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { useState,useContext } from 'react';
import { sendDataToBackend } from '../../service/SendCard';
import { ArticleContext } from '../../pages/Collections';

interface Ilikebar {
    filter:Function
    likefilter:Function;
    handleSendData:Function
}

export const Likebar = (props:Ilikebar) => {
  const [articles]=useContext(ArticleContext)
    const [like,setLike]= useState(false);
    const [showInput, setShowInput] = useState(false);
    console.log(like)

    const activateLikeFilter =()=>{
        props.likefilter(!like)
        setLike(!like)
        setShowInput(!showInput);
      }
      const handleSendData = () => {
        sendDataToBackend(articles);
      }
  return (
    <div>
        <div className="flex flex-row-reverse items-center bg-gradient-to-r from-yellow-400 to-orange-500">

        <Checkbox
       onClick={activateLikeFilter}
       icon={<FavoriteBorder />}
       checkedIcon={<Favorite />}
       checked={like}  
       />
        <input 
        placeholder="search.."
        onChange={(event)=>{
            props.filter(event.target.value);
        }}
        className="ml-2 outline-none bg-transparent text-white"
        />
        </div>
      
      {showInput &&
          <div className="flex flex-col items-center justify-center mt-10">
              <p className='font-semibold'> Veuillez renseignez votre mail et cliquer sur envoyez , pour demander un devis </p>

          <input placeholder="Votre email" className='mt-10' name='email'/>
                 <button  onClick={handleSendData} className='bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-md mt-3'>Envoyer</button>
          </div>
            
         }
        
    </div>
    

  )
}
