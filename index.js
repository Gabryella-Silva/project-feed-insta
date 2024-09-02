"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_crypto_1 = require("node:crypto"); //serve para importaar id
var faker_1 = require("@faker-js/faker"); // serve para importar dados fakes
var Post = /** @class */ (function () {
    function Post(userName, descricao, seguirUsuario, enviarPost, salvarPost, comentarPost) {
        this._userName = userName.toLocaleUpperCase(); // Permite acessar, chamar e modificar as propriedades do objeto,
        this._descricao = descricao;
        this._dataPostagem = new Date;
        this._numeroCurtidas = 0;
        this._seguirUsuario = seguirUsuario;
        this._enviarPost = enviarPost;
        this._salvarPost = salvarPost;
        this._comentarPost = comentarPost;
        this._id = (0, node_crypto_1.randomUUID)();
    }
    Object.defineProperty(Post.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "userName", {
        get: function () {
            return this._userName.toLocaleUpperCase();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "descricao", {
        get: function () {
            return this._descricao; //usado para ter acesso ao atributo privado descricao
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "dataPostagem", {
        get: function () {
            return this._dataPostagem; //usado para ter acesso ao atributo privado dataPostagem
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "numeroCurtida", {
        get: function () {
            return this._numeroCurtidas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "seguirUsuario", {
        get: function () {
            return this._seguirUsuario;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "enviarPost", {
        get: function () {
            return this._enviarPost;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "salvarPost", {
        get: function () {
            return this._salvarPost;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "comentarPost", {
        get: function () {
            return this._comentarPost;
        },
        set: function (comentarPost) {
            this._comentarPost = comentarPost; //usado para mudar o atributo privado
        },
        enumerable: false,
        configurable: true
    });
    Post.prototype.incrementarCurtida = function () {
        this._numeroCurtidas += 1; //ou ++; //metodo para incrementar o numero de curtidas
    };
    return Post;
}());
// Função para criar e exibir posts no HTML
function exibirPosts() {
    var postContainer = document.getElementById('posts');
    for (var i = 0; i < 15; i++) {
        var userName = faker_1.faker.person.firstName();
        var descricao = faker_1.faker.lorem.word();
        var post = new Post(userName, descricao, true, true, true, "linda vista");
        post.incrementarCurtida(); // Incrementa as curtidas
        // Criando os elementos HTML para exibir o post
        var postElement = document.createElement('div');
        postElement.className = 'post';
        var userNameElement = document.createElement('h2');
        userNameElement.textContent = "Usu\u00E1rio: ".concat(post.userName);
        var descricaoElement = document.createElement('p');
        descricaoElement.textContent = "Descri\u00E7\u00E3o: ".concat(post.descricao);
        var curtidasElement = document.createElement('p');
        curtidasElement.textContent = "Curtidas: ".concat(post.numeroCurtida);
        var dataElement = document.createElement('p');
        dataElement.textContent = "Data da Postagem: ".concat(post.dataPostagem.toLocaleDateString());
        // Adicionando os elementos ao div do post
        postElement.appendChild(userNameElement);
        postElement.appendChild(descricaoElement);
        postElement.appendChild(curtidasElement);
        postElement.appendChild(dataElement);
        // Adicionando o post ao container principal
        postContainer.appendChild(postElement);
    }
}
exibirPosts();
