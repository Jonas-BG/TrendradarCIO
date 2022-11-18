import {
  initializeApp
} from "firebase/app";
import {
  getFirestore, collection, getDocs, onSnapshot, addDoc, doc, query, where, updateDoc, setDoc, getCountFromServer, getDoc
} from 'firebase/firestore'
import {
getAuth, signInAnonymously, onAuthStateChanged
} from 'firebase/auth'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDv3xtoL_2LKuK6MUZeqXDukhIBa_T1B-s",
  authDomain: "trendradarcio.firebaseapp.com",
  projectId: "trendradarcio",
  storageBucket: "trendradarcio.appspot.com",
  messagingSenderId: "782014410804",
  appId: "1:782014410804:web:b8dc6696fb83e8302e9a61",
  measurementId: "G-E9ZKQRKJWL"
};


let user_id = null;
let q1a1= 0;

//init firebase
initializeApp(firebaseConfig)

//init service
const db= getFirestore()
const auth = getAuth()

// collection reference
const colRef = collection(db, 'user_answers')
const qQ1A1 = query(colRef, where('answer_one','==', 1));
const qQ1A2 = query(colRef, where('answer_one','==', 2));
const qQ1A3 = query(colRef, where('answer_one','==', 3));
const qOneAFour = query(colRef, where('answer_one','==', 4));






const aggregateData = (question, answerQ1, dataList, initialValue = {1:0,2:0, 3:0}) => {
  const filteredData = dataList.filter(doc => doc.answer_one == answerQ1);
  const data = filteredData.reduce((acc, cur) => {
    const answer = cur[question];
    if (answer != null) {
      acc[answer] = acc[answer] != null ? acc[answer] + 1 : 1
    }
    return acc
  }, initialValue)

  //TODD: check sort
  const sorted = Object.entries(data).sort(([k1],[k2]) => k1>k2);
  return sorted.map(data => data[1]);
}








getCountFromServer(qQ1A1);

getDocs(colRef)
  .then ((snapshot) => {
  let user_answers = []
  snapshot.docs.forEach(doc => {
    user_answers.push({ ...doc.data(), id: doc.id })
  })
  console.log("here are getDoc answers",user_answers)
})

onSnapshot(colRef, (snapshot) => {
  let user_answers = []
  snapshot.docs.forEach(doc => {
    user_answers.push({ ...doc.data(), id: doc.id })
  })
  console.log("here are snapshot answers",user_answers)
})



  //sign up

  signInAnonymously(auth)
  .then(() => {
    console.log();
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });

  onAuthStateChanged(auth, (user) => {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      console.log('anonymous user created:' , user.uid);
      user_id = user.uid
      // ...
  }); 






