//console.log("hello,come!");
//document.getElementById("paragraph").textContent = "Hello, World";
//alert("anish");
//console.log("thiws si now free");
////window.prompt("enter a number");
//window.confirm("are you sure??");

// let canvass=document.createElement("canvas");
// canvass.width=200;
// canvass.height=100;
// let ctx = canvass.getContext('2d');
// ctx.font = '30px Cursive';
// ctx.fillText("Hello world!", 50, 50);
// document.body.appendChild(canvass);


//arrays
// let cars=["bugatti","lamborghini","mercedes","nissan"];
// let choice=1;
// console.log(cars[choice]);
// car_company={
//     bugatti:"chiron",
//     nissan:"gtr",
//     ford:"mustang"
// }
// console.log(car_company.bugatti);
// console.log(car_company.nissan);

// console.time('response in');
// alert('Click to continue');
// console.timeEnd('response in');
// console.time('response in');
// alert('One more time');
// console.timeEnd('response in');

// var elms = document.getElementsByTagName('*'); //select all elements on the page
// console.time('Loop time');
// for (var i = 0; i < 5000; i++) {
//  for (var j = 0, length = elms.length; j < length; j++) {
//  // nothing to do ...
//  }
// }
// console.timeEnd('Loop time');
// console.log(elms)

// console.info()
// console.warn()
//console.error("hello")
// console.info("hello")
// console.timeStamp("hello")

// var text = 'L\'albero means tree in Italian';
// console.log( text );
var theme_setting = null; 
document.addEventListener("DOMContentLoaded", function() {
  applyTheme(theme_setting); 

  });
  
          // Query selectors to match HTML
          const captchaText = document.querySelector('.captcha_text');
          const refreshBtn = document.querySelector('.refresh_button');  
          const submitBtn = document.querySelector('.submit-btn');
          const inputField = document.querySelector('.captcha_input');
          const message = document.querySelector('.message');
          
          
          let captcha;
          
          // Generate initial captcha
          generateCaptcha(); 
          
          // Refresh captcha
         // Refresh captcha
        refreshBtn.addEventListener('click', () => {
            
                inputField.value = '';
                generateCaptcha();
                message.innerText = '';
                submitBtn.parentElement.classList.add('disabled');
        });

          
          // Validate input
          inputField.addEventListener('keyup', () => {
            if (inputField.value === "") {
              message.innerText = '';
              message.style.color = 'black';
              
            } else if (inputField.value === captcha) {
              message.innerText = 'Correct Captcha!';
              message.style.color = '#007bff';
              submitBtn.parentElement.classList.remove('disabled');
            } else {
              message.innerText = 'Incorrect Captcha'; 
              message.style.color = '#ff2661';
           
            }  
          });
          
          
          // // Check input on submit click
          // submitBtn.addEventListener('click', () => {
          //   // Same input validation as keyup
          // });
          
          function generateCaptcha() {
            captcha = Math.random().toString(36).substring(2,8);
            captchaText.value = captcha;
          }
          
          const input = document.querySelector('.captcha_text');
          console.log(input.placeholder);

          function applyTheme(theme_setting) {
            // Set the theme_setting variable based on the parameter
           
            if (theme_setting === 1) {
              // Run dark theme
              darktheme();
            } else if (theme_setting === 0) {
              // Run light theme
              lighttheme();
            } else if (theme_setting ==null){
              lighttheme();
              // Log an error for an invalid theme_setting
              console.log("Theme error: Invalid theme_setting value");
            }
          }
          
        

   
          
                                

          function lighttheme() {
           
            document.documentElement.style.setProperty('--main-background-color', '#f9f9f9');
            document.documentElement.style.setProperty('--loginbox-color', '#f9f9f9');
            document.documentElement.style.setProperty('--textbox-color', '#e6e6e6');
            document.documentElement.style.setProperty('--text-color', '#007bff');
            document.getElementById("radio-1").checked = true;
          
            theme_setting = 0;
          }
          
          function darktheme() {
     
            document.documentElement.style.setProperty('--main-background-color', '#202124');
            document.documentElement.style.setProperty('--loginbox-color', '#202124');
            document.documentElement.style.setProperty('--textbox-color', '#404040');
            document.documentElement.style.setProperty('--text-color', '#004a99');
            document.getElementById("radio-2").checked = true;
          
            theme_setting = 1;
          }
          