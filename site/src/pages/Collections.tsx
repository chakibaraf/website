import React from 'react';
import '../style/Collec.css';
import { Carousel } from '../components/Carousel';
import { Footer } from '../layout/Footer'
import { ArticleList } from '../model/ArticleList';
import ArticleCard from '../components/ArticleCard';
//import { IArticle } from '../model/Article';

export const Collections = () => {
  return (
   <>
    <main className="main">
    <div className="left-container">
      <Carousel/>
      
    </div>
    <div className="right-container ">
      <div className="text-container">
        <h3 >GMA COMPANY</h3>
        <h1> Nos Articles  </h1>
        <p className='text-justify'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

    </div>
    <div className=''>
      {ArticleList.map((article) =>(
        <ArticleCard
        name={article.name}
        image={article.image}
        description={article.description}
        />
        ))}

    </div>
  </main>    
    <Footer/>
   </>
  )
}
export default Collections;