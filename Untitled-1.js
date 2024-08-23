//cal

const display = document.getElementById("display");

function appendToDisplay(input){
      display.value += input;
}
function clearDisplay(){
         display.value = "";
}

function calculate(){
     try{
    display.value = eval(display.value);
     }
    catch(error){
      window.alert("Please try again")  
      display.value = "Error 404";
    }


}