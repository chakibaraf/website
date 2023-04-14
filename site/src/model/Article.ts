export interface IArticle {
   
    name:string;
    image:any;
    description :string;
    liked:boolean;
    
}

export class Article implements IArticle{
   
    name;
    image;
    description;    
    liked;
  
    constructor(
     name:string,
      image:any, 
      description:string ,
      liked:boolean
      ){
            this.name=name;
            this.image=image;
            this.description=description;
            this.liked=liked;
           
        }
    

}