//Questions Color
const newColor= '#31663B'
const newTextColor='white'

  
//Question 1
  const answerBtn11= document.getElementById("quOneAnOne")
  const answerBtn12= document.getElementById("quOneAnTwo")
  const answerBtn13= document.getElementById("quOneAnThree")
  const answerBtn14= document.getElementById("quOneAnFour")
  const answerBtn15= document.getElementById("quOneAnFive")
  const answerBtn16= document.getElementById("quOneAnSix")
  const answerBtn17= document.getElementById("quOneAnSeven")


  answerBtn11.addEventListener('click', (e) => {
    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    compBtn1.classList.remove('hide')
    setDoc(doc(colRef,user_id), {
      uid: user_id,
      answer_one: 1,
    })
  })
  answerBtn12.addEventListener('click', (e) => {
    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    compBtn1.classList.remove('hide')
    setDoc(doc(colRef,user_id), {
      uid: user_id,
      answer_one: 2,
    })
  })
  answerBtn13.addEventListener('click', (e) => {
    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    compBtn1.classList.remove('hide')
    setDoc(doc(colRef,user_id), {
      uid: user_id,
      answer_one: 3,
    })
  })
  answerBtn14.addEventListener('click', (e) => {
    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    compBtn1.classList.remove('hide')
    setDoc(doc(colRef,user_id), {
      uid: user_id,
      answer_one: 4,
    })
  })
  answerBtn15.addEventListener('click', (e) => {
    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    compBtn1.classList.remove('hide')
    setDoc(doc(colRef,user_id), {
      uid: user_id,
      answer_one: 5,
    })
  })
  answerBtn16.addEventListener('click', (e) => {
    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    compBtn1.classList.remove('hide')
    setDoc(doc(colRef,user_id), {
      uid: user_id,
      answer_one: 6,
    })
  })
  answerBtn17.addEventListener('click', (e) => {
    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    compBtn1.classList.remove('hide')
    setDoc(doc(colRef,user_id), {
      uid: user_id,
      answer_one: 7,
    })
  })




  //Question 2
  const answerBtn21= document.getElementById("quTwoAnOne")
  const answerBtn22= document.getElementById("quTwoAnTwo")
  const answerBtn23= document.getElementById("quTwoAnThree")
 

  answerBtn21.addEventListener('click', (e) => {
    console.log('BTN clicked')
    //how do i turn the color of the other bottons white again?
    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    compBtn2.classList.remove('hide')
    const userRef= doc(colRef, user_id)
    setDoc(userRef, {answer_two : 1}, {merge : true})
  })
  answerBtn22.addEventListener('click', (e) => {
    console.log('BTN clicked')
    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    compBtn2.classList.remove('hide')
    const userRef= doc(colRef, user_id)
    setDoc(userRef, {answer_two : 2}, {merge : true})
  })
  answerBtn23.addEventListener('click', (e) => {
    console.log('BTN clicked')
    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    const userRef= doc(colRef, user_id)
    compBtn2.classList.remove('hide')
    setDoc(userRef, {answer_two : 3}, {merge : true})
  })


  //Question 3
  const answerBtn31= document.getElementById("quThreeAnOne")
  const answerBtn32= document.getElementById("quThreeAnTwo")
  const answerBtn33= document.getElementById("quThreeAnThree")
  const answerBtn34= document.getElementById("quThreeAnFour")
  const answerBtn35= document.getElementById("quThreeAnFive")
 

  answerBtn31.addEventListener('click', (e) => {
    console.log('BTN clicked')
    //how do i turn the color of the other bottons white again?
    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    const userRef= doc(colRef, user_id)
    compBtn3.classList.remove('hide')
    setDoc(userRef, {answer_three : 1}, {merge : true})
  })
  answerBtn32.addEventListener('click', (e) => {
    console.log('BTN clicked')
    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    const userRef= doc(colRef, user_id)
    compBtn3.classList.remove('hide')
    setDoc(userRef, {answer_three : 2}, {merge : true})
  })
  answerBtn33.addEventListener('click', (e) => {
    console.log('BTN clicked')
    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    const userRef= doc(colRef, user_id)
    compBtn3.classList.remove('hide')
    setDoc(userRef, {answer_three : 3}, {merge : true})
  })
  answerBtn34.addEventListener('click', (e) => {
    console.log('BTN clicked')
    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    const userRef= doc(colRef, user_id)
    compBtn3.classList.remove('hide')
    setDoc(userRef, {answer_three : 4}, {merge : true})
  })


   //Question 4
   const answerBtn41= document.getElementById("quFourAnOne")
   const answerBtn42= document.getElementById("quFourAnTwo")
   const answerBtn43= document.getElementById("quFourAnThree")
   const answerBtn44= document.getElementById("quFourAnFour")
   const answerBtn45= document.getElementById("quFourAnFive")
   const answerBtn46= document.getElementById("quFourAnSix")
   const answerBtn47= document.getElementById("quFourAnSeven")
   const answerBtn48= document.getElementById("quFourAnEight")
   const answerBtn49= document.getElementById("quFourAnNine")
   const answerBtn410= document.getElementById("quFourAnTen")
   const answerBtn411= document.getElementById("quFourAnEleven")

  

   answerBtn41.addEventListener('click', (e) => {
     console.log('BTN clicked')
     //how do i turn the color of the other bottons white again?
     event.target.style.backgroundColor = newColor
     event.target.style.color = newTextColor
     const userRef= doc(colRef, user_id)
     compBtn4.classList.remove('hide')
     setDoc(userRef, {answer_four : 1}, {merge : true})
   })
   answerBtn42.addEventListener('click', (e) => {
     console.log('BTN clicked')
     event.target.style.backgroundColor = newColor
     event.target.style.color = newTextColor
     const userRef= doc(colRef, user_id)
     compBtn4.classList.remove('hide')
     setDoc(userRef, {answer_four : 2}, {merge : true})
   })
   answerBtn43.addEventListener('click', (e) => {
     console.log('BTN clicked')
     event.target.style.backgroundColor = newColor
     event.target.style.color = newTextColor
     const userRef= doc(colRef, user_id)
     compBtn4.classList.remove('hide')
     setDoc(userRef, {answer_four : 3}, {merge : true})
   })
   answerBtn44.addEventListener('click', (e) => {
     console.log('BTN clicked')
     event.target.style.backgroundColor = newColor
     event.target.style.color = newTextColor
     const userRef= doc(colRef, user_id)
     compBtn4.classList.remove('hide')
     setDoc(userRef, {answer_four : 4}, {merge : true})
   })
   answerBtn45.addEventListener('click', (e) => {
     console.log('BTN clicked')
     event.target.style.backgroundColor = newColor
     event.target.style.color = newTextColor
     const userRef= doc(colRef, user_id)
     compBtn4.classList.remove('hide')
     setDoc(userRef, {answer_four : 5}, {merge : true})
   })
   answerBtn46.addEventListener('click', (e) => {
    console.log('BTN clicked')
    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    const userRef= doc(colRef, user_id)
    compBtn4.classList.remove('hide')
    setDoc(userRef, {answer_four : 6}, {merge : true})
  })
  answerBtn47.addEventListener('click', (e) => {
    console.log('BTN clicked')
    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    const userRef= doc(colRef, user_id)
    compBtn4.classList.remove('hide')
    setDoc(userRef, {answer_four : 7}, {merge : true})
  })
  answerBtn48.addEventListener('click', (e) => {
    console.log('BTN clicked')
    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    const userRef= doc(colRef, user_id)
    compBtn4.classList.remove('hide')
    setDoc(userRef, {answer_four : 8}, {merge : true})
  })
  answerBtn49.addEventListener('click', (e) => {
    console.log('BTN clicked')
    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    const userRef= doc(colRef, user_id)
    compBtn4.classList.remove('hide')
    setDoc(userRef, {answer_four : 9}, {merge : true})
  })
  answerBtn410.addEventListener('click', (e) => {
    console.log('BTN clicked')
    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    const userRef= doc(colRef, user_id)
    compBtn4.classList.remove('hide')
    setDoc(userRef, {answer_four : 10}, {merge : true})
  })
  answerBtn411.addEventListener('click', (e) => {
    console.log('BTN clicked')
    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    const userRef= doc(colRef, user_id)
    compBtn4.classList.remove('hide')
    setDoc(userRef, {answer_four : 11}, {merge : true})
  })


  //Question 5
  const answerBtn51= document.getElementById("quFiveAnOne")
  const answerBtn52= document.getElementById("quFiveAnTwo")
  const answerBtn53= document.getElementById("quFiveAnThree")
  const answerBtn54= document.getElementById("quFiveAnFour")

 

  answerBtn51.addEventListener('click', (e) => {
    console.log('BTN clicked')
    //how do i turn the color of the other bottons white again?
    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    const userRef= doc(colRef, user_id)
    compBtn5.classList.remove('hide')
    setDoc(userRef, {answer_five : 1}, {merge : true})
  })
  answerBtn52.addEventListener('click', (e) => {
    console.log('BTN clicked')
    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    const userRef= doc(colRef, user_id)
    compBtn5.classList.remove('hide')
    setDoc(userRef, {answer_five : 2}, {merge : true})
  })
  answerBtn53.addEventListener('click', (e) => {
    console.log('BTN clicked')
    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    const userRef= doc(colRef, user_id)
    compBtn5.classList.remove('hide')
    setDoc(userRef, {answer_five : 3}, {merge : true})
  })
  answerBtn54.addEventListener('click', (e) => {
    console.log('BTN clicked')
    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    const userRef= doc(colRef, user_id)
    compBtn5.classList.remove('hide')
    setDoc(userRef, {answer_five : 4}, {merge : true})
  })




  //Question 6
  const answerBtn61= document.getElementById("quSixAnOne")
  const answerBtn62= document.getElementById("quSixAnTwo")
  const answerBtn63= document.getElementById("quSixAnThree")
  const answerBtn64= document.getElementById("quSixAnFour")

 

  answerBtn61.addEventListener('click', (e) => {
    console.log('BTN clicked')
    //how do i turn the color of the other bottons white again?
    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    const userRef= doc(colRef, user_id)
    compBtn6.classList.remove('hide')
    setDoc(userRef, {answer_six : 1}, {merge : true})
  })
  answerBtn62.addEventListener('click', (e) => {
    console.log('BTN clicked')
    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    const userRef= doc(colRef, user_id)
    compBtn6.classList.remove('hide')
    setDoc(userRef, {answer_six : 2}, {merge : true})
  })
  answerBtn63.addEventListener('click', (e) => {
    console.log('BTN clicked')
    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    const userRef= doc(colRef, user_id)
    compBtn6.classList.remove('hide')
    setDoc(userRef, {answer_six : 3}, {merge : true})
  })
  answerBtn64.addEventListener('click', (e) => {
    console.log('BTN clicked')
    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    const userRef= doc(colRef, user_id)
    compBtn6.classList.remove('hide')
    setDoc(userRef, {answer_six : 4}, {merge : true})
  })


  //Question 7
  const answerBtn71= document.getElementById("quSevenAnOne")
  const answerBtn72= document.getElementById("quSevenAnTwo")
  const answerBtn73= document.getElementById("quSevenAnThree")
  const answerBtn74= document.getElementById("quSevenAnFour")

 

  answerBtn71.addEventListener('click', (e) => {
    console.log('BTN clicked')
    //how do i turn the color of the other bottons white again?
    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    const userRef= doc(colRef, user_id)
    compBtn7.classList.remove('hide')
    setDoc(userRef, {answer_seven : 1}, {merge : true})
  })
  answerBtn72.addEventListener('click', (e) => {
    console.log('BTN clicked')
    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    const userRef= doc(colRef, user_id)
    compBtn7.classList.remove('hide')
    setDoc(userRef, {answer_seven : 2}, {merge : true})
  })
  answerBtn73.addEventListener('click', (e) => {
    console.log('BTN clicked')
    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    const userRef= doc(colRef, user_id)
    compBtn7.classList.remove('hide')
    setDoc(userRef, {answer_seven : 3}, {merge : true})
  })
  answerBtn74.addEventListener('click', (e) => {
    console.log('BTN clicked')
    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    const userRef= doc(colRef, user_id)
    compBtn7.classList.remove('hide')
    setDoc(userRef, {answer_seven : 4}, {merge : true})
  })


  //Question 8
  const answerBtn81= document.getElementById("quEightAnOne")
  const answerBtn82= document.getElementById("quEightAnTwo")
  const answerBtn83= document.getElementById("quEightAnThree")
  const answerBtn84= document.getElementById("quEightAnFour")

 

  answerBtn81.addEventListener('click', (e) => {
    console.log('BTN clicked')
    //how do i turn the color of the other bottons white again?
    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    const userRef= doc(colRef, user_id)
    compBtn8.classList.remove('hide')
    setDoc(userRef, {answer_eight : 1}, {merge : true})
  })
  answerBtn82.addEventListener('click', (e) => {
    console.log('BTN clicked')
    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    const userRef= doc(colRef, user_id)
    compBtn8.classList.remove('hide')
    setDoc(userRef, {answer_eight : 2}, {merge : true})
  })
  answerBtn83.addEventListener('click', (e) => {
    console.log('BTN clicked')
    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    const userRef= doc(colRef, user_id)
    compBtn8.classList.remove('hide')
    setDoc(userRef, {answer_eight : 3}, {merge : true})
  })
  answerBtn84.addEventListener('click', (e) => {
    console.log('BTN clicked')
    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    const userRef= doc(colRef, user_id)
    compBtn8.classList.remove('hide')
    setDoc(userRef, {answer_eight : 4}, {merge : true})
  })


  //Hide Logic Compare
  const compareBtn1= document.getElementById("compare_qOne")
  const compareBtn2= document.getElementById("compare_qTwo")
  const compareBtn3= document.getElementById("compare_qThree")
  const compareBtn4= document.getElementById("compare_qFour")
  const compareBtn5= document.getElementById("compare_qFive")
  const compareBtn6= document.getElementById("compare_qSix")
  const compareBtn7= document.getElementById("compare_qSeven")
  const compareBtn8= document.getElementById("compare_qEight")


  const chartContainer1= document.getElementById('chart1_container')
  const chartContainer2= document.getElementById('chart2_container')
  const chartContainer3= document.getElementById('chart3_container')
  const chartContainer4= document.getElementById('chart4_container')
  const chartContainer5= document.getElementById('chart5_container')
  const chartContainer6= document.getElementById('chart6_container')
  const chartContainer7= document.getElementById('chart7_container')
  const chartContainer8= document.getElementById('chart8_container')

  compareBtn1.addEventListener('click', (e) => {
    console.log('BTN clicked')
    compareBtn1.classList.add('hide')
    nextBtn1.classList.remove('hide')
    chartContainer1.classList.remove('hide')
  })
  compareBtn2.addEventListener('click', (e) => {
    console.log('BTN clicked')
    compareBtn2.classList.add('hide')
    nextBtn2.classList.remove('hide')
    chartContainer2.classList.remove('hide')
  })
  compareBtn3.addEventListener('click', (e) => {
    console.log('BTN clicked')
    compareBtn3.classList.add('hide')
    nextBtn3.classList.remove('hide')
    chartContainer3.classList.remove('hide')
  })
  compareBtn4.addEventListener('click', (e) => {
    console.log('BTN clicked')
    compareBtn4.classList.add('hide')
    nextBtn4.classList.remove('hide')
    chartContainer4.classList.remove('hide')
  })
  compareBtn5.addEventListener('click', (e) => {
    console.log('BTN clicked')
    compareBtn5.classList.add('hide')
    nextBtn5.classList.remove('hide')
    chartContainer5.classList.remove('hide')
  })
  compareBtn6.addEventListener('click', (e) => {
    console.log('BTN clicked')
    compareBtn6.classList.add('hide')
    nextBtn6.classList.remove('hide')
    chartContainer6.classList.remove('hide')
  })
  compareBtn7.addEventListener('click', (e) => {
    console.log('BTN clicked')
    compareBtn7.classList.add('hide')
    nextBtn7.classList.remove('hide')
    chartContainer7.classList.remove('hide')
  })
  compareBtn8.addEventListener('click', (e) => {
    console.log('BTN clicked')
    compareBtn8.classList.add('hide')
    nextBtn8.classList.remove('hide')
    chartContainer8.classList.remove('hide')
  })

    //Hide Logic Next Question
    const nextBtn1= document.getElementById("nextQ_qOne")
    const nextBtn2= document.getElementById("nextQ_qTwo")
    const nextBtn3= document.getElementById("nextQ_qThree")
    const nextBtn4= document.getElementById("nextQ_qFour")
    const nextBtn5= document.getElementById("nextQ_qFive")
    const nextBtn6= document.getElementById("nextQ_qSix")
    const nextBtn7= document.getElementById("nextQ_qSeven")
    const nextBtn8= document.getElementById("finish")

    //Hide Logic Compare Btn
    const compBtn1= document.getElementById("compare_qOne")
    const compBtn2= document.getElementById("compare_qTwo")
    const compBtn3= document.getElementById("compare_qThree")
    const compBtn4= document.getElementById("compare_qFour")
    const compBtn5= document.getElementById("compare_qFive")
    const compBtn6= document.getElementById("compare_qSix")
    const compBtn7= document.getElementById("compare_qSeven")
    const compBtn8= document.getElementById("compare_qEight")

    //Hide Logic Back Btn
    const backBtn2= document.getElementById("back2")
    const backBtn3= document.getElementById("back3")
    const backBtn4= document.getElementById("back4")
    const backBtn5= document.getElementById("back5")
    const backBtn6= document.getElementById("back6")
    const backBtn7= document.getElementById("back7")
    const backBtn8= document.getElementById("back8")


    //Hide Container Logic
    const surveyContainer1= document.getElementById('survey_container_1')
    const surveyContainer2= document.getElementById('survey_container_2')
    const surveyContainer3= document.getElementById('survey_container_3')
    const surveyContainer4= document.getElementById('survey_container_4')
    const surveyContainer5= document.getElementById('survey_container_5')
    const surveyContainer6= document.getElementById('survey_container_6')
    const surveyContainer7= document.getElementById('survey_container_7')
    const surveyContainer8= document.getElementById('survey_container_8')
    const anliegenContainer= document.getElementById('anliegenContaineer')




    nextBtn1.addEventListener('click', (e) => {
      console.log('BTN clicked')
      nextBtn1.classList.add('hide')
      surveyContainer1.classList.add('hide')
      surveyContainer2.classList.remove('hide')
    })
    nextBtn2.addEventListener('click', (e) => {
      console.log('BTN clicked')
      nextBtn1.classList.add('hide')
      surveyContainer2.classList.add('hide')
      surveyContainer3.classList.remove('hide')
    })
    nextBtn3.addEventListener('click', (e) => {
      console.log('BTN clicked')
      nextBtn1.classList.add('hide')
      surveyContainer3.classList.add('hide')
      surveyContainer4.classList.remove('hide')
    })
    nextBtn4.addEventListener('click', (e) => {
      console.log('BTN clicked')
      nextBtn1.classList.add('hide')
      surveyContainer4.classList.add('hide')
      surveyContainer5.classList.remove('hide')
    })
    nextBtn5.addEventListener('click', (e) => {
      console.log('BTN clicked')
      nextBtn1.classList.add('hide')
      surveyContainer5.classList.add('hide')
      surveyContainer6.classList.remove('hide')
    })
    nextBtn6.addEventListener('click', (e) => {
      console.log('BTN clicked')
      nextBtn1.classList.add('hide')
      surveyContainer6.classList.add('hide')
      surveyContainer7.classList.remove('hide')
    })
    nextBtn7.addEventListener('click', (e) => {
      console.log('BTN clicked')
      nextBtn1.classList.add('hide')
      surveyContainer7.classList.add('hide')
      surveyContainer8.classList.remove('hide')
    })
    nextBtn8.addEventListener('click', (e) => {
      console.log('BTN clicked')
      surveyContainer8.classList.add('hide')
      anliegenContainer.classList.remove('hide')
    })

