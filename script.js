// cours 51

var ar = document.getElementById("arabic");
var en = document.getElementById("english");
var fr = document.getElementById("french");
var titlep = document.getElementById("titlep");
var welcom = document.getElementById("welcom");
var about = document.getElementById("about");
var dif = document.getElementById("dif");
var contact = document.getElementById("contact");


ar.onclick = ()=>{
    setlanguage("arabic");
    localStorage.setItem("lang","arabic");
};
en.onclick = ()=>{
    setlanguage("english");
    localStorage.setItem("lang","english");
};
fr.onclick = ()=>{
    setlanguage("french");
    localStorage.setItem("lang","french");
};

onload = ()=>{
    setlanguage(localStorage.getItem("lang"));
}

function setlanguage(getlanguage){
    if(getlanguage === "arabic"){
        titlep.innerHTML="الكشافة الإسلامية الجزائرية";
        welcom.innerHTML=" مرحبا بكم في موقع الكشافة الإسلامية الجزائرية";
        about.innerHTML="حول ك إ ج";
        dif.innerHTML="الكشافة الإسلامية الجزائــرية منظمة وطنية تربوية تطوعية مستقلة , تهدف إلى المساهمة في تنمية قدرات الأطفال والفتية والشباب روحيا وفكريا وبدنيا واجتماعيا ليكونوا مواطنين صالحين في مجتمعهم ";
        contact.innerHTML="إتصل بالكشافة الإسلامية الجزائرية";
    }
    else if(getlanguage === "english"){
        titlep.innerHTML="Algerian Islamic Scouts";
        welcom.innerHTML="welcom to website of scout";
        about.innerHTML="about SMA";
        dif.innerHTML="The Algerian Islamic Scouts is an independent, voluntary, national educational organization that aims to contribute to the spiritual, intellectual, physical and social development of children, boys, and youth to be good citizens in their society.";
        contact.innerHTML="contact SMA";
    }
    else if(getlanguage === "french"){
        titlep.innerHTML="Scouts islamiques algériens";
        welcom.innerHTML="bienvenue sur le site Web du scout";
        about.innerHTML="à propos de SMA";
        dif.innerHTML="Les scouts islamiques algériens sont une organisation éducative nationale indépendante et bénévole qui vise à contribuer au développement spirituel, intellectuel, physique et social des enfants, des garçons et des jeunes afin qu'ils soient de bons citoyens dans leur société.";
        contact.innerHTML="contacter sma";
    }
}