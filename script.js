document.addEventListener("DOMContentLoaded", () => {
  const savedTrack = localStorage.getItem("currentTrack");
  if (savedTrack) {
    const track = JSON.parse(savedTrack);
    playSong(track);
    localStorage.removeItem("currentTrack"); // Remove to prevent replay
  }
});

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && (event.key === "=" || event.key === "-" || event.key === "0")) {
    event.preventDefault();
  }
});

document.addEventListener("wheel", function (event) {
  if (event.ctrlKey) {
    event.preventDefault();
  }
}, { passive: false });

// WebViewString Communication with MIT App Inventor
function updateAppInventorState(state) {
  if (window.AppInventor) {
    window.AppInventor.setWebViewString(state);
  }
}

// Function to send a message to MIT App Inventor about Media Session status
function updateAppInventorWithMediaSessionStatus(status) {
  if (window.AppInventor) {
    window.AppInventor.setWebViewString("MediaSessionStatus: " + status);
  }
}

// Media Session API Integration
function setupMediaSession() {
  if ('mediaSession' in navigator) {
    navigator.mediaSession.setActionHandler("play", playSong);
    navigator.mediaSession.setActionHandler("pause", pauseSong);
    navigator.mediaSession.setActionHandler("nexttrack", playNextSong);
    navigator.mediaSession.setActionHandler("previoustrack", playPrevSong);

    // Inform App Inventor that the Media Session is enabled
    updateAppInventorWithMediaSessionStatus("Media Session Enabled");
  } else {
    // Inform App Inventor that the Media Session is not supported
    updateAppInventorWithMediaSessionStatus("Media Session Not Supported");
  }
}

