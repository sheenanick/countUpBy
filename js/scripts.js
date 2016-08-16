//<!-- Back End -->

function createOutput(countTo, countBy){
  var returnArray = [];
  for(var i = countBy; i <= countTo; i += countBy){
    console.log(i);
    returnArray.push(" " + i);
  }
  return returnArray;
}

//<!-- Front End  -->
$(document).ready(function(){
  $("form").submit(function(event){
    $("div").removeClass("has-error");
    event.preventDefault();
    var countTo = parseInt($("#countTo").val());
    var countBy = parseInt($("#countBy").val());
    //console.log(countTo + " " +  countBy);
    if(!countTo || !countBy || countTo < 0 || countBy < 0 || countBy > countTo){
      if(!countTo || countTo < 0){
        $("#countToDiv").addClass("has-error");
      }
      if(!countBy || countBy < 0 || countBy > countTo) {
        $("#countByDiv").addClass("has-error");
      }
    }else {
      var outputArray = createOutput(countTo, countBy);
      //console.log(outputArray);
      $(".well").text(outputArray);
    }
  });
});
