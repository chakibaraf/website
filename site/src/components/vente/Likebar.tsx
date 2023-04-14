import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { useState } from 'react';

interface Ilikebar {
    filter:Function
    likefilter:Function;
}

export const Likebar = (props:Ilikebar) => {
    const [like,setLike]= useState(false);
    console.log(like)

    const activateLikeFilter =()=>{
        props.likefilter(!like)
        setLike(!like)
      }
    
  return (
    <div>Likebar
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
        />
    </div>
  )
}
