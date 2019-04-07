"use strict";
window.onmousedown = function (MouseEvent) {
    console.log(MouseEvent.button); // <- OK
    // console.log(mouseEvent.kangaroo); //<- Error!
};
window.onscroll = function (uiEvent) {
    console.log(uiEvent.button); // <- Now, no error is given
};
//# sourceMappingURL=typeInference.js.map