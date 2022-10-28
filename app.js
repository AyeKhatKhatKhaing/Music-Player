let playlist = [
    { sample: "Why you always in a mood?Fuckin' 'round, actin' brand newI ain't tryna tell you what to doBut try to play it cool...", keyword: "Mood", img: "images/mood.png", trackId: "music/24kGoldn - Mood Remix (Lyrics) ft. Justin Bieber_ J Balvin_ Iann Dior(MP3_128K).mp3", title: "Mood", artist: "24kgoldn" },
    { sample: "Yeah nuga nae sujeo deoreopdae I don’t care maikeu jabeum geumsujeo yeoreot pae Beoreokhae jal mot igeun geotdeul seutekki yeoreo gae...", keyword: "MIC", img: "images/micdrop.jpg", trackId: "music/[Full Length Edition] BTS - MIC DROP (Steve Aoki Remix) Lyrics [Color Coded Han_Rom_Eng](MP3_128K).mp3", title: "Mic Drop", artist: "BTS" },
    { sample: "Eotteon mallo sijageul haeya joeulji Eogeunnago tto eogeunnan neowa naege Daedap eopsi gureum dwie sumeun dareul...", keyword: "Night", img: "images/nightflower.jpg", trackId: "music/[MV] YEEUN AHN(안예은) _ Night Flower(야화)(MP3_128K).mp3", title: "Night flower", artist: "Yeeun Ahn" },
    { sample: "I do the same thing, I told you that I never would I told you I changed, even when I knew I never could I know that I can't find nobody else as good as you...", keyword: "Stay", img: "images/stay-with-me.jpg", trackId: "music/[도깨비 OST Part 1] 찬열_ 펀치 (CHANYEOL_ PUNCH) - Stay With Me MV(MP3_128K).mp3", title: "Stay With Me", artist: "Chanyeol ft Punch" },
    { sample: "Stay at one just a moment အခိုက်အတန်.လေးများပျောက်ကွယ်ကာသွားတယ် ခနလောက်ပဲ နင်ရောက်လာပြီး ခနလေးပဲမင်းထွက်ခွာသွားခဲ့တယ်...", keyword: "moment", img: "images/Just-a-moment.jpg", trackId: "music/_Just a moment...❤️️ခဏလေးအတွင်းမှာ_(MP3_128K).mp3", title: "Just a moment", artist: "Chan Myae Maung Cho" },
    { sample: "I remember the day you came to me A day when the white snow fell silently I fell in love with you at first sight...", keyword: "Forever", img: "images/forever.jpg", trackId: "music/aespa _Forever_ Lyrics (에스파 약속 가사) (Color Coded Lyrics)(MP3_128K).mp3", title: "Forever", artist: "Aespa" },
    { sample: "You sit there with that look on your face like you won Like nothing that I say is gonna change how you feel now You sit there, and you tell me you fell outta love...", keyword: "Strongest", img: "images/strongest.jpg", trackId: "music/Alan Walker _ Ina Wroldsen - Strongest (Lyrics)(MP3_128K).mp3", title: "Strongest", artist: "Alan Walker" },
    { sample: "Lily was a little girl Afraid of the big, wide world She grew up within her castle walls Now and then she tried to run...", keyword: "Lily", img: "images/lily.jpg", trackId: "music/Alan Walker_ K-391 _ Emelie Hollow - Lily (Lyrics)(MP3_128K).mp3", title: "Lily", artist: "Alan Walker" },
    { sample: "White shirt now red, my bloody nose Sleepin', you're on your tippy toes Creepin' around like no one knows Think you're so criminal...", keyword: "bad", img: "images/bad-guy.jpg", trackId: "music/Billie Eilish - bad guy (Lyrics)(MP3_128K).mp3", title: "Bad guy", artist: "Billie Eilish" },
];
let popularSongs = [
    {
        sample: "Thought I found a way  Thought I found a way out(found) But you never go away(never go away) So I guess I gotta stay now Oh, I hope some day I'll make it out of here...", keyword: "lovely", img: "images/lovely.jpg", trackId: "music/Billie Eilish_ Khalid - lovely(MP3_128K).mp3", title: "Lovely", artist: "Billie Eilish"
    },
    {
        sample: "He is a hustler, he's no good at all He is a loser, he's a bum, bum, bum, bum  He lies, he bluffs, he's unreliable He is a sucker with a gun, gun, gun, gun I know you told me I should stay away I know you said he's just a dog astray", keyword: "Criminal", img: "images/criminal.png", trackId: "music/Britney Spears - Criminal (Lyrics)(MP3_128K).mp3", title: "Criminal", artist: "Britney Spears"
    },
    {
        sample: "Neo ttaeme na ireoke manggajyeo Geumanhallae ije neo an gajyeo Mothagesseo, mwot gataseo Jebal, pinggye gateun geon samgajwo Niga nahante ireom an dwae...", keyword: "NEED", img: "images/i-need-u.jpg", trackId: "music/BTS (방탄소년단) -  I NEED U [Color Coded Lyrics] Han_Rom_Eng(MP3_128K).mp3", title: "I need u", artist: "BTS"
    },
    {
        sample: "You know those days Those days where you're sad for no reason Those days where your body is heavy And it looks like everyone else except you is busy and fierce My feet won't set off, though it seems like I'm already too late I'm hateful of the whole world...", keyword: "Zero", img: "images/0o'clock.jpg", trackId: "music/BTS (방탄소년단) - 00_00 (Zero O_Clock) (Color Coded Lyrics Eng_Rom_Han_가사)(MP3_128K).mp3", title: "0 O:Clock", artist: "BTS"
    },
    {
        sample: "I got, I got, I got, I got— Loyalty, got royalty inside my DNA Cocaine quarter piece, got war and peace inside my DNA I got power, poison, pain, and joy inside my DNA I got hustle, though, ambition flow inside my DNA...", keyword: "DNA", img: "images/dna.webp", trackId: "music/BTS (방탄소년단) - _DNA_  (Color Coded Han_Rom_Eng Lyrics)(MP3_128K).mp3", title: "DNA", artist: "BTS"
    },
    {
        sample: "I'm a born singer jom neujeobeorin gobaek (I swear) Eonjena meolgiman haesseotdeon singiruga nun ape isseo(yeogi isseo) I'm a born singer eojjeomyeon ireun gobaek (ireun gobaek) Geuraedo neomu haengbokae I'm good (Whoa, whoa ...", keyword: "Born", img: "images/born-singer.jpg", trackId: "music/BTS (방탄소년단) - Born Singer (Color coded Han_Rom_Eng Lyrics)(MP3_128K).mp3", title: "Born Singer", artist: "BTS"
    },
    {
        sample: "Neol wihaeseoramyeon nan Seulpeodo gippeun cheok hal suga isseosseo Neol wihaeseolamyeon nan Apado ganghan cheok hal suga isseosseo Sarangi sarangmaneuro wanbyeokhagil Nae modeun yakjeomdeureun da sumgyeojigil...", keyword: "FAKE", img: "images/fakelove.png", trackId: "music/BTS (방탄소년단) - FAKE LOVE (Color Coded Lyrics Eng_Rom_Han)(MP3_128K).mp3", title: "Fake Love", artist: "BTS"
    },
    {
        sample: "Dollar dollar 하루아침에 전부 탕진 달려 달려 내가 벌어 내가 사치 달려 달려 달려 달려 달려 달려  난 원해 cruisin' on the bay 원해 cruisin' like Nemo 돈은 없지만 떠나고 싶어 멀리로 난 돈은 없지만서도 풀고 싶어 피로 돈 없지만 먹고 싶어 오노 지로...", keyword: "GoGo", img: "images/gogo.jpg", trackId: "music/BTS (방탄소년단) - Go Go (고민보다 Go) Lyrics [Color Coded Lyrics](Han_Rom_Eng)(Official Audio)(MP3_128K).mp3", title: "Go Go", artist: "BTS"
    },
    {
        sample: "Nae pi ttam nunmul Nae majimak chumeul Da gajyeoga ga Nae pi ttam nunmul  Nae chagaun sumeul Da gajyeoga ga Nae pi ttam nunmul Nae pi ttam nunmuldo Nae mom maeum yeonghondo...", keyword: "Blood", img: "images/blood-sweat-tear.webp", trackId: "music/BTS - Blood Sweat _ Tears (방탄소년단 - 피 땀 눈물) [Color Coded Lyrics_Han_Rom_Eng_가사](MP3_128K).mp3", title: "Blood Sweat & Tears ", artist: "BTS"
    },
    {
        sample: "It's the thought of being young When your heart's just like a drum Beating louder with no way to guard it When it all seems like it's wrong Just sing along to Elton John And to that feeling, we're just getting started...", keyword: "Permission", img: "images/permission-to-dance.png", trackId: "music/BTS - Permission to Dance Lyrics (Color Coded Lyrics)(MP3_128K).mp3", title: "Permission to Dance", artist: "BTS"
    }
];
let popularArtists = [
    { img: "images/artists/bts.jpg", name: "BTS" },
    { img: "images/artists/alan-walker.jpg", name: "Alan Walker" },
    { img: "images/artists/billie-eilish.jpg", name: "Billie Eilish" },
    { img: "images/artists/justin-bieber.webp", name: "Justin Bieber" },
    { img: "images/artists/black-pink.webp", name: "Black Pink" },
    { img: "images/artists/olivia-rodrigo.jpg", name: "Olivia Rodrigo" },
    { img: "images/artists/aespa.jpg", name: "Aespa" },
    { img: "images/artists/taylor.webp", name: "Taylor Swift" },
    { img: "images/artists/Dua-Lipa.jpg", name: "Dua Lipa" },
    { img: "images/artists/cardi-b.jpg", name: "Cardi-B" },
    { img: "images/artists/post-malone.jpg", name: "Post Malone" },
    { img: "images/artists/doja", name: "Doja Cat" },
    { img: "images/artists/24kgoldn.jpg", name: "24kgoldn" },
    { img: "images/artists/Chanyeol.png", name: "Chanyeol" },
    { img: "images/artists/britney-spears.webp", name: "Britney Spears" },
]

