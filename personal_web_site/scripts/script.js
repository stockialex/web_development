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

// By default the profile text language is spanish
$(".text-profile").text(textEsp);

// Allows to change the language
$("#spanish-lan").click(()=>{ 
    $(".text-profile").text(textEsp);
});

$("#english-lan").click(()=>{ 
    $(".text-profile").text(textEng);
});