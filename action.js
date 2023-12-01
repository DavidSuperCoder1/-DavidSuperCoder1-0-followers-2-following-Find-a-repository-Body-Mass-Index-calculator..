

/********************************************Changing Input fields******************************************/
// function changeInputfield() {
//   //console.log('changeInputfield function is called');
//   let metric = document.querySelector('#metric');
//   let imperial = document.querySelector('#imperial');
//   let metric1 = document.querySelector('#metric1');
//   let imperial1 = document.querySelector('#imperial1');
//   let calwrapper= document.querySelector('.calculator-wrapper');
//   let calwrapper1= document.querySelector('.calculator-wrapper1');
//   let calHeight = document.querySelector('.calculator');
//   let bodyWidth = document.body.clientWidth;
//   let header = document.querySelector ('header');
//    console.log(bodyWidth);

//   if (metric1.checked && bodyWidth > 1024 ) {
  
//     console.log("Metric is checked");
//     calwrapper1.style.display="none";
//     calwrapper.style.display="flex";
//     metric.checked=true; 
    
//   }else if(metric1.checked && bodyWidth < 1024 && bodyWidth > 768){
    
//     calHeight.style.height= '450px';
//     console.log(calHeight);
//     calwrapper1.style.display="none";
//     calwrapper.style.display="flex";
//     header.style.marginBottom="50px";
//     metric.checked=true; 
//     calHeight.style.height= '600px';

//   }else if(imperial.checked && bodyWidth > 1024){
//     calwrapper.style.display="none";
//     calwrapper1.style.display="flex";
//     imperial1.checked=true;

//   }else if(imperial.checked && bodyWidth < 1024 && bodyWidth > 768){
//     calwrapper.style.display="none";
//     calwrapper1.style.display="flex";
//     header.style.marginBottom="150px";
//     imperial1.checked=true;

//     console.log('cal height is : ', bodyWidth);
//   }else if(imperial.checked && bodyWidth < 768 && bodyWidth > 320){
//     console.log('cal height is : ', bodyWidth);
//     calwrapper.style.display="none";
//     calwrapper1.style.display="flex";
//     header.style.marginBottom="550px";
//     imperial1.checked=true;
//     calHeight.style.height= '1050px';
//   }
// }

 function changeInputfield() {
  let metric = document.querySelector('#metric');
  let imperial = document.querySelector('#imperial');
  let metric1 = document.querySelector('#metric1');
  let imperial1 = document.querySelector('#imperial1');
  let calwrapper = document.querySelector('.calculator-wrapper');
  let calwrapper1 = document.querySelector('.calculator-wrapper1');
  let calHeight = document.querySelector('.calculator');
  let header = document.querySelector('header'); 
  let bodyWidth = document.body.clientWidth;

  // console.log(bodyWidth);

  // Common code for all conditions
  // calwrapper.style.display = "none";
  // calwrapper1.style.display = "flex";

  if (metric1.checked && bodyWidth > 1024) {
    console.log("Metric is checked");
    metric.checked = true;
    calHeight.style.height = 'auto'; // or set it to a default value if needed
    calwrapper.style.display = "flex";
    calwrapper1.style.display = "none";

  } else if (metric1.checked && bodyWidth < 1024 && bodyWidth > 768) {
    calHeight.style.height = '450px';
    metric.checked = true;
    calwrapper1.style.display = "none";
    calwrapper.style.display = "flex";

  }else if (metric1.checked && bodyWidth < 768 && bodyWidth > 320) {
      calHeight.style.height = '450px';
      header.style.marginBottom = "50px";
      metric.checked = true;
      calwrapper1.style.display = "none";
      calwrapper.style.display = "flex";
  
  } else if (metric1.checked && bodyWidth < 320) {
    calHeight.style.height = '450px';
    header.style.marginBottom = "50px";
    metric.checked = true;
    calwrapper1.style.display = "none";
    calwrapper.style.display = "flex";

}else if (imperial.checked && bodyWidth > 1024) {
    imperial1.checked = true;
    calHeight.style.height = '600px';
    calwrapper1.style.display = "flex";
    calwrapper.style.display = "none";

  } else if (imperial.checked && bodyWidth < 1024 && bodyWidth > 768) {
    imperial1.checked = true;
    header.style.marginBottom = "150px";
    calHeight.style.height = '600px';
    calwrapper.style.display = "none";
    calwrapper1.style.display = "flex";

  } else if (imperial.checked && bodyWidth < 768 && bodyWidth > 481) {
    imperial1.checked = true;
    header.style.marginBottom = "150px";
    calHeight.style.height = '650px';
    calwrapper.style.display = "none";
    calwrapper1.style.display = "flex";

  }else if (imperial.checked && bodyWidth < 481 && bodyWidth > 320) {
    imperial1.checked = true;
    header.style.marginBottom = "150px";
    calHeight.style.height = '630px';
    calwrapper.style.display = "none";
    calwrapper1.style.display = "flex";

  }else if (imperial.checked &&  bodyWidth < 320) {
    imperial1.checked = true;
    header.style.marginBottom = "250px";
    calHeight.style.height = '630px';
    calwrapper.style.display = "none";
    calwrapper1.style.display = "flex";
  }
 }