//Back Logic
    backBtn2.addEventListener('click', (e) => {
      surveyContainer2.classList.add('hide')
      surveyContainer1.classList.remove('hide')
      nextBtn1.classList.remove('hide')
    })
    backBtn3.addEventListener('click', (e) => {
      surveyContainer3.classList.add('hide')
      surveyContainer2.classList.remove('hide')
      nextBtn2.classList.remove('hide')
    })
    backBtn4.addEventListener('click', (e) => {
      surveyContainer4.classList.add('hide')
      surveyContainer3.classList.remove('hide')
      nextBtn3.classList.remove('hide')
    })
    backBtn5.addEventListener('click', (e) => {
      surveyContainer5.classList.add('hide')
      surveyContainer4.classList.remove('hide')
      nextBtn4.classList.remove('hide')
    })
    backBtn6.addEventListener('click', (e) => {
      surveyContainer6.classList.add('hide')
      surveyContainer5.classList.remove('hide')
      nextBtn5.classList.remove('hide')
    })
    backBtn7.addEventListener('click', (e) => {
      surveyContainer7.classList.add('hide')
      surveyContainer6.classList.remove('hide')
      nextBtn6.classList.remove('hide')
    })
    backBtn8.addEventListener('click', (e) => {
      surveyContainer8.classList.add('hide')
      surveyContainer7.classList.remove('hide')
      nextBtn7.classList.remove('hide')
    })
    






    //Chart 1 CIO

