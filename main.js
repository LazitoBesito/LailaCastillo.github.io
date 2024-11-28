var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Desarrolladora Frontend Jr.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('¡Todo lo que logres imaginar, tambien lo puedes programar!')
    .pauseFor(2500)
    //numero de caracteres que se borraran
    .deleteChars(10)
    .typeString('<strong>crear!</strong>')
    .pauseFor(2500)
    .start();