


document.getElementById('btn').addEventListener('click',function(){
    let numValue = document.getElementById('text').value
    
     if(numValue % 2 == 0){
        document.getElementById('demo').textContent = "even number";
    }else if(numValue % 2 == 1){
        document.getElementById('demo').textContent = "odd number";
    }else{
        document.getElementById('demo').textContent = "invalid number"
    }
})

// document.getElementById('btn').addEventListener('click', function(){
//     let numValue = document.getElementById('text').value;


//         if (numValue % 2 == 0) {
//             document.getElementById('demo').textContent = "Even number";
//         } else if(numValue % 2 == 1){
//             document.getElementById('demo').textContent = "Odd number";
//         } else {
//         document.getElementById('demo').textContent = "Invalid input";
//     }
// });
