import { sb_artist_content } from './data.js';
import { MC_PLAYLIST_WATCHED } from './data.js';

import { MC_COMBINED_CONTENT } from './data.js';
import MC_COMBINED_TITLE from './data.js';


// ---------------SIDEBAR ARTIST LIST S----------
// -----------SIDE BAR -- ARTIST OR PLAYLIST CONTENT ----S------- ( JS CODE = #3000 )----------

// FOR RANDOME DATA CREATION AND PASSING---S----(RANDOME)
document.addEventListener("DOMContentLoaded", function () {
   let temp_sb_data = generateTempSbData()
   show_artist_at_sidebar(temp_sb_data)
});
function DOMContentLoaded(){
  let temp_sb_data = generateTempSbData()
  show_artist_at_sidebar(temp_sb_data)
}


// TO GENRATE A RANDOME/SHUFFLED DATA IN temp_sb_data BY USING BY USING
// sb_artist_content & MC_PLAYLIST_WATCHED ARRAY's
function generateTempSbData() {
  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  const randomArtists = shuffle(sb_artist_content).slice(0, 6);
  const randomPlaylists = shuffle(MC_PLAYLIST_WATCHED).slice(0, 4);
  const temp_sb_data = shuffle([...randomArtists, ...randomPlaylists]);
  return temp_sb_data;
}

// FOR RANDOME DATA CREATION AND PASSING---E----(RANDOME)


//FOR PLAYLIST DATA CONTENT-----S-----(ONLY PLAYLIST)
let playlisttag = document.querySelector(".playlisttag")

playlisttag.addEventListener("click" , ()=>{
  let sidebar_bottem_four = document.querySelector(".sidebar-bottem-four");
  sidebar_bottem_four.innerHTML = "";
  show_artist_at_sidebar(MC_PLAYLIST_WATCHED)
  playlisttag.style.backgroundColor = "rgb(134, 134, 134)"
  artisttag.style.backgroundColor = "rgb(46, 46, 46)"
  let crosesvgicon = document.querySelector(".crosesvgicon")
  crosesvgicon.style.display = "block"
})

let crosesvgicon = document.querySelector(".crosesvgicon")
crosesvgicon.addEventListener("click", ()=>{
  let sidebar_bottem_four = document.querySelector(".sidebar-bottem-four");
  sidebar_bottem_four.innerHTML = "";
  DOMContentLoaded()
  playlisttag.style.backgroundColor = "rgb(46, 46, 46)"
  crosesvgicon.style.display = "none" ;
})

//FOR PLAYLIST DATA CONTENT-----E-----(ONLY PLAYLIST)


//FOR ARTIST DATA CONTENT-----S-----(ONLY ARTIST)

let artisttag = document.querySelector(".artisttag")

artisttag.addEventListener("click" , ()=>{
  let sidebar_bottem_four = document.querySelector(".sidebar-bottem-four");
  sidebar_bottem_four.innerHTML = "";
  show_artist_at_sidebar(sb_artist_content)
  artisttag.style.backgroundColor = "rgb(134, 134, 134)"
  playlisttag.style.backgroundColor = "rgb(46, 46, 46)"
  let crosesvgicon = document.querySelector(".crosesvgicon")
  crosesvgicon.style.display = "block"
})

crosesvgicon.addEventListener("click", ()=>{
  let sidebar_bottem_four = document.querySelector(".sidebar-bottem-four");
  sidebar_bottem_four.innerHTML = "";
  DOMContentLoaded()
  artisttag.style.backgroundColor = "rgb(46, 46, 46)"
  crosesvgicon.style.display = "none" ;
})

//FOR ARTIST DATA CONTENT-----E-----(ONLY ARTIST)

function show_artist_at_sidebar(temp_sb_data) {
  let sidebar_bottem_four = document.querySelector(".sidebar-bottem-four");

  for (const item of temp_sb_data) {


    let art_box = document.createElement("div");
    art_box.classList.add("default-s");
    sidebar_bottem_four.appendChild(art_box);

    let inner_box_one = document.createElement("div");
    inner_box_one.classList.add("default-one");
    art_box.appendChild(inner_box_one);

    let inner_box_one_img = document.createElement("img");
    inner_box_one_img.classList.add("default-one-img");
    inner_box_one_img.setAttribute("src", item.a_img || item.p_img);
    inner_box_one.appendChild(inner_box_one_img);

    let inner_box_two = document.createElement("div");
    inner_box_two.classList.add("default-two");
    art_box.appendChild(inner_box_two);

    let inner_box_two_p1 = document.createElement("p");
    inner_box_two_p1.classList.add("default-two-p1");
    inner_box_two_p1.innerText =  item.a_name || item.p_name;
    inner_box_two.appendChild(inner_box_two_p1);

    let inner_box_two_p2 = document.createElement("p");
    inner_box_two_p2.classList.add("default-two-p2");
    inner_box_two_p2.innerText = item.a_tag || "Playlist";
    inner_box_two.appendChild(inner_box_two_p2);
  }

}

