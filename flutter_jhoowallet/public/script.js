//=================================================================================

// Usuario está logado? Então abre a tela home, caso contrario abre a tela de login

import "./firebase/app.js";
import { signInWithEmailAndPassword } from "./firebase/auth.js";

window.addEventListener("DOMContentLoaded", function () {
  var isUserLoggedIn = false; // Simule a condição de login
  const contentContainer = document.getElementById("container");

  //

  // Função para carregar o conteúdo com base na condição
  async function loadContent(url) {
    await fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro na requisição");
        }
        return response.text();
      })
      .then((data) => {
        contentContainer.innerHTML = data;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // Verifique a condição do usuário e carregue o conteúdo apropriado
  if (isUserLoggedIn) {
    loadContent("screens/home.html");
  } else {
    loadContent("screens/login.html").then((reponse) => {
      const loginForm = document.getElementById("login-form");
      console.log("Pagina Carregada");
      console.log(loginForm);
      if (loginForm) {
        loginForm.addEventListener("submit", async (e) => {
          e.preventDefault();

          // Selecionar os campos de entrada pelo ID
          const usernameInput = document.getElementById("username");
          const passwordInput = document.getElementById("password");

          // Obter os valores dos campos de entrada
          const username = usernameInput.value;
          const password = passwordInput.value;

          // Agora você pode usar os valores (username e password) para fazer alguma coisa, como enviar para um servidor ou validar.
          // Por exemplo, você pode imprimir os valores no console:
          // console.log("Nome de Usuário:", username);
          // console.log("Senha:", password);

          signInWithEmailAndPassword(username, password).then((user) => {
            console.log("Usuario: " + user);
            // if (user) {
            isUserLoggedIn = true;
            // }
          });

          // Ou realizar alguma outra ação com os valores, como enviar para um servidor, validar, etc.
        });
      }
    });
  }
});

// Selecionar o formulário pelo ID

// Simulando a verificação de autenticação (substitua isso com sua lógica real)
// const isAuthenticated = true;

// if (isAuthenticated) {
//     loadHome(); // Se autenticado, carrega a tela home
//     // loginButton.style.display = 'none';
//     // logoutButton.style.display = 'block';
// } else {
//     loadLogin(); // Se não autenticado, carrega a tela de login
//     // loginButton.style.display = 'block';
//     // logoutButton.style.display = 'none';
// }

// document.ready(function () {
//   // Função para carregar o conteúdo da página e aplicar a classe "active" ao item de menu clicado
//   function carregarPagina(pageURL) {
//     // Remove a classe "active" de todos os itens de menu
//     // $(".menu-lateral-item").removeClass("active");

//     // Encontra o item de menu correspondente ao URL e aplica a classe "active"
//     // $('.menu-lateral-item a[href="' + pageURL + '"]')
//     //   .closest("li")
//     //   .addClass("active");

//     // Carrega o conteúdo da página correspondente na div
//     $("#content").load(pageURL);
//   }

//   // Carregar conteúdo da página inicial por padrão
//   carregarPagina("screens/login.html");

//   // Manipular clique nos itens de menu (elemento <li>)
//   $(".menu-lateral-item").click(function (e) {
//     // Impede o comportamento padrão do link
//     e.preventDefault();

//     // Obtém o URL da página correspondente
//     var pageURL = $(this).find("a").attr("href");

//     // Carrega o conteúdo da página correspondente e aplica a classe "active"
//     carregarPagina(pageURL);
//   });
// });

//=================================================================================

// import firebase from "firebase/app";
// import "firebase/compat/auth";

// // TODO: Replace the following with your app's Firebase project configuration
// // See: https://firebase.google.com/docs/web/learn-more#config-object
// const firebaseConfig = {
//   apiKey: "AIzaSyBUv1MJE9u-rTCC952J_VPkbKlH3Ga6d18",
//   authDomain: "jhoowallet.firebaseapp.com",
//   projectId: "jhoowallet",
//   storageBucket: "jhoowallet.appspot.com",
//   messagingSenderId: "1064050720920",
//   appId: "1:1064050720920:web:34a02fd0afeace120310ed",
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// // Initialize Firebase Authentication and get a reference to the service
// const auth = firebase.auth();

// import { btnLogin, txtEmail, txtPassword } from "./ui.js";
// const { btnLogin, txtEmail, txtPassword } = require("./ui");

// import initializeApp  from "firebase/app";

// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// import "https://www.gstatic.com/firebasejs/9.5.0/firebase-app-compat.js";
// import "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth-compat.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyBUv1MJE9u-rTCC952J_VPkbKlH3Ga6d18",
//   authDomain: "jhoowallet.firebaseapp.com",
//   projectId: "jhoowallet",
//   storageBucket: "jhoowallet.appspot.com",
//   messagingSenderId: "1064050720920",
//   appId: "1:1064050720920:web:34a02fd0afeace120310ed",
// };

// firebase.initializeApp(firebaseConfig);

// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);

// const loginWithEmailAndPassword = async () => {
//   const email = txtEmail.value;
//   const password = txtPassword.value;

//   const userCredential = await signInWithEmailAndPassword(
//     auth,
//     email,
//     password
//   );

//   console.log(userCredential);
// };

// btnLogin.addEventsListener("click", loginWithEmailAndPassword);
