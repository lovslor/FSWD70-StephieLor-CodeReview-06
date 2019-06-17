var main = document.getElementById("main"); //content will be displayed 
var Location = /** @class */ (function () {
    function Location(name, city, zipcode, address, img) {
        this.name = "";
        this.city = "";
        this.zipcode = "";
        this.address = "";
        this.img = "";
        this.name = name;
        this.city = city;
        this.zipcode = zipcode;
        this.address = address;
        this.img = img;
    }
    Location.prototype.display = function () {
        return "<div class = \"col-lg-3 col-md-6 col-12\">\n\t\t<h4>" + this.name + "</h4>\n\t\t<p>" + this.address + ", " + this.zipcode + ", " + this.city + "</p>\n\t\t<img class=\"d-sm-none d-xs-none d-lg-block\" src=\"img/" + this.img + "\">\n\t\t<div>";
    };
    return Location;
}());
var arr = new Array();
arr[0] = new Location("Arc de Triomphe", "Place Charles de Gaulle", "75008", "Paris", "arcdetriomphe.jpg");
arr[1] = new Location("Chateau de Chambord", "Chateau", "41250", "Chambord", "chambord.jpg");
arr[2] = new Location("Musée d'Orsay", "1 Rue de la Légion d'Honneur", "75007", "Paris", "dorsay.jpg");
arr[3] = new Location("Musée du Louvre", "Rue de Rivoli", "75001", "Paris", "louvre.jpg");
arr[4] = new Location("Cathédrale Notre-Dame de Paris", "6 Parvis Notre-Dame - Pl. Jean-Paul II", "75004", "Paris", "notredame.jpg");
arr[5] = new Location("Tour Eiffel", "Champ de Mars, 5 Avenue Anatole France", "75007", "Paris", "tourdeeiffel.jpg");
//display the arr in the HTML file
for (var i = 0; i < arr.length; i++) {
    loc.innerHTML += arr[i].display();
}
