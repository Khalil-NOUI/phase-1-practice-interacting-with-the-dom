
let count = 0;

const counterShow = document.getElementById("counter")

const plusBtn = document.getElementById("plus")
const minusBtn = document.getElementById("minus")
const likeBtn = document.getElementById("heart")

const likeDisplay = Array.from(document.getElementsByClassName('likes'))

const pausa = document.getElementById("pause")
let isPaused = false;

const forma = document.getElementById("comment-form")
const commentArea = document.getElementById("list")
//////////////////////// counter /////////////////


let counterId = setInterval(() => {
    counterShow.textContent = count++;
    console.log(count);
}, 1000);


///////////////// plus & minus //////////////////////


function handlePlus (e) {
    counterShow.textContent = count++;
}

function handleMinus (e) {
    counterShow.textContent = count--; 
}


//////////// like ///////////////////////////////


function handleLike (e) {

    let liked = document.getElementById(count)
    if (liked) {
        liked.dataset.likeCount++
        liked.textContent = `${count} has been liked ${liked.dataset.likeCount} time`;
        console.log(liked)
    } else {
        const status = document.createElement("li");
        status.setAttribute("id", count)
        status.dataset.likeCount = 1
        status.textContent = `${count} has been liked ${status.dataset.likeCount} time`;
        likeDisplay[0].appendChild(status)
    }
    
        }


//// ////////////pausa///////////////////////////


function handlePause(e) {

    if (!isPaused) {
        console.log("isPaussed = false")
        e.target.textContent = "resume";
        clearInterval(counterId);

        // plusBtn.removeEventListener("click", handlePlus);
        // minusBtn.removeEventListener("click", handleMinus);
        // likeBtn.removeEventListener("click", handleLike);
        // forma.removeEventListener("submit", handleComments);

        plusBtn.disabled = true
        minusBtn.disabled = true
        likeBtn.disabled = true
        forma.submit.disabled = true

        isPaused = true

    } else if (isPaused) {
        console.log("isPaussed = true")
        e.target.textContent = "pause";

        // plusBtn.addEventListener("click", handlePlus);
        // minusBtn.addEventListener("click", handleMinus);
        // likeBtn.addEventListener("click", handleLike);
        // forma.addEventListener("submit", handleComments);
       
        plusBtn.disabled = false
        minusBtn.disabled = false
        likeBtn.disabled = false
        forma.submit.disabled = false

        counterId = setInterval(() => {
            counterShow.textContent = count++;
            console.log(count);
        }, 1000);
        isPaused = false;
    }
}

///////////handleComments/////////////////////////

function handleComments(e) {   

    e.preventDefault();
    const input = document.createElement("li")
    if(!e.target.comment.value) return null
    input.textContent = e.target.comment.value
    commentArea.appendChild(input)
    forma.reset()
}

/////////EventsListeners //////////////////////////


plusBtn.addEventListener("click", handlePlus);
minusBtn.addEventListener("click",handleMinus);
likeBtn.addEventListener("click", handleLike );
pausa.addEventListener("click", handlePause);
forma.addEventListener("submit", handleComments);

///////////////////////////////////////////////