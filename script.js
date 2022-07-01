const interactiveRating = {
    MaxRatingValue: 5,
    selectedValue: null,
    insertButtons: function () {
        let evaluation = document.querySelector('.evaluation');
        evaluation.innerHTML = '';
        for(let i = 1; i < interactiveRating.MaxRatingValue + 1; i++){
            evaluation.innerHTML += `<button data-current=${i} class="evaluation-con">
             ${i}
            </button>`
        }
        console.log(evaluation.innerHTML)
        
    },
    addEvListenerForButton: function () {
        let evaluationCon = document.querySelectorAll('.evaluation-con');
        evaluationCon.forEach(element => {
    
            element.addEventListener('click', function (e) {
                interactiveRating.selectedValue = e.target.dataset.current;
                console.log(interactiveRating.selectedValue);
              evaluationCon.forEach(element => {
                element.classList.remove('evaluation-con-clicked');
      
              });
              element.classList.toggle('evaluation-con-clicked');
             })
          
        });
    },
    switchToThankState: function () {
        let submit = document.querySelector('.submit');
        submit.addEventListener('click', function () {
            let card = document.querySelector('.card');
            card.innerHTML = 
            `<div class="thank-photo-container">
                <img src="images/illustration-thank-you.svg" alt="thank-img" class="thank-photo" />
            </div>
            <div class="evaluation-info">
             <button class="evaluation-info-btn">
               You selected ${interactiveRating.selectedValue} out of 5
             </button>
            </div>
            <div class="thank-description">
             <h2 class="thank-you-header">Thank you!</h2>
             <div class="text">
               <p class = "paragraph1">We appreciate you taking the time to give a rating.</p>
               <p class = "paragraph2">If you ever need more support, don't hesitate to get it much</p>
            </div>
            </div>`
        } )
        
    },
    
};
interactiveRating.insertButtons();
interactiveRating.addEvListenerForButton();
interactiveRating.switchToThankState();

