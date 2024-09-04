//import { randomUUID } from "node:crypto"; //serve para importaar id
import {v4 as randomUUID} from "uuid"
import { faker } from "@faker-js/faker"; // serve para importar dados fakes


class Post{
    private _id:string = randomUUID();
    private _userName:string;  //atributo privado
    private _avatarUrl:string;
    private _imageUrl: string;
    private _isLiked: boolean = false;
    private _descripiton:string;
    private _CreatedAt:Date = new Date;
    private _numberOfLikes:number = 0
   
    
    constructor(userName:string,  avatarUrl:string, imageUrl:string, description:string){ // usado para inicializar as propriedades do objeto

        this._userName = userName.toLocaleUpperCase() // Permite acessar, chamar e modificar as propriedades do objeto,
        this._avatarUrl = avatarUrl;
         this._imageUrl = imageUrl;
        this._descripiton = description;
        
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

    toHtml(){
        const div = document.createElement("div")
    div.innerHTML = `<div class = "post-container"> 
                    <div class ="post-header">
                    <div> </div>
                    <span> ${this._userName} </span>
    </div>             
    </div>` // colocar com crase pq é um string
    document.body.appendChild(div)

    }

}

const posts: Post[] = [];
 
for (let i = 0; i < 15; i++ ){
    const userName = faker.person.firstName();
    const avatarUrl = faker.image.avatar();
    const imageUrl = faker.image.urlLoremFlickr();
    const description = faker.lorem.word();

    const post = new Post(userName, avatarUrl, imageUrl, description);

    posts.push(post)
    post.toHtml()
    
}

posts[0].like();
posts[0].like();
console.log(posts[0])


function exibirPosts(){

    const postElement = document.getElementById('post'); // Seleciona o elemento com o ID 'post'
    postElement.textContent = "oioioi";
    document.body.appendChild(postElement)
}

/* const div = document.createElement("div")
div.innerHTML = "<b> oioi </b>"
document.body.appendChild(div) */