var q1a2 = 0;
var q1a3 = 0;
var q1a4 = 0;
var q1a5 = 0;
var q1a6 = 0;
var q1a7 = 0;
var q1Data = [q1a1,q1a2,q1a3,q1a4,q1a5,q1a6,q1a7];


const getChartDatasets1 = () => {
  return [[q1a1,q1a2,q1a3,q1a4,q1a5,q1a6,q1a7]];
}




//
//
//
//Chart 2
//
//
//



//Cart 2 CIO
var q2a1Cio = 45;
var q2a2Cio = 11;
var q2a3Cio = 3;
var chart2Cio = [q2a1Cio,q2a2Cio,q2a3Cio];

//Cart 2 It
var q2a1It = 45;
var q2a2It = 50;
var q2a3It = 5;
var chart2It = [q2a1It,q2a2It,q2a3It];

// Chart 2 Business
var q2a1Busi = 4;
var q2a2Busi = 5;
var q2a3Busi = 5;
var chart2Busi = [q2a1Busi,q2a2Busi,q2a3Busi];

// Chart 2 Consultant
var q2a1Cons = 33;
var q2a2Cons = 44;
var q2a3Cons = 5;
var chart2Cons = [q2a1Cons,q2a2Cons,q2a3Cons];

// Chart 2 Provider
var q2a1Prov = 45;
var q2a2Prov = 20;
var q2a3Prov = 5;
var chart2Prov = [q2a1Prov,q2a2Prov,q2a3Prov];

// Chart 2 Science
var q2a1Scie = 59;
var q2a2Scie = 50;
var q2a3Scie = 5;
var chart2Scie = [q2a1Scie,q2a2Scie,q2a3Scie];

// Chart 2 Other
var q2a1Other = 42;
var q2a2Other = 50;
var q2a3Other = 5;
var chart2Other = [q2a1Other,q2a2Other,q2a3Other];


const getChartDatasets2 = () => {
  return [[q2a1Cio,q2a2Cio,q2a3Cio],[q2a1It,q2a2It,q2a3It],[q2a1Busi,q2a2Busi,q2a3Busi],[q2a1Cons,q2a2Cons,q2a3Cons],[q2a1Prov,q2a2Prov,q2a3Prov],[q2a1Scie,q2a2Scie,q2a3Scie],[q2a1Other,q2a2Other,q2a3Other]];
}


//
//
//
//Chart 3
//
//
//


//Cart 3 CIO
var q3a1Cio = 45;
var q3a2Cio = 11;
var q3a3Cio = 3;
var q3a4Cio = 3;
var chart3Cio = [q3a1Cio,q3a2Cio,q3a3Cio,q3a4Cio];

//Cart 3 It
var q3a1It = 45;
var q3a2It = 50;
var q3a3It = 5;
var q3a4It = 5;
var chart3It = [q3a1It,q3a2It,q3a3It,q3a4It];

// Chart 3 Business
var q3a1Busi = 4;
var q3a2Busi = 5;
var q3a3Busi = 5;
var q3a4Busi = 5;
var chart3Busi = [q3a1Busi,q3a2Busi,q3a3Busi,q3a4Busi];

// Chart 3 Consultant
var q3a1Cons = 33;
var q3a2Cons = 44;
var q3a3Cons = 5;
var q3a4Cons = 5;
var chart3Cons = [q3a1Cons,q3a2Cons,q3a3Cons,q3a4Cons];

// Chart 3 Provider
var q3a1Prov = 45;
var q3a2Prov = 20;
var q3a3Prov = 5;
var q3a4Prov = 5;
var chart3Prov = [q3a1Prov,q3a2Prov,q3a3Prov,q3a4Prov];

// Chart 3 Science
var q3a1Scie = 59;
var q3a2Scie = 50;
var q3a3Scie = 5;
var q3a4Scie = 5;
var chart3Scie = [q3a1Scie,q3a2Scie,q3a3Scie,q3a4Scie];

// Chart 3 Other
var q3a1Other = 42;
var q3a2Other = 50;
var q3a3Other = 5;
var q3a4Other = 5;
var chart3Other = [q3a1Other,q3a2Other,q3a3Other,q3a4Other];



//
//
//
//Chart 4
//
//
//


//Cart 4 CIO
var q4a1Cio = 45;
var q4a2Cio = 33;
var q4a3Cio = 8;
var q4a4Cio = 6;
var q4a5Cio = 5;
var q4a6Cio = 1;
var q4a7Cio = 8;
var q4a8Cio = 4;
var q4a9Cio = 17;
var q4a10Cio = 19;
var q4a11Cio = 41;
var chart4Cio = [q4a1Cio,q4a2Cio,q4a3Cio,q4a4Cio,q4a5Cio,q4a6Cio,q4a7Cio,q4a8Cio,q4a9Cio,q4a10Cio,q4a11Cio];

//Cart 4 It
var q4a1It = 15;
var q4a2It = 15;
var q4a3It = 11;
var q4a4It = 9;
var q4a5It = 5;
var q4a6It = 1;
var q4a7It = 24;
var q4a8It = 9;
var q4a9It = 14;
var q4a10It = 5;
var q4a11It = 43;
var chart4It = [q4a1It,q4a2It,q4a3It,q4a4It,q4a5It,q4a6It,q4a7It,q4a8It,q4a9It,q4a10It,q4a11It];

// Chart 4 Business
var q4a1Busi = 4;
var q4a2Busi = 5;
var q4a3Busi = 5;
var q4a4Busi = 5;
var q4a5Busi = 4;
var q4a6Busi = 5;
var q4a7Busi = 5;
var q4a8Busi = 5;
var q4a9Busi = 4;
var q4a10Busi = 5;
var q4a11Busi = 23;
var chart4Busi = [q4a1Busi,q4a2Busi,q4a3Busi,q4a4Busi,q4a5Busi,q4a6Busi,q4a7Busi,q4a8Busi,q4a9Busi,q4a10Busi,q4a11Busi];

// Chart 4 Consultant
var q4a1Cons = 24;
var q4a2Cons = 4;
var q4a3Cons = 5;
var q4a4Cons = 5;
var q4a5Cons = 13;
var q4a6Cons = 44;
var q4a7Cons = 5;
var q4a8Cons = 5;
var q4a9Cons = 23;
var q4a10Cons = 4;
var q4a11Cons = 15;
var chart4Cons = [q4a1Cons,q4a2Cons,q4a3Cons,q4a4Cons,q4a5Cons,q4a6Cons,q4a7Cons,q4a8Cons,q4a9Cons,q4a10Cons,q4a11Cons];

