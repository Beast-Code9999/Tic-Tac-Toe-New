const GameBoard = (function GameBoard() {




    const init = function init() {

    }

    return {
        init: init,
    }
})();


const DisplayController = (function DisplayController() {


    const init = function init() {

    }

    return {
        init: init,
    }
})();


window.addEventListener('load', function() {
    GameBoard.init();
    DisplayController.init();
});