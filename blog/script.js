// Class User
class User {
    constructor(_name) {
        this.username = _name
    }

    toJson() {
        return {
            username: this.username
        }
    }

    fromJson(userJson) {
        return new User(user.username);
    }
}

// Class Post
class Post {
    constructor(_t, _d, _u) {
        this.title = _t;
        this.description = _d;
        this.user = _u,
            this.createdAt = new Date().toDateString();

    }

    toJson() {
        return {
            title: this.title,
            description: this.description,
            user: this.user,
            createdAt: this.createdAt
        }
    }

    fromJson(postJson) {
        return new Post(postJson.title, postJson.description, postJson.user);
    }
}

let user;

// Tant que l'utilisateur n'a pas entrer son username, on va toujours le demander de l'entrer
while (user === undefined || user === null || user === '') {
    user = prompt("Enter youre username.");
}

// Instantiation de User
user = new User(user);

let show_form_btn = document.querySelector("#show_form_btn");
let form_section = document.querySelector("#form_section");
let hide_form_btn = document.querySelector("#hide_form_btn");

let form = document.querySelector("form");



// Afficher form
show_form_btn.addEventListener("click", () => {
    form_section.classList.remove("hidden");
});

// Cacher form
hide_form_btn.addEventListener("click", () => {
    form_section.classList.add("hidden");
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let title = document.querySelector("#title").value;
    let description = document.querySelector("#description").value;

    let post = new Post(title, description, user.username);
    new_post(post.toJson());
})

// Fonction pour afficher le blog sur la page
let new_post = (post) => {
    let posts_container = document.querySelector("#blogs");

    let blog = document.createElement("div");
    blog.setAttribute("class", "p-4 bg-gray-200 rounded my-4");

    let p1 = document.createElement("p");
    p1.setAttribute("class", "font-bold");

    let p2 = document.createElement("p");

    p1.innerHTML = post.title + " | <span class='italic font-thin'>by " + post.user + ", posted at " + post.createdAt + "</span>";
    p2.innerText = post.description;

    blog.appendChild(p1);
    blog.appendChild(p2);

    posts_container.prepend(blog);
}