  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  import {getDatabase,push,ref,set,} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDy8q7RV5d91deT9glSA6KBpnsRVIiIOm0",
    authDomain: "quiz-app-abeer.firebaseapp.com",
    databaseURL: "https://quiz-app-abeer-default-rtdb.firebaseio.com",
    projectId: "quiz-app-abeer",
    storageBucket: "quiz-app-abeer.appspot.com",
    messagingSenderId: "302784110035",
    appId: "1:302784110035:web:782c4437e664a047556326",
    measurementId: "G-SWXB4BS1YX"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getDatabase();

  let question = document.getElementById("Question"); 
  let option = document.getElementById("option"); 
  let optionsParent = document.getElementById("optionsParent"); 
  let CorrectAnwserelem = document.getElementById("CorrectAnwser"); 

  let options = [];
  let correctAnswer

  function renderQuestion(){
    optionsParent.innerHTML = "";
    for (let i = 0 ; i < options.length; i++){
        optionsParent.innerHTML += `<li onclick="setCorrectAns('${options[i]}')" class = 'p-2 bg-light rounded shadow my-2'>${options[i]}</li>` 
    }
  }

  window.addoption = function (){
    options.push(option.value);
    renderQuestion();
  }

  window.setCorrectAns = function(a){
    correctAnswer = a;
    CorrectAnwserelem.innerHTML = correctAnswer;
  }

  window.sumbitQuestion = function(){
    let obj = {
        question:question.value,
        options:options,
        correctAnswer:correctAnswer
    }

    
    
    obj.id = push(ref(db,"questions/")).key
    let refrence = ref(db,`questions/ ${ obj.id}`);
    set(refrence,obj);
    options = "";
    obj = "";
  }

  console.log(options);

