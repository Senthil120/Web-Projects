let men=document.getElementById("men");
let mendisplay=document.getElementById("menDisplay");
let women=document.getElementById("women");
let womenDisplay=document.getElementById("womenDisplay");


men.addEventListener("mouseover",()=>{
    mendisplay.style.display="block";
})
mendisplay.addEventListener("mouseover",()=>{
    mendisplay.style.display="block";
})
mendisplay.addEventListener("mouseout",()=>{
    mendisplay.style.display="none";
})
men.addEventListener("mouseout",()=>{
    mendisplay.style.display="none";
})

women.addEventListener("mouseover",()=>{
    womenDisplay.style.display="block";
})
womenDisplay.addEventListener("mouseover",()=>{
    womenDisplay.style.display="block";
})
womenDisplay.addEventListener("mouseout",()=>{
    womenDisplay.style.display="none";
})
women.addEventListener("mouseout",()=>{
    womenDisplay.style.display="none";
})

kids.addEventListener("mouseover",()=>{
    menDisplay.style.display="block";
})
mendisplay.addEventListener("mouseover",()=>{
    menDisplay.style.display="block";
})
mendisplay.addEventListener("mouseout",()=>{
    menDisplay.style.display="none";
})
kids.addEventListener("mouseout",()=>{
    menDisplay.style.display="none";
})

home.addEventListener("mouseover",()=>{
    womenDisplay.style.display="block";
})
womenDisplay.addEventListener("mouseover",()=>{
    womenDisplay.style.display="block";
})
womenDisplay.addEventListener("mouseout",()=>{
    womenDisplay.style.display="none";
})
home.addEventListener("mouseout",()=>{
    womenDisplay.style.display="none";
})

beauty.addEventListener("mouseover",()=>{
    menDisplay.style.display="block";
})
mendisplay.addEventListener("mouseover",()=>{
    menDisplay.style.display="block";
})
mendisplay.addEventListener("mouseout",()=>{
    menDisplay.style.display="none";
})
beauty.addEventListener("mouseout",()=>{
    menDisplay.style.display="none";
})

studio.addEventListener("mouseover",()=>{
    content.style.display="block";
})
content.addEventListener("mouseover",()=>{
    content.style.display="block";
})

content.addEventListener("mouseout",()=>{
    content.style.display="none";
})
studio.addEventListener("mouseout",()=>{
    content.style.display="none";
})

profile.addEventListener("mouseover",()=>{
    profile1.style.display="block";
})
profile.addEventListener("mouseout",()=>{
    profile1.style.display="none";
})
profile1.addEventListener("mouseover",()=>{
    profile1.style.display="block";
})

profile1.addEventListener("mouseout",()=>{
    profile1.style.display="none";
})

bell.addEventListener("mouseover",()=>{
    lattest.style.display="block";
})
bell.addEventListener("mouseout",()=>{
    lattest.style.display="none";
})
bell.addEventListener("click",()=>{
    box.style.display="block";
})
bell.addEventListener("mouseout",()=>{
    box.style.display="none";
})
box.addEventListener("mouseover",()=>{
    box.style.display="block";
})
box.addEventListener("mouseout",()=>{
    box.style.display="none";
})



body.addEventListener("mouseover",()=>{
    profile1.style.display="none";
    content.style.display="none";
    menDisplay.style.display="none";
    womenDisplay.style.display="none";
})


