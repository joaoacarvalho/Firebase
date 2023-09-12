// Referência aos elementos do formulário e status do usuário
const signupEmail = document.getElementById("signup-email");
const signupPassword = document.getElementById("signup-password");
const signupButton = document.getElementById("signup-button");

const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const loginButton = document.getElementById("login-button");

const userDisplayName = document.getElementById("user-display-name");
const userEmail = document.getElementById("user-email");
const logoutButton = document.getElementById("logout-button");

// Configurar referência ao Firebase Authentication
const auth = firebase.auth();

// Lidar com o registro (Sign-up) de um novo usuário
signupButton.addEventListener("click", () => {
  const email = signupEmail.value;
  const password = signupPassword.value;

  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Registro bem-sucedido
      const user = userCredential.user;
      alert(`Registro bem-sucedido para ${user.email}`);
    })
    .catch((error) => {
      // Lidar com erros de registro
      alert(`Erro ao registrar: ${error.message}`);
    });
});

// Lidar com o login do usuário
loginButton.addEventListener("click", () => {
  const email = loginEmail.value;
  const password = loginPassword.value;

  auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Login bem-sucedido
      const user = userCredential.user;
      userDisplayName.textContent = `Nome: ${
        user.displayName || "Não especificado"
      }`;
      userEmail.textContent = `E-mail: ${user.email}`;
    })
    .catch((error) => {
      // Lidar com erros de login
      alert(`Erro ao fazer login: ${error.message}`);
    });
});

// Lidar com o logout do usuário
logoutButton.addEventListener("click", () => {
  auth
    .signOut()
    .then(() => {
      // Logout bem-sucedido
      userDisplayName.textContent = "";
      userEmail.textContent = "";
      alert("Logout bem-sucedido.");
    })
    .catch((error) => {
      // Lidar com erros de logout
      alert(`Erro ao fazer logout: ${error.message}`);
    });
});

// Observar o estado de autenticação do usuário
auth.onAuthStateChanged((user) => {
  if (user) {
    // Usuário autenticado
    userDisplayName.textContent = `Nome: ${
      user.displayName || "Não especificado"
    }`;
    userEmail.textContent = `E-mail: ${user.email}`;
  } else {
    // Usuário não autenticado
    userDisplayName.textContent = "";
    userEmail.textContent = "";
  }
});
