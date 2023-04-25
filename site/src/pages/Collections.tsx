import "../style/Collec.css";
import { Carousel } from "../components/Carousel";

import { ArticleList } from "../model/ArticleList";
import ArticleCard from "../components/vente/ArticleCard";
import { useNavigate } from "react-router-dom";
import { accountService } from "../service/account.service";
import Modal from "react-modal";
import ArticleModal from "../components/vente/ArticleModal";
import { useState, useEffect } from "react";

import { IArticle } from "../model/Article";
import React from "react";
import { Likebar } from "../components/vente/Likebar";
import { enqueueSnackbar } from "notistack";

Modal.setAppElement("#root");

export const ArticleContext = React.createContext<[IArticle[], Function]>([
  ArticleList,
  () => {},
]);

export const Collections = () => {
  const [articleOpen, setArticleOpen] = useState<IArticle | undefined>(
    undefined
  );
  const [articleDisplayed, setArticleDisplayed] = useState<IArticle[]>([]);
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function getArticles() {
      try {
        const result = await accountService.axiosGetArticles();
        const data = result.data;
        setArticles(data);
      } catch (error: any) {
        enqueueSnackbar(error.message, { variant: "error" });
      }
    }

    getArticles();
  }, []);

  useEffect(() => {
    setArticleDisplayed(
      articles.filter((article) =>
        article.name.toUpperCase().includes(search.toUpperCase())
      )
    );
  }, [search, articles]);

  let navigate = useNavigate();

  const logout = () => {
    accountService.logout();
    navigate("/");
  };

  const likefilter = (like: boolean) => {
    if (like) {
      setArticleDisplayed(articles.filter((article) => article.liked === true));
    } else {
      setArticleDisplayed(articles);
    }
  };
  const containerStyle =
    "grid grid-cols-4 xs:grid-cols-2 gap-6 border-spacing-5 p-20";
  const containerModal = " bg-white h-100 w-50 items-center justify-center";
  return (
    <>
      <div className="flex justify-end ">
        <button
          onClick={logout}
          className="bg-gradient-to-r from-green-500 to-orange-500 hover:from-green-700 hover:to-orange-700 py-2 px-4 items-center rounded mb-2 mt-2 mr-5"
        >
          Logout
        </button>
      </div>
      <main className="main">
        <div className="left-container">
          <Carousel />
        </div>
        <div className="right-container text">
          <div className="text-container">
            <h3>GMA COMPANY</h3>
            <h1> Nos collections </h1>
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </main>

      <h1 className="font-extrabold p-10"> Liste de nos articles </h1>

      <ArticleContext.Provider value={[articles, setArticles]}>
        <Likebar
          search={search}
          setSearch={setSearch}
          likefilter={likefilter}
          articles={articles}
        />
        <div className={containerStyle}>
          {articleDisplayed.map((article, i) => (
            <ArticleCard
              key={`card-collection-${i}`}
              article={article}
              openModal={setArticleOpen}
            />
          ))}

          <Modal
            className={containerModal}
            isOpen={articleOpen !== undefined}
            onRequestClose={() => setArticleOpen(undefined)}
          >
            <ArticleModal article={articleOpen} />
          </Modal>
        </div>
      </ArticleContext.Provider>
    </>
  );
};

export default Collections;