// Chart 4 Provider
var q4a1Prov = 9;
var q4a2Prov = 2;
var q4a3Prov = 1;
var q4a4Prov = 1;
var q4a5Prov = 2;
var q4a6Prov = 3;
var q4a7Prov = 5;
var q4a8Prov = 5;
var q4a9Prov = 5;
var q4a10Prov = 2;
var q4a11Prov = 15;
var chart4Prov = [q4a1Prov,q4a2Prov,q4a3Prov,q4a4Prov,q4a5Prov,q4a6Prov,q4a7Prov,q4a8Prov,q4a9Prov,q4a10Prov,q4a11Prov];

// Chart 4 Science
var q4a1Scie = 5;
var q4a2Scie = 5;
var q4a3Scie = 11;
var q4a4Scie = 6;
var q4a5Scie = 6;
var q4a6Scie = 1;
var q4a7Scie = 5;
var q4a8Scie = 5;
var q4a9Scie = 59;
var q4a10Scie = 8;
var q4a11Scie = 10;
var chart4Scie = [q4a1Scie,q4a2Scie,q4a3Scie,q4a4Scie,q4a5Scie,q4a6Scie,q4a7Scie,q4a8Scie,q4a9Scie,q4a10Scie,q4a11Scie];

// Chart 4 Other
var q4a1Other = 11;
var q4a2Other = 10;
var q4a3Other = 5;
var q4a4Other = 5;
var q4a5Other = 2;
var q4a6Other = 0;
var q4a7Other = 5;
var q4a8Other = 5;
var q4a9Other = 2;
var q4a10Other = 13;
var q4a11Other = 22;
var chart4Other = [q4a1Other,q4a2Other,q4a3Other,q4a4Other,q4a5Other,q4a6Other,q4a7Other,q4a8Other,q4a9Other,q4a10Other,q4a11Other];



//
//
//
//Chart 5
//
//
//


//Cart 5 CIO
var q5a1Cio = 45;
var q5a2Cio = 11;
var q5a3Cio = 3;
var q5a4Cio = 3;
var chart5Cio = [q5a1Cio,q5a2Cio,q5a3Cio,q5a4Cio];

//Cart 5 It
var q5a1It = 45;
var q5a2It = 50;
var q5a3It = 5;
var q5a4It = 5;
var chart5It = [q5a1It,q5a2It,q5a3It,q5a4It];

// Chart 5 Business
var q5a1Busi = 4;
var q5a2Busi = 5;
var q5a3Busi = 5;
var q5a4Busi = 5;
var chart5Busi = [q5a1Busi,q5a2Busi,q5a3Busi,q5a4Busi];

// Chart 5 Consultant
var q5a1Cons = 33;
var q5a2Cons = 44;
var q5a3Cons = 5;
var q5a4Cons = 5;
var chart5Cons = [q5a1Cons,q5a2Cons,q5a3Cons,q5a4Cons];

// Chart 5 Provider
var q5a1Prov = 45;
var q5a2Prov = 20;
var q5a3Prov = 5;
var q5a4Prov = 5;
var chart5Prov = [q5a1Prov,q5a2Prov,q5a3Prov,q5a4Prov];

// Chart 5 Science
var q5a1Scie = 59;
var q5a2Scie = 50;
var q5a3Scie = 5;
var q5a4Scie = 5;
var chart5Scie = [q5a1Scie,q5a2Scie,q5a3Scie,q5a4Scie];

// Chart 5 Other
var q5a1Other = 42;
var q5a2Other = 50;
var q5a3Other = 5;
var q5a4Other = 5;
var chart5Other = [q5a1Other,q5a2Other,q5a3Other,q5a4Other];


//
//
//
//Chart 6
//
//
//


//Cart 6 CIO
var q6a1Cio = 45;
var q6a2Cio = 11;
var q6a3Cio = 3;
var q6a4Cio = 3;
var chart6Cio = [q6a1Cio,q6a2Cio,q6a3Cio,q6a4Cio];

//Cart 6 It
var q6a1It = 45;
var q6a2It = 50;
var q6a3It = 5;
var q6a4It = 5;
var chart6It = [q6a1It,q6a2It,q6a3It,q6a4It];

// Chart 6 Business
var q6a1Busi = 4;
var q6a2Busi = 5;
var q6a3Busi = 5;
var q6a4Busi = 5;
var chart6Busi = [q6a1Busi,q6a2Busi,q6a3Busi,q6a4Busi];

// Chart 6 Consultant
var q6a1Cons = 33;
var q6a2Cons = 44;
var q6a3Cons = 5;
var q6a4Cons = 5;
var chart6Cons = [q6a1Cons,q6a2Cons,q6a3Cons,q6a4Cons];

// Chart 6 Provider
var q6a1Prov = 45;
var q6a2Prov = 20;
var q6a3Prov = 5;
var q6a4Prov = 5;
var chart6Prov = [q6a1Prov,q6a2Prov,q6a3Prov,q6a4Prov];

// Chart 6 Science
var q6a1Scie = 59;
var q6a2Scie = 50;
var q6a3Scie = 5;
var q6a4Scie = 5;
var chart6Scie = [q6a1Scie,q6a2Scie,q6a3Scie,q6a4Scie];

// Chart 6 Other
var q6a1Other = 42;
var q6a2Other = 50;
var q6a3Other = 5;
var q6a4Other = 5;
var chart6Other = [q6a1Other,q6a2Other,q6a3Other,q6a4Other];



//
//
//
//Chart 7
//
//
//


//Cart 7 CIO
var q7a1Cio = 45;
var q7a2Cio = 11;
var q7a3Cio = 3;
var q7a4Cio = 3;
var chart7Cio = [q7a1Cio,q7a2Cio,q7a3Cio,q7a4Cio];

//Cart 7 It
var q7a1It = 45;
var q7a2It = 50;
var q7a3It = 5;
var q7a4It = 5;
var chart7It = [q7a1It,q7a2It,q7a3It,q7a4It];

// Chart 7 Business
var q7a1Busi = 4;
var q7a2Busi = 5;
var q7a3Busi = 5;
var q7a4Busi = 5;
var chart7Busi = [q7a1Busi,q7a2Busi,q7a3Busi,q7a4Busi];

// Chart 7 Consultant
var q7a1Cons = 33;
var q7a2Cons = 44;
var q7a3Cons = 5;
var q7a4Cons = 5;
var chart7Cons = [q7a1Cons,q7a2Cons,q7a3Cons,q7a4Cons];

// Chart 7 Provider
var q7a1Prov = 45;
var q7a2Prov = 20;
var q7a3Prov = 5;
var q7a4Prov = 5;
var chart7Prov = [q7a1Prov,q7a2Prov,q7a3Prov,q7a4Prov];

// Chart 7 Science
var q7a1Scie = 59;
var q7a2Scie = 50;
var q7a3Scie = 5;
var q7a4Scie = 5;
var chart7Scie = [q7a1Scie,q7a2Scie,q7a3Scie,q7a4Scie];

// Chart 7 Other
var q7a1Other = 42;
var q7a2Other = 50;
var q7a3Other = 5;
var q7a4Other = 5;
var chart7Other = [q7a1Other,q7a2Other,q7a3Other,q7a4Other];



//
//
//
//Chart 8
//
//
//


//Cart 8 CIO
var q8a1Cio = 45;
var q8a2Cio = 11;
var q8a3Cio = 3;
var q8a4Cio = 3;
var chart8Cio = [q8a1Cio,q8a2Cio,q8a3Cio,q8a4Cio];

//Cart 8 It
var q8a1It = 45;
var q8a2It = 50;
var q8a3It = 5;
var q8a4It = 5;
var chart8It = [q8a1It,q8a2It,q8a3It,q8a4It];

