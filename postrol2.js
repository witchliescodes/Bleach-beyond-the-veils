document.querySelectorAll(".playerbox").forEach(player=>{

const audio=player.querySelector(".pk-audio");

const play=player.querySelector(".pk-play");

const fill=player.querySelector(".pk-progress-fill");

const progress=player.querySelector(".pk-progress");

const current=player.querySelector(".pk-current");

const duration=player.querySelector(".pk-duration");

const volume=player.querySelector(".pk-volume-slider");

function format(s){

const m=Math.floor(s/60);

const sec=Math.floor(s%60);

return m+":"+(sec<10?"0":"")+sec;

}

audio.addEventListener("loadedmetadata",()=>{

duration.textContent=format(audio.duration);

});

play.addEventListener("click",()=>{

if(audio.paused){

audio.play();

play.textContent="❚❚";

}else{

audio.pause();

play.textContent="▶";

}

});

audio.addEventListener("timeupdate",()=>{

const p=(audio.currentTime/audio.duration)*100;

fill.style.width=p+"%";

current.textContent=format(audio.currentTime);

});

progress.addEventListener("click",e=>{

const r=progress.getBoundingClientRect();

const x=e.clientX-r.left;

audio.currentTime=(x/r.width)*audio.duration;

});

volume.addEventListener("input",()=>{

audio.volume=volume.value;

});

});