const music = new Audio("music/24kGoldn - Mood Remix (Lyrics) ft. Justin Bieber_ J Balvin_ Iann Dior(MP3_128K).mp3");
let menuSong = document.getElementsByClassName("menu_song")[0];
let popSong = document.getElementsByClassName("pop_song")[0];
let popArtist = document.getElementsByClassName("items")[0];
let masterPlay = document.getElementById("masterPlay");
let wave = document.getElementsByClassName("wave")[0];
let playingSongImage = document.getElementsByClassName("playingSongImage")[0];
let title = document.getElementById("title");
let subtitle = document.getElementById("subtitle");
let currentStart = document.getElementById("currentStart");
let currentEnd = document.getElementById("currentEnd");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot")[0];
let vol_icon = document.getElementById("vol_icon");
let vol_dot = document.getElementById("vol_dot");
let vol = document.getElementById("vol");
let vol_bar = document.getElementsByClassName("vol_bar")[0];
let back = document.getElementById("back");
let next = document.getElementById("next");
let artistImage = document.getElementById("artistImage");
let songTitle = document.getElementById("songTitle");
let songArtist = document.getElementById("songArtist");
let follow = document.getElementById("follow");
let addToPlaylist = document.getElementById("addToPlaylist");
let followStatus = document.getElementsByClassName("followStatus");
let songLyrics = document.getElementById("songLyrics");
let status = false;
let repeat = document.getElementById("repeat");

