let clique = 0;
let r2_isPlaying = false;
let jogadas = [1,2,3,4,5,6,7,8,9];
let matrix = [["A", "B","C"], ["D", "E","F"], ["G", "H","I"]];

let count_X = 0;
let count_O = 0;

function r2plays(){
	maxQuant = jogadas.length;
	qqNum = parseInt((Math.random())* maxQuant)
	clique++;
	let select = jogadas[qqNum];
	jogadas.splice(qqNum,1);
	r2_isPlaying = false;
	updateMatrix(select, clique);
	drawFigure(select, clique);
}

function humanClick(event){
	qClicked = event.target.id; //q1
	let qRef = parseInt(qClicked.slice(-1));
	
	if(!r2_isPlaying && jogadas.includes(qRef)){
		clique++;
		let index = jogadas.indexOf(qRef);
		jogadas.splice(index,1);
		let select = qRef.toString();
		updateMatrix(parseInt(select), clique);
		drawFigure(select, clique);
		r2_isPlaying = true;
		if(clique <9){
			setTimeout(r2plays,800);
		}
	}
}

function drawFigure(coord, clique){
    if (clique%2 !=0){

		let place = "#xis"+coord;
		$(place).removeClass("unselectedClass");
		$(place).addClass("point2");
		$(place+"a").removeClass("unselectedClass");
		$(place+"a").addClass("point2");

		if (clique >= 3){
			verifyWinner();
		}
	
    }else{
        let place = "#bola"+coord;
        $(place).removeClass("unselectedClass");
        $(place).addClass("point");

		if (clique >= 3){
			verifyWinner();
		}
    }

	

}

function updateMatrix(coord, clique){
	console.log(coord);
	var player = "";
	if (clique%2 !=0){
		player = "X";
	} else{
		player = "O";
	}

    switch(coord) {
		case 1:
		  matrix[0][0] = player;
		  break;
		case 2:
		  matrix[0][1] = player;
		  break;
		case 3:
		  matrix[0][2] = player;
		  break;
		case 4:
		  matrix[1][0] = player;
		  break;
		case 5:
		  matrix[1][1] = player;
		  break;
		case 6:
		  matrix[1][2] = player;;
		  break;
		case 7:
		  matrix[2][0] = player;
		  break;
		case 8:
		  matrix[2][1] = player;
		  break;
		case 9:
		  matrix[2][2] = player;
		  break;
		default:
		  alert("I have never heard of that fruit...");
	  }

}

function verifyWinner(){

	for(i=0;i<3;i++){
		for(j=0;j<3;j++){
			if(matrix[i][j]=="X"){
				count_X++;
			}else if(matrix[i][j]=="O"){
				count_O++;
			}
		}
		testaContagem(count_X,count_O);
	}

	for(j=0;j<3;j++){
		for(i=0;i<3;i++){
			if(matrix[i][j]=="X"){
				count_X++;
			}else if(matrix[i][j]=="O"){
				count_O++;
			}
		}
		testaContagem(count_X,count_O);
	}

	if(matrix[2][0] == "X" && matrix[1][1] == "X" && matrix[0][2] == "X"){
		clique = 10;
		alert("X venceu!");
	}else if(matrix[2][0] == "O" && matrix[1][1] == "O" && matrix[0][2] == "O"){
		clique = 10;
		alert("O venceu!");
	}

	for(i=0;i<3;i++){
		if(matrix[i][i]=="X"){
			count_X++;
		}else if(matrix[i][i]=="O"){
			count_O++;
		}
	}

	testaContagem(count_X,count_O);
};

function testaContagem(x,o){
	if(x==3){
		clique = 10;
		alert("Parabéns, você venceu!");
	}else if(o==3){
		clique = 10;
		alert("O computador venceu!");
	}else{
		count_X = 0;
		count_O = 0;
	}
};



