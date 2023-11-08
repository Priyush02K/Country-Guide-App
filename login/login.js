
// setting up firebase with our website

const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyDZzokmijDA4gF7HJMHfJIMCctP8RMLE-E",
    authDomain: "theweather-c0382.firebaseapp.com",
    databaseURL: "https://theweather-c0382-default-rtdb.firebaseio.com",
    projectId: "theweather-c0382",
    storageBucket: "theweather-c0382.appspot.com",
    messagingSenderId: "594754206373",
    appId: "1:594754206373:web:b88fdce2033a8ab47f6b4c"

 });
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

//Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            location.replace('../index.html')
            
            console.log(result)
            alert("You are Signed Up")
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });


// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)

    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed In")
            location.replace('../index.html')

            console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}



}


