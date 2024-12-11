var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Junior Front-End Developer')
    .pauseFor(2500)
    .deleteAll()
    .typeString('¡If you can imagine it, you can code it!')
    .pauseFor(2500)
    //numero de caracteres que se borraran
    .deleteChars(10)
    .typeString('<strong>crear!</strong>')
    .pauseFor(2500)
    .start();