// Chart 8 Business
var q8a1Busi = 4;
var q8a2Busi = 5;
var q8a3Busi = 5;
var q8a4Busi = 5;
var chart8Busi = [q8a1Busi,q8a2Busi,q8a3Busi,q8a4Busi];

// Chart 8 Consultant
var q8a1Cons = 33;
var q8a2Cons = 44;
var q8a3Cons = 5;
var q8a4Cons = 5;
var chart8Cons = [q8a1Cons,q8a2Cons,q8a3Cons,q8a4Cons];

// Chart 8 Provider
var q8a1Prov = 45;
var q8a2Prov = 20;
var q8a3Prov = 5;
var q8a4Prov = 5;
var chart8Prov = [q8a1Prov,q8a2Prov,q8a3Prov,q8a4Prov];

// Chart 7 Science
var q7a1Scie = 59;
var q7a2Scie = 50;
var q7a3Scie = 5;
var q7a4Scie = 5;
var chart7Scie = [q7a1Scie,q7a2Scie,q7a3Scie,q7a4Scie];

// Chart 7 Other
var q7a1Other = 42;
var q7a2Other = 50;
var q7a3Other = 5;
var q7a4Other = 5;
var chart7Other = [q7a1Other,q7a2Other,q7a3Other,q7a4Other];



//Colors
var cioColor='#13352d'
var itColor='rgba(54,162,235, 1)'
var busiColor='rgba(255,206,86, 1)'
var consColor='rgba(75,192,192, 1)'
var provColor='rgba(50,32,192, 1)'
var scieColor='rgba(24,78,166, 1)'
var otherColor='rgba(75,122,143, 1'

//Chart.defaults.font=25



//CHART 1
let chart1 = document.getElementById('chart1').getContext('2d');

let qOneChart = new Chart (chart1, {
    type:'doughnut',
    data: {
        labels: ['als CIO','als Mitarbeitender in der IT', 'als Mitarbeitender aus dem Business', 'als Berater/Beraterin','als Mitarbeitender eines Anbieters','als Wissenschaftlerin/Wissenschaftler','in einer anderen Rolle'],
        datasets: [{
            label: 'Anzahl',
            data: [0,0,0,0,0,0,0], //hier auch sieben 0?
            backgroundColor: [
                cioColor,
                itColor,
                busiColor,
                consColor,
                provColor,
                scieColor,
                otherColor
            ],
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 3,
            hoverBorderColor:'#000'
        }]
    },
    options: {
        plugins: {
            legend:{
              labels: {
                font:{
                  size: 20
                }
              }
            },
            title: {
                display: true,
                text: 'In welcher Rolle nehmen Sie am TrendradarIT teil?'
            }
        }
    }
});





//Chart Two
let chart2 = document.getElementById('chart2').getContext('2d');

let qTwoChart = new Chart (chart2, {
    type:'bar',
    data: {
        labels: ['optimistisch','skeptisch' ,'weiss nicht'],
        datasets: [{
            label: 'CIO',
            data: [0,0,0],
            backgroundColor: [
                cioColor,
                cioColor,
                cioColor,
            ],
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 3,
            hoverBorderColor:'#000'
        }, 
        {
            label: 'IT',
            data: [0,0,0],
            backgroundColor: [
                itColor,
                itColor,
                itColor,
            ],
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 3,
            hoverBorderColor:'#000'
        },
        {
            label: 'Business',
            data: [0,0,0],
            backgroundColor: [
                busiColor,
                busiColor,
                busiColor,
            ],
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 3,
            hoverBorderColor:'#000'
        },
        {
            label: 'Berater',
            data: [0,0,0],
            backgroundColor: [
                consColor,
                consColor,
                consColor,
            ],
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 3,
            hoverBorderColor:'#000'
        },
        {
            label: 'Anbieter',
            data: [0,0,0],
            backgroundColor: [
                provColor,
                provColor,
                provColor,
            ],
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 3,
            hoverBorderColor:'#000'
        },
        {
            label: 'Wissenschaftler',
            data: [0,0,0],
            backgroundColor: [
                scieColor,
                scieColor,
                scieColor,
            ],
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 3,
            hoverBorderColor:'#000'
        },
        {
            label: 'andere',
            data: [0,0,0],
            backgroundColor: [
                otherColor,
                otherColor,
                otherColor,
            ],
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 3,
            hoverBorderColor:'#000'
        }
    ]
    },
    options: {
        maintainAspectRation: false,
        plugins: {
            title: {
                display: true,
                text: 'Wie blicken Sie in die Zukunft?'
            }
        },
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true
            }
        }
    }
});







//Chart Three
let chart3 = document.getElementById('chart3').getContext('2d');

let qThreeChart = new Chart (chart3, {
    type:'bar',
    data: {
        labels: ['steigt','bleibt gleich', 'sinkt' ,'weiss nicht'],
        datasets: [{
          label: 'CIO',
          data: [0,0,0,0],
          backgroundColor: [
              cioColor,
              cioColor,
              cioColor,
              cioColor,
          ],
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 3,
          hoverBorderColor:'#000'
      }, 
      {
          label: 'IT',
          data: [0,0,0,0],
          backgroundColor: [
              itColor,
              itColor,
              itColor,
              itColor,
          ],
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 3,
          hoverBorderColor:'#000'
      },
      {
          label: 'Business',
          data: [0,0,0,0],
          backgroundColor: [
            busiColor,
            busiColor,
            busiColor,
            busiColor,
          ],
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 3,
          hoverBorderColor:'#000'
      },
      {
          label: 'Berater',
          data: [0,0,0,0],
          backgroundColor: [
              consColor,
              consColor,
              consColor,
              consColor,
          ],
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 3,
          hoverBorderColor:'#000'
      },
      {
          label: 'Anbieter',
          data: [0,0,0,0],
          backgroundColor: [
              provColor,
              provColor,
              provColor,
              provColor,
          ],
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 3,
          hoverBorderColor:'#000'
      },
      {
          label: 'Wissenschaftler',
          data: [0,0,0,0],
          backgroundColor: [
              scieColor,
              scieColor,
              scieColor,
              scieColor,
          ],
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 3,
          hoverBorderColor:'#000'
      },
      {
          label: 'andere',
          data: [0,0,0,0],
          backgroundColor: [
              otherColor,
              otherColor,
              otherColor,
              otherColor,
          ],
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 3,
          hoverBorderColor:'#000'
      }
  ]
  },
  options: {
      plugins: {
          title: {
              display: true,
              text: 'Wie wird sich die Bedeutung der IT Ihrer Meinung nach in Ihrem Unternehmen in den nächsten 12 Monaten entwickeln?'
          }
      },
      scales: {
          x: {
              stacked: true,
          },
          y: {
              stacked: true
          }
      }
  }
});;


//Chart Four
let chart4 = document.getElementById('chart4').getContext('2d');