// -----------SIDE BAR -- ARTIST OR PLAYLIST CONTENT ----E------- ( JS CODE = #3000 )----------



let main_screen_header_sidebar = document.querySelector(
  ".main-screen-header-sidebar"
);
let h_mb_top_header_start_menu = document.querySelector(
  ".h-mb-top-header-start-menu"
);
let main_screen_header_mainbar = document.querySelector(
  ".main-screen-header-mainbar"
);

let sidebar_top_top_svg = document.querySelector(".sidebar-top-top svg");
let sidebar_top_top_h3 = document.querySelector(".sidebar-top-top h3");

let h_mb_top_header_start_menu_2 = document.querySelector(
  ".h-mb-top-header-start-menu-2"
);

document.addEventListener("DOMContentLoaded", () => {
  h_mb_top_header_start_menu.addEventListener("click", S_H_MENU);
  h_mb_top_header_start_menu_2.addEventListener("click", S_H_MENU);
});

function S_H_MENU() {
  let w_w = window.innerWidth;
  if (w_w <= "451") {
    sidebar_top_top_svg.style.display = "none";
    sidebar_top_top_h3.style.display = "none";
    // sb_display_back()
  } else {
    main_screen_header_sidebar.style.display = "block";
  }

  let main_screen_header_sidebar_state = window.getComputedStyle(
    main_screen_header_sidebar
  ).display;
  if (main_screen_header_sidebar_state == "none") {
    main_screen_header_sidebar.style.display = "block"; //
    main_screen_header_sidebar.margin = "0px 0px 0px 0px"; //
    main_screen_header_sidebar.pading = "0px 0px 0px 0px";
    main_screen_header_sidebar.style.backgroundColor = "black";
    main_screen_header_sidebar.style.zIndex = "2";
    main_screen_header_sidebar.style.position = "absolute";
    main_screen_header_sidebar.style.width = "100%";
    main_screen_header_sidebar.style.height = "100%";
    main_screen_header_mainbar.style.zIndex = "1";
  } else {
    console.log("hide");
    main_screen_header_sidebar.style.display = "none";
  }
}

// <!-------------- MAIN SECTION HEADER STICKY ON SCROL EFFECT ------S--------- ( JS CODE = 2998 )----------- -->
// -------------MAIN SECTION NEVBAR STICKY JS S-------------------

const mainBar = document.querySelector(".main-screen-header-mainbar");
let h_mb_top_header = document.querySelector(".h-mb-top");
// let h_mb_top_footer = document.querySelector('.h-mb-top-footer')

let h_mb_top_header_end = document.querySelector(".h-mb-top-header-end");

mainBar.addEventListener("scroll", function () {
  // console.clear();
  // console.log(mainBar.scrollTop);
  let scroll_pos = mainBar.scrollTop;
  if (scroll_pos >= 140) {
    h_mb_top_header.style.position = "fixed";
    h_mb_top_header.style.backgroundColor = "#4ab784";
    h_mb_top_header.style.transition = "all 1.5s linear";
    h_mb_top_header_end.style.position = "sticky";
    h_mb_top_header_end.style.right = "0px";
    h_mb_top_header_end.style.width = "calc(100% - 10px)"
  }
  else {
    h_mb_top_header.style.position = "static";
    h_mb_top_header.style.backgroundColor = "#006e2ad4";
    // h_mb_top_header.style.transition = "none"; 
  }

});

// -------------MAIN SECTION NEVBAR STICKY JS E-------------------
// <!-------------- MAIN SECTION HEADER STICKY ON SCROL EFFECT ------E--------- ( JS CODE = 2998 )----------- -->

// ----------------MAIN SECTION 1st WATCHED PLATLIST SECTION S----(JS-CODE= "#3002")------------