function isEmpty(value) {
  return value === null || value === undefined || value.trim() === '';
}


/********************************************Metric******************************************/
function bmiResult(){

  let welcome_box1= document.querySelector('.first-welcome-box');
  let welcome_box2= document.querySelector('.snd-welcome-box');

  let result_num = document.querySelector('#result-num');
  let error = document.querySelector('.error');


  let cm = document.querySelector('#cm');
  let weight = document.querySelector('#kg');

  let meter = cm.value/100;
  let bmi = weight.value/(meter*meter);
  console.log(bmi.toFixed(2));

  let bodyWidth = document.body.clientWidth;
  let calHeight = document.querySelector('.calculator');


  if (!isEmpty(cm.value) && !isEmpty(weight.value) && bmi<200 && bodyWidth > 480) {
      welcome_box1.style.display='none';
      error.style.visibility ='hidden';
      welcome_box2.style.display='flex';
      
      result_num.textContent= bmi.toFixed(1);
     
      console.log(result_num);
  }else if(isEmpty(cm.value) || isEmpty(weight.value) && bodyWidth > 480 ){
   
    welcome_box2.style.display='none';
    welcome_box1.style.display='flex';
    error.style.visibility ='visible';
   
  }else if (bodyWidth < 480 && !isEmpty(cm.value) && !isEmpty(weight.value) && bmi<200){

    calHeight.style.height = '660px';
    welcome_box1.style.display='none';
    error.style.visibility ='hidden';
    welcome_box2.style.display='flex';
    
    result_num.textContent= bmi.toFixed(1);
  }else if(isEmpty(cm.value) || isEmpty(weight.value) && bodyWidth < 480){
    calHeight.style.height = '540px';
    welcome_box2.style.display='none';
    welcome_box1.style.display='flex';
    error.style.visibility ='visible';
    
  }
  
}


/**************************************For Imperial******************************************/
function calculateImperialBMI() {
  const foot = parseInt(document.querySelector('#ft').value) || 0;
  const inch = parseInt(document.querySelector('#in').value) || 0;
  const stone = parseInt(document.querySelector('#st').value) || 0;
  const pound = parseInt(document.querySelector('#lbs').value) || 0;

  const totalInch = foot * 12 + inch;
  const totalWeight = stone * 14 + pound;

  const bmi = (totalWeight * 703) / (totalInch * totalInch);
  const bmiResult = bmi.toFixed(1);

  displayResult(bmiResult);
  
}

function displayResult(bmiResult) {
  const resultNum = document.querySelector('#result-forImperial');
  const error = document.querySelector('#error1');
  const welcomeBox1 = document.querySelector('#first-welbox');
  const welcomeBox2 = document.querySelector('#snd-welbox');




  if (bmiResult < 200 && !isNaN(bmiResult ) ) {
    resultNum.textContent = bmiResult;
    error.style.visibility = 'hidden';
    welcomeBox1.style.display = 'none';
    welcomeBox2.style.display = 'flex';
  

  } else {
    welcomeBox2.style.display = 'none';
    welcomeBox1.style.display = 'flex';
    error.style.visibility = 'visible';
    
  }
}


// window.addEventListener('resize' , function(){
//     if(this.window.innerWidth < 480  ){
//       let bodyWidth = this.document.body.clientWidth;
//       console.log('Webpage width', bodyWidth)
//       console.log(displayResult());
//       if(displayResult()){
//         console.log("correct");
//       }else{
//         console.log('something wrong');
//       }
//     }
// })