let qFourChart = new Chart (chart4, {
    type:'bar',
    data: {
        labels: ['Cyber Security','Cloud Transformation', 'Data Analytics' ,'Fachtkräftemangel','Kosten/Kostenmanagement','Migration SAP S/4 HANA', 'Digitalisierung' ,'Agilität','Customer Experience', 'Resillienz' ,'Anderes'],
        datasets: [{
          label: 'CIO',
          data: [0,0,0,0,0,0,0,0,0,0,0],
          backgroundColor: [
              cioColor,
              cioColor,
              cioColor,
              cioColor,
              cioColor,
              cioColor,
              cioColor,
              cioColor,
              cioColor,
              cioColor,
              cioColor,
          ],
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 3,
          hoverBorderColor:'#000'
      }, 
      {
          label: 'IT',
          data: [0,0,0,0,0,0,0,0,0,0,0],
          backgroundColor: [
              itColor,
              itColor,
              itColor,
              itColor,
              itColor,
              itColor,
              itColor,
              itColor,
              itColor,
              itColor,
              itColor,
          ],
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 3,
          hoverBorderColor:'#000'
      },
      {
          label: 'Business',
          data: [0,0,0,0,0,0,0,0,0,0,0],
          backgroundColor: [
              busiColor,
              busiColor,
              busiColor,
              busiColor,
              busiColor,
              busiColor,
              busiColor,
              busiColor,
              busiColor,
              busiColor,
              busiColor,
          ],
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 3,
          hoverBorderColor:'#000'
      },
      {
          label: 'Berater',
          data: [0,0,0,0,0,0,0,0,0,0,0],
          backgroundColor: [
              consColor,
              consColor,
              consColor,
              consColor,
              consColor,
              consColor,
              consColor,
              consColor,
              consColor,
              consColor,
              consColor,
          ],
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 3,
          hoverBorderColor:'#000'
      },
      {
          label: 'Anbieter',
          data: [0,0,0,0,0,0,0,0,0,0,0],
          backgroundColor: [
              provColor,
              provColor,
              provColor,
              provColor,
              provColor,
              provColor,
              provColor,
              provColor,
              provColor,
              provColor,
              provColor,
          ],
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 3,
          hoverBorderColor:'#000'
      },
      {
          label: 'Wissenschaftler',
          data: [0,0,0,0,0,0,0,0,0,0,0],
          backgroundColor: [
              scieColor,
              scieColor,
              scieColor,
              scieColor,
              scieColor,
              scieColor,
              scieColor,
              scieColor,
              scieColor,
              scieColor,
              scieColor,
          ],
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 3,
          hoverBorderColor:'#000'
      },
      {
          label: 'andere',
          data: [0,0,0,0,0,0,0,0,0,0,0],
          backgroundColor: [
              otherColor,
              otherColor,
              otherColor,
              otherColor,
              otherColor,
              otherColor,
              otherColor,
              otherColor,
              otherColor,
              otherColor,
              otherColor,
          ],
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 3,
          hoverBorderColor:'#000'
      }
  ]
  },
  options: {
      plugins: {
          title: {
              display: true,
              text: 'Welches sind Ihrer Meinung nach in den nächsten 12 Monaten die grössten Herausforderungen in der IT?'
          }
      },
      scales: {
          x: {
              stacked: true,
          },
          y: {
              stacked: true
          }
      }
  }
});
 

//Chart Five
let chart5 = document.getElementById('chart5').getContext('2d');

let qFiveChart = new Chart (chart5, {
    type:'bar',
    data: {
        labels: ['steigen','bleiben gleich', 'sinken' ,'weiss nicht'],
        datasets: [{
          label: 'CIO',
          data: [0,0,0,0],
          backgroundColor: [
              cioColor,
              cioColor,
              cioColor,
              cioColor,
          ],
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 3,
          hoverBorderColor:'#000'
      }, 
      {
          label: 'IT',
          data: [0,0,0,0],
          backgroundColor: [
              itColor,
              itColor,
              itColor,
              itColor,
          ],
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 3,
          hoverBorderColor:'#000'
      },
      {
          label: 'Business',
          data: [0,0,0,0],
          backgroundColor: [
              busiColor,
              busiColor,
              busiColor,
              busiColor,
          ],
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 3,
          hoverBorderColor:'#000'
      },
      {
          label: 'Berater',
          data: [0,0,0,0],
          backgroundColor: [
              consColor,
              consColor,
              consColor,
              consColor,
          ],
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 3,
          hoverBorderColor:'#000'
      },
      {
          label: 'Anbieter',
          data: [0,0,0,0],
          backgroundColor: [
              provColor,
              provColor,
              provColor,
              provColor,
          ],
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 3,
          hoverBorderColor:'#000'
      },
      {
          label: 'Wissenschaftler',
          data: [0,0,0,0],
          backgroundColor: [
              scieColor,
              scieColor,
              scieColor,
              scieColor,
          ],
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 3,
          hoverBorderColor:'#000'
      },
      {
          label: 'andere',
          data: [0,0,0,0],
          backgroundColor: [
              otherColor,
              otherColor,
              otherColor,
              otherColor,
          ],
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 3,
          hoverBorderColor:'#000'
      }
  ]
  },
  options: {
      plugins: {
          title: {
              display: true,
              text: 'Wie denken Sie werden sich die Ausgaben für IT in den nächsten 12 Monaten entwickeln?'
          }
      },
      scales: {
          x: {
              stacked: true,
          },
          y: {
              stacked: true
          }
      }
  }
});


//Chart Six
let chart6 = document.getElementById('chart6').getContext('2d');

let qSixChart = new Chart (chart6, {
    type:'bar',
    data: {
        labels: ['steigt','bleibt gleich', 'sinkt' ,'weiss nicht'],
        datasets: [{
          label: 'CIO',
          data: [0,0,0,0],
          backgroundColor: [
              cioColor,
              cioColor,
              cioColor,
              cioColor,
          ],
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 3,
          hoverBorderColor:'#000'
      }, 
      {
          label: 'IT',
          data: [0,0,0,0],
          backgroundColor: [
              itColor,
              itColor,
              itColor,
              itColor,
          ],
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 3,
          hoverBorderColor:'#000'
      },
      {
          label: 'Business',
          data: [0,0,0,0],
          backgroundColor: [
              busiColor,
              busiColor,
              busiColor,
              busiColor,
          ],
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 3,
          hoverBorderColor:'#000'
      },
      {
          label: 'Berater',
          data: [0,0,0,0],
          backgroundColor: [
              consColor,
              consColor,
              consColor,
              consColor,
          ],
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 3,
          hoverBorderColor:'#000'
      },
      {
          label: 'Anbieter',
          data: [0,0,0,0],
          backgroundColor: [
              provColor,
              provColor,
              provColor,
              provColor,
          ],
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 3,
          hoverBorderColor:'#000'
      },
      {
          label: 'Wissenschaftler',
          data: [0,0,0,0],
          backgroundColor: [
              scieColor,
              scieColor,
              scieColor,
              scieColor,
          ],
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 3,
          hoverBorderColor:'#000'
      },
      {
          label: 'andere',
          data: [0,0,0,0],
          backgroundColor: [
              otherColor,
              otherColor,
              otherColor,
              otherColor,
          ],
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 3,
          hoverBorderColor:'#000'
      }
  ]
  },
  options: {
      plugins: {
          title: {
              display: true,
              text: 'Wie wird sich die Wertschöpfungstiefe in der IT in den nächsten 12 Monaten entwickeln?'
          }
      },
      scales: {
          x: {
              stacked: true,
          },
          y: {
              stacked: true
          }
      }
  }
});
        


        
      

//Chart Seven
let chart7 = document.getElementById('chart7').getContext('2d');