let h_mb_bottem_playlist = document.querySelector(".h-mb-bottem-playlist")
document.addEventListener("DOMContentLoaded", () => {
  SHOW_WATCHED_PLAYLIST(MC_PLAYLIST_WATCHED);
})

function SHOW_WATCHED_PLAYLIST(MC_PLAYLIST_WATCHED) {
  for (const MC_P_W of MC_PLAYLIST_WATCHED) {
    let P_box = document.createElement("div")
    P_box.classList.add("playlist-box")
    h_mb_bottem_playlist.appendChild(P_box)

    let P_box_iner_1 = document.createElement("div")
    P_box_iner_1.classList.add("playlist-box-iner-1")
    P_box.appendChild(P_box_iner_1)

    let P_box_iner_1_img = document.createElement("img")
    P_box_iner_1_img.classList.add("playlist-box-iner-1-img")
    P_box_iner_1_img.setAttribute("src", MC_P_W.p_img);
    P_box_iner_1.appendChild(P_box_iner_1_img);

    let P_box_iner_2 = document.createElement("div")
    P_box_iner_2.classList.add("playlist-box-iner-2")
    P_box.appendChild(P_box_iner_2)

    let P_box_iner_2_P_L_name = document.createElement("p")
    P_box_iner_2_P_L_name.classList.add("playlist-box-iner-2-P-L-name")
    P_box_iner_2_P_L_name.innerText = MC_P_W.p_name;
    P_box_iner_2.appendChild(P_box_iner_2_P_L_name)

    let P_box_iner_2_svg = document.createElement("div");
    P_box_iner_2_svg.classList.add("P_box_iner_1_svg")
    P_box_iner_2_svg.innerHTML = MC_P_W.p_svg
    P_box_iner_2.appendChild(P_box_iner_2_svg)
  }
}

// ----------------MAIN SECTION 1st WATCHED PLATLIST SECTION E----(JS-CODE= "#3002")------------


// -----------------------ALL THE SECTION IS CREATED BY JS  E  (JS-CODE = "#3004")-------------------------

document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < MC_COMBINED_CONTENT.length; i++) {

    const temp_sb_data = shuffle(MC_COMBINED_CONTENT[i]);
    // console.log(temp_sb_data)
    function shuffle(array) {
      return array.sort(() => Math.random() - 0.5);
    }

    create_layout__MC_ONE_OF_COMB(MC_COMBINED_CONTENT[i], MC_COMBINED_TITLE, i)
    // console.log("----------------")
  }
})

let h_mb_bottem = document.querySelector(".h-mb-bottem");