let index = 0;
playlist.map((e, index) => {
    let no = index + 1;
    menuSong.innerHTML += `
    <li class="songItem"><span id="serialId">${no}</span>
    <img src="${e.img}" class="songImage">
    <h5>${e.title}
        <div class="subtitle">${e.artist}</div>
    </h5>
    <i class="playlistPlay fa-solid fa-play-circle" id="${index}"></i>
    </li>`
})

popularSongs.map((e, index) => {
    popSong.innerHTML += `
    <li class="psongItem">
        <div class="img_play">
            <img src="${e.img}" alt="">
            <i class="popularPlay fa-solid fa-play-circle" id="p${index}"></i>
        </div>
        <h5>${e.title}
            <div class="subtitle">${e.artist}</div>
        </h5>
    </li>
    `
})

let makeAllPlays = () => {
    Array.from(document.getElementsByClassName("playlistPlay")).forEach(element => {
        element.classList.add("fa-play-circle");
        element.classList.remove("fa-pause-circle");
    });
    Array.from(document.getElementsByClassName("popularPlay")).forEach(element => {
        element.classList.add("fa-play-circle");
        element.classList.remove("fa-pause-circle");
    })
}
let makeAllBackground = () => {
    Array.from(document.getElementsByClassName("songItem")).forEach(element => {
        element.style.background = "rgb(105,105,170,0)";
    })
    Array.from(document.getElementsByClassName("psongItem")).forEach(element => {
        element.style.background = "rgb(105,105,170,0)";
    })
}

