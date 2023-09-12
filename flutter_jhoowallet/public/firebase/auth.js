import "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth-compat.js";

const auth = firebase.auth();

export async function signInWithEmailAndPassword(email, password) {
  console.log("Teste");
  await auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Login bem-sucedido
      const user = userCredential.user;
      console.log(user);
      console.log("Era pra e=retornar isso:" + user);

      return "user";
    })
    .catch((error) => {
      return null;
      // Lidar com erros de login
      alert(`Erro ao fazer login: ${error.message}`);
    });
}