function create_layout__MC_ONE_OF_COMB(COMB, MC_COMBINED_TITLE, i) {
  // console.log( "ITEM ( ARRAY )" , COMB)
  // console.log( "INDEX IS" , i)

  let h_mb_bottem_playlist_two = document.createElement("div");
  h_mb_bottem_playlist_two.classList.add(`h-mb-bottem-playlist-two-${i}`);
  // class = "h-mb-bottem-playlist-two-1"
  h_mb_bottem_playlist_two.style.height = '300px';
  h_mb_bottem_playlist_two.style.width = 'calc(100% -2px)'; // Corrected the width property
  h_mb_bottem_playlist_two.style.border = '1px solid rgba(190, 14, 14, 000)';
  h_mb_bottem_playlist_two.style.padding = '0px 0px 0px 0px';
  h_mb_bottem_playlist_two.style.margin = '20px 0px';
  h_mb_bottem_playlist_two.style.display = 'flex';
  h_mb_bottem_playlist_two.style.justifyContent = 'center';
  h_mb_bottem_playlist_two.style.flexWrap = 'wrap';
  h_mb_bottem_playlist_two.style.zIndex = '1';

  h_mb_bottem.appendChild(h_mb_bottem_playlist_two);

  // ---------------------UPPER---SEC--------------
  let h_m_bottem_playlist_two_upper = document.createElement("div");
  h_m_bottem_playlist_two_upper.classList.add(`h_m_bottem_playlist_two_upper-${i}`)
  // class = "h_m_bottem_playlist_two_upper-0"
  h_m_bottem_playlist_two_upper.style.height = '50px';
  h_m_bottem_playlist_two_upper.style.width = '100%';
  h_m_bottem_playlist_two_upper.style.border = '1px solid rgb(42, 165, 63, 000)';
  h_m_bottem_playlist_two_upper.style.display = 'flex';
  h_m_bottem_playlist_two_upper.style.justifyContent = 'space-between';
  h_mb_bottem_playlist_two.appendChild(h_m_bottem_playlist_two_upper)

  let h_m_bottem_playlist_two_upper_title = document.createElement("h2");
  h_m_bottem_playlist_two_upper_title.classList.add(`h-m-bottem-playlist-two-upper-title-${i}`);
  h_m_bottem_playlist_two_upper_title.classList.add(`h-m-bottem-playlist-two-upper-title`);
  // class = "h-m-bottem-playlist-two-upper-title-1" "h-m-bottem-playlist-two-upper-title"
  h_m_bottem_playlist_two_upper_title.innerText = MC_COMBINED_TITLE[i];
  h_m_bottem_playlist_two_upper_title.onclick = function() {show_about_this(i , COMB , MC_COMBINED_TITLE[i])};
  h_m_bottem_playlist_two_upper_title.style.margin = `10px 0px 0px 20px`
  h_m_bottem_playlist_two_upper.appendChild(h_m_bottem_playlist_two_upper_title);

  let h_m_bottem_playlist_two_upper_smore = document.createElement("p");
  h_m_bottem_playlist_two_upper_smore.classList.add(`h-m-bottem-playlist-two-upper-smore-${i}`);
  h_m_bottem_playlist_two_upper_smore.classList.add(`h-m-bottem-playlist-two-upper-smore`);
  // class = "h-m-bottem-playlist-two-upper-smore-1" "h-m-bottem-playlist-two-upper-smore"
  
  h_m_bottem_playlist_two_upper_smore.innerText = `Show all`;
  h_m_bottem_playlist_two_upper_smore.onclick = function() {show_about_this(i , COMB , MC_COMBINED_TITLE[i])};
  h_m_bottem_playlist_two_upper_smore.style.margin = `20px 20px 0px 20px`
  h_m_bottem_playlist_two_upper_smore.style.display = `block`
  h_m_bottem_playlist_two_upper.appendChild(h_m_bottem_playlist_two_upper_smore);

  // ---------------------LOWER---SEC--------------
  let h_mb_bottem_playlist_two_lower = document.createElement("div");
  h_mb_bottem_playlist_two_lower.classList.add(`h-mb-bottem-playlist-two-lower`);
  h_mb_bottem_playlist_two_lower.classList.add(`h-mb-bottem-playlist-two-lower-${i}`);
  // class = "h-mb-bottem-playlist-two-lower-0"
  h_mb_bottem_playlist_two_lower.style.height = 'calc(100% - 55px)';
  h_mb_bottem_playlist_two_lower.style.width = '100%';
  h_mb_bottem_playlist_two_lower.style.border = '1px solid #0026ff00';
  h_mb_bottem_playlist_two_lower.style.display = "flex";
  h_mb_bottem_playlist_two_lower.style.justifyContent = "space-around";
  h_mb_bottem_playlist_two_lower.style.containerType = `inline-size`;
  h_mb_bottem_playlist_two.appendChild(h_mb_bottem_playlist_two_lower);

  for (let j = 0; j < COMB.length; j++) {

    let h_mb_bottem_playlist_two_lower_boxes = document.createElement("div");
    h_mb_bottem_playlist_two_lower_boxes.classList.add(`h-mb-bottem-playlist-two-lower-boxes-${j}`);
    h_mb_bottem_playlist_two_lower_boxes.classList.add(`h-mb-bottem-playlist-two-lower-boxes`);
    // class = "h-mb-bottem-playlist-two-lower-boxes-1" "h-mb-bottem-playlist-two-lower-boxes"
    h_mb_bottem_playlist_two_lower_boxes.style.height = `calc(100% - 0px)`;
    h_mb_bottem_playlist_two_lower_boxes.style.width = `180px`;
    h_mb_bottem_playlist_two_lower_boxes.style.border = `1px solid #00000000`;
    h_mb_bottem_playlist_two_lower_boxes.style.borderRadius = "10px"
    h_mb_bottem_playlist_two_lower.appendChild(h_mb_bottem_playlist_two_lower_boxes);

    if (COMB[j].hasOwnProperty('img')) {
      let h_mb_bottem_playlist_two_lower_boxes_imgbox = document.createElement("div");
      h_mb_bottem_playlist_two_lower_boxes_imgbox.classList.add(`h-mb-bottem-playlist-two-lower-boxes-imgbox-${j}`);
      // class = "h_mb_bottem_playlist_two_lower_boxes_imgbox-1"
      h_mb_bottem_playlist_two_lower_boxes_imgbox.style.height = "160px";
      h_mb_bottem_playlist_two_lower_boxes_imgbox.style.width = "calc(100% - 10px)";
      h_mb_bottem_playlist_two_lower_boxes_imgbox.style.border = "1px solid #ff000000";
      h_mb_bottem_playlist_two_lower_boxes_imgbox.style.borderRadius = "10px 10px 0px 0px";
      h_mb_bottem_playlist_two_lower_boxes_imgbox.style.margin = "4.3px";
      h_mb_bottem_playlist_two_lower_boxes_imgbox.style.backgroundImage = `url(${COMB[j].img})`;
      h_mb_bottem_playlist_two_lower_boxes_imgbox.style.backgroundSize = `cover`;
      h_mb_bottem_playlist_two_lower_boxes_imgbox.style.zIndex = "1";
      h_mb_bottem_playlist_two_lower_boxes.appendChild(h_mb_bottem_playlist_two_lower_boxes_imgbox);
    }

    // if(COMB[j].hasOwnProperty('name')){  
    let h_mb_bottem_playlist_two_lower_boxes_h4 = document.createElement("h4");
    h_mb_bottem_playlist_two_lower_boxes_h4.classList.add(`h-mb-bottem-playlist-two-lower-boxes-h4-${j}`);
    // class = "h-mb-bottem-playlist-two-lower-boxes-h4-0"
    h_mb_bottem_playlist_two_lower_boxes_h4.style.margin = "5px 0px 0px 5px";
    if (COMB[j].name == true) {
      h_mb_bottem_playlist_two_lower_boxes_h4.innerText = COMB[j].name;
    } else {
      h_mb_bottem_playlist_two_lower_boxes_h4.innerText = " ";
    }
    h_mb_bottem_playlist_two_lower_boxes.appendChild(h_mb_bottem_playlist_two_lower_boxes_h4);
    // }

    if (COMB[j].hasOwnProperty('cast')) {

      let h_mb_bottem_playlist_two_lower_boxes_p = document.createElement("p");
      h_mb_bottem_playlist_two_lower_boxes_p.classList.add(`h-mb-bottem-playlist-two-lower-boxes-p-${j}`);
      // class = "h-mb-bottem-playlist-two-lower-boxes-p-0"
      h_mb_bottem_playlist_two_lower_boxes_p.style.display = `inline-block`
      h_mb_bottem_playlist_two_lower_boxes_p.style.margin = "3px 5px 0px 5px"

      for (let i = 0; i < 2; i++) {
        let h_mb_bottem_playlist_two_lower_boxes_p2 = document.createElement("p");
        h_mb_bottem_playlist_two_lower_boxes_p2.classList.add(`h-mb-bottem-playlist-two-lower-boxes-p2-${j}-${i}`);
        h_mb_bottem_playlist_two_lower_boxes_p2.classList.add(`h-mb-bottem-playlist-two-lower-boxes-p2`);
        // class = "h-mb-bottem-playlist-two-lower-boxes-p2-3-1" "h-mb-bottem-playlist-two-lower-boxes-p2"
        h_mb_bottem_playlist_two_lower_boxes_p2.style.margin = "-30px 0px 0px 0px"
        h_mb_bottem_playlist_two_lower_boxes_p2.style.fontSize = "14px"
        h_mb_bottem_playlist_two_lower_boxes_p2.style.color = "#ffffff"

        h_mb_bottem_playlist_two_lower_boxes_p2.innerText = COMB[j].cast[i];
        h_mb_bottem_playlist_two_lower_boxes_p.appendChild(h_mb_bottem_playlist_two_lower_boxes_p2)
        h_mb_bottem_playlist_two_lower_boxes_p.append(`, `)
        h_mb_bottem_playlist_two_lower_boxes_p.appendChild(document.createElement("br"));
        h_mb_bottem_playlist_two_lower_boxes_p2.style.display = `inline-block`
      }
      h_mb_bottem_playlist_two_lower_boxes.appendChild(h_mb_bottem_playlist_two_lower_boxes_p)
    }

    let h_mb_bottem_playlist_two_lower_boxes_svg = document.createElement("div");
    h_mb_bottem_playlist_two_lower_boxes_svg.classList.add(`h-mb-bottem-playlist-two-lower-boxes-svg-${j}`);
    h_mb_bottem_playlist_two_lower_boxes_svg.classList.add(`h-mb-bottem-playlist-two-lower-boxes-svg`);
    // class = "h-mb-bottem-playlist-two-lower-boxes-svg-0" "h-mb-bottem-playlist-two-lower-boxes-svg"
    h_mb_bottem_playlist_two_lower_boxes_svg.style.height = "36px";
    h_mb_bottem_playlist_two_lower_boxes_svg.style.width = "36px";
    h_mb_bottem_playlist_two_lower_boxes_svg.style.border = `1px solid #00000000`;
    h_mb_bottem_playlist_two_lower_boxes_svg.style.backgroundColor = `#44ff00`
    h_mb_bottem_playlist_two_lower_boxes_svg.style.zIndex = "1"
    h_mb_bottem_playlist_two_lower_boxes_svg.style.position = `relative`
    // h_mb_bottem_playlist_two_lower_boxes_svg.style.top = "-70px"
    // h_mb_bottem_playlist_two_lower_boxes_svg.style.left = "130px"
    h_mb_bottem_playlist_two_lower_boxes_svg.style.borderRadius = "50%"
    h_mb_bottem_playlist_two_lower_boxes_svg.innerHTML = `<svg data-encore-id="icon" role="img" height="25px" width="25px"  aria-hidden="true" viewBox="0 0 24 24" class="Svg-sc-ytk21e-0 bneLcE"><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path></svg> `
    h_mb_bottem_playlist_two_lower_boxes.appendChild(h_mb_bottem_playlist_two_lower_boxes_svg)
  }
}