popularArtists.map((e) => {
    popArtist.innerHTML += `<li class="aid">
        <img src="${e.img}" title="BTS">
        <div class="followStatus"><i class="fa-solid fa-check"></i></div>
    </li>`
})

masterPlay.addEventListener("click", () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        let vol_a = vol.value;
        vol_bar.style.width = `${vol_a}%`;
        vol_dot.style.left = `${vol_a}%`;
        console.log(vol.value);
        console.log(music.src);
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
        wave.classList.add("active2");
        playlist.map((e) => {
            if (music.src.includes(e.keyword)) {
                console.log("true");
                document.getElementById(index).classList.remove("fa-play-circle");
                document.getElementById(index).classList.add("fa-pause-circle");
                document.getElementsByClassName("songItem")[index].style.backgroundColor = "#22114D";
                if (music.paused) {
                    document.getElementById(index).classList.add("fa-play-circle");
                    document.getElementById(index).classList.remove("fa-pause-circle");
                    document.getElementsByClassName("songItem")[index].style.backgroundColor = "#1A0743";
                }
                artistImage.style.background = `url("${e.img}")`;
                artistImage.classList.add("artistImage");
                artistImage.style.backgroundSize = "cover";
                artistImage.style.backgroundPosition = "center";
            }
        })
        popularSongs.map((e1) => {
            if (music.src.includes(e1.keyword)) {
                document.getElementById(`p${index}`).classList.remove("fa-play-circle");
                document.getElementById(`p${index}`).classList.add("fa-pause-circle");
                document.getElementsByClassName("psongItem")[index].style.backgroundColor = "#22114D";
                if (music.paused) {
                    document.getElementById(`p${index}`).classList.add("fa-play-circle");
                    document.getElementById(`p${index}`).classList.remove("fa-pause-circle");
                    document.getElementsByClassName("psongItem")[index].style.backgroundColor = "#1A0743";
                }
                artistImage.style.background = `url("${e1.img}")`;
                artistImage.classList.add("artistImage");
                artistImage.style.backgroundSize = "cover";
                artistImage.style.backgroundPosition = "center";
            }
        })
    }
    else {
        music.pause();
        masterPlay.classList.add("fa-play");
        masterPlay.classList.remove("fa-pause");
        Array.from(document.getElementsByClassName("playlistPlay")).map(e => {
            e.classList.add("fa-play-circle");
            e.classList.remove("fa-pause-circle");
        });
        Array.from(document.getElementsByClassName("popularPlay")).map(e => {
            e.classList.add("fa-play-circle");
            e.classList.remove("fa-pause-circle")
        });
        wave.classList.remove("active2");
    }
});


let playSong = (song, e) => {
    if (e.target.id.includes("p")) {
        index = e.target.id.substr(1, 1);
    }
    else if (e.target.id.includes("r")) {
        index = e.target.id.substr(1, 1);
    }
    else {
        index = e.target.id;
    }
    makeAllPlays();
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    e.target.classList.remove("fa-play-circle");
    e.target.classList.add("fa-pause-circle");
    let src = song[index].trackId;
    music.src = src;
    playingSongImage.src = song[index].img;
    let songTitle = song[index].title;
    let songSubtitle = song[index].artist;
    title.innerHTML = songTitle;
    subtitle.innerHTML = songSubtitle;
    music.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    wave.classList.add("active2");
    music.addEventListener("ended", () => {
        masterPlay.classList.add("fa-play");
        masterPlay.classList.remove("fa-pause");
        wave.classList.remove("active2");
    })
    makeAllBackground();

    artistImage.style.background = `url("${song[index].img}")`;
    artistImage.classList.add("artistImage");
    artistImage.style.backgroundSize = "cover";
    artistImage.style.backgroundPosition = "center";
    document.getElementById("songTitle").innerText = `${song[index].title}`
    console.log(song[index].title);
    songArtist.innerText = `${song[index].artist}`;
    songLyrics.innerHTML = `${song[index].sample}`
}


