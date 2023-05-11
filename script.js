let res = "&#98";

const div = document.getElementsByTagName('div')[0];

function roll(){
       let dice = Math.floor(Math.random() * 6) + 1;
            let ans = res + (dice + 55)

            div.innerHTML = ans;
    }


