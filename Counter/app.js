let count = 0; // we start with 0.

//select value and buttons

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e){
        const styles = (e.currentTarget.classList);
        //If the decrease button is pressed, decrease by 1 
        if(styles.contains('decrease')){
            count--;
        }
        //If the increase button is pressed, increase by 1
        else if(styles.contains('increase')){
            count++;
        }
        //If the reset button is pressed, count will be 0
        else if(styles.contains('reset')) {
            count = 0;
        }
        
        //color operation for count value. 
        if(count > 0) {
            value.style.color = "green";
        }

        if(count < 0) {
            value.style.color = "red";
        }

        if(count == 0) {
            value.style.color = "black";
        }
        //add the count value on text content.
        value.textContent = count;
    });
});
