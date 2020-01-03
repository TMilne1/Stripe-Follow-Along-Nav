const triggers = document.querySelectorAll('.cool > li');
const dropdownBackground = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function enter(){
    console.log("enter")
    console.log(this)
    this.classList.add('trigger-enter')
    setInterval(()=>{
        this.classList.add('trigger-enter-active')
    },200)
    
    
}

function exit(){
    console.log("exit")
    console.log(this)
    this.classList.remove('trigger-enter')
    this.classList.remove ('trigger-enter-active')
    

}

triggers.forEach((link) =>{
    link.addEventListener('mouseover', enter)
    link.addEventListener('mouseleave', exit)
});
