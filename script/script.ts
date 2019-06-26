class Place {
	name="";
	city="";
	zipcode="";
	address="";
	img="";

	constructor(name,city,zipcode,address,img){
		this.name=name;
		this.city=city;
		this.zipcode=zipcode;
		this.address=address;
		this.img=img;
	}

	display(){
		return `<div class="container-fluid">
		<div class="row">
		<h4>${this.name}</h4>
		<p>${this.address}, ${this.zipcode}, ${this.city}</p>
		<img class="d-sm-none d-xs-none d-lg-block" src="img/${this.img}">
		</div>
		<div>`;
	}
}

let main = document.getElementById("main"); 


var arr = new Array();

arr[0] = new Place("Arc de Triomphe", "Place Charles de Gaulle", "75008", "Paris", "arcdetriomphe.jpg");
arr[1] = new Place("Chateau de Chambord", "Chateau", "41250", "Chambord", "chambord.jpg");
arr[2] = new Place("Musée d'Orsay", "1 Rue de la Légion d'Honneur", "75007", "Paris", "dorsay.jpg");
arr[3] = new Place("Musée du Louvre", "Rue de Rivoli", "75001", "Paris", "louvre.jpg");
arr[4] = new Place("Cathédrale Notre-Dame de Paris", "6 Parvis Notre-Dame - Pl. Jean-Paul II", "75004", "Paris", "notredame.jpg");
arr[5] = new Place("Tour Eiffel", "Champ de Mars, 5 Avenue Anatole France", "75007", "Paris", "tourdeeiffel.jpg");
	//display the arr in the HTML file
	
		for (var i = 0; i < arr.length; i++) {

			main.innerHTML += arr[i].display();
		}