Array.from(document.getElementsByClassName("playlistPlay")).forEach(element => {
    element.addEventListener('click', e => {
        if (music.paused) {
            playSong(playlist, e);
            Array.from(document.getElementsByClassName("songItem"))[index].style.background = "rgb(105,105,170,.1)";
            masterPlay.classList.remove("fa-play");
            masterPlay.classList.add("fa-pause");
        }
        else {
            music.pause();
            e.target.classList.add("fa-play-circle");
            e.target.classList.remove("fa-pause-circle");
            masterPlay.classList.add("fa-play");
            masterPlay.classList.remove("fa-pause");
        }
    })
});
Array.from(document.getElementsByClassName("popularPlay")).forEach(element => {
    element.addEventListener('click', e => {
        if (music.paused) {
            playSong(popularSongs, e);
            Array.from(document.getElementsByClassName("psongItem"))[index].style.background = "rgb(105,105,170,.1)";
            masterPlay.classList.remove("fa-play");
            masterPlay.classList.add("fa-pause");
        }
        else {
            music.pause();
            e.target.classList.add("fa-play-circle");
            e.target.classList.remove("fa-pause-circle");
            masterPlay.classList.add("fa-play");
            masterPlay.classList.remove("fa-pause");
        }
    })
});
let music_dur = 0;
music.addEventListener("loadeddata", () => {
    music_dur = music.duration;
})
music.addEventListener("timeupdate", () => {
    let music_curr = music.currentTime;
    let min = Math.floor(music_dur / 60);
    let sec = Math.floor(music_dur % 60);
    if (sec < 10) {
        currentEnd.innerHTML = `${min}:0${sec}`
    }
    else {
        currentEnd.innerHTML = `${min}:${sec}`;
    }

    let min1 = Math.floor(music_curr / 60);
    let sec1 = Math.floor(music_curr % 60);
    if (sec1 < 10) {
        currentStart.innerText = `${min1}:0${sec1}`
    }
    else {
        currentStart.innerText = `${min1}:${sec1}`;
    }
    let progressBar = parseInt((music.currentTime / music.duration) * 100);
    seek.value = progressBar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})
seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
})
music.addEventListener("ended", () => {
    masterPlay.classList.add("fa-play");
    masterPlay.classList.remove("fa-pause");
    wave.classList.remove("active2");
})

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove("fa-volume-low");
        vol_icon.classList.add("fa-volume-mute");
        vol_icon.classList.remove("fa-volume-high");
    }
    if (vol.value > 0) {
        vol_icon.classList.add("fa-volume-low");
        vol_icon.classList.remove("fa-volume-mute");
        vol_icon.classList.remove("fa-volume-high");
    }
    if (vol.value > 50) {
        vol_icon.classList.remove("fa-volume-low");
        vol_icon.classList.remove("fa-volume-mute");
        vol_icon.classList.add("fa-volume-high");
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = (vol_a / 100);
})

