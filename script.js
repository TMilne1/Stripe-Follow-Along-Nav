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
    dropdownBackground.classList.add('open')

    
    const dimensions = this.querySelector('.dropdown').getBoundingClientRect();
    const dimensions2 = {
        height: dimensions.height,
        width: dimensions.width
    }
    //The way its done in the video
    //dropdownBackground.style.setProperty('height', `${dimensions2.height}px`);
   // dropdownBackground.style.setProperty('width', `${dimensions2.width}px` );
    dropdownBackground.style.width = `${dimensions2.width}px`; 
    dropdownBackground.style.height = `${dimensions2.height}px`; 


            
    
}

function exit(){
    console.log("exit")
    console.log(this)
    this.classList.remove('trigger-enter')
    this.classList.remove ('trigger-enter-active')
    dropdownBackground.classList.remove('open')  
    
    

}

triggers.forEach((link) =>{
    link.addEventListener('mouseover', enter)
    link.addEventListener('mouseleave', exit)
});
