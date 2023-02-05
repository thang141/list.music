let  allMusic = [
    {
        name: "Khuất lối",
        artist: "--H Kray--",
        img: "song1",
        src: "music/song1.mp3",
        idMusic: "song1"
    },
    {
        name: "Sao Cũng Được",
        artist: "--Thành Đạt--",
        img: "song2",
        src: "music/song2.mp3",
        idMusic: "song2"
    },
    {
        name: "Cuối Cùng Thì",
        artist: "--Jack--",
        img: "song3",
        src: "music/song3.mp3",
        idMusic: "song3"
    },
    {
        name: "Tiếng Pháo Tiễn Người",
        artist: "--Hùng Quân--",
        img: "song4",
        src: "music/song4.mp3",
        idMusic: "song4"
    },
    {
        name: "Đau Ở Đây Này",
        artist: "--NAL--",
        img: "song5",
        src: "music/song5.mp3",
        idMusic: "song5"
    },
    {
        name: "Như Anh Đã Thấy Em",
        artist: "--PHUCXP--",
        img: "song6",
        src: "music/song6.mp3",
        idMusic: "song6"
    },
    {
        name: "Đừng Lo Nhé Có Anh Đây ",
        artist: "--Thiên Tú--",
        img: "song7",
        src: "music/song7.mp3",
        idMusic: "song7"
    },
    {
        name: "Thuyền Quyên",
        artist: "--Diệu Kiên--",
        img: "song8",
        src: "music/song8.mp3",
        idMusic: "song8"
    },
    {
        name: "Quả Phụ Tướng",
        artist: "--Dung Hoàng Phạm--",
        img: "song7",
        src: "music/song9.mp3",
        idMusic: "song9"
    },
    {
        name: "Trót Trao Duyên Remix",
        artist: "--NB3 Hoài Bảo--",
        img: "song10",
        src: "music/song10.mp3",
        idMusic: "song10"
    },
    {
        name: "Em Là Kẻ Đáng Thương",
        artist: "--Phát Huy T4--",
        img: "song11",
        src: "music/song11.mp3",
        idMusic: "song11"
    },
    {
        name: "Đừng Lo Nhé Có Anh Đây",
        artist: "--Thiên Tú--",
        img: "song12",
        src: "music/song12.mp3",
        idMusic: "song12"
    },
    {
        name: "Có Đâu Ai Ngờ",
        artist: "--Cầm--",
        img: "song13",
        src: "music/song13.mp3",
        idMusic: "song13"
    },
    {
        name: "Tòng Phu Remix",
        artist: "--keyo--",
        img: "song14",
        src: "music/song14.mp3",
        idMusic: "song14"
    },
    {
        name: "Tấm Lòng Son",
        artist: "--H-Kray--",
        img: "song15",
        src: "music/song15.mp3",
        idMusic: "song15"
    },
    {
        name: "Em Là Nhất",
        artist: "--kis x Hoàng kaye x Yahy--",
        img: "song16",
        src: "music/song16.mp3",
        idMusic: "song16"
    },
    {
        name: "Thì Thôi",
        artist: "--Nal x TVK--",
        img: "song17",
        src: "music/song17.mp3",
        idMusic: "song17"
    },
    {
        name: "Thôi Quên Đi ",
        artist: "--TVk x PHÁT HUY T4 --",
        img: "song18",
        src: "music/song18.mp3",
        idMusic: "song18"
    },
    {
        name: "Cảm Ơn Vì Tất Cả ",
        artist: "--Anh Quân Idol --",
        img: "song19",
        src: "music/song19.mp3",
        idMusic: "song19"
    },
    {
        name: "Bên Trên Tầng Lầu ",
        artist: "--Tăng Duy Tân --",
        img: "song20",
        src: "music/song20.mp3",
        idMusic: "song20"
    },
    {
        name: "Trọn Vẹn Nghĩa Tình ",
        artist: "--Ưng Hoàng Phúc x Wowy --",
        img: "song21",
        src: "music/song21.mp3",
        idMusic: "song21"
    },
    {
        name: "Quên Người Đã Quá Yêu ",
        artist: "--Hà Duy Thái--",
        img: "song22",
        src: "music/song22.mp3",
        idMusic: "song22"
    },
    {
        name: "Khoan Thai ",
        artist: "-- Khải Đăng--",
        img: "song23",
        src: "music/song23.mp3",
        idMusic: "song23"
    },
    {
        name: "Vương Vấn ",
        artist: "-- Hana Cẩm Tiên x Tvk--",
        img: "song24",
        src: "music/song24.mp3",
        idMusic: "song24"
    },
    {
        name: "Anh Yêu Vội Thế ",
        artist: "-- LaLa Trần--",
        img: "song25",
        src: "music/song25.mp3",
        idMusic: "song25"
    }

]

const wrapper = document.querySelector(".wrapper")
imgMusic = wrapper.querySelector('.img-music')
musicImg = wrapper.querySelector(".img-music img")
musicName = wrapper.querySelector(".name-music .name")
musicArtist = wrapper.querySelector(".name-music .artist")
progress = wrapper.querySelector('.progress')
progressbar = wrapper.querySelector(".progress-bar")
play = wrapper.querySelector('#play');
prev = wrapper.querySelector('#prev');
next = wrapper.querySelector('#next');

let musicIndex = 0;
let autoplay = 0;
let timer = 0;
let play_song = false;
let songAudio = document.createElement('audio');

