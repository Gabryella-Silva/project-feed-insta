//import { randomUUID } from "node:crypto"; //serve para importaar id
import {v4 as randomUUID} from "uuid"
import { faker } from "@faker-js/faker"; // serve para importar dados fakes


class Post{
    private _id:string = randomUUID();
    private _userName:string;  //atributo privado
    private _avatarUrl:string;
    private _imageUrl: string;
    private _isLiked: boolean = false;
    private _description:string;
    private _CreatedAt:Date = new Date;
    private _numberOfLikes:number = 0
   
    
    constructor(userName:string,  avatarUrl:string, imageUrl:string, description:string){ // usado para inicializar as propriedades do objeto

        this._userName = userName.toLocaleUpperCase() // Permite acessar, chamar e modificar as propriedades do objeto,
        this._avatarUrl = avatarUrl;
         this._imageUrl = imageUrl;
        this._description = description;
        
    }

    like(){

        const postContainer = document.getElementById(this._id)
        
        
        if(!postContainer) return
        
        this.updateLikeIcon( postContainer)
        this.updateTextNumberOfLikes(postContainer)

        this._isLiked= !this._isLiked;
    }
    
    private updateLikeIcon (postHTML: Element){

            const btnLike = postHTML?.querySelector("#btn-like");
            const icon = btnLike?.children[0]
            if (!icon) return;
            
            //o toggle verifica e remove 
            icon.classList.toggle('fa-solid');
            icon.classList.toggle('liked');
            icon.classList.toggle('fa-regular');
            
        }

        private updateTextNumberOfLikes(postHTML: HTMLElement){
            const postLikes = postHTML.querySelector(".post-likes");
            const span = postLikes?.querySelector("span");
            
            if(!span) return;


            if(this._isLiked){

                this._numberOfLikes -=1;  
            }
            
         
            else{
                this._numberOfLikes +=1;
            }
        
            span.textContent = this._numberOfLikes.toString()

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

        const postLikes = `  <div class="post-likes">

            <i class="fa-solid fa-heart"></i>
            <span> ${this._numberOfLikes} </span>
            </div>`

        const postDescrition = `<div class="post-descrition"> 
                                    <p> ${this._description} </p>
                                </div>`
            
        


        postContainer.innerHTML = postHeader;
        postContainer.innerHTML += postImage;
        postContainer.innerHTML += postIcons;
        postContainer.innerHTML += postLikes;
        postContainer.innerHTML += postDescrition;

        const btnLike = postContainer.querySelector("#btn-like")
        btnLike?.addEventListener("click" ,() => this.like());
      
        document.body.appendChild(postContainer);

    

    }

}



const posts: Post[] = [];
 
for (let i = 0; i < 15; i++ ){
    const userName = faker.person.firstName();
    const avatarUrl = faker.image.avatarGitHub();
    const imageUrl = faker.image.urlLoremFlickr();
    const description = faker.lorem.paragraph();

    const post = new Post(userName, avatarUrl, imageUrl, description);

    posts.push(post)
    post.toHtml()

    
    
}






/* const div = document.createElement("div")
div.innerHTML = "<b> oioi </b>"
document.body.appendChild(div) */