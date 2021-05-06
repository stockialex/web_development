let textEng = `Hi! My name is Alex. I'm a front end developer, with some knowledge of back end, maybe on my way to be a fullstack developer?
I like to stay tuned with the tendencies and keep improving my skills.
I learnt programming using C so everything that came after that was amazing.
I use HTML, CSS and JavaScript on my projects, with the help of Bootstrap, JQuery and now also React js.
One of my hobbies is use Python to automate boring stuff. Oh and also I know the basics of SQL because it makes easier my job.
Contact me if you are looking for someone with motivation and eager to continue learning.` 

let textEsp = `Me llamo Alex y soy un desarrollador front end, con conocimientos de back end, ¿quizá en camino a ser fullstack?
Me gusta mantenerme al tanto de las nuevas tendencias y capacitarme constantemente. Aprendí a programar usando C, así que todo lo que vino después fue más divertido.
Uso HTML, CSS y JavaScript para mis proyectos,ayudándome con Bootstrap, JQuery o ahora también con React.
Me divierto buscando la manera de automatizar tareas con Python y en mi trabajo utilizo SQL.
Contactame si estás buscando a alguien con motivación y muchas ganas de seguir aprendiendo.`;

const ESP_LAN = "esp", ENG_LAN = "eng";
const SPEED_ANIMATION = "slow";
const PROFILE_TEXT = ".text-profile";
const BTN_ESP = "#spanish-lan", BTN_ENG = "#english-lan";
let activeLan = ESP_LAN;

// By default the profile text language is spanish
$(PROFILE_TEXT).text(textEsp);

// Allows to change the language
$(BTN_ESP).click(()=>{
    if(activeLan != ESP_LAN){
        $(PROFILE_TEXT).fadeOut(SPEED_ANIMATION, ()=>$(PROFILE_TEXT).text(textEsp));
        $(PROFILE_TEXT).fadeIn(SPEED_ANIMATION);
        activeLan = ESP_LAN;
    }
})
$(BTN_ENG).click(()=>{
    if(activeLan != ENG_LAN){
        $(PROFILE_TEXT).fadeOut(SPEED_ANIMATION, ()=>$(PROFILE_TEXT).text(textEng));
        $(PROFILE_TEXT).fadeIn(SPEED_ANIMATION);
        activeLan = ENG_LAN;
    }
})