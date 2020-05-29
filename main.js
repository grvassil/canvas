$(document).ready(function() {
    paper.install(window);
    paper.setup(document.getElementById('maincanvas'));
    'use strict'
    for (let x = 0; x < 400; x+=50) {
        for (let y = 0; y < 400; y+=50) {
                c = Shape.Circle(x, y, 20);
                c.fillColor = 'blue';

        }
    }
   
    paper.view.draw();
});