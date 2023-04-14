import { IArticle } from "../../model/Article"

interface IArticleModal {
    article: IArticle | undefined;

}

const containerStyle = "flex-cols items-center justify-center sm:text-base p-5"

const ArticleModal = (props: IArticleModal) => {

    return (
        <>
            <div className={containerStyle}>

                <div className="font-semibold text-5xl ">
                    {props.article !== undefined ? props.article.name : ""}
                </div>


                <div className="flex items-center justify-center mt-10">

                    <img className="h-50 w-50"
                        src={props.article !== undefined ? props.article.image : ""} alt={props.article?.image || "image article décorative"} />


                </div>
                <div className="items-center justify-center">
                    <h4 className="font-semibold">

                    description :
                    </h4>
                    <p className="font-mono">
                        {props.article !== undefined ? props.article.description : ""}
                    </p>
                </div>
            </div>
        </>
    )
}

export default ArticleModal