window.addEventListener("load", ()=>{
    loadMusic(musicIndex);
    playLiMusic();
})
function loadMusic(index){
    reset_music();
    autoplay_song();
    musicName.innerText = allMusic[index].name;
    musicArtist.innerText = allMusic[index].artist;
    musicImg.src = `image/${allMusic[index].img}.jpg`;
    songAudio.src = allMusic[index].src;
    songAudio.load();

    timer = setInterval(range_slider , 1000);
}
loadMusic(musicIndex);
function musicPlay(){
    if(play_song == false){
        playsong();
    }
    else{
        pausesong();
    }
}
function playsong(){
    songAudio.play();
    play_song = true;
    play.innerHTML = '<i class="fa-solid fa-pause"></i>';
}

function pausesong(){
    songAudio.pause();
    play_song = false;
    play.innerHTML = '<i class="fa-solid fa-play"></i>';
}

// ---------next Music----------
function nextMusic(){
    if(musicIndex < allMusic.length -1){
        musicIndex++;
        loadMusic(musicIndex);
        playsong();
        playLiMusic();
    }else{
        musicIndex = 0;
        loadMusic(musicIndex);
        playsong();
        playLiMusic();
    }
}
// ---------prev Music----------
function prevMusic(){
    if(musicIndex > 0){
        musicIndex--;
        loadMusic(musicIndex);
        playsong();
    }else{
        musicIndex = allMusic.length -1;
        loadMusic(musicIndex);
        playsong();
    }
}
next.addEventListener("click", ()=> {
    nextMusic();
})

prev.addEventListener("click", ()=> {
    prevMusic();
})

// -------------update progress-------
songAudio.addEventListener("timeupdate", (e)=>{
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    let progressWidth = (currentTime/duration)*100;
    progressbar.style.width = `${progressWidth}%`;

    let musicCurrentTime = wrapper.querySelector(".current")
    let musicDuration = wrapper.querySelector(".duration")
    songAudio.addEventListener("loadeddata", ()=>{
        let audioduration = songAudio.duration;
        let totalMusicmin = Math.floor(audioduration/60);
        let totalMusicsec = Math.floor(audioduration%60);
        if(totalMusicsec < 10){
            totalMusicsec = `0${totalMusicsec}`;
        }
        musicDuration.innerText = `${totalMusicmin}:${totalMusicsec}`;
    });
    let currentMusicmin = Math.floor(currentTime/60);
    let currentMusicsec = Math.floor(currentTime%60);
        if(currentMusicsec < 10){
            currentMusicsec = `0${currentMusicsec}`;
        }
        musicCurrentTime.innerText = `${currentMusicmin}:${currentMusicsec}`;

});

// -----------tua nhạc-------
progress.addEventListener("click", (e)=>{
    let progressWidthval = progress.clientWidth;
    let clickOffsetX = e.offsetX;
    let songDuration = songAudio.duration;
    songAudio.currentTime = (clickOffsetX / progressWidthval) * songDuration
    playsong();
})

// --------tự chuyển bài----------
function autoplay_song(){
    if(autoplay==1){
        autoplay=0;
    }else{
        autoplay=1;
    }
}
function range_slider(){
    if(songAudio.ended){
        play.innerHTML = `<i class="fa-solid fa-play"></i>`;
        if(autoplay==1){
            nextMusic();
            loadMusic(musicIndex);
            playsong();
        }
    }
}
// --------reset music---------
function reset_music(){
    progressbar.value = 0;
}

// --------Volume--------

let recent_volume = wrapper.querySelector('#volume')  
function volume_change(){
    songAudio.volume = recent_volume.value / 100;
}



// --------danh sách nhạc----------

const showMusic = document.querySelector("#fa-list")
const closeMusic = document.querySelector(".fa-close")
const listMusic = document.querySelector(".list-music")
const ulMusic = wrapper.querySelector("ul")

showMusic.addEventListener("click", function(){
    listMusic.classList.add("show")
})
closeMusic.addEventListener("click", function(){
    listMusic.classList.remove("show")
})

for (let i=0; i< allMusic.length; i++){
    let liMusic = `<li Musicindex="${i}">
                        <div class="song-title">
                            <span>${allMusic[i].name}</span>
                            <p>${allMusic[i].artist}</p>
                        </div>
                        <audio class="${allMusic[i].idMusic}" src="${allMusic[i].src}"></audio>
                        <span id="${allMusic[i].idMusic}" class="audio-duration">3:04</span>
                    </li>`;
    ulMusic.insertAdjacentHTML("beforeend", liMusic);
    let liAudioDuration = ulMusic.querySelector(`#${allMusic[i].idMusic}`)
    let liAudioTag = ulMusic.querySelector(`.${allMusic[i].idMusic}`)

// -------hiển thị thời gian bài hát------------
    liAudioTag.addEventListener("loadeddata", ()=>{
        let audioDuration = liAudioTag.duration;
        let totalMusicmin = Math.floor(audioDuration/60);
        let totalMusicsec = Math.floor(audioDuration%60);
        if(totalMusicsec < 10){
            totalMusicsec = `0${totalMusicsec}`;
        }
        liAudioDuration.innerText = `${totalMusicmin}:${totalMusicsec}`;
    });

}
// -----------------------------------------------

const allLiMusic = ulMusic.querySelectorAll("li");
function playLiMusic(){
    for (let j = 0; j < allLiMusic.length; j++) {
        if(allLiMusic[j].classList.contains("playMusic")){
            allLiMusic[j].classList.remove("playMusic")
        }
        if(allLiMusic[j].getAttribute("Musicindex") == musicIndex){
            allLiMusic[j].classList.add("playMusic");
        }
        allLiMusic[j].setAttribute("onclick", "clicked(this)");
    }
}

function clicked(index){
    let getLiIndex = index.getAttribute("Musicindex");
    musicIndex = getLiIndex;
    loadMusic(musicIndex);
    playsong();
    playLiMusic();
}