let qSevenChart = new Chart (chart7, {
    type:'bar',
    data: {
        labels: ['steigt','bleibt gleich', 'sinkt' ,'weiss nicht'],
        datasets: [{
          label: 'CIO',
          data: [0,0,0,0],
          backgroundColor: [
              cioColor,
              cioColor,
              cioColor,
              cioColor,
          ],
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 3,
          hoverBorderColor:'#000'
      }, 
      {
          label: 'IT',
          data: [0,0,0,0],
          backgroundColor: [
              itColor,
              itColor,
              itColor,
              itColor,
          ],
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 3,
          hoverBorderColor:'#000'
      },
      {
          label: 'Business',
          data: [0,0,0,0],
          backgroundColor: [
              busiColor,
              busiColor,
              busiColor,
              busiColor,
          ],
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 3,
          hoverBorderColor:'#000'
      },
      {
          label: 'Berater',
          data: [0,0,0,0],
          backgroundColor: [
              consColor,
              consColor,
              consColor,
              consColor,
          ],
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 3,
          hoverBorderColor:'#000'
      },
      {
          label: 'Anbieter',
          data: [0,0,0,0],
          backgroundColor: [
              provColor,
              provColor,
              provColor,
              provColor,
          ],
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 3,
          hoverBorderColor:'#000'
      },
      {
          label: 'Wissenschaftler',
          data: [0,0,0,0],
          backgroundColor: [
              scieColor,
              scieColor,
              scieColor,
              scieColor,
          ],
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 3,
          hoverBorderColor:'#000'
      },
      {
          label: 'andere',
          data: [0,0,0,0],
          backgroundColor: [
              otherColor,
              otherColor,
              otherColor,
              otherColor,
          ],
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 3,
          hoverBorderColor:'#000'
      }
  ]
  },
  options: {
      plugins: {
          title: {
              display: true,
              text: 'Wie wird sich die Verlagerung der IT in die Cloud in den nächsten 12 Monaten entwickeln?'
          }
      },
      scales: {
          x: {
              stacked: true,
          },
          y: {
              stacked: true
          }
      }
  }
});



//Chart Eight
let chart8 = document.getElementById('chart8').getContext('2d');

let qEightChart = new Chart (chart8, {
    type:'bar',
    data: {
        labels: ['steigt','bleibt gleich', 'sinkt' ,'weiss nicht'],
        datasets: [{
          label: 'CIO',
          data: [0,0,0,0],
          backgroundColor: [
              cioColor,
              cioColor,
              cioColor,
              cioColor,
          ],
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 3,
          hoverBorderColor:'#000'
      }, 
      {
          label: 'IT',
          data: [0,0,0,0],
          backgroundColor: [
              itColor,
              itColor,
              itColor,
              itColor,
          ],
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 3,
          hoverBorderColor:'#000'
      },
      {
          label: 'Business',
          data: [0,0,0,0],
          backgroundColor: [
              busiColor,
              busiColor,
              busiColor,
              busiColor,
          ],
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 3,
          hoverBorderColor:'#000'
      },
      {
          label: 'Berater',
          data: [0,0,0,0],
          backgroundColor: [
              consColor,
              consColor,
              consColor,
              consColor,
          ],
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 3,
          hoverBorderColor:'#000'
      },
      {
          label: 'Anbieter',
          data: [0,0,0,0],
          backgroundColor: [
              provColor,
              provColor,
              provColor,
              provColor,
          ],
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 3,
          hoverBorderColor:'#000'
      },
      {
          label: 'Wissenschaftler',
          data: [0,0,0,0],
          backgroundColor: [
              scieColor,
              scieColor,
              scieColor,
              scieColor,
          ],
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 3,
          hoverBorderColor:'#000'
      },
      {
          label: 'andere',
          data: [0,0,0,0],
          backgroundColor: [
              otherColor,
              otherColor,
              otherColor,
              otherColor,
          ],
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 3,
          hoverBorderColor:'#000'
      }
  ]
  },
  options: {
      plugins: {
          title: {
              display: true,
              text: 'Wie werden sich die Ausgaben für die IT-Security in den nächsten 12 Monaten entwickeln?'
          }
      },
      scales: {
          x: {
              stacked: true,
          },
          y: {
              stacked: true
          }
      }
  }
});


// const getCount = async () => {
//   const snapshot = await getCountFromServer(qQ1A1);
//   console.log('count: ', snapshot.data().count);
//   q1a1 =  snapshot.data().count;
//   const newChartData1 = getChartDatasets1();
//   qOneChart.data.datasets.forEach((ds, index) => {
//     ds.data = newChartData1[index]
//   });
//   qOneChart.update();
// }



// getCount()
// setInterval(getCount, 5000);




const getForAnswer = (question, allDocs) => {
  return [...Array(7).keys()].map(val => aggregateData(question, val + 1, allDocs))
}



// GET ALL DATA
const getData = async () => {
  
  // const allDocs = colRef.getDocs(colRef)
  const docs = await getDocs(colRef)
  const allDocs = docs.docs.map(d => d.data())
  console.log({allDocs})

//   .then ((snapshot) => {
//   let user_answers = []
//   snapshot.docs.forEach(doc => {
//     user_answers.push({ ...doc.data()})
//   })
//   console.log("here are function answers",user_answers)
// })

  // FRAGE 1
  const answers1  = allDocs.reduce((acc, cur) => {
    const answer = cur["answer_one"];
    if (answer!=null){
      acc[answer-1] = acc[answer-1] + 1
    }
    return acc
  }, [0,0,0,0,0,0,0])

  qOneChart.data.datasets[0].data = answers1

  console.log("a1",answers1)



  // ALLE ANDEREN 
  const finalData = {
    "answer_two": getForAnswer("answer_two", allDocs),
    "answer_three": getForAnswer("answer_three", allDocs),
    "answer_four": getForAnswer("answer_four", allDocs),
    "answer_five": getForAnswer("answer_five", allDocs),
    "answer_six": getForAnswer("answer_six", allDocs),
    "answer_seven": getForAnswer("answer_seven", allDocs),
    "answer_eight": getForAnswer("answer_eight", allDocs)
  }

  qTwoChart.data.datasets.forEach((ds, index) => {
    ds.data = finalData.answer_two[index]
  });
  //qTwoChart.upddate()

  qThreeChart.data.datasets.forEach((ds, index) => {
    ds.data = finalData.answer_three[index]
  });
  //qThreeChart.upddate()

  qFourChart.data.datasets.forEach((ds, index) => {
    ds.data = finalData.answer_four[index]
  });
  //qFourChart.upddate()

  qFiveChart.data.datasets.forEach((ds, index) => {
    ds.data = finalData.answer_five[index]
  });
  //qFiveChart.upddate()

  qSixChart.data.datasets.forEach((ds, index) => {
    ds.data = finalData.answer_six[index]
  });
  //qSixChart.upddate()

  qSevenChart.data.datasets.forEach((ds, index) => {
    ds.data = finalData.answer_seven[index]
  });
  //qSevenChart.upddate()

  qEightChart.data.datasets.forEach((ds, index) => {
    ds.data = finalData.answer_eight[index]
  });
  //qEightChart.upddate()





  // const structuredData = allDocs.reduce((acc, cur) => {
  //   // acc = {}
  //   // cur = {"answer_one": 1,"answer_two": 2,}

  //   [[answer_one, 1],[answer_two,2]]

  //   Object.entries(cur).forEach(([key, value]) => {

  //     if (Object.key(acc).includes(key)) {
  //       const answer =  acc[key];
  //       if (Object.keys(answer).includes(value)) {
  //         acc[key] = {
  //           ...acc[key],
  //           [value]: answer[value]  + 1
  //         }
  //       } else {
  //         acc[key] = {
  //           ...acc[key],
  //           [value]: 1
  //         }  
  //       }

  //     } else {
  //       if (value != null) {
  //         acc[key] = {
  //           [value]: 1
  //         }
  //       }
  //     }

  //   })

  //   return acc
  // }, {})


  /* 
  structuredData = {
    answer_one: {
      1: 2,
      2: 1,
      3: 5
    },
    answer_two: {
      1: 5,
      2: 2,
      ...
    }
  }
  */



};



getData()
setInterval(getData, 100000);







const colRefQuestions = collection(db, 'anliegen')

//Newsletter
const addQuestionForm = document.querySelector('.addContact')
addQuestionForm.addEventListener('submit',(e) => {
e.preventDefault()

addDoc(colRefQuestions,{
  email: addQuestionForm.email.value,
  question: addQuestionForm.question.value,
})
.then(() => {
  addQuestionForm.reset()
})
})