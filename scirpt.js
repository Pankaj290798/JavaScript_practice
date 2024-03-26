const typingText = document.querySelector('.typing-text p');
const input = document.querySelector('.wrapper .input-field');
const time = document.querySelector('.time span b');
const mistakes = document.querySelector('.mistake span');
const wpm = document.querySelector('.wpm span');
const cpm = document.querySelector('.cpm span');
const btn = document.querySelector('.content button');

let timer;
let maxTime=60;
let timeLeft=maxTime;
let charIndex = 0;
let mistake =0;
let istyping = false;

function loadParagraph(){
    const paragraph = [
        "Believing you are unworthy of love and belonging that who you are authentically is a sin or is wrong is deadly. Who you are is beautiful and amazing.",
        "A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers' block in the first place.",
        "It's not only writers who can benefit from this free online tool. If you're a programmer who's working on a project where blocks of text are needed, this tool can be a great way to get that. It's a good way to test your programming and that the tool being created is working well.",
        "Above are a few examples of how the random paragraph generator can be beneficial. The best way to see if this random paragraph picker will be useful for your intended purposes is to give it a try. Generate a number of paragraphs to see if they are beneficial to your current project.",
        "As I sit in my room late at night, staring at the computer screen, I decide it would be a good idea to create this text. There isn't much meaning to it, other than to get some simple practice. A lot of the texts that have been created are rather short, and don't give a good representation of actual typing speed and accuracy. They lack the length to gauge where your strengths and weaknesses are when typing."
    ];

    const randomIndex = Math.floor(Math.random() * paragraph.length);
    typingText.innerHTML = '';
    for (const char of paragraph[randomIndex]){
        typingText.innerHTML += `<span>${char}</span>`;
    } 
    typingText.querySelectorAll('span')[0].classList.add('active');
    document.addEventListener('keydown',()=>input.focus());
    typingText.addEventListener("click",()=>{
        input.focus()
    })
}   

function initTyping(){
    const char =typingText.querySelectorAll('span');
    const typedChar = input.value.charAt(charIndex);
    if(charIndex < char.length && timeLeft > 0){
      if(char[charIndex].innerText ===typedChar){
            if(!istyping){
                timer = setInterval(initTime,1000);
                istyping =true;
            }
            char[charIndex].classList.add('correct');
            console.log("correct");
        }
        else{
            mistake++;
            char[charIndex].classList.add('inCorrect');
            console.log("inCorrect");
        }
      charIndex++;
      mistakes.innerText = mistake;
      cpm.innerText = charIndex - mistake;
      char[charIndex].classList.add('active');

    } 
    else{
        clearInterval(timer);
        input.value = '';
    }
}

function initTime(){
    if(timeLeft>0){
        timeLeft--;
        time.innerHTML=timeLeft;
        const wordsTyped = (charIndex - mistake) / 5;
        const wpmValue = Math.round((wordsTyped / ((maxTime - timeLeft) / 60)));
        wpm.innerText = wpmValue;
    }
    else{
        clearInterval(timer);

    }
}

function reset(){
    loadParagraph();
    clearInterval(timer);
    timeLeft = maxTime;
    time.innerText=timeLeft
    input.innerText='';
    charIndex = 0;
    mistake =0;
    istyping = false;
    wpm.innerText=0;
    cpm.innerText=0;
    mistakes.innerText=0;
}

input.addEventListener("input",initTyping);
loadParagraph();
btn.addEventListener("click",reset);

