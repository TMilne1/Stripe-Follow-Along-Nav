const triggers = document.querySelectorAll('.cool > li');
const dropdownBackground = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function enter(){
        console.log("enter")
        console.log(this)
        
}

function exit(){
    console.log("exit")
    console.log(this)

}

triggers.forEach((link) =>{
    link.addEventListener('mouseover', enter)
    link.addEventListener('mouseleave', exit)
});
