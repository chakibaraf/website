//* eslint-disable @typescript-eslint/no-unused-vars */
import { IArticle } from "../../model/Article"
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import {useContext, useState} from 'react';
import { ArticleContext } from "../../pages/Collections";


interface IArticleCard {
  article: IArticle
  openModal: Function,



}



const ArticleCard = (props: IArticleCard) => {
  const containerStyle = 'border-zinc-900  shadow-md  bg-orange-100 rounded p-1 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl';
  
  const [articles,setArticles] = useState(useContext(ArticleContext));

 
  console.log(articles)
  console.log(props.article.liked)



  return (
   
    <div className={containerStyle}>
      <Checkbox
        onClick={()=>{
          const articleToChange = articles.findIndex((article)=>{
            return article.name === props.article.name;
          }
          );
          const articleupdate = [...articles];
          articleupdate[articleToChange]={
            ...props.article,
            liked: !props.article.liked,
          };
          setArticles(articleupdate);
        }}
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
        name="checkdh"
       checked={props.article.liked}
        
        />
   
      <div onClick={() => props.openModal(props.article)}>
        

        <div className='gap-6 overflow-hidden'>
          <img src={props.article.image} alt="" />

          <h1 className='text-lg font-semibold'>{props.article.name}</h1>
          <p className='font-mono  '>
          </p>
        </div>
      </div>

    </div>

  )
}


export default ArticleCard