back.addEventListener('click', () => {
    playlist.map((e) => {
        if (music.src.includes(e.keyword)) {
            if (index === 0) {
                index = -1;
            }
            else {
                index -= 1;
            }
            let msrc = playlist[index].trackId;
            music.src = msrc;
            playingSongImage.src = playlist[index].img;
            title.innerHTML = playlist[index].title;
            subtitle.innerHTML = playlist[index].artist;
            songTitle.innerHTML = playlist[index].title;
            songArtist.innerHTML = playlist[index].artist;
            songLyrics.innerHTML = playlist[index].sample;

            music.play();
            document.getElementById(index).classList.remove("fa-play-circle");
            document.getElementById(index).classList.add("fa-pause-circle");
            document.getElementById(index + 1).classList.add("fa-play-circle");
            document.getElementById(index + 1).classList.remove("fa-pause-circle");
            Array.from(document.getElementsByClassName("songItem")).map((e, i) => {
                if (i == index) {
                    e.style.backgroundColor = "rgb(105, 105, 170, .1)"
                }
                else {
                    e.style.backgroundColor = "";
                }
            })
            artistImage.style.background = `url("${playlist[index].img}")`;
            artistImage.classList.add("artistImage");
            artistImage.style.backgroundSize = "cover";
            artistImage.style.backgroundPosition = "top";
        }
    })

    popularSongs.map(e => {
        if (music.src.includes(e.keyword)) {
            if (status != true) {
                if (index === 0) {
                    index = -1;
                }
                else {
                    index -= 1;
                }
                let msrc = popularSongs[index].trackId;
                music.src = msrc;
                playingSongImage.src = popularSongs[index].img;
                title.innerHTML = popularSongs[index].title;
                subtitle.innerHTML = popularSongs[index].artist;
                songTitle.innerHTML = popularSongs[index].title;
                songArtist.innerHTML = popularSongs[index].artist;
                songLyrics.innerHTML = popularSongs[index].sample;
                music.play();
                document.getElementById(`p${index}`).classList.remove("fa-play-circle");
                document.getElementById(`p${index}`).classList.add("fa-pause-circle");
                document.getElementById(`p${index + 1}`).classList.add("fa-play-circle");
                document.getElementById(`p${index + 1}`).classList.remove("fa-pause-circle");
                Array.from(document.getElementsByClassName("psongItem")).map((e, i) => {
                    if (i == index) {
                        e.style.backgroundColor = "rgb(105, 105, 170, .1)"
                    }
                    else {
                        e.style.backgroundColor = "";
                    }
                })
                artistImage.style.background = `url("${popularSongs[index].img}")`;
                artistImage.classList.add("artistImage");
                artistImage.style.backgroundSize = "cover";
                artistImage.style.backgroundPosition = "top";
            }
            else {
                if (index === 0) {
                    index = -1;
                }
                else {
                    index -= 1;
                }
                let msrc = popularSongs[index].trackId;
                music.src = msrc;
                playingSongImage.src = popularSongs[index].img;
                title.innerHTML = popularSongs[index].title;
                subtitle.innerHTML = popularSongs[index].artist;
                songTitle.innerHTML = popularSongs[index].title;
                songArtist.innerHTML = popularSongs[index].artist;
                songLyrics.innerHTML = popularSongs[index].sample;
                music.play();
                document.getElementById(`r${index}`).classList.remove("fa-play-circle");
                document.getElementById(`r${index}`).classList.add("fa-pause-circle");
                document.getElementById(`r${index + 1}`).classList.add("fa-play-circle");
                document.getElementById(`r${index + 1}`).classList.remove("fa-pause-circle");
                Array.from(document.getElementsByClassName("songItem")).map((e, i) => {
                    if (i == index) {
                        e.style.backgroundColor = "rgb(105, 105, 170, .1)"
                    }
                    else {
                        e.style.backgroundColor = "";
                    }
                })
                artistImage.style.background = `url("${popularSongs[index].img}")`;
                artistImage.classList.add("artistImage");
                artistImage.style.backgroundSize = "cover";
                artistImage.style.backgroundPosition = "top";
            }

        }
    })
})

