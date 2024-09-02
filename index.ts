import { randomUUID } from "node:crypto"; //serve para importaar id
import { faker } from "@faker-js/faker"; // serve para importar dados fakes


class Post{
    private _id:string
    private _userName:string; //atributo privado
    private _avatarUrl:string;
    private _imageUrl: string;
    private _isLiked: boolean
    private _descripiton:string;
    private _CreatedAt:Date;
    private _numberOfLikes:number;
   
    
    constructor(userName:string,  avatarUrl:string, imageUrl:string, description:string){ // usado para inicializar as propriedades do objeto
        this._id = randomUUID();
        this._userName = userName.toLocaleUpperCase() // Permite acessar, chamar e modificar as propriedades do objeto,
        this._avatarUrl = avatarUrl;
         this._imageUrl = imageUrl;
         this._isLiked = false
        this._descripiton = description;
        this._CreatedAt = new Date;
        this._numberOfLikes = 0;
        
    }

    like(){
        this._isLiked = !this._isLiked;

        //incrementa o numero de likes
        if(this._isLiked){
            this._numberOfLikes += 1;

            //descrementa o número de likes
        }else{
            this._numberOfLikes -= 1;
        }
    }
    
/*     get id(){
        return this._id;
    }
    get userName(){ //usado para ter acesso ao atributo privado userName
        return this._userName.toLocaleUpperCase();
    }
  
    get avatarUrl(){
        return this._avatarUrl;
    }
    get imageUrl(){
        return this._imageUrl;
    }

    get description(){
        return this._descripiton; //usado para ter acesso ao atributo privado descricao
    }
    
    get createdAt(){
        return this._CreatedAt; //usado para ter acesso ao atributo privado dataPostagem
    }

    get numberOfLikes(){
        return this._numberOfLikes;
    } */

}

const posts: Post[] = [];
 
for (let i = 0; i < 15; i++ ){
    const userName = faker.person.firstName();
    const avatarUrl = faker.image.avatar();
    const imageUrl = faker.image.urlLoremFlickr();
    const description = faker.lorem.word();

    const post = new Post(userName, avatarUrl, imageUrl, description);

    posts.push(post)
    
}

posts[0].like();
posts[0].like();
console.log(posts[0])


