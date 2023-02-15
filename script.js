var clique = 0;
var r2_isPlaying = false;
var jogadas = [1,2,3,4,5,6,7,8,9];

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

function ondeClicou(event){
	qClicked = event.target.id; //q1
	let qRef = parseInt(qClicked.slice(-1));
	
	if(!r2_isPlaying && jogadas.includes(qRef)){
		clique++;
		let index = jogadas.indexOf(qRef);
		jogadas.splice(index,1);
		var val = qRef.toString();
		drawFigure(val, clique);
		r2_isPlaying = true;
		setTimeout(r2plays,800);
		
	}
}