next.addEventListener('click', () => {
    playlist.map((e) => {
        if (music.src.includes(e.keyword)) {
            if (Number(index) === playlist.length) {
                index = -1;
                console.log(index);
            }
            else {
                console.log(index);
                let n = Number(index);
                n += 1;
                let msrc = playlist[n].trackId;
                music.src = msrc;
                n++;
                // index = a;
                // console.log(a);
                // playingSongImage.src = playlist[index].img;
                // title.innerHTML = playlist[index].title;
                // subtitle.innerHTML = playlist[index].artist;
                // songTitle.innerHTML = playlist[index].title;
                // songArtist.innerHTML = playlist[index].artist;
                // songLyrics.innerHTML = playlist[index].sample;
                music.play();
                // index = (Number(index) + 1).toString();
                // document.getElementById(index).classList.remove("fa-play-circle");
                // document.getElementById(index).classList.add("fa-pause-circle");
                // document.getElementById(index + 1).classList.add("fa-play-circle");
                // document.getElementById(index + 1).classList.remove("fa-pause-circle");
                // Array.from(document.getElementsByClassName("songItem")).map((e, i) => {
                //     if (i == index) {
                //         e.style.backgroundColor = "rgb(105, 105, 170, .1)"
                //     }
                //     else {
                //         e.style.backgroundColor = "";
                //     }
                // })
                // artistImage.style.background = `url("${playlist[index].img}")`;
                // artistImage.classList.add("artistImage");
                // artistImage.style.backgroundSize = "cover";
                // artistImage.style.backgroundPosition = "top";
            }

        }
    })

    // popularSongs.map(e => {
    //     if (music.src.includes(e.keyword)) {
    //         if (status != true) {
    //             if (index === 0) {
    //                 index = -1;
    //             }
    //             else {
    //                 index -= 1;
    //             }
    //             let msrc = popularSongs[index].trackId;
    //             music.src = msrc;
    //             playingSongImage.src = popularSongs[index].img;
    //             title.innerHTML = popularSongs[index].title;
    //             subtitle.innerHTML = popularSongs[index].artist;
    //             songTitle.innerHTML = popularSongs[index].title;
    //             songArtist.innerHTML = popularSongs[index].artist;
    //             songLyrics.innerHTML = popularSongs[index].sample;
    //             music.play();
    //             document.getElementById(`p${index}`).classList.remove("fa-play-circle");
    //             document.getElementById(`p${index}`).classList.add("fa-pause-circle");
    //             document.getElementById(`p${index + 1}`).classList.add("fa-play-circle");
    //             document.getElementById(`p${index + 1}`).classList.remove("fa-pause-circle");
    //             Array.from(document.getElementsByClassName("psongItem")).map((e, i) => {
    //                 if (i == index) {
    //                     e.style.backgroundColor = "rgb(105, 105, 170, .1)"
    //                 }
    //                 else {
    //                     e.style.backgroundColor = "";
    //                 }
    //             })
    //             artistImage.style.background = `url("${popularSongs[index].img}")`;
    //             artistImage.classList.add("artistImage");
    //             artistImage.style.backgroundSize = "cover";
    //             artistImage.style.backgroundPosition = "top";
    //         }
    //         else {
    //             if (index === 0) {
    //                 index = -1;
    //             }
    //             else {
    //                 index -= 1;
    //             }
    //             let msrc = popularSongs[index].trackId;
    //             music.src = msrc;
    //             playingSongImage.src = popularSongs[index].img;
    //             title.innerHTML = popularSongs[index].title;
    //             subtitle.innerHTML = popularSongs[index].artist;
    //             songTitle.innerHTML = popularSongs[index].title;
    //             songArtist.innerHTML = popularSongs[index].artist;
    //             songLyrics.innerHTML = popularSongs[index].sample;
    //             music.play();
    //             document.getElementById(`r${index}`).classList.remove("fa-play-circle");
    //             document.getElementById(`r${index}`).classList.add("fa-pause-circle");
    //             document.getElementById(`r${index + 1}`).classList.add("fa-play-circle");
    //             document.getElementById(`r${index + 1}`).classList.remove("fa-pause-circle");
    //             Array.from(document.getElementsByClassName("songItem")).map((e, i) => {
    //                 if (i == index) {
    //                     e.style.backgroundColor = "rgb(105, 105, 170, .1)"
    //                 }
    //                 else {
    //                     e.style.backgroundColor = "";
    //                 }
    //             })
    //             artistImage.style.background = `url("${popularSongs[index].img}")`;
    //             artistImage.classList.add("artistImage");
    //             artistImage.style.backgroundSize = "cover";
    //             artistImage.style.backgroundPosition = "top";
    //         }

    //     }
    // })
})

repeat.addEventListener("click", () => {
    repeat.classList.toggle("repeat-color")
    if (repeat.classList.contains("repeat-color")) {
        music.loop = true;
    }
    else {
        music.loop = false;
    }
})

