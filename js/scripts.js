$(function(){
	$("#submit").click(function(event){
		var side1 = parseFloat($("#side1").val());
		var side2 = parseFloat($("#side2").val());
		var side3 = parseFloat($("#side3").val());
		if(side1+side2>side3 && side1+side3>side2 && side2+side3>side1){
			if(side1 === side2 && side2 === side3){
				$("#answer").text("An Equilateral Triangle");
				$("#hanswer").show();

			}
			if((side1 === side2 && side2 != side3) || (side1 === side3 && side1 != side2) || (side2 === side3 && side1 != side3)){
				$("#answer").text("An Isosceles Triangle");
				$("#hanswer").show();

			}
			if(side1 != side2 && side1 != side3 && side2 != side3){
				$("#answer").text("An Scalene Triangle");
				$("#hanswer").show();
			}
		}else{
			$("#answer").text("is not a triangle");
			$("#hanswer").show();
		}
		event.preventDefault();
	});
});