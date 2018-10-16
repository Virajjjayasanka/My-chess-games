
var Letters=['A','B','C','D','E','F','G','H'];
var numbers=[1, 2, 3, 4, 5, 6, 7, 8];

var currentPossition;
var suares;
var chess;

var pondCount;
var CountArray= new Array(9);

$(document).ready(function () {
    suares=$('.square');
    chess=$('.chess');
    pondCount=0;
    for(var i=0;i<CountArray.length;i++){
        CountArray[i]=0;
    }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////

$('.chess').on("click",function (eventData) {
    currentPossition=$(this);
    console.log(currentPossition);

    if (!(currentPossition.hasClass('clickpiece')) && currentPossition.hasClass('pondblack')){
        pondCount=0;
        pathofpondblack(currentPossition);

    }
    if (!(currentPossition.hasClass('clickpiece')) && currentPossition.hasClass('pondwhite')){
        pondCount=0;
        pathofpondwhite(currentPossition);

    }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////

function pathofpondblack(eventData) {
    currentPossition=eventData;
    suares.removeClass('selectpath');
    chess.removeClass('clickpiece');
    var currentId=currentPossition.parent().attr('id');
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPossition=($.inArray(letter,Letters));
    var numArrayPossition=($.inArray(parseInt(no),numbers));
    var tempId=Letters[LettersArrayPossition]+numbers[numArrayPossition+1];
    var x=LettersArrayPossition;

    for (var y=numArrayPossition+1;y<4;y++){
        tempId=Letters[x]+numbers[y];
        if (!($("#"+tempId).children().hasClass('chess'))){
            $("#"+tempId).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        else{
            break;
        }
    }
    if (!($("#"+tempId).children().hasClass('chess'))){
        $("#"+tempId).addClass('selectpath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');

    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function pathofpondwhite(eventData) {
    currentPossition=eventData;
    suares.removeClass('selectpath');
    chess.removeClass('clickpiece');
    var currentId=currentPossition.parent().attr('id');
    console.log(currentId);
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPossition=($.inArray(letter,Letters));
    var numArrayPossition=($.inArray(parseInt(no),numbers));
    var tempId1=Letters[LettersArrayPossition]+numbers[numArrayPossition-1];
    var tempId2=Letters[LettersArrayPossition]+numbers[numArrayPossition-2];

    switch(currentPossition.attr('id')){
        case "17" :CountArray[0]++; break;
        case "18" :CountArray[1]++; break;
        case "19" :CountArray[2]++; break;
        case "20" :CountArray[3]++; break;
        case "21" :CountArray[4]++; break;
        case "22" :CountArray[5]++; break;
        case "23" :CountArray[6]++; break;
        case "24" :CountArray[7]++; break;
    }

    if (CountArray[0]==1){
        if (!($("#"+tempId1).children().hasClass('chess'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('chess'))){
            $("#"+tempId2).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('chess'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');

        }
    }
    if (CountArray[1]==1){
        if (!($("#"+tempId1).children().hasClass('chess'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('chess'))){
            $("#"+tempId2).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('chess'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');

        }
    }
    if (CountArray[2]==1){
        if (!($("#"+tempId1).children().hasClass('chess'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('chess'))){
            $("#"+tempId2).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('chess'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');

        }
    }
    if (CountArray[3]==1){
        if (!($("#"+tempId1).children().hasClass('chess'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('chess'))){
            $("#"+tempId2).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('chess'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');

        }
    }
    if (CountArray[4]==1){
        if (!($("#"+tempId1).children().hasClass('chess'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('chess'))){
            $("#"+tempId2).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('chess'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');

        }
    }
    if (CountArray[5]==1){
        if (!($("#"+tempId1).children().hasClass('chess'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('chess'))){
            $("#"+tempId2).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('chess'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');

        }
    }
    if (CountArray[6]==1){
        if (!($("#"+tempId1).children().hasClass('chess'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('chess'))){
            $("#"+tempId2).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('chess'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');

        }
    }
    if (CountArray[7]==1){
        if (!($("#"+tempId1).children().hasClass('chess'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('chess'))){
            $("#"+tempId2).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('chess'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');

        }
    }
    if (CountArray[8]==1){
        if (!($("#"+tempId1).children().hasClass('chess'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('chess'))){
            $("#"+tempId2).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('chess'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');

        }
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(".square").on("click",function (eventData) {
    var currentSquar=$(this);
    var currentpiece=$(".chess.clickpiece");
    if ($(currentSquar).hasClass('selectpath')){
        currentSquar.append(currentpiece);
        chess.removeClass('clickpiece');
        suares.removeClass('selectpath');

    }
});









