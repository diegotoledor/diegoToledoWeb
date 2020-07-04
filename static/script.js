// Nav Bar responsive behavior

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

burger.addEventListener('click', ()=> {

    nav.classList.toggle('nav-active');


    navLinks.forEach((link, index) => {
        if(link.style.animation) {
            link.style.animation = '';            
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index/5+0.5}s`;
            console.log(index)
             }
        });
    
    burger.classList.toggle('toggle');
    }); 
 }

navSlide();

// nav bar sticky behavior

$('.navbar a').on('click', function(e){
    if (this.hash !== '') {
        e.preventDefault();
        
        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800);
    }
});

// Text changing About Section

var space = '&nbsp;'; 
var fiveSpaces = '&nbsp;' + '&nbsp;' + '&nbsp;' + '&nbsp;' + '&nbsp;';
var tenSpaces = fiveSpaces = fiveSpaces;
var docTitle = document.getElementById("about-title-text");
var docName = document.getElementById("about-tag-one");

var aboutTitleOne = "Personal Information";
var aboutTitleTwo = "Education";
var aboutTitleThree = "Experience";

var aboutNameOne = `<b> Name: </b>`;
var aboutNameTwo = `Diego Toledo Rutllant`

var aboutSchool = `<b>School: </b> Teresiano E. de Ossó`;
var aboutSchoolTwo = `1996 - 2009`;

var aboutFirstJob = `<b> Enjoy Casino S.A </b> ${space} Paralegal`;
var aboutFirstJobTwo = `2015 - 2017`;

var aboutAge = `<b> Age: </b>`;
var aboutAgeTwo = `Old (28)`;

var aboutUni = `<b> B.L: </b> Universidad Adolfo Ibañez`;
var aboutUniTwo = `2010 - 2017`;

var aboutSecondJob = `<b> C.D.A.J Peñalolen </b> ${space} Lawyer ` ;
var aboutSecondJobTwo = `2017 - 2018`;

var aboutBirth = `<b> Date of Birth:</b>`;
var aboutBirthTwo =  `13.09.1991`;

var aboutJob = `<b> MimoHello GmbH </b>  <br> QA specialist`;
var aboutJobTwo = `2018 - 2020`;

var aboutMasters = `<b>M.A:</b> Work in Progress`;
var aboutMastersTwo = `2020 - 2050`;


var aboutNationality = `<b>Nationality:</b>`;
var aboutNationalityTwo = `Chilean`;

var aboutPlaceOfBirth = `<b>Place of Birth: </b>`;
var aboutPlaceOfBirthTwo = `Santiago`;

var personalPic = "/static/images/58639173_447219032718970_1322410443645513379_n.jpg";
var aboutLawyerPic = "/static/images/41755133_10214873775211569_3678673238877011968_n.jpg";
var aboutUai = "/static/images/d29b4025b978f5bc246bfac5a219bef9.jpg";
var aboutMimoTeam = "/static/images/mimo-team.png";



var legendAbout = document.getElementById("legend-tag-one");
var legendTitle = document.getElementById("title-life-text");

var legendPersonalOverview = "Overview"
var legendPersonalTile =    ` <p>Currently living in Vienna, Austria, Diego is a Chilean QA Specialist born in Santiago de Chile.
                            <br>
                            <br>
                            Having worked in several areas and industries he's now working as a free lancer developing strategies and technologies for new ventures and independent entrepreneurs who want to start their own ventures </p>`;


var legendTitleStudies = "Formation";

var legendPersonalStudies = `<p>In his early years Diego went to the Colegio Teresiano Enrique de Ossó where he got the most fundamentals of his fomative years finding great inclination for the humanities, especially History, Philosophy and Languages.
                            <br>
                            <br>
                        After high school he started studying Law in Universidad Adolfo Ibañez located in Santiago, where he participated in many activities like student government, political meetings and business workshops imparted by the Universidad Catolica de Chile.
                            <br>
                            <br>
                        Once finished he received his degree from the Supreme Court of Justice and decided to spread wings across to sea to learn German in Bavaria, Germany, for a season.
                            <br>
                            <br>
                        Today his path is acquiring technical prowess learning different technologies to develop projects for himself and his clients.</p>`;

var legendTitleExperience = "Working experience";

var legendPersonalExperience = `<p> In his second year of lawschool, Diego was recruited to join one of the largest entertainment companies in Chile as a paralegal, <b>Enjoy Casinos </b>. Serving as a paralegal in the labor department, he consolidated his legal knowledge becoming proficient in contract drafting, labor relations and collective bargaining, being in the fast track for a corporate lawyers position in the company.
                            <br>    
                            <br>    
                                Later on, Diego served as a public counsel for under priviledged neighbours in Santiago, to help with their litigations and the defense of their rights. There he greatly improved his knowledge on litigation, negotiation, and civil law, exceeding in his performance.
                            <br>
                            <br>
                                As part of his moving to Europe, Diego decided to take on a new challenge by changing his field of expertice and started working on MimoHello GmbH, where he developed the skills needed for web development and agile methodologies.   
                            </p>`


document.getElementById("about-title-text").innerHTML = aboutTitleOne;

document.getElementById("about-tag-one").innerHTML = aboutNameOne;
document.getElementById("about-tag-name").innerHTML = aboutNameTwo;

document.getElementById("about-tag-two").innerHTML = aboutAge;
document.getElementById("about-tag-age").innerHTML = aboutAgeTwo;

document.getElementById("about-tag-three").innerHTML = aboutBirth;
document.getElementById("about-tag-birth").innerHTML = aboutBirthTwo;

document.getElementById("about-tag-four").innerHTML = aboutNationality;
document.getElementById("about-tag-nationality").innerHTML = aboutNationalityTwo;

document.getElementById("about-tag-five").innerHTML = aboutPlaceOfBirth;
document.getElementById("about-tag-birth-place").innerHTML = aboutPlaceOfBirthTwo;

document.getElementById("profile-pic").src = personalPic;

legendAbout.innerHTML = legendPersonalTile; 
legendTitle.innerHTML = legendPersonalOverview;


function nextSlide() {

    if (docTitle.innerHTML === aboutTitleOne){
        docTitle.innerHTML = aboutTitleTwo;

        document.getElementById("about-tag-one").innerHTML = aboutSchoolTwo;
        document.getElementById("about-tag-name").innerHTML = aboutSchool;

        document.getElementById("first-info-container").classList.add("year-container");
        document.getElementById("second-info-container").classList.add("year-container");
        document.getElementById("third-info-container").classList.add("year-container");

        document.getElementById("about-tag-two").innerHTML = aboutUniTwo;
        document.getElementById("about-tag-age").innerHTML = aboutUni;

        document.getElementById("about-tag-three").innerHTML = aboutMastersTwo;
        document.getElementById("about-tag-birth").innerHTML = aboutMasters;

        document.getElementById("about-tag-four").innerHTML = space;
        document.getElementById("about-tag-nationality").innerHTML = space;
        document.getElementById("about-tag-five").innerHTML = space;
        document.getElementById("about-tag-birth-place").innerHTML = space;

        legendAbout.innerHTML = legendPersonalStudies; 
        legendTitle.innerHTML = legendTitleStudies; 

        document.getElementById("profile-pic").src = aboutLawyerPic;

    }

    else if (docTitle.innerHTML === aboutTitleTwo) {
        docTitle.innerHTML=aboutTitleThree;

        document.getElementById("about-tag-one").innerHTML = aboutFirstJobTwo;
        document.getElementById("about-tag-name").innerHTML = aboutFirstJob;

        document.getElementById("about-tag-two").innerHTML = aboutSecondJobTwo;
        document.getElementById("about-tag-age").innerHTML = aboutSecondJob;
        
        document.getElementById("about-tag-three").innerHTML = aboutJobTwo;
        document.getElementById("about-tag-birth").innerHTML = aboutJob;

        document.getElementById("profile-pic").src = aboutMimoTeam;

        legendAbout.innerHTML = legendPersonalExperience; 
        legendTitle.innerHTML = legendTitleExperience; 
    }

    else{
        docTitle.innerHTML=aboutTitleOne;

        document.getElementById("about-tag-one").innerHTML = aboutNameOne;
        document.getElementById("about-tag-name").innerHTML = aboutNameTwo;

        document.getElementById("about-tag-two").innerHTML = aboutAge;
        document.getElementById("about-tag-age").innerHTML = aboutAgeTwo;

        document.getElementById("about-tag-three").innerHTML = aboutBirth;
        document.getElementById("about-tag-birth").innerHTML = aboutBirthTwo;

        document.getElementById("about-tag-four").innerHTML = aboutNationality;
        document.getElementById("about-tag-nationality").innerHTML = aboutNationalityTwo;

        document.getElementById("about-tag-five").innerHTML = aboutPlaceOfBirth;
        document.getElementById("about-tag-birth-place").innerHTML = aboutPlaceOfBirthTwo;

        document.getElementById("first-info-container").classList.remove("year-container");
        document.getElementById("second-info-container").classList.remove("year-container");
        document.getElementById("third-info-container").classList.remove("year-container");

        document.getElementById("profile-pic").src = personalPic;

        legendAbout.innerHTML = legendPersonalTile; 
        legendTitle.innerHTML = legendPersonalOverview;
    }
} ;


function prevSlide() {

    if (docTitle.innerHTML === aboutTitleOne){

        docTitle.innerHTML=aboutTitleThree;

        
        document.getElementById("about-tag-one").innerHTML = aboutFirstJobTwo;
        document.getElementById("about-tag-name").innerHTML = aboutFirstJob;

        document.getElementById("about-tag-two").innerHTML = aboutSecondJobTwo;
        document.getElementById("about-tag-age").innerHTML = aboutSecondJob;
        
        document.getElementById("about-tag-three").innerHTML = aboutJobTwo;
        document.getElementById("about-tag-birth").innerHTML = aboutJob;

        document.getElementById("profile-pic").src = aboutMimoTeam;

        document.getElementById("about-tag-four").innerHTML = space;
        document.getElementById("about-tag-nationality").innerHTML = space;
        document.getElementById("about-tag-five").innerHTML = space;
        document.getElementById("about-tag-birth-place").innerHTML = space;
        
        legendAbout.innerHTML = legendPersonalExperience; 
        legendTitle.innerHTML = legendTitleExperience; 
        
    }

    else if (docTitle.innerHTML === aboutTitleTwo) {
        
        docTitle.innerHTML=aboutTitleOne;

        document.getElementById("about-tag-one").innerHTML = aboutNameOne;
        document.getElementById("about-tag-name").innerHTML = aboutNameTwo;

        document.getElementById("about-tag-two").innerHTML = aboutAge;
        document.getElementById("about-tag-age").innerHTML = aboutAgeTwo;

        document.getElementById("about-tag-three").innerHTML = aboutBirth;
        document.getElementById("about-tag-birth").innerHTML = aboutBirthTwo;

        document.getElementById("about-tag-four").innerHTML = aboutNationality;
        document.getElementById("about-tag-nationality").innerHTML = aboutNationalityTwo;

        document.getElementById("about-tag-five").innerHTML = aboutPlaceOfBirth;
        document.getElementById("about-tag-birth-place").innerHTML = aboutPlaceOfBirthTwo;

        document.getElementById("first-info-container").classList.remove("year-container");
        document.getElementById("second-info-container").classList.remove("year-container");
        document.getElementById("third-info-container").classList.remove("year-container");

        document.getElementById("profile-pic").src = personalPic;

        legendAbout.innerHTML = legendPersonalTile; 
        legendTitle.innerHTML = legendPersonalOverview;
    }

    else {
        docTitle.innerHTML = aboutTitleTwo;
        
        document.getElementById("about-tag-one").innerHTML = aboutSchoolTwo;
        document.getElementById("about-tag-name").innerHTML = aboutSchool;

        document.getElementById("first-info-container").classList.add("year-container");
        document.getElementById("second-info-container").classList.add("year-container");
        document.getElementById("third-info-container").classList.add("year-container");

        document.getElementById("about-tag-two").innerHTML = aboutUniTwo;
        document.getElementById("about-tag-age").innerHTML = aboutUni;

        document.getElementById("about-tag-three").innerHTML = aboutMastersTwo;
        document.getElementById("about-tag-birth").innerHTML = aboutMasters;

        document.getElementById("about-tag-four").innerHTML = space;
        document.getElementById("about-tag-nationality").innerHTML = space;
        document.getElementById("about-tag-five").innerHTML = space;
        document.getElementById("about-tag-birth-place").innerHTML = space;


        document.getElementById("profile-pic").src = aboutLawyerPic;

        legendAbout.innerHTML = legendPersonalStudies; 
        legendTitle.innerHTML = legendTitleStudies; 

    }
} ;




/* document.getElementById("yourH1_element_Id").innerHTML = "yourTextHere";
 */
// fade-in effect Work Section

$(document).ready(function() {

        $(window).scroll( function(){
            $('.fade-in-1').each( function(i){
                var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                 
                if( bottom_of_window > bottom_of_element ){
                    $(this).animate({'opacity':'1', "margin-top":"0px"},1000);
                }
            });

            $('.fade-in-2').each( function(i){
                var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                 
                if( bottom_of_window > bottom_of_element ){
                    $(this).animate({'opacity':'1', "margin-top":"0px"},1500);
                }
            });
            
            $('.fade-in-3').each( function(i){
                var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                 
                if( bottom_of_window > bottom_of_element ){
                    $(this).animate({'opacity':'1', "margin-top":"0px"},2000);
                }
            });
        
        });
    });
    

// Overlay appearing

function overlayOneOn() {
    document.getElementById("overlay-1").style.display = "block";
};

function overlayOneOff() {
    document.getElementById("overlay-1").style.display = "none";
};

function overlayTwoOn() {
    document.getElementById("overlay-2").style.display = "block";
};

function overlayTwoOff() {
    document.getElementById("overlay-2").style.display = "none";
};

// Light Mode

function lightMode(){
    document.getElementsByTagName("BODY")[0].style.background = "white";
}

// Animating text

const text = document.querySelector(".fancy");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";



for (let i=0; i <splitText.length; i++){
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}


let char = 0;
let timer = setInterval(onTick, 50)

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if (char === splitText.length){
        complete();
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer = null
}

const subtitle = document.querySelector(".fancy-2");
const subText = subtitle.textContent;
const secondSplit = subText.split("");
subtitle.textContent = "";

for (let i=0; i <secondSplit.length; i++){
    subtitle.innerHTML += "<span>" + secondSplit[i] + "</span>";
}
 
let charTwo = 0;
let timerTwo = setInterval(onTickTwo, 50)

function onTickTwo(){
    const spanTwo = subtitle.querySelectorAll('span')[char];
    spanTwo.classList.add('fade');
    charTwo++;
    if (charTwo === subtitle.length){
        completed();
        return;
    }
}

function completed(){
    clearInterval(timerTwo);
    timerTwo = null
} 