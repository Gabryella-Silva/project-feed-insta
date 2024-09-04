"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import { randomUUID } from "node:crypto"; //serve para importaar id
var uuid_1 = require("uuid");
var faker_1 = require("@faker-js/faker"); // serve para importar dados fakes
var Post = /** @class */ (function () {
    function Post(userName, avatarUrl, imageUrl, description) {
        this._id = (0, uuid_1.v4)();
        this._isLiked = false;
        this._CreatedAt = new Date;
        this._numberOfLikes = 0;
        this._userName = userName.toLocaleUpperCase(); // Permite acessar, chamar e modificar as propriedades do objeto,
        this._avatarUrl = avatarUrl;
        this._imageUrl = imageUrl;
        this._descripiton = description;
    }
    Post.prototype.like = function () {
        this._isLiked = !this._isLiked;
        //incrementa o numero de likes
        if (this._isLiked) {
            this._numberOfLikes += 1;
            //descrementa o número de likes
        }
        else {
            this._numberOfLikes -= 1;
        }
    };
    Post.prototype.toHtml = function () {
        var div = document.createElement("div");
        div.innerHTML = "<div class = \"post-container\"> \n                    <div class =\"post-header\">\n                    <div> </div>\n                    <span> ".concat(this._userName, " </span>\n    </div>             \n    </div>"); // colocar com crase pq é um string
        document.body.appendChild(div);
    };
    return Post;
}());
var posts = [];
for (var i = 0; i < 15; i++) {
    var userName = faker_1.faker.person.firstName();
    var avatarUrl = faker_1.faker.image.avatar();
    var imageUrl = faker_1.faker.image.urlLoremFlickr();
    var description = faker_1.faker.lorem.word();
    var post = new Post(userName, avatarUrl, imageUrl, description);
    posts.push(post);
    post.toHtml();
}
posts[0].like();
posts[0].like();
console.log(posts[0]);
function exibirPosts() {
    var postElement = document.getElementById('post'); // Seleciona o elemento com o ID 'post'
    postElement.textContent = "oioioi";
    document.body.appendChild(postElement);
}
/* const div = document.createElement("div")
div.innerHTML = "<b> oioi </b>"
document.body.appendChild(div) */ 