follow.addEventListener("click", () => {
    popularArtists.map((e, i) => {
        playlist.map(element => {
            if (music.src.includes(element.keyword)) {
                if (e.name == element.artist) {
                    followStatus[i].classList.toggle("active3");
                }
            }
        })
        popularSongs.map(element => {
            if (music.src.includes(element.keyword)) {
                if (e.name == element.artist) {
                    followStatus[i].classList.toggle("active3");
                }
            }
        })
    })
})
addToPlaylist.addEventListener("click", () => {
    popularSongs.map(element => {
        if (music.src.includes(element.keyword)) {
            playlist.map(p => {
                if (!music.src.includes(p.keyword)) {

                }
            })
            localStorage.setItem('sample', 'Stay at one just a moment အခိုက်အတန်.လေးများပျောက်ကွယ်ကာသွားတယ် ခနလောက်ပဲ နင်ရောက်လာပြီး ခနလေးပဲမင်းထွက်ခွာသွားခဲ့တယ်...');
            localStorage.setItem('keyword', `${element.keyword}`);
            localStorage.setItem('img', `${element.img}`);
            localStorage.setItem('trackId', `${element.trackId}`);
            localStorage.setItem('title', `${element.title}`);
            localStorage.setItem('artist', `${element.artist}`);
            playlist.push(
                { sample: `${localStorage.getItem('sample')}`, keyword: `${localStorage.getItem('keyword')}`, img: `${localStorage.getItem('img')}`, trackId: `${localStorage.getItem('trackId')}`, title: `${localStorage.getItem('title')}`, artist: `${localStorage.getItem('artist')}` },
            )
            Array.from(document.getElementsByClassName("songItem")).forEach(e => {
                e.remove();
            })
            playlist.map((e, index) => {
                let no = index + 1;
                menuSong.innerHTML += `
                    <li class="songItem"><span id="serialId">${no}</span>
                    <img src="${e.img}" class="songImage">
                    <h5>${e.title}
                        <div class="subtitle">${e.artist}</div>
                    </h5>
                    <i class="playlistPlay fa-solid fa-play-circle" id="${index}"></i>
                    </li>`
            })
        }
    })
})

for (let i = 0; i < 2; i++) {
    document.getElementsByClassName("h4")[i].addEventListener("click", function () {
        for (let j = 0; j < 2; j++) {
            document.getElementsByClassName("h4")[j].classList.remove("active");
        }
        this.classList.toggle("active");
        document.querySelector(".menu_slide h1").innerHTML = `${this.innerText}`
    })
}
document.getElementsByClassName("h4")[0].addEventListener("click", function () {
    menuSong.innerHTML = "";
    playlist.map((e, index) => {
        let no = index + 1;
        menuSong.innerHTML += `
        <li class="songItem"><span id="serialId">${no}</span>
        <img src="${e.img}" class="songImage">
        <h5>${e.title}
            <div class="subtitle">${e.artist}</div>
        </h5>
        <i class="playlistPlay fa-solid fa-play-circle" id="${index}"></i>
        </li>`
    })
    Array.from(document.getElementsByClassName("playlistPlay")).forEach(element => {
        element.addEventListener('click', e => {
            if (music.paused) {
                playSong(playlist, e);
                Array.from(document.getElementsByClassName("songItem"))[index].style.background = "rgb(105,105,170,.1)";
            }
            else {
                music.pause();
                e.target.classList.add("fa-play-circle");
                e.target.classList.remove("fa-pause-circle");
            }
        })
    });
});
document.getElementsByClassName("playlistPlay")[0].addEventListener("click", function () {
    console.log("hello");
})
document.getElementsByClassName("h4")[1].addEventListener("click", function () {
    status = true;
    menuSong.innerHTML = "";
    popularSongs.map((e, index) => {
        let no = index + 1;
        menuSong.innerHTML += `
        <li class="songItem"><span id="serialId">${no}</span>
        <img src="${e.img}" class="songImage">
        <h5>${e.title}
            <div class="subtitle">${e.artist}</div>
        </h5>
        <i class="playlistPlay fa-solid fa-play-circle" id="r${index}"></i>
        </li>`
    })
    Array.from(document.getElementsByClassName("playlistPlay")).forEach(element => {
        element.addEventListener('click', e => {
            if (music.paused) {
                playSong(popularSongs, e);
                Array.from(document.getElementsByClassName("songItem"))[index].style.background = "rgb(105,105,170,.1)";
            }
            else {
                music.pause();
                e.target.classList.add("fa-play-circle");
                e.target.classList.remove("fa-pause-circle");
            }
        })
    });

});








