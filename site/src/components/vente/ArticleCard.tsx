//* eslint-disable @typescript-eslint/no-unused-vars */
import { IArticle } from "../../model/Article";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { useContext, useState } from "react";
import { ArticleContext } from "../../pages/Collections";
import { baseURL } from "../../service/caller.service";



interface IArticleCard {
  article: IArticle;
  openModal: Function;
  onQuantityChange: (quantity: number) => void;


}

const ArticleCard = (props: IArticleCard) => {
  const containerStyle =
    "border-zinc-900  shadow-md  bg-gradient-to-r from-yellow-400 to-orange-500 rounded p-1 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl";

  const [articles, setArticles] = useContext(ArticleContext);
  const [quantity, setQuantity] = useState(1);
  console.log(quantity)

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Number(event.target.value);
    setQuantity(newQuantity);
    props.onQuantityChange(newQuantity);
  };

  const handleAddToCart = () => {
    const articleToChange = articles.findIndex((article) => {
      return article.name === props.article.name;
    });

    const articleupdate = [...articles];
    articleupdate[articleToChange] = {
      ...props.article,
      quantity: quantity,
    };

    setArticles(articleupdate);
  };




  return (
    
    <div className={containerStyle}>
        <Checkbox
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
          onChange={() => {
            const articleToChange = articles.findIndex((article) => {
              return article.name === props.article.name;
            });
            const articleupdate = [...articles];
            articleupdate[articleToChange] = {
              ...props.article,
              liked: !props.article.liked,
              
            };
            setArticles(articleupdate);
          }}
        />

        <div onClick={() => props.openModal(props.article)}>
          <div className="gap-6 overflow-hidden">
            <img src={`${baseURL}/uploads/${props.article.image}`} alt="" />

            <h1 className="text-lg font-semibold">{props.article.name}</h1>
            <p className="font-mono  "></p>
          </div>
        </div>
          
        <div className="flex justify-center items-center">
          <button onClick={() => setQuantity(quantity - 1)}>-</button>
          <input
            type="number"
            className="w-12 text-sm text-center"
            value={quantity}
           
            onChange={handleQuantityChange}
          />
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
          <button onClick={handleAddToCart}></button>
        </div>
   

      </div>

  );
};

export default ArticleCard;
