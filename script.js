var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
// console.log(navMenuAnchorTags);
for(var i=0;i<navMenuAnchorTags.length;i++){
    navMenuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        // console.log(targetSectionID);   
        var targetSection = document.getElementById(targetSectionID);
        // console.log(targetSection); 
        var interval = setInterval(function(){
            var targetSectionCoordinates = targetSection.getBoundingClientRect();
            // console.log(targetSectionCoordinates);
            if(targetSectionCoordinates.top <= 0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,50);
        },20);
    })
}

var progressBars =document.querySelectorAll('.skill-progress > div');
var skillsContainer= document.getElementById('skills');
window.addEventListener('scroll',checkScroll);
var animationDone = false;

function initialiseBars(){
    for(let bar of progressBars){
        bar.style.width = 0 + '%';
    }
}
initialiseBars();
function fillBars(){
    for(let bar of progressBars){
        // console.log(bar);
        let targetWidth=bar.getAttribute('data-bar-width');
        // console.log("hi"+targetWidth);
        let currentWidth =0;
        let interval = setInterval(function(){
            if(currentWidth > targetWidth){
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width=currentWidth + '%';
        },3);
    }
}

function checkScroll(){
    var coordinates = skillsContainer.getBoundingClientRect();
    console.log(coordinates);
    if(!animationDone && coordinates.top <= window.innerHeight){
        animationDone = true; 
        console.log('Skills Section Visible');
        fillBars();
    }else if(coordinates.top > window.innerHeight){
        animationDone = false;
        initialiseBars();
    }
}