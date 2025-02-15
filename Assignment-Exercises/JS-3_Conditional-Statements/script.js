function checkAge(){
    // write your code here 
    var value = document.getElementById('ageInput').value;
    var age = Number(value);
    let category
    if(value >= 0 && value <= 12){
        category = "Child";
    } else if(value >= 13 && value <= 19){
        category ="Teenager";
    } else if(value >= 20){
        category = "Adult";
    } else {
        category ="Invalid age. Please enter a valid number";
    }

    document.getElementById('result').innerText=category;
}
