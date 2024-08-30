let ticksound=new Audio('ticksound.mp3');
ticksound.volume = 1.0; // Ensure volume is set
ticksound.muted = false;
setInterval(()=>{
    d= new Date();
    htime=d.getHours();
    mtime=d.getMinutes();
    stime=d.getSeconds();

    hrotation=30*htime + mtime/2;
    mrotation=6*mtime;
    srotation=6*stime;

    hour.style.transform=`rotate(${hrotation}deg)`
    minute.style.transform=`rotate(${mrotation}deg)`
    second.style.transform=`rotate(${srotation}deg)`
    ticksound.currentTime=0;
    ticksound.play();
},1000)