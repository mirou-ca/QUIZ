
class Proposition{

   constructor(quest,rep1,rep2,rep3) 
  {
    this.quest = quest;
    this.rep1 = rep1;
    this.rep2 = rep2;
    this.rep3 = rep3;
  }
}

class Vrai{

   constructor(quest,rep1) 
  {
    this.quest = quest;
    this.rep1 = rep1;
  }
}


let quest1 = new Proposition('Que signifie PHP?',' Hypertext Preprocessor',' Preprocessor Home Page',' Preprocessor Home Page');
let quest2 = new Proposition('Les fichiers PHP ont l’extension …. ?',' .html','.php','.txt');
let quest3 = new Proposition('Un script PHP devrait commencer par ___ ?','<php',' <?php',' <?');
let quest4 = new Proposition('Quelle version de PHP a introduit Try/catch Exception?',' PHP 4','PHP 5','PHP 7.2');
let quest5 = new Proposition('Nous pouvons utiliser ___ pour commenter une seule ligne?','/?','//','#');


let repVrai1 = new Vrai('Que signifie PHP?',' Hypertext Preprocessor');
let repVrai2 = new Vrai('Les fichiers PHP ont l’extension …. ?','.php');
let repVrai3 = new Vrai('Un script PHP devrait commencer par ___ ?',' <?php');
let repVrai4 = new Vrai('Quelle version de PHP a introduit Try/catch Exception?','PHP 5');
let repVrai5 = new Vrai('Nous pouvons utiliser ___ pour commenter une seule ligne?','//');

tab = [quest1,quest2,quest3,quest4,quest5];
task = [repVrai1,repVrai2,repVrai3,repVrai4,repVrai5];

var i = 0 ;
function charger()
{
	
	document.getElementById('demo').innerHTML=tab[i].quest;
	document.getElementById('box1').value=tab[i].rep1;
	document.getElementById('box2').value=tab[i].rep2;
	document.getElementById('box3').value=tab[i].rep3;
	document.getElementById('box1').style.background="yellow";
	document.getElementById('box2').style.background="yellow";
	document.getElementById('box3').style.background="yellow";
	i++;

}


function chargerDefaut()
{
	document.getElementById('demo').innerHTML='Bienvenu à mon quiz';
	document.getElementById('box1').value='*****';
	document.getElementById('box2').value='*****';
	document.getElementById('box3').value='*****';
}

score = 0 ; 
moyen = (score*100)/5

function testBtn1()
{
	var get1 = document.getElementById("demo").innerHTML;
	var get2 = document.getElementById("box1");
	for(var i = 0 ; i<task.length; i++ )
	{
		if(task[i].quest==get1)
		 if(get2.value==task[i].rep1){
		 	get2.style.background ="green";	
		 	score++;
		 	document.getElementById("score").innerHTML=score;
		 }
		 else
		 	get2.style.background ="yellow";
	}
}

function testBtn2()
{
	var get1 = document.getElementById("demo").innerHTML;
	var get2 = document.getElementById("box2");
	for(var i = 0 ; i<task.length; i++ )
	{
		if(task[i].quest==get1)
		 if(get2.value==task[i].rep1){
		 	get2.style.background ="green";	
		 score ++;
		 document.getElementById("score").innerHTML=score;
		}
		 else
		 	get2.style.background ="yellow";
	}
}

function testBtn3()
{
	var get1 = document.getElementById("demo").innerHTML;
	var get2 = document.getElementById("box3");
	for(var i = 0 ; i<task.length; i++ )
	{
		if(task[i].quest==get1)
		 if(get2.value==task[i].rep1){
		 	get2.style.background ="green";	
		 score ++;
		 document.getElementById("score").innerHTML=score;
		}
		 else
		 	get2.style.background ="yellow";
	}
}

