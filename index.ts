import { randomUUID } from "node:crypto"; //serve para importaar id
import { faker } from "@faker-js/faker"; // serve para importar dados fakes


class Post{
    private _id:string
    private _userName:string; //atributo privado
    private _descricao:string;
    private _dataPostagem:Date;
    private _numeroCurtidas:number;
    private _seguirUsuario:boolean;
    private _enviarPost:boolean;
    private _salvarPost:boolean;
    private _comentarPost:string
    
    constructor(userName:string,  descricao:string, seguirUsuario:boolean, enviarPost:boolean, salvarPost:boolean, comentarPost:string ){ // usado para inicializar as propriedades do objeto
        this._userName = userName.toLocaleUpperCase() // Permite acessar, chamar e modificar as propriedades do objeto,
        this._descricao = descricao;
        this._dataPostagem = new Date;
        this._numeroCurtidas = 0;
        this._seguirUsuario = seguirUsuario;
        this._enviarPost = enviarPost;
        this._salvarPost = salvarPost;
        this._comentarPost = comentarPost;
        this._id = randomUUID();
        
    }
    
    get id(){
        return this._id;
    }
    get userName(){ //usado para ter acesso ao atributo privado userName
        return this._userName.toLocaleUpperCase();
    }
  

    get descricao(){
        return this._descricao; //usado para ter acesso ao atributo privado descricao
    }
    
    get dataPostagem(){
        return this._dataPostagem; //usado para ter acesso ao atributo privado dataPostagem
    }

    get numeroCurtida(){
        return this._numeroCurtidas;
    }

    get seguirUsuario():boolean{
        return this._seguirUsuario;
    }
    get enviarPost(){
        return this._enviarPost;
    }
    
    get salvarPost(){
        return this._salvarPost;
    }

    get comentarPost(){
        return this._comentarPost;
    }

    set comentarPost(comentarPost:string){
        this._comentarPost = comentarPost;  //usado para mudar o atributo privado
    }


    
    incrementarCurtida(){
        this._numeroCurtidas +=1 //ou ++; //metodo para incrementar o numero de curtidas
    
    }

    
}

// Função para criar e exibir posts no HTML
function exibirPosts(){

    const postContainer = document.getElementById('posts');

    
    for (let i = 0; i < 15; i++ ){
        const userName = faker.person.firstName();
        const descricao = faker.lorem.word();
        
        const post = new Post(userName, descricao, true ,true, true, "linda vista");
        
        
        post.incrementarCurtida() // Incrementa as curtidas

     // Criando os elementos HTML para exibir o post
    const postElement = document.createElement('div');
    postElement.className = 'post';

    const userNameElement = document.createElement('h2');
    userNameElement.textContent = `Usuário: ${post.userName}`;

    const descricaoElement = document.createElement('p');
    descricaoElement.textContent = `Descrição: ${post.descricao}`;

    const curtidasElement = document.createElement('p');
    curtidasElement.textContent = `Curtidas: ${post.numeroCurtida}`;

    const dataElement = document.createElement('p');
    dataElement.textContent = `Data da Postagem: ${post.dataPostagem.toLocaleDateString()}`

    // Adicionando os elementos ao div do post
    postElement.appendChild(userNameElement);
    postElement.appendChild(descricaoElement);
    postElement.appendChild(curtidasElement);
    postElement.appendChild(dataElement);

    // Adicionando o post ao container principal
    postContainer.appendChild(postElement);

    }
}

exibirPosts()