function show_about_this(num , COMB , titles){

  let h_mb_top = document.querySelector(".h-mb-top")
  let h_mb_bottem = document.querySelector(".h-mb-bottem")
  h_mb_top.style.display = "none"
  h_mb_bottem.style.display = "none"

  let main_screen_header_mainbar = document.querySelector(".main-screen-header-mainbar")
  main_screen_header_mainbar.scrollTop = 0;


  let s_a_t_header_mainbar = document.createElement("div")
  s_a_t_header_mainbar.classList.add("s-a-header-mainbar")
  s_a_t_header_mainbar.style.height = 'auto';
  s_a_t_header_mainbar.style.width = '99%';
  s_a_t_header_mainbar.style.border = '1px solid rgba(187, 19, 19 ,00)';
  s_a_t_header_mainbar.style.borderRadius = '10px 0px 0px 0px';
  s_a_t_header_mainbar.style.margin = '10px 0px 0px 10px';
  s_a_t_header_mainbar.style.overflow = 'scroll';
  s_a_t_header_mainbar.style.overflowX = 'scroll';
  s_a_t_header_mainbar.style.scrollbarWidth = 'none';
  main_screen_header_mainbar.prepend(s_a_t_header_mainbar)

  let s_a_t_top = document.createElement("div")
  s_a_t_top.classList.add("s-a-t-top")
  s_a_t_top.style.width = "99.5%"
  s_a_t_top.style.height = "99px"
  s_a_t_top.style.border = `1px solid #ffffff00`;
  s_a_t_top.style.display = "flex";
  s_a_t_header_mainbar.appendChild(s_a_t_top)

  let s_a_t_top_bbtn = document.createElement("p")
  s_a_t_top_bbtn.classList.add("s-a-t-top-p")
  s_a_t_top_bbtn.style.color = "#ffffff"
  s_a_t_top_bbtn.style.fontSize = "25px"
  s_a_t_top_bbtn.style.margin = "30px 0px 0px 30px"
  s_a_t_top_bbtn.onclick = function() {back_to_home()};
  s_a_t_top_bbtn.innerHTML = `<span class="material-symbols-outlined h-mb-top-header-start-arob">arrow_back_ios_new</span>`
  s_a_t_top.appendChild(s_a_t_top_bbtn)

  let s_a_t_top_p = document.createElement("p")
  s_a_t_top_p.classList.add("s-a-t-top-p")
  s_a_t_top_p.style.color = "#ffffff"
  s_a_t_top_p.style.fontSize = "25px"
  s_a_t_top_p.style.margin = "30px 0px 0px 30px"
  s_a_t_top_p.innerText = titles
  s_a_t_top.appendChild(s_a_t_top_p)


  let s_a_t_bottem = document.createElement("div")
  s_a_t_bottem.classList.add("s-a-t-buttom")
  s_a_t_bottem.style.width = "99.5%"
  s_a_t_bottem.style.height = "auto"
  // s_a_t_bottem.style.border = `1px solid #ffffff`;
  s_a_t_bottem.style.display = "flex"
  s_a_t_bottem.style.padding = "30px"
  s_a_t_bottem.style.justifyContent = "start"
  s_a_t_bottem.style.flexWrap = "wrap"
  s_a_t_header_mainbar.appendChild(s_a_t_bottem)

  for (let j = 0; j < COMB.length; j++) {
    let s_a_t_bottem_card = document.createElement("div")
    s_a_t_bottem_card.classList.add("s-a-t-buttom-card")
    s_a_t_bottem_card.style.width = "200px"
    s_a_t_bottem_card.style.height = "300px"
    s_a_t_bottem_card.style.border = `1px solid rgba(230, 105, 105, 0)`;
    s_a_t_bottem_card.style.borderRadius = `20px`;
    s_a_t_bottem_card.style.margin = "25px"
    s_a_t_bottem.appendChild(s_a_t_bottem_card)

    let s_a_t_bottem_card_img = document.createElement("div")
    s_a_t_bottem_card_img.classList.add("s-a-t-buttom-img")
    s_a_t_bottem_card_img.style.width = "90%"
    s_a_t_bottem_card_img.style.height = "200px"
    s_a_t_bottem_card_img.style.border = `1px solid #ffffff00`;
    s_a_t_bottem_card_img.style.borderRadius = `20px`;
    s_a_t_bottem_card_img.style.margin = "10px"
    s_a_t_bottem_card_img.style.backgroundImage = `url(${COMB[j].img})`;
    s_a_t_bottem_card_img.style.backgroundSize = `cover`;
    s_a_t_bottem_card.appendChild(s_a_t_bottem_card_img)

    let s_a_t_bottem_card_svg = document.createElement("div")
    s_a_t_bottem_card_svg.classList.add("s-a-t-bottem-card-svg")
    s_a_t_bottem_card_svg.style.height = "36px";
    s_a_t_bottem_card_svg.style.width = "36px";
    s_a_t_bottem_card_svg.style.border = `1px solid #00000000`;
    s_a_t_bottem_card_svg.style.backgroundColor = `#44ff00`
    s_a_t_bottem_card_svg.style.zIndex = "1"
    s_a_t_bottem_card_svg.style.position = `relative`
    s_a_t_bottem_card_svg.style.borderRadius = "50%"
    s_a_t_bottem_card_svg.innerHTML = `<svg data-encore-id="icon" role="img" height="25px" width="25px"  aria-hidden="true" viewBox="0 0 24 24" class="Svg-sc-ytk21e-0 bneLcE"><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path></svg> `
    s_a_t_bottem_card.appendChild(s_a_t_bottem_card_svg)

    let s_a_t_bottem_card_p = document.createElement("p");
    s_a_t_bottem_card_p.classList.add("s-a-t-bottem-card-p")

    s_a_t_bottem_card_p.style.color = "#ffffff"
    s_a_t_bottem_card_p.style.fontSize = "14px"
    s_a_t_bottem_card_p.style.margin = "-30px 0px 0px 15px"
    s_a_t_bottem_card_p.innerText = COMB[j].cast;
    s_a_t_bottem_card.appendChild(s_a_t_bottem_card_p)

  }
}

