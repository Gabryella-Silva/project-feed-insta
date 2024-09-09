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
       const postContainer = document.getElementById(this._id)
        
        const btnLike =postContainer?.querySelector("#btn-like");
    
        if (!btnLike) return;
        btnLike.innerHTML = String(this._isLiked)
    }

    

    toHtml(){
       const postContainer = document.createElement("div");
       postContainer.className = "post-container";
       postContainer.id = this._id;

       const postHeader = `
                <div class="post-header"> 
               <div>  
               <img src="${this._avatarUrl}" alt=""> 
               </div>

               <span> ${this._userName}  </span>
            </div>
           `;


        const postImage = `<div class="post-image"> 
                <img  src=" ${this._imageUrl} " alt="">
            </div>
          
        `;

        const postIcons = ` <div id="post" class="post-icons"> 

                <div>

                    <div id="btn-like" onclick="like()">
                         <i class="fa-regular fa-heart"  ></i>
                    </div>

                    <div >
                         <i class="fa-regular fa-comment" ></i> 
                    </div>

                    <div>
                         <i class="fa-regular fa-paper-plane"></i> 
                    </div>

                </div>

                <div>
                    <i class="fa-regular fa-bookmark"></i>
                </div>

            </div>`


        postContainer.innerHTML = postHeader;
        postContainer.innerHTML += postImage;
        postContainer.innerHTML += postIcons;

        const btnLike = postContainer.querySelector("#btn-like")
        btnLike?.addEventListener("click" ,() => this.like());

      
        document.body.appendChild(postContainer);

    

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




/* const div = document.createElement("div")
div.innerHTML = "<b> oioi </b>"
document.body.appendChild(div) */