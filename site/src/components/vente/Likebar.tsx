import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { useState } from "react";
import { IArticle } from "../../model/Article";
import { enqueueSnackbar } from "notistack";
import { accountService } from "../../service/account.service";
interface Ilikebar {
  likefilter: Function;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  articles: IArticle[];
}

export const Likebar = (props: Ilikebar) => {
  const [like, setLike] = useState(false);
  const [email, setEmail] = useState("");
  const [showInput, setShowInput] = useState(false);

  const activateLikeFilter = () => {
    props.likefilter(!like);
    setLike(!like);
    setShowInput(!showInput);
  };
  const handleSendData = async () => {
    const selectedArticles = props.articles.filter((article) => article.liked);
    if (!selectedArticles.length)
      return enqueueSnackbar("please enter atlast one article !", {
        variant: "warning",
      });

    if (!email)
      return enqueueSnackbar("please enter your email !", {
        variant: "warning",
      });

    try {
      const result = await accountService.axiosSendArticles({
        articles: selectedArticles,
        email,
      });
      console.log(result);
      enqueueSnackbar("votre demande a etait bien envoyé !", {
        variant: "success",
      });
    } catch (error: any) {
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };
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
          onChange={(event) => {
            props.setSearch(event.target.value);
          }}
          value={props.search}
          className="ml-2 placeholder:text-white outline-none bg-transparent text-white"
        />
      </div>

      {showInput && (
        <div className="flex flex-col items-center justify-center mt-10">
          <p className="font-semibold">
            {" "}
            Veuillez renseignez votre mail et cliquer sur envoyez , pour
            demander un devis{" "}
          </p>

          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Votre email"
            className="mt-10"
          />
          <button
            onClick={handleSendData}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-md mt-3"
          >
            Envoyer
          </button>
        </div>
      )}
    </div>
  );
};
