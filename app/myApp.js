require('../node_modules/jquery-1.8/jquery.min');
var model = {
    items: [
        { purchase: "Хлеб", done: false, price: 15.9 },
        { purchase: "Масло", done: false, price: 60 },
        { purchase: "Картофель", done: true, price: 22.6 },
        { purchase: "Сыр", done: false, price:310 }
    ]
};

var purchaseApp = angular.module("purchaseApp", []);
purchaseApp.controller("purchaseController", ["$scope", function ($scope) {
    $scope.list = model;
    $scope.addItem = function (text, price) {
        price = parseFloat(price); // преобразуем введенное значение к числу
        if(text != "" && !isNaN(price)) // если текст установлен и введено число, то добавляем
        {
            $scope.list.items.push({ purchase: text, price: price, done: false });
        }
    }
}]);

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