const triggers = document.querySelectorAll('.cool > li');
const dropdownBackground = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function enter(){
    //console.log("enter")
    //console.log(this)
    this.classList.add('trigger-enter')
    setInterval(()=>{
        if (this.classList.contains('trigger-enter')){
        this.classList.add('trigger-enter-active')}
    },200)
    dropdownBackground.classList.add('open')

    const dimensions = this.querySelector('.dropdown').getBoundingClientRect();
    const navdDimensions = nav.getBoundingClientRect();
    const dimensions2 = {
        height: dimensions.height,
        width: dimensions.width,
        top: dimensions.top-navdDimensions.top,

        left: dimensions.left
    }
    //The way it's done in the video
    //dropdownBackground.style.setProperty('height', `${dimensions2.height}px`);
   // dropdownBackground.style.setProperty('width', `${dimensions2.width}px` );
    dropdownBackground.style.width = `${dimensions2.width}px`; 
    dropdownBackground.style.height = `${dimensions2.height}px`; 
    dropdownBackground.style.setProperty('transform', `translate(${dimensions2.left}px, ${ dimensions2.top}px)` )
   // console.log(dimensions.top, navdDimensions.top)
    //console.log(dimensions, navdDimensions)

}

function exit(){
    //console.log("exit")
    //console.log(this)
    this.classList.remove('trigger-enter')
    this.classList.remove ('trigger-enter-active')
    dropdownBackground.classList.remove('open')  
}

triggers.forEach((link) =>{
    link.addEventListener('mouseover', enter)
    link.addEventListener('mouseleave', exit)
});
