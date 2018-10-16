require('./node_modules/jquery-1.8/jquery.min');
var drawing = document.getElementById("drawing");
// проверка полной подержки элемента < canvas >
if (drawing != null){
    if (drawing.getContext ) {
        var context = drawing . getContext ( "2d" ) ;
        // Код рисования

        // рисование красного квадрата
        context.fillStyle = "#44ff02" ;
        context.fillRect( 10, 10, 50, 50 );
        // рисование сине го полупрозрачного квадрата
        context.fillStyle = "rgba(0,0,255,0.5)";
        context.fillRect(30, 30, 50, 50) ;

        // очистка квадрата в области наложения двух квадратов
        context.clearRect (40, 40, 10, 10 ) ;
    };
}
$('#btn').bind('click', function () {
    alert('Click');
});