// Existing code remains the same
const SONGS = [
  // 1 list
  {
    title: "Aalaala-Kanda",
    artist: "AR Rahman",
    url: "Aalaala-Kandaa.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Aalaporan-Thamizhan",
    artist: "AR Rahman",
    url: "Aalaporan-Thamizhan-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "aaoromle",
    artist: "AR Rahman",
    url: "Aaoromale.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Aararai-Kodi",
    artist: "AR Rahman",
    url: "Aararai-Kodi-(Anbe-Aaruyire)-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Aaruyire",
    artist: "AR Rahman",
    url: "Aaruyire.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Aathangara-Marame",
    artist: "AR Rahman",
    url: "Aathangara-Marame.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Adagaatha Asuran",
    artist: "AR Rahman",
    url: "Adangaatha Asuran.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Adheeraa",
    artist: "AR Rahman",
    url: "Adheeraa-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Adiye",
    artist: "AR Rahman",
    url: "Adiye.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Aga-Naga",
    artist: "AR Rahman",
    url: "Aga-Naga-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Ailla-Aila",
    artist: "AR Rahman",
    url: "Aila-Aila.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Akadanu-Naanga",
    artist: "AR Rahman",
    url: "Akadanu-Naanga.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Ale-Ale",
    artist: "AR Rahman",
    url: "Ale-Ale.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Ambikapathy",
    artist: "AR Rahman",
    url: "Ambikapathy.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Anbe-Anbe",
    artist: "AR Rahman",
    url: "Anbe-Anbe.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Anbendra",
    artist: "AR Rahman",
    url: "Anbendra.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Anbil-Avan",
    artist: "AR Rahman",
    url: "Anbil-Avan.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Andha-Arabi-Kadaloram",
    artist: "AR Rahman",
    url: "Andha-Arabi-Kadaloram.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Anjathe-Jeeva",
    artist: "AR Rahman",
    url: "Anjathe-Jeeva.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Arima-Arima",
    artist: "AR Rahman",
    url: "Arima-Arima.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Athiradee-Kaalam",
    artist: "AR Rahman",
    url: "Athiradee-Kaalam.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Ayalaa Ayalaa",
    artist: "AR Rahman",
    url: "Ayalaa Ayalaa.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Azhagina-Azhage",
    artist: "AR Rahman",
    url: "Azhagina-Azhage-Askava.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Azhagiye",
    artist: "AR Rahman",
    url: "Azhagiye.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Azhakana-Ratasiye",
    artist: "AR Rahman",
    url: "Azhakana-Ratsasiye.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },  
  {
    title: "CEO-in-the-House",
    artist: "AR Rahman",
    url: "CEO-in-the-House-MassTamilan.org.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Chakka-Chakalathi",
    artist: "AR Rahman",
    url: "Chakka-Chakalathi-MassTamilan.fm.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Chandiraniai-Thottathu",
    artist: "AR Rahman",
    url: "Chandiraniai-Thottathu-Yar.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Chikku-Bukku",
    artist: "AR Rahman",
    url: "Chikku-Bukku-Rayile.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Chinna-Chinna-Asai",
    artist: "AR Rahman",
    url: "Chinna-Chinna-Asai.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Chola-Chola",
    artist: "AR Rahman",
    url: "Chola-Chola-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Chotta-Chotta",
    artist: "AR Rahman",
    url: "Chotta-Chotta-Nanayuthu.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
    {
    title: "Columbus-columbu",
    artist: "AR Rahman",
    url: "Columbus-Columbu.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },  {
    title: "Dhandiya",
    artist: "AR Rahman",
    url: "Dhandiya.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Edhukku-Pondatti",
    artist: "AR Rahman",
    url: "Edhukku-Pondatti.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Eechi-Elemichi",
    artist: "AR Rahman",
    url: "Eechi-Elemichhi.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Ella-Pugazhum",
    artist: "AR Rahman",
    url: "Ella-Pugazhum-MassTamilan.fm.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "En-Mannavva",
    artist: "AR Rahman",
    url: "En-Mannavva.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "En-Peru-Padayappa",
    artist: "AR Rahman",
    url: "En-Peru-Padayappa.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "En-Swasa-Kaatre",
    artist: "AR Rahman",
    url: "En-Swasa-Kaatre-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "En-Uyire",
    artist: "AR Rahman",
    url: "En-Uyire.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "En-Veetu-Thotahil",
    artist: "AR Rahman",
    url: "En-Veetu-Thotathil.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Endrenrum-Punnagai",
    artist: "AR Rahman",
    url: "Endrendrum-Punnagai.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Enge-En-Punnagai",
    artist: "AR Rahman",
    url: "Enge-En-Punnagai.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Enge-Enathu-Kavithai",
    artist: "AR Rahman",
    url: "Enge-Enathu-Kavithai.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Enna-Solla-Pogirai",
    artist: "AR Rahman",
    url: "Enna-Solla-Pogirai.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },

  {
    title: "Enna-Villai",
    artist: "AR Rahman",
    url: "Enna-Vilai.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Ennai-Kaanavillaiye",
    artist: "AR Rahman",
    url: "Ennai-Kaanavillaiye.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Ennake-Ennaka",
    artist: "AR Rahman",
    url: "Ennake-Ennaka.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },

  {
    title: "Ennavale-Adi-Ennavale",
    artist: "AR Rahman",
    url: "Ennavale-Adi-Ennavale-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Ennodu-Nee-Irundhal",
    artist: "AR Rahman",
    url: "Ennodu-Nee-Irundhal.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Evano-Oruvan-Vasikiran",
    artist: "AR Rahman",
    url: "Evano-Oruvan-Vasikiran.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Girlfriend",
    artist: "AR Rahman",
    url: "Girlfriend.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Hosanna",
    artist: "AR Rahman",
    url: "Hosanna.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Innum-Konjam-Neram",
    artist: "AR Rahman",
    url: "Innum-Konjam-Neram.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Irumbile-Oru-Idhaiyam",
    artist: "AR Rahman",
    url: "Irumbile-Oru-Idhaiyam.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Isai-Anjali",
    artist: "AR Rahman",
    url: "Isai-Anjali-MassTamilan.io.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Jillendru Oru Kaadhal",
    artist: "AR Rahman",
    url: "Jillendru Oru Kaadhal.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },

    {
    title: "Jumbalakku",
    artist: "AR Rahman",
    url: "Jumbalakka-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
    {
    title: "Kaalaiyil",
    artist: "AR Rahman",
    url: "Kaalaiyil-Dhinamum-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kaalathukkum-Nee-Venum",
    artist: "AR Rahman",
    url: "Kaalathukkum-Nee-Venum-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kaathalenum",
    artist: "AR Rahman",
    url: "Kaathalenum.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kaattrae-En-Vaasal",
    artist: "AR Rahman",
    url: "Kaattrae-En-Vaasal.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kaattu-Sirukki",
    artist: "AR Rahman",
    url: "Kaattu-Sirukki.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kaaveri-Aarumballeilakka",
    artist: "AR Rahman",
    url: "Kaaveri-AarumBalleilakka.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kadhalikum-Pennin",
    artist: "AR Rahman",
    url: "Kadal-Anukkal.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kadhalikum-Pennin",
    artist: "AR Rahman",
    url: "Kadhalikum-Pennin-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },

  {
    title: "Kalaarasiga",
    artist: "AR Rahman",
    url: "Kalaarasiga.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kalluri-Salai",
    artist: "AR Rahman",
    url: "Kalluri-Salai.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kandukondain-Kandukondain",
    artist: "AR Rahman",
    url: "Kandukondain-Kandukondain.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kannalane-Enadhu",
    artist: "AR Rahman",
    url: "Kannalane-Enadhu.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kannodu-Kaaberallam",
    artist: "AR Rahman",
    url: "Kannodu-Kaanberallam.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kannukku Mai Azhagu (Male)",
    artist: "AR Rahman",
    url: "Kannukku Mai Azhagu (Male).mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kannum-Kannum Kollai",
    artist: "AR Rahman",
    url: "Kannum-Kannum-Kollai.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },

    {
    title: "Kappaleri-Poyaachu",
    artist: "AR Rahman",
    url: "Kappaleri-Poyaachu.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },  {
    title: "Kikku-Yerudhey",
    artist: "AR Rahman",
    url: "Kikku-Yerudhey.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kilimanjaro",
    artist: "AR Rahman",
    url: "Kilimanjaro.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kodu-Poatta",
    artist: "AR Rahman",
    url: "Kodu-Poatta.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kokku-Saiva-Kokku",
    artist: "AR Rahman",
    url: "Kokku-Saiva-Kokku.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kondattam",
    artist: "AR Rahman",
    url: "Kondattam.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Konjam-Nilavu-Chandralekha",
    artist: "AR Rahman",
    url: "Konjam-Nilavu-Chandralekha.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Konjum-Mainakkale",
    artist: "AR Rahman",
    url: "Konjum-Mainakkale.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kuluvaile-Mottu",
    artist: "AR Rahman",
    url: "Kuluvalile-Mottu.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kummi Adi Kummi",
    artist: "AR Rahman",
    url: "Kummi Adi Kummi.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kurukku-Siruthavale",
    artist: "AR Rahman",
    url: "Kurukku-Siruthavale.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Ladio",
    artist: "AR Rahman",
    url: "Ladio.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Maacho-Enancho",
    artist: "AR Rahman",
    url: "Maacho-Ennacho-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Maanuthu-Mandhayilae",
    artist: "AR Rahman",
    url: "Maanuthu-Mandhayilae.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Maari mazhai Peyaadho",
    artist: "AR Rahman",
    url: "Maari-Mazhai-Peyaadho-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Macha machiniye",
    artist: "AR Rahman",
    url: "Macha-Machiniye-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Maduraikku",
    artist: "AR Rahman",
    url: "Maduraikku-MassTamilan.fm.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Malargaley-malargaley",
    artist: "AR Rahman",
    url: "Malargaley-Malargaley-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Mallipoo",
    artist: "AR Rahman",
    url: "Mallipoo-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Manasae-Thanthi",
    artist: "AR Rahman",
    url: "Manasae_Thanthi_(Tum_Tum).mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Manasukkul",
    artist: "AR Rahman",
    url: "Manasukkul-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Manna-madurai",
    artist: "AR Rahman",
    url: "Manna-Madurai.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Mannipaaya",
    artist: "AR Rahman",
    url: "Mannipaaya.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Marakuma Nenjam",
    artist: "AR Rahman",
    url: "Marakkuma-Nenjam-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },

  {
    title: "Margazhi poove",
    artist: "AR Rahman",
    url: "Margazhi-Poove.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Marudhaani Marudhaani",
    artist: "AR Rahman",
    url: "Marudhaani-Marudhaani.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Maya Maya",
    artist: "AR Rahman",
    url: "Maya-Maya.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Mayiliragee",
    artist: "AR Rahman",
    url: "Mayiliragae-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  
  {
    title: "Mazhai-Kuruvi",
    artist: "AR Rahman",
    url: "Mazhai-Kuruvi-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Mazhithuli-Mazhaithuli-mannil",
    artist: "AR Rahman",
    url: "Mazhaithuli-Mazhaithuli-Mannil.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Mei-Nigara",
    artist: "AR Rahman",
    url: "Mei-Nigara.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Mel-Insaiyae",
    artist: "AR Rahman",
    url: "Mel-Isaiyae.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "MersalArasan",
    artist: "AR Rahman",
    url: "Mersal-Arasan-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Mersalayitten",
    artist: "AR Rahman",
    url: "Mersalayitten.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Minnale Nee Vanthethenadi",
    artist: "AR Rahman",
    url: "Minnale-Nee-Vanthathenadi.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Minsara-Poove",
    artist: "AR Rahman",
    url: "Minsara-Poove.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Mona-Gasolina",
    artist: "AR Rahman",
    url: "Mona-Gasolina.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Moongil-Thottam",
    artist: "AR Rahman",
    url: "Moongil-Thottam.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Mudalvane",
    artist: "AR Rahman",
    url: "Mudhalvane.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Mukkala-Mukkabala",
    artist: "AR Rahman",
    url: "Mukkala-Mukkabala-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Munbe Vaa",
    artist: "AR Rahman",
    url: "Munbe Vaa.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Mustafa Mustafa",
    artist: "AR Rahman",
    url: "Mustafa-Mustafa.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Muthu Muthu Mazhai",
    artist: "AR Rahman",
    url: "Muthu-Muthu-Mazhai.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Muzumathi",
    artist: "AR Rahman",
    url: "Muzumathi-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Naan Un",
    artist: "AR Rahman",
    url: "Naan-Un.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Nallai Allai",
    artist: "AR Rahman",
    url: "Nallai-Allai.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Namma Satham",
    artist: "AR Rahman",
    url: "Namma-Satham-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
    {
    title: "Narumugaiye",
    artist: "AR Rahman",
    url: "Narumugaiye.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Nathiyae Nathiyae",
    artist: "AR Rahman",
    url: "Nathiyae-Nathiyae.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Nee Singam Dhan",
    artist: "AR Rahman",
    url: "Nee-Singam-Dhan-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Neethanee Neetanee",
    artist: "AR Rahman",
    url: "Neethanae-Neethane-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },  {
    title: "nenichapadi",
    artist: "AR Rahman",
    url: "Nenichapadi.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Nenjame Nanjame",
    artist: "AR Rahman",
    url: "Nenjame-Nenjame-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Nenje Yezhu",
    artist: "AR Rahman",
    url: "Nenje-Yezhu.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },

  {
    title: "Nenjinile Nenjinile",
    artist: "AR Rahman",
    url: "Nenjinile-Nenjinile.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Nenjukkule",
    artist: "AR Rahman",
    url: "Nenjukkule.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },

  {
    title: "Netru Illadha maatram",
    artist: "AR Rahman",
    url: "Netru Illadha Maatram.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "New York Nagaram",
    artist: "AR Rahman",
    url: "New York Nagaram.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Nila Kaaigiradhu",
    artist: "AR Rahman",
    url: "Nila-Kaaigiradhu-(F)-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },

  {
    title: "oh Raaya",
    artist: "AR Rahman",
    url: "Oh Raaya.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Oh Maria Oh Mariya",
    artist: "AR Rahman",
    url: "Oh-Maria-Oh-Maria.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },

  {
    title: "Omana-Penne",
    artist: "AR Rahman",
    url: "Omana-Penne.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Oru-poiyavathu",
    artist: "AR Rahman",
    url: "Oru-Poiyavathu-M.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Oru-Thuli",
    artist: "AR Rahman",
    url: "Oru-Thuli-(Chinna-Chinna-Mazhai)-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Oru-Viral-Puratchi",
    artist: "AR Rahman",
    url: "Oru-Viral-Puratchi-MassTamilan.org.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Oruvan Oruvan mudhalali",
    artist: "AR Rahman",
    url: "Oruvan-Oruvan-Mudhalali.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },

    {
    title: "Osarattum Pathu Thala",
    artist: "AR Rahman",
    url: "Osarattum-Pathu-Thala-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Ottagathai Kattaiko",
    artist: "AR Rahman",
    url: "Ottagathai-Kattiko.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Pachai Killigal",
    artist: "AR Rahman",
    url: "Pachai-Kiligal.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Pennala Pennala Oothapoo",
    artist: "AR Rahman",
    url: "Pennala-Pennala-Oothapoo-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },

  {
    title: "Pettai Rap",
    artist: "AR Rahman",
    url: "Pettai-Rap-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Poni Nadhi",
    artist: "AR Rahman",
    url: "Ponni-Nadhi-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },

  {
    title: "Poo pookum Osai",
    artist: "AR Rahman",
    url: "Poo-Pookum-Osai.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "pookale Satru",
    artist: "AR Rahman",
    url: "Pookkale-Satru.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Poongkaatrilae",
    artist: "AR Rahman",
    url: "Poongkaatrilae.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Poovuku Enna Poottu",
    artist: "AR Rahman",
    url: "Poovukku-Enna-Poottu.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Poovukkul",
    artist: "AR Rahman",
    url: "Poovukkul.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Pudhu Vellai Mazhai",
    artist: "AR Rahman",
    url: "Pudhu-Vellai-Mazhai.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Raa Kazhi Randu",
    artist: "AR Rahman",
    url: "Raa-Kozhi-Rendu-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Raasa Kannu",
    artist: "AR Rahman",
    url: "Raasa-Kannu-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Raasathi En usuru",
    artist: "AR Rahman",
    url: "Raasathi-En-Usuru.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Rasaali",
    artist: "AR Rahman",
    url: "Rasaali.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Rasiga",
    artist: "AR Rahman",
    url: "Rasiga-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Roja Roja",
    artist: "AR Rahman",
    url: "Roja-Roja.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Romeo Aatam potal",
    artist: "AR Rahman",
    url: "Romeo-Aatam-Potal.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Saarattu Vandiyila",
    artist: "AR Rahman",
    url: "Saarattu-Vandiyila.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Sachin Sachin",
    artist: "AR Rahman",
    url: "Sachin-Sachin.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Sahana Saral Thoo",
    artist: "AR Rahman",
    url: "Sahana-Saral-Thoo.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Sandhosa Kanneere",
    artist: "AR Rahman",
    url: "Sandhosa-Kanneere.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Senthamil Nattu",
    artist: "AR Rahman",
    url: "Senthamil-Nattu-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "September-Madham",
    artist: "AR Rahman",
    url: "September-Madham.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Shakkalakka-Baby",
    artist: "AR Rahman",
    url: "Shakkalakka-Baby.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Showkali",
    artist: "AR Rahman",
    url: "Showkali.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Simtaangaran",
    artist: "AR Rahman",
    url: "Simtaangaran-MassTamilan.org.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Singappenney",
    artist: "AR Rahman",
    url: "Singappenney-MassTamilan.io.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Sonapareeya",
    artist: "AR Rahman",
    url: "Sonapareeya.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Soniya Soniya",
    artist: "AR Rahman",
    url: "Soniya-Soniya.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Sotta-Sotta",
    artist: "AR Rahman",
    url: "Sotta-Sotta.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Strawberry Kannae",
    artist: "AR Rahman",
    url: "Strawberry-Kannae.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Suthi Suthi",
    artist: "AR Rahman",
    url: "Suthi-Suthi.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Taxi Taxi",
    artist: "AR Rahman",
    url: "Taxi-Taxi.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Telephone Manipol",
    artist: "AR Rahman",
    url: "Telephone-Manipol.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Thaiyya Taiyya",
    artist: "AR Rahman",
    url: "Thaiyya-Thaiyya.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Thalli Pogathey",
    artist: "AR Rahman",
    url: "Thalli-Pogathey.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Thamizha Thamizha",
    artist: "AR Rahman",
    url: "Thamizha-Thamizha.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Thaga-Thamarai",
    artist: "AR Rahman",
    url: "Thanga-Thamarai.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Thaniye thananthaniye",
    artist: "AR Rahman",
    url: "Thaniye-Thananthaniye.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Then Kizhakku Seemaiyile",
    artist: "AR Rahman",
    url: "Then-Kizhakku-Seemaiyile.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Thenmerku paruva Kaatru",
    artist: "AR Rahman",
    url: "Thenmerku-Paruva-Kaatru.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Thillana Thillana",
    artist: "AR Rahman",
    url: "Thillana-Thillana.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Thirupachi aruvale",
    artist: "AR Rahman",
    url: "Thirupachi-Aruvale.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Thooriga",
    artist: "AR Rahman",
    url: "Thooriga-MassTamilan.fm.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Thootaal Poo Malarum",
    artist: "AR Rahman",
    url: "Thootaal-Poo-Malarum-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Top tucker",
    artist: "AR Rahman",
    url: "Top-Tucker-MassTamilan.org.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Ulundhu Vithailkayile",
    artist: "AR Rahman",
    url: "Ulundhu-Vithaikayile.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "unakaga",
    artist: "AR Rahman",
    url: "Unakaga-MassTamilan.io.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Unmaiorunaal Vellum",
    artist: "AR Rahman",
    url: "Unmaiorunaal-Vellum.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Unna Nenachadhum",
    artist: "AR Rahman",
    url: "Unna-Nenachadhum-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Unnaal Unnaal",
    artist: "AR Rahman",
    url: "Unnaal-Unnaal.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Urvashi Urvashi",
    artist: "AR Rahman",
    url: "Urvashi-Urvashi-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Usalampatti Penkutti",
    artist: "AR Rahman",
    url: "Usalampatti-Penkutti.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "usurae Poguthey",
    artist: "AR Rahman",
    url: "Usurae-Poguthey.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "uyire Uyire",
    artist: "AR Rahman",
    url: "Uyire-Uyire.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Vaaji Vaaji En Sivaji",
    artist: "AR Rahman",
    url: "Vaaji-Vaaji-En-Sivaji.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Valayapatti",
    artist: "AR Rahman",
    url: "Valayapatti-MassTamilan.fm.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Vandi Maadu Ettu",
    artist: "AR Rahman",
    url: "Vandi-Maadu-Ettu.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Varadha NAdikkarai Oram",
    artist: "AR Rahman",
    url: "Varaha-Nadikkarai-Oram.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Veera Raja Veera",
    artist: "AR Rahman",
    url: "Veera-Raja-Veera-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Veerapandi Kottayile",
    artist: "AR Rahman",
    url: "Veerapandi-Kottayile.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Velli Malare",
    artist: "AR Rahman",
    url: "Velli-Malare.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Vennilavae",
    artist: "AR Rahman",
    url: "Vennilavae.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Vera Level Sago",
    artist: "AR Rahman",
    url: "Vera Level Sago.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Verithanam",
    artist: "AR Rahman",
    url: "Verithanam-MassTamilan.io.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },

  {
    title: "Vetri Kodi Kattu",
    artist: "AR Rahman",
    url: "Vetri-Kodi-Kattu.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Vinnaithaandi Varuvaaya",
    artist: "AR Rahman",
    url: "Vinnaithaandi-Varuvaaya.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Water Packet",
    artist: "AR Rahman",
    url: "Water Packet.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Yaarumilla",
    artist: "AR Rahman",
    url: "Yaarumilla.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Yakkai Thiri",
    artist: "AR Rahman",
    url: "Yakkai-Thiri.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "yaro yarodi",
    artist: "AR Rahman",
    url: "Yaro-Yarodi.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Yen Azhagu Enna",
    artist: "AR Rahman",
    url: "Yen-Azhagu-Enna.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Yennai Izhukkuthadi",
    artist: "AR Rahman",
    url: "Yennai Izhukkuthadi.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },

];

let currentSongIndex = 0;
let isPlaying = false;
let userPaused = false;
let isSearchActive = false;
let searchResults = [];
const audio = new Audio();
const trackList = document.getElementById('trackList');
const searchInput = document.getElementById('search');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const cover = document.getElementById('cover');
const playPauseButton = document.getElementById('playPause');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const progress = document.getElementById('progress');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');

// Function to send media control events to MIT App Inventor
function sendMediaControlEvent(event) {
  if (window.AppInventor) {
    window.AppInventor.setWebViewString(`MediaControl:${event}`);
  }
}

// Function to send metadata updates to MIT App Inventor
function sendMetadataUpdate(song) {
  if (window.AppInventor) {
    const metadata = {
      title: song.title,
      artist: song.artist,
      coverUrl: song.coverUrl || "default-cover.jpg",
    };
    window.AppInventor.setWebViewString(`MetadataUpdate:${JSON.stringify(metadata)}`);
  }
}

const loadSong = (index) => {
  const song = SONGS[index];
  title.textContent = song.title;
  artist.textContent = song.artist;
  audio.src = song.url;
  progress.value = 0;
  currentTimeDisplay.textContent = "0:00";
  durationDisplay.textContent = "0:00";
  updateMediaSession(song);
  cover.src = song.coverUrl || "default-cover.jpg";
  // Try to extract cover image from MP3 metadata
  fetch(song.url)
    .then(response => response.blob())
    .then(blob => {
      jsmediatags.read(blob, {
        onSuccess: function (tag) {
          const picture = tag.tags.picture;
          if (picture) {
            let base64String = "";
            for (let i = 0; i < picture.data.length; i++) {
              base64String += String.fromCharCode(picture.data[i]);
            }
            const base64 = btoa(base64String);
            cover.src = `data:${picture.format};base64,${base64}`;
          } else {
            cover.src = song.coverUrl || "default-cover.jpg"; // Use array cover or fallback
          }
        },
        onError: function (error) {
          console.error("Error reading cover art:", error);
          cover.src = song.coverUrl || "default-cover.jpg"; // Use array cover or fallback
        }
      });
    })
    .catch(error => {
      console.error("Error fetching MP3 file:", error);
      cover.src = song.coverUrl || "default-cover.jpg"; // Use array cover or fallback
    });
};

// Play the current song
const playSong = () => {
  userPaused = false;
  isPlaying = true;
  audio.play().catch(error => {
    console.error("Playback failed:", error);
  });
  playPauseButton.textContent = '⏸';
  updateAppInventorState(`Playing: ${SONGS[currentSongIndex].title}`)
  sendMediaControlEvent('play');
};

// Pause the current song (only when user explicitly pauses)
const pauseSong = () => {
  userPaused = true;
  isPlaying = false;
  audio.pause();
  playPauseButton.textContent = '▶️';
  updateAppInventorState(`Paused: ${SONGS[currentSongIndex].title}`);
  sendMediaControlEvent('pause');
};

// Toggle play/pause
const togglePlayPause = () => {
  isPlaying ? pauseSong() : playSong();
};

// Play the next song
const playNextSong = () => {
  if (isSearchActive && searchResults.length > 0) {
    currentSongIndex = (currentSongIndex + 1) % searchResults.length;
    loadSong(SONGS.indexOf(searchResults[currentSongIndex]));
  } else {
    currentSongIndex = (currentSongIndex + 1) % SONGS.length;
    loadSong(currentSongIndex);
  }
  playSong();
  sendMediaControlEvent('next');
};

// Play the previous song
const playPrevSong = () => {
  if (isSearchActive && searchResults.length > 0) {
    currentSongIndex = (currentSongIndex - 1 + searchResults.length) % searchResults.length;
    loadSong(SONGS.indexOf(searchResults[currentSongIndex]));
  } else {
    currentSongIndex = (currentSongIndex - 1 + SONGS.length) % SONGS.length;
    loadSong(currentSongIndex);
  }
  playSong();
  sendMediaControlEvent('previous');
};

// Update the progress bar and time display
const updateProgress = () => {
  const { currentTime, duration } = audio;
  progress.value = (currentTime / duration) * 100 || 0;
  currentTimeDisplay.textContent = formatTime(currentTime);
  durationDisplay.textContent = formatTime(duration);
};

// Format time for display
const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
};

// Handle seeking through the progress bar
const handleSeek = (e) => {
  const seekTime = (e.target.value / 100) * audio.duration;
  audio.currentTime = seekTime;
};

// Update WebViewString to prevent App Inventor from stopping
updateAppInventorState("Playing: " + SONGS[currentSongIndex].title + " - " + Math.floor(audio.currentTime) + "s");

// Debounce function to limit the rate of execution
const debounce = (func, delay) => {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
};

// Filter the song list based on the search input
const filterSongs = debounce(() => {
  const query = searchInput.value.toLowerCase();
  searchResults = SONGS.filter((song) => song.title.toLowerCase().includes(query));
  isSearchActive = query.length > 0;
  renderSongList(searchResults);
}, 300);

const renderSongList = (songs) => {
  trackList.innerHTML = ''; // Clear the existing list
  songs.forEach((song, index) => {
    const li = document.createElement('li');
    li.classList.add('track');

    // Create an image element for the cover
    const img = document.createElement('img');
    img.src = "default-cover.jpg"; // Set default initially
    img.alt = song.title;
    img.classList.add('track-cover'); // Add CSS class for styling

    // Array of random cover images (URLs or Base64 data)
    const defaultCovers = [
      "rahman-cover-1.png",
      "rahman-cover-2.png",
      "rahman-cover-3.png",
      "rahman-cover-4.png",
      "rahman-cover-5.png",
      "rahman-cover-6.png",
      "rahman-cover-7.png",
      "rahman-cover-8.png"

    ];

    // Function to get a random cover image
    function getRandomCover() {
      return defaultCovers[Math.floor(Math.random() * defaultCovers.length)];
    }

    // Set a random cover icon immediately
    img.src = getRandomCover();

    // Create a div for track info
    const trackInfo = document.createElement('div');
    trackInfo.classList.add('track-info');

    // Create a div for the title
    const trackTitle = document.createElement('div');
    trackTitle.classList.add('track-title');
    trackTitle.textContent = song.title;
    trackInfo.appendChild(trackTitle);

    li.appendChild(img);
    li.appendChild(trackInfo);

    li.addEventListener('click', () => {
      if (isSearchActive) {
        currentSongIndex = SONGS.indexOf(song);
      } else {
        currentSongIndex = index;
      }
      loadSong(currentSongIndex);
      playSong();
    });

    trackList.appendChild(li);
  });
};

// Function to update media session metadata and send status to App Inventor
const updateMediaSession = (song) => {
  if ('mediaSession' in navigator) {
    // Default to provided coverUrl or a fallback image
    let artworkUrl = song.coverUrl || "default-cover.jpg";

    // Try extracting embedded cover art from MP3 metadata
    fetch(song.url)
      .then(response => response.blob())
      .then(blob => {
        jsmediatags.read(blob, {
          onSuccess: (tag) => {
            const picture = tag.tags.picture;
            if (picture) {
              let base64String = "";
              for (let i = 0; i < picture.data.length; i++) {
                base64String += String.fromCharCode(picture.data[i]);
              }
              artworkUrl = `data:${picture.format};base64,${btoa(base64String)}`;
            }

            // Update media session with extracted or fallback artwork
            navigator.mediaSession.metadata = new MediaMetadata({
              title: song.title,
              artist: song.artist,
              album: song.album || "Unknown Album",
              artwork: [{ src: artworkUrl, sizes: "512x512", type: "image/png" }]
            });

            // Send update to App Inventor
            updateAppInventorWithMediaSessionStatus(`Metadata Updated: ${song.title}`);
          },
          onError: (error) => {
            console.error("Error extracting metadata:", error);

            // Use fallback cover if metadata extraction fails
            navigator.mediaSession.metadata = new MediaMetadata({
              title: song.title,
              artist: song.artist,
              album: song.album || "Unknown Album",
              artwork: [{ src: artworkUrl, sizes: "512x512", type: "image/png" }]
            });

            updateAppInventorWithMediaSessionStatus(`Metadata Updated: ${song.title} (No Cover Found)`);
          }
        });
      })
      .catch((error) => {
        console.error("Error fetching MP3 file:", error);

        // Use fallback cover if fetching fails
        navigator.mediaSession.metadata = new MediaMetadata({
          title: song.title,
          artist: song.artist,
          album: song.album || "Unknown Album",
          artwork: [{ src: artworkUrl, sizes: "512x512", type: "image/png" }]
        });

        updateAppInventorWithMediaSessionStatus(`Metadata Updated: ${song.title} (Failed to Fetch)`);
      });
  }
};

  // Notification functions
  function showNotification() {
    console.log("Showing notification...");
    // Add your notification UI logic here
  }

  function hideNotification() {
    console.log("Hiding notification...");
    // Add your notification UI logic here
  }

// Ensure playback continues when app is in the background
document.addEventListener("visibilitychange", () => {
  if (document.hidden && isPlaying) {
    showNotification();
  } else {
    hideNotification();
    if (isPlaying) {
      audio.play().catch(error => {
        console.error("Resume after visibility change failed:", error);
      });
    }
  }
});


// Handle system-triggered pauses (e.g., app backgrounded)
audio.addEventListener('pause', (event) => {
  if (!userPaused && isPlaying) {
    // Automatically resume playback if paused by the system (not user)
    setTimeout(() => {
      audio.play().catch(error => {
        console.error("Auto-resume failed:", error);
      });
    }, 100);
  }
});

// Event listeners for audio and controls
audio.addEventListener('ended', playNextSong);
audio.addEventListener('timeupdate', updateProgress);
searchInput.addEventListener('input', () => {
  if (searchInput.value === '') {
    isSearchActive = false;
    searchResults = [];
    renderSongList(SONGS);
  } else {
    filterSongs();
  }
});

playPauseButton.addEventListener('click', togglePlayPause);
nextButton.addEventListener('click', playNextSong);
prevButton.addEventListener('click', playPrevSong);
progress.addEventListener('input', handleSeek);

// Event listeners for audio and controls
audio.addEventListener('ended', playNextSong);
audio.addEventListener('timeupdate', updateProgress);
searchInput.addEventListener('input', filterSongs);
playPauseButton.addEventListener('click', togglePlayPause);
nextButton.addEventListener('click', playNextSong);
prevButton.addEventListener('click', playPrevSong);
progress.addEventListener('input', handleSeek);

// Initial setup
loadSong(currentSongIndex);
renderSongList(SONGS);
setupMediaSession();
