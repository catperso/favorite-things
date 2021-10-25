$(document).ready(function() {
  $("#favourite-things").submit(function(event) {
    event.preventDefault();
    const favArray = [$("#first").val(), $("#second").val(), $("#third").val(), $("#fourth").val(), $("#fifth").val()];
    const newFavArray = [];
    newFavArray.push(favArray[1]);
    newFavArray.push(favArray[0]);
    newFavArray.push(favArray[2]);
    
    $("#first-output").text(newFavArray[1]);
    $("#second-output").text(newFavArray[0]);
    $("#third-output").text(newFavArray[2]);
  });
});