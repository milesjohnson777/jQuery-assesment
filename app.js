//DOCUMENT READY FUNCTION

$(document).ready(function(){

    $('.target').append('<button class="generator">generate</div>');

    $('.generator').on('click', createManipulator);

});

//VARS

var count=0;

//DOM FUNCTIONS

function createManipulator(){
    $('.target').append('<div class="manipulate">' +
    '<button class="delete">delete</button>' +
    '<button class="change">change</button>' +
    '<p class="count">some text</p>' +
    '</div>');

    $('.manipulate').on('click', '.delete', deleteParentContainer);

    $('.manipulate').on('click', '.change', changeParentContainer);
}

function deleteParentContainer(){
    $(this).parent().remove();
}

function changeParentContainer(){
    $(this).parent().toggleClass('changecolor');
    count++;
    counter();
}

function counter(){
    $('.count').text('the change button has been clicked: ' + count + ' times.');
}