function back_to_home(){
  let s_a_header_mainbar = document.querySelectorAll(".s-a-header-mainbar")
  for (const element of s_a_header_mainbar) {
    element.style.display="none"
  }
  let h_mb_top = document.querySelector(".h-mb-top")
  let h_mb_bottem = document.querySelector(".h-mb-bottem")
  h_mb_top.style.display = "block"
  h_mb_bottem.style.display = "block"
}








// --------Media Query For every perticuler platlist to make display=none on resize to make responsive---------
window.addEventListener("DOMContentLoaded", () => {
  media_res_effects_on_playlist_boxes();
})
window.addEventListener("resize", () => {
  media_res_effects_on_playlist_boxes();
});

function media_res_effects_on_playlist_boxes() {
    for (let i = 0; i < MC_COMBINED_CONTENT.length; i++) {
      const parentBox = document.querySelector(`.h-mb-bottem-playlist-two-${i} .h-mb-bottem-playlist-two-lower`);
      let w = parentBox.getBoundingClientRect().width;
      // console.log("Current width of parent box:", w);
      let box0 = document.querySelector(`.h-mb-bottem-playlist-two-${i} .h-mb-bottem-playlist-two-lower-boxes-0`)
      let box1 = document.querySelector(`.h-mb-bottem-playlist-two-${i} .h-mb-bottem-playlist-two-lower-boxes-1`)
      let box2 = document.querySelector(`.h-mb-bottem-playlist-two-${i} .h-mb-bottem-playlist-two-lower-boxes-2`)
      let box3 = document.querySelector(`.h-mb-bottem-playlist-two-${i} .h-mb-bottem-playlist-two-lower-boxes-3`)
      let box4 = document.querySelector(`.h-mb-bottem-playlist-two-${i} .h-mb-bottem-playlist-two-lower-boxes-4`)
      let box5 = document.querySelector(`.h-mb-bottem-playlist-two-${i} .h-mb-bottem-playlist-two-lower-boxes-5`)
        if (w <= "1130.050048828125") {
          box5.style.display = "none";
        } else {
          box5.style.display = "block";
        }
        if (w <= "944.5125122070312") {
          box4.style.display = "none";
        } else {
          box4.style.display = "block";
        }
        if (w <= "760.4249877929688") {
          box3.style.display = "none";
        } else {
          box3.style.display = "block";
        }
        // if (w <= "577.1000366210938") {
        //   box2.style.display = "none";
        // } else {
        //   box2.style.display = "block";
        // }
        if (w <= "400.3500061035156") {
          box1.style.display = "none";
        } else {
          box1.style.display = "block";
        }
    }

}

