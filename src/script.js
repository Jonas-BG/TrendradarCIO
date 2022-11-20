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


// sorting of the answers
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
    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    compBtn2.classList.remove('hide')
    const userRef= doc(colRef, user_id)
    setDoc(userRef, {answer_two : 1}, {merge : true})
  })
  answerBtn22.addEventListener('click', (e) => {
    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    compBtn2.classList.remove('hide')
    const userRef= doc(colRef, user_id)
    setDoc(userRef, {answer_two : 2}, {merge : true})
  })
  answerBtn23.addEventListener('click', (e) => {

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

    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    const userRef= doc(colRef, user_id)
    compBtn3.classList.remove('hide')
    setDoc(userRef, {answer_three : 1}, {merge : true})
  })
  answerBtn32.addEventListener('click', (e) => {

    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    const userRef= doc(colRef, user_id)
    compBtn3.classList.remove('hide')
    setDoc(userRef, {answer_three : 2}, {merge : true})
  })
  answerBtn33.addEventListener('click', (e) => {

    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    const userRef= doc(colRef, user_id)
    compBtn3.classList.remove('hide')
    setDoc(userRef, {answer_three : 3}, {merge : true})
  })
  answerBtn34.addEventListener('click', (e) => {

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

     event.target.style.backgroundColor = newColor
     event.target.style.color = newTextColor
     const userRef= doc(colRef, user_id)
     compBtn4.classList.remove('hide')
     setDoc(userRef, {answer_four : 1}, {merge : true})
   })
   answerBtn42.addEventListener('click', (e) => {

     event.target.style.backgroundColor = newColor
     event.target.style.color = newTextColor
     const userRef= doc(colRef, user_id)
     compBtn4.classList.remove('hide')
     setDoc(userRef, {answer_four : 2}, {merge : true})
   })
   answerBtn43.addEventListener('click', (e) => {

     event.target.style.backgroundColor = newColor
     event.target.style.color = newTextColor
     const userRef= doc(colRef, user_id)
     compBtn4.classList.remove('hide')
     setDoc(userRef, {answer_four : 3}, {merge : true})
   })
   answerBtn44.addEventListener('click', (e) => {

     event.target.style.backgroundColor = newColor
     event.target.style.color = newTextColor
     const userRef= doc(colRef, user_id)
     compBtn4.classList.remove('hide')
     setDoc(userRef, {answer_four : 4}, {merge : true})
   })
   answerBtn45.addEventListener('click', (e) => {

     event.target.style.backgroundColor = newColor
     event.target.style.color = newTextColor
     const userRef= doc(colRef, user_id)
     compBtn4.classList.remove('hide')
     setDoc(userRef, {answer_four : 5}, {merge : true})
   })
   answerBtn46.addEventListener('click', (e) => {

    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    const userRef= doc(colRef, user_id)
    compBtn4.classList.remove('hide')
    setDoc(userRef, {answer_four : 6}, {merge : true})
  })
  answerBtn47.addEventListener('click', (e) => {

    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    const userRef= doc(colRef, user_id)
    compBtn4.classList.remove('hide')
    setDoc(userRef, {answer_four : 7}, {merge : true})
  })
  answerBtn48.addEventListener('click', (e) => {

    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    const userRef= doc(colRef, user_id)
    compBtn4.classList.remove('hide')
    setDoc(userRef, {answer_four : 8}, {merge : true})
  })
  answerBtn49.addEventListener('click', (e) => {

    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    const userRef= doc(colRef, user_id)
    compBtn4.classList.remove('hide')
    setDoc(userRef, {answer_four : 9}, {merge : true})
  })
  answerBtn410.addEventListener('click', (e) => {

    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    const userRef= doc(colRef, user_id)
    compBtn4.classList.remove('hide')
    setDoc(userRef, {answer_four : 10}, {merge : true})
  })
  answerBtn411.addEventListener('click', (e) => {

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

    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    const userRef= doc(colRef, user_id)
    compBtn5.classList.remove('hide')
    setDoc(userRef, {answer_five : 1}, {merge : true})
  })
  answerBtn52.addEventListener('click', (e) => {

    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    const userRef= doc(colRef, user_id)
    compBtn5.classList.remove('hide')
    setDoc(userRef, {answer_five : 2}, {merge : true})
  })
  answerBtn53.addEventListener('click', (e) => {

    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    const userRef= doc(colRef, user_id)
    compBtn5.classList.remove('hide')
    setDoc(userRef, {answer_five : 3}, {merge : true})
  })
  answerBtn54.addEventListener('click', (e) => {

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

    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    const userRef= doc(colRef, user_id)
    compBtn6.classList.remove('hide')
    setDoc(userRef, {answer_six : 1}, {merge : true})
  })
  answerBtn62.addEventListener('click', (e) => {
    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    const userRef= doc(colRef, user_id)
    compBtn6.classList.remove('hide')
    setDoc(userRef, {answer_six : 2}, {merge : true})
  })
  answerBtn63.addEventListener('click', (e) => {

    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    const userRef= doc(colRef, user_id)
    compBtn6.classList.remove('hide')
    setDoc(userRef, {answer_six : 3}, {merge : true})
  })
  answerBtn64.addEventListener('click', (e) => {

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

    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    const userRef= doc(colRef, user_id)
    compBtn7.classList.remove('hide')
    setDoc(userRef, {answer_seven : 1}, {merge : true})
  })
  answerBtn72.addEventListener('click', (e) => {

    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    const userRef= doc(colRef, user_id)
    compBtn7.classList.remove('hide')
    setDoc(userRef, {answer_seven : 2}, {merge : true})
  })
  answerBtn73.addEventListener('click', (e) => {

    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    const userRef= doc(colRef, user_id)
    compBtn7.classList.remove('hide')
    setDoc(userRef, {answer_seven : 3}, {merge : true})
  })
  answerBtn74.addEventListener('click', (e) => {

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

    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    const userRef= doc(colRef, user_id)
    compBtn8.classList.remove('hide')
    setDoc(userRef, {answer_eight : 1}, {merge : true})
  })
  answerBtn82.addEventListener('click', (e) => {

    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    const userRef= doc(colRef, user_id)
    compBtn8.classList.remove('hide')
    setDoc(userRef, {answer_eight : 2}, {merge : true})
  })
  answerBtn83.addEventListener('click', (e) => {

    event.target.style.backgroundColor = newColor
    event.target.style.color = newTextColor
    const userRef= doc(colRef, user_id)
    compBtn8.classList.remove('hide')
    setDoc(userRef, {answer_eight : 3}, {merge : true})
  })
  answerBtn84.addEventListener('click', (e) => {

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

    compareBtn1.classList.add('hide')
    nextBtn1.classList.remove('hide')
    chartContainer1.classList.remove('hide')
  })
  compareBtn2.addEventListener('click', (e) => {

    compareBtn2.classList.add('hide')
    nextBtn2.classList.remove('hide')
    chartContainer2.classList.remove('hide')
  })
  compareBtn3.addEventListener('click', (e) => {

    compareBtn3.classList.add('hide')
    nextBtn3.classList.remove('hide')
    chartContainer3.classList.remove('hide')
  })
  compareBtn4.addEventListener('click', (e) => {

    compareBtn4.classList.add('hide')
    nextBtn4.classList.remove('hide')
    chartContainer4.classList.remove('hide')
  })
  compareBtn5.addEventListener('click', (e) => {

    compareBtn5.classList.add('hide')
    nextBtn5.classList.remove('hide')
    chartContainer5.classList.remove('hide')
  })
  compareBtn6.addEventListener('click', (e) => {

    compareBtn6.classList.add('hide')
    nextBtn6.classList.remove('hide')
    chartContainer6.classList.remove('hide')
  })
  compareBtn7.addEventListener('click', (e) => {

    compareBtn7.classList.add('hide')
    nextBtn7.classList.remove('hide')
    chartContainer7.classList.remove('hide')
  })
  compareBtn8.addEventListener('click', (e) => {

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

      nextBtn1.classList.add('hide')
      surveyContainer1.classList.add('hide')
      surveyContainer2.classList.remove('hide')
    })
    nextBtn2.addEventListener('click', (e) => {

      nextBtn1.classList.add('hide')
      surveyContainer2.classList.add('hide')
      surveyContainer3.classList.remove('hide')
    })
    nextBtn3.addEventListener('click', (e) => {

      nextBtn1.classList.add('hide')
      surveyContainer3.classList.add('hide')
      surveyContainer4.classList.remove('hide')
    })
    nextBtn4.addEventListener('click', (e) => {

      nextBtn1.classList.add('hide')
      surveyContainer4.classList.add('hide')
      surveyContainer5.classList.remove('hide')
    })
    nextBtn5.addEventListener('click', (e) => {

      nextBtn1.classList.add('hide')
      surveyContainer5.classList.add('hide')
      surveyContainer6.classList.remove('hide')
    })
    nextBtn6.addEventListener('click', (e) => {

      nextBtn1.classList.add('hide')
      surveyContainer6.classList.add('hide')
      surveyContainer7.classList.remove('hide')
    })
    nextBtn7.addEventListener('click', (e) => {

      nextBtn1.classList.add('hide')
      surveyContainer7.classList.add('hide')
      surveyContainer8.classList.remove('hide')
    })
    nextBtn8.addEventListener('click', (e) => {

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
            data: [0,0,0,0,0,0,0],
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




const getForAnswer = (question, allDocs) => {
  return [...Array(7).keys()].map(val => aggregateData(question, val + 1, allDocs))
}



// GET ALL DATA
const getData = async () => {
  
  const docs = await getDocs(colRef)
  const allDocs = docs.docs.map(d => d.data())
  console.log({allDocs})

  // FRAGE 1
  const answers1  = allDocs.reduce((acc, cur) => {
    const answer = cur["answer_one"];
    if (answer!=null){
      acc[answer-1] = acc[answer-1] + 1
    }
    return acc
  }, [0,0,0,0,0,0,0])

  qOneChart.data.datasets[0].data = answers1



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
  qTwoChart.update()

  qThreeChart.data.datasets.forEach((ds, index) => {
    ds.data = finalData.answer_three[index]
  });
  qThreeChart.update()

  qFourChart.data.datasets.forEach((ds, index) => {
    ds.data = finalData.answer_four[index]
  });
  qFourChart.update()

  qFiveChart.data.datasets.forEach((ds, index) => {
    ds.data = finalData.answer_five[index]
  });
  qFiveChart.update()

  qSixChart.data.datasets.forEach((ds, index) => {
    ds.data = finalData.answer_six[index]
  });
  qSixChart.update()

  qSevenChart.data.datasets.forEach((ds, index) => {
    ds.data = finalData.answer_seven[index]
  });
  qSevenChart.update()

  qEightChart.data.datasets.forEach((ds, index) => {
    ds.data = finalData.answer_eight[index]
  });
  qEightChart.update()
};



getData()
setInterval(getData, 5000);







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