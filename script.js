/* For getting random elements from array, using a prototype function
   Idea from here: http://stackoverflow.com/a/7120353 */
Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
}
/* The data for lists is defined here. */
var first_names = new Array();
first_names[0] = ["Jacob", "Mason", "William", "Jayden", "Noah", "Michael", "Ethan", "Alexander", "Aiden", "Daniel", "Anthony", "Matthew", "Elijah", "Joshua", "Liam", "Andrew", "James", "David", "Benjamin", "Logan", "Christopher", "Joseph", "Jackson", "Gabriel", "Ryan", "Samuel", "John", "Nathan", "Lucas", "Christian", "Jonathan", "Caleb", "Dylan", "Landon", "Isaac", "Gavin", "Brayden", "Tyler", "Luke", "Evan", "Carter", "Nicholas", "Isaiah", "Owen", "Jack", "Jordan", "Brandon", "Wyatt", "Julian", "Aaron", "Sophia", "Isabella", "Emma", "Olivia", "Ava", "Emily", "Abigail", "Madison", "Mia", "Chloe", "Elizabeth", "Ella", "Addison", "Natalie", "Lily", "Grace", "Samantha", "Avery", "Sofia", "Aubrey", "Brooklyn", "Lillian", "Victoria", "Evelyn", "Hannah", "Alexis", "Charlotte", "Zoey", "Leah", "Amelia", "Zoe", "Hailey", "Layla", "Gabriella", "Nevaeh", "Kaylee", "Alyssa", "Anna", "Sarah", "Allison", "Savannah", "Ashley", "Audrey", "Taylor", "Brianna", "Aaliyah", "Riley", "Camila", "Khloe", "Claire"];


var last_names = new Array();
last_names[0] = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Miller", "Davis", "Garcia", "Rodriguez", "Wilson", "Martinez", "Anderson", "Taylor", "Thomas", "Hernandez", "Moore", "Martin", "Jackson", "Thompson", "White", "Lopez", "Lee", "Gonzalez", "Harris", "Clark", "Lewis", "Robinson", "Walker", "Perez", "Hall", "Young", "Allen", "Sanchez", "Wright", "King", "Scott", "Green", "Baker", "Adams", "Nelson", "Hill", "Ramirez", "Campbell", "Mitchell", "Roberts", "Carter", "Phillips", "Evans", "Turner", "Torres", "Parker", "Collins", "Edwards", "Stewart", "Flores", "Morris", "Nguyen", "Murphy", "Rivera", "Cook", "Rogers", "Morgan", "Peterson", "Cooper", "Reed", "Bailey", "Bell", "Gomez", "Kelly", "Howard", "Ward", "Cox", "Diaz", "Richardson", "Wood", "Watson", "Brooks", "Bennett", "Gray", "James", "Reye", "Cruz", "Hughes", "Price", "Myers", "Long", "Foster", "Sanders", "Ross", "Morales", "Powell", "Sullivan", "Russell", "Ortiz", "Jenkins", "Gutierrez", "Perry", "Butler", "Barnes", "Fisher"]; /* Source: https://en.wikipedia.org/wiki/List_of_most_common_surnames_in_North_America */

last_names[1] = ["Tremblay", "Gagnon", "Roy", "Cote", "Bouchard", "Gauthier", "Morin", "Lavoie", "Fortin", "Gagne", "Ouellet", "Pelletier", "Belanger", "Levesque", "Bergeron", "Leblanc", "Paquette", "Girard", "Simard", "Boucher", "Caron", "Beaulieu", "Cloutier", "Dube", "Poirier", "Fournier", "Lapointe", "Leclerc", "Lefebvre", "Poulin", "Thibault", "St-Pierre", "Nadeau", "Martin", "Landry", "Martel", "Bedard", "Grenier", "Lessard", "Bernier", "Richard", "Michaud", "Hebert", "Desjardins", "Couture", "Turcotte", "Lachance", "Parent", "Blais", "Gosselin", "Savard", "Proulx", "Beaudoin", "Demers", "Perreault", "Boudreau", "Lemieux", "Cyr", "Perron", "Dufour", "Dion", "Mercier", "Bolduc", "Berube", "Boisvert", "Langlois", "Menard", "Therrien", "Plante", "Bilodeau", "Blanchette", "Dubois", "Champagne", "Fortier", "Arsenault", "Dupuis", "Gaudreault", "Hamel", "Houle", "Villeneuve", "Paradis", "Rousseau", "Gravel", "Theriault", "Lemay", "Robert", "Allard", "Deschenes", "Giroux", "Guay", "Leduc", "Boivin", "Charbonneau", "Lambert", "Raymond", "Vachon", "Gilbert", "Audet", "Jean", "Larouche"]; /* Source: https://en.wikipedia.org/wiki/List_of_most_common_surnames_in_North_America */

last_names[2] = ["Martinez", "Garcia", "Hernandez", "Gonzalez", "Lopez", "Rodriguez", "Perez", "Sanchez", "Ramirez", "Flores"]; /* Source: https://en.wikipedia.org/wiki/List_of_most_common_surnames_in_North_America */

var settings = new Array();
settings[0] = ["Beach", "Arctic tundra", "Waterpark", "Forest", "Theatre", "Mattress Factory", "Chicago alleyway", "Quiet Detroit suburb"];

var motivations = new Array();
motivations[0] = ["Greed", "Revenge", "To be a doctor", "To find long last father", "To win the Olympics", "To become a dog trainer", "To be the world burrito eating champion"];


/* This loads on page load and will generate the specified part of the page */
window.onload = function () {	
	/* Setup the initial generated names */
	var random_name = first_names[0].randomElement() + " " + last_names[0].randomElement();
	var random_setting = settings[0].randomElement();
	var random_motivation = motivations[0].randomElement();

	document.getElementById("Name").innerHTML=random_name;
	document.getElementById("Setting").innerHTML=random_setting;
	document.getElementById("Motivation").innerHTML=random_motivation;
}


/* This is run on button press to update based on selections */
function reload_selections() {
	var first_name_index = document.getElementById("first_name_selection").selectedIndex;
	var last_name_index = document.getElementById("last_name_selection").selectedIndex;
	var settings_index = document.getElementById("settings_selection").selectedIndex;
	var motivations_index = document.getElementById("motivations_selection").selectedIndex;

	//alert( document.getElementById("last_name_selection").selectedIndex);

	var random_name = first_names[first_name_index].randomElement() + " " + last_names[last_name_index].randomElement();

	document.getElementById("Name").innerHTML=random_name;
	document.getElementById("Setting").innerHTML=settings[settings_index].randomElement();
	document.getElementById("Motivation").innerHTML=motivations[motivations_index].randomElement();
}


