let evaluationCon = document.querySelectorAll('.evaluation-con');
console.log(evaluationCon);
evaluationCon.forEach(element => {
    
    element.addEventListener('click', function () {
        evaluationCon.forEach(element => {
       element.classList.remove('evaluation-con-clicked');
      
       });
        element.classList.toggle('evaluation-con-clicked');
    })
    
});

