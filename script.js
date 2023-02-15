var clique = 0;
var r2_isPlaying = false;
var jogadas = [1,2,3,4,5,6,7,8,9];

$(document).ready(function(){

/*	$("#b00").click(function(){
        
        $(this).hide();
		setTimeout(initiate,400)
    });               */                
	
	$("#q1").click(function(){

		if(!r2_isPlaying && jogadas.includes(1)){
			clique++;
			let index = jogadas.indexOf(1);
			jogadas.splice(index,1);
			var val="1";
			drawFigure(val, clique);
			r2_isPlaying = true;
			setTimeout(r2plays,800);
			
		}
		
    });
	
	$("#q2").click(function(){
		if(!r2_isPlaying && jogadas.includes(2)){
			clique++;
			let index = jogadas.indexOf(2);
			jogadas.splice(index,1);
			var val="2";
			drawFigure(val, clique);
			r2_isPlaying = true;
			setTimeout(r2plays,800);
			
		}
    });
	
	$("#q3").click(function(){
		if(!r2_isPlaying && jogadas.includes(3)){
			clique++;
			let index = jogadas.indexOf(3);
			jogadas.splice(index,1);
			var val="3";
			drawFigure(val, clique);
			r2_isPlaying = true;
			setTimeout(r2plays,800);
			
		}
    });
	
	$("#q4").click(function(){
		if(!r2_isPlaying && jogadas.includes(4)){
			clique++;
			let index = jogadas.indexOf(4);
			jogadas.splice(index,1);
			var val="4";
			drawFigure(val, clique);
			r2_isPlaying = true;
			setTimeout(r2plays,800);
			
		}
    });
	
	$("#q5").click(function(){
		if(!r2_isPlaying && jogadas.includes(5)){
			clique++;
			let index = jogadas.indexOf(5);
			jogadas.splice(index,1);
			var val="5";
			drawFigure(val, clique);
			r2_isPlaying = true;
			setTimeout(r2plays,800);
			
		}
    });
	
	$("#q6").click(function(){
		if(!r2_isPlaying && jogadas.includes(6)){
			clique++;
			let index = jogadas.indexOf(6);
			jogadas.splice(index,1);
			var val="6";
			drawFigure(val, clique);
			r2_isPlaying = true;
			setTimeout(r2plays,800);
			
		}
    });
	
	$("#q7").click(function(){
			if(!r2_isPlaying && jogadas.includes(7)){
			clique++;
			let index = jogadas.indexOf(7);
			jogadas.splice(index,1);
			var val="7";
			drawFigure(val, clique);
			r2_isPlaying = true;
			setTimeout(r2plays,800);
			
		}
    });
	
	$("#q8").click(function(){
		if(!r2_isPlaying && jogadas.includes(8)){
			clique++;
			let index = jogadas.indexOf(8);
			jogadas.splice(index,1);
			var val="8";
			drawFigure(val, clique);
			r2_isPlaying = true;
			setTimeout(r2plays,800);
			
		}
    });
	
	$("#q9").click(function(){
		if(!r2_isPlaying && jogadas.includes(9)){
			clique++;
			let index = jogadas.indexOf(9);
			jogadas.splice(index,1);
			var val="9";
			drawFigure(val, clique);
			r2_isPlaying = true;
			setTimeout(r2plays,800);
			
		}
    });
		
});

function r2plays(){
	maxQuant = jogadas.length;
	console.log(maxQuant);
	qqNum = parseInt((Math.random())* maxQuant)
	clique++;
	let select = jogadas[qqNum];
	console.log(jogadas);
	console.log(select);
	jogadas.splice(qqNum,1);
	r2_isPlaying = false;
	drawFigure(select, clique);
}

function drawFigure(coord, clique){
	console.log(coord)
    if (clique%2 !=0){
    let place = "#xis"+coord;
    $(place).removeClass("unselectedClass");
    $(place).addClass("point2");
    $(place+"a").removeClass("unselectedClass");
    $(place+"a").addClass("point2");
	
    }else{
        let place = "#bola"+coord;
        $(place).removeClass("unselectedClass");
        $(place).addClass("point");
    }

}