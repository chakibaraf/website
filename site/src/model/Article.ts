export interface IArticle {
   
    name:string;
    image:any;
    description :string;
    liked:boolean;
    quantity?:number;
}

export class Article implements IArticle{
   
    name;
    image;
    description;    
    liked;
    quantity;
  
    constructor(
     name:string,
      image:any, 
      description:string ,
      liked:boolean,
      quantity?:number,
      ){
            this.name=name;
            this.image=image;
            this.description=description;
            this.liked=liked;
            this.quantity=quantity;
           
        }
    

}