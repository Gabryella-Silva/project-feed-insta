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
    private _numberOfLikes:number = 0; 
   
    
    constructor(userName:string,  avatarUrl:string, imageUrl:string, description:string,){ // usado para inicializar as propriedades do objeto

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
        
        comment(){
            const postContainer = document.getElementById(this._id)
    
            if(!postContainer) return 
    
            this.updateComment(postContainer)
            this.addComment(postContainer)
        }
    
        private updateComment(postHTML:Element){
            const commentBox = postHTML.querySelector("#comment-box") as HTMLElement;
    
            if (!commentBox) return;
    
            // Alterna a visibilidade do comentário
            commentBox.style.display = commentBox.style.display === "none" ? "flex" : "none";
        }
    
        private addComment(postHTML: Element) {
            const commentInput = postHTML.querySelector("#comment-input") as HTMLInputElement;
        
            // Verifica se o campo de entrada não está vazio
            if (!commentInput || commentInput.value.trim() === "") return;
        
            // Cria o novo comentário
            const newComment = `${this._userName}: ${commentInput.value}`;
        
            // Cria um novo elemento de comentário
            const commentItem = document.createElement("p");
            commentItem.textContent = newComment;
        
            // Encontra o footer do post
            const footer = postHTML.querySelector("#footer") as HTMLElement;
        
            if (footer) {
                footer.appendChild(commentItem); // Adiciona o comentário ao footer
                
            }
        
            // Limpa o campo de entrada
            commentInput.value = ""; 
        }
        
        
        save(){
            const postContainer = document.getElementById(this._id);
    
            if(!postContainer) return
    
            this.updateSaveIcon(postContainer);
        }
    
        private updateSaveIcon(postHTML:Element){
    
            const btnSave = postHTML?.querySelector("#btn-save");
            const icon =btnSave?.children[0]
    
            if (!icon) return;
    
            icon.classList.toggle('fa-regular');
            
            icon.classList.toggle('fa-solid');
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

                    <div id="btn-comment">
                     <i class="fa-regular fa-comment"></i>
                     </div>

                    <div>
                    <i class="fa-regular fa-paper-plane" ></i> 
                    </div>
                    
                    </div>
                    
                    <div id="btn-save" >
                    <i class="fa-regular fa-bookmark saved"></i>
                    </div>
                    
                    </div>`
    
    const postLikes = `  <div class="post-likes">

            <i class="fa-solid fa-heart"></i>
            <span> ${this._numberOfLikes} </span>
            </div>`

        const postDescrition = `<div class="post-descrition"> 
                                    <p> ${this._description} </p>
                                    </div>`

        const postContinuacaoComentarios = `<div class="continuação-dos-comentarios">

                    <div id="comment-box" style="display: none;">
                        <input type="text" id="comment-input" placeholder="Adicione um comentário...">
                        <button id="btn-add-comment">Postar</button>
                    </div>
                    
                    <div id="footer">
                        <!-`                         
                                
        postContainer.innerHTML += postHeader;
        postContainer.innerHTML += postImage;
        postContainer.innerHTML += postIcons;
        postContainer.innerHTML += postLikes;
        postContainer.innerHTML += postDescrition;
        postContainer.innerHTML += postContinuacaoComentarios;

        const btnLike = postContainer.querySelector("#btn-like")
        btnLike?.addEventListener("click" ,() => this.like());
      
       const btnSave = postContainer.querySelector("#btn-save")
        btnSave?.addEventListener("click", () => this.save());
        // (outro jeito de fazer) 
        //btnSave?.addEventListener("click", this.save.bind(this));

        const btnComment = postContainer.querySelector("#btn-comment");
        const commentBox = postContainer.querySelector("#comment-box") as HTMLElement;
        const btnAddComment = postContainer.querySelector("#btn-add-comment");

        btnComment?.addEventListener("click", () => {
            commentBox.style.display = commentBox.style.display === "none" ? "flex" : "none";
        });
        // Adicione os listeners

        btnAddComment?.addEventListener("click", () => this.addComment(postContainer));

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