// FOR MEDIA QUERY EFFECTS TO MAKE RESPONSIVE WEB PAGE USING JS  -------S------
window.addEventListener("DOMContentLoaded", () => {
  media_res_effects()
})
window.addEventListener("resize", () => {
  media_res_effects()
})

function media_res_effects() {
    for (let i = 0; i < MC_COMBINED_CONTENT.length; i++) {
      let h_m_bottem_playlist_two_upper_smore = document.querySelectorAll(`.h-m-bottem-playlist-two-upper-smore-${i}`)
      let h_m_bottem_playlist_two_upper_title = document.querySelectorAll(`.h-m-bottem-playlist-two-upper-title-${i}`)
      let h_m_bottem_playlist_two_upper = document.querySelectorAll(`.h_m_bottem_playlist_two_upper-${i}`)
      let h_mb_bottem_playlist_two_lower = document.querySelectorAll(`.h_mb_bottem_playlist_two_lower-${i}`)

      let in_W = window.innerWidth;
          if (in_W <= "500") {
            for (const ele of h_m_bottem_playlist_two_upper) {
              ele.style.height = "40px"
            }
            // ------For 'Title' Font Size Adj--------
            for (const ele of h_m_bottem_playlist_two_upper_title) {
              ele.style.fontSize = "17px"
            }
            // -----For 'Show all' Btn-----
            for (const ele of h_m_bottem_playlist_two_upper_smore) {
              ele.style.display = "none"
            }
            for (const ele of h_mb_bottem_playlist_two_lower) {
              ele.style.height = `calc(100% + 65px)`;
            }

          } else {
            for (const ele of h_m_bottem_playlist_two_upper) {
              ele.style.height = "50px"
            }
            // ------For 'Title' Font Size Adj--------
            for (const ele of h_m_bottem_playlist_two_upper_title) {
              ele.style.fontSize = "24px";
            }
            // -----For 'Show all' Btn-----
            for (const ele of h_m_bottem_playlist_two_upper_smore) {
              ele.style.display = "block"
            }
            for (const ele of h_mb_bottem_playlist_two_lower) {
              ele.style.height = 'calc(100% - 55px)';
            }

          }
    }
}
// FOR MEDIA QUERY EFFECTS TO MAKE RESPONSIVE WEB PAGE USING JS  -------E------

// -----------------------ALL THE SECTION IS CREATED BY JS  E  (JS-CODE = "#3004")-------------------------

//  <svg data-encore-id="icon" role="img" height="25px" width="25px"  aria-hidden="true" viewBox="0 0 24 24" class="Svg-sc-ytk21e-0 bneLcE"><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path></svg> 
