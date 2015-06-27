/* For getting random elements from array, using a prototype function
   Idea from here: http://stackoverflow.com/a/7120353 */
Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
}

var first_names = new Array();
first_names[0] = ["Jacob", "Mason", "William", "Jayden", "Noah", "Michael", "Ethan", "Alexander", "Aiden", "Daniel", "Anthony", "Matthew", "Elijah", "Joshua", "Liam", "Andrew", "James", "David", "Benjamin", "Logan", "Christopher", "Joseph", "Jackson", "Gabriel", "Ryan", "Samuel", "John", "Nathan", "Lucas", "Christian", "Jonathan", "Caleb", "Dylan", "Landon", "Isaac", "Gavin", "Brayden", "Tyler", "Luke", "Evan", "Carter", "Nicholas", "Isaiah", "Owen", "Jack", "Jordan", "Brandon", "Wyatt", "Julian", "Aaron", "Sophia", "Isabella", "Emma", "Olivia", "Ava", "Emily", "Abigail", "Madison", "Mia", "Chloe", "Elizabeth", "Ella", "Addison", "Natalie", "Lily", "Grace", "Samantha", "Avery", "Sofia", "Aubrey", "Brooklyn", "Lillian", "Victoria", "Evelyn", "Hannah", "Alexis", "Charlotte", "Zoey", "Leah", "Amelia", "Zoe", "Hailey", "Layla", "Gabriella", "Nevaeh", "Kaylee", "Alyssa", "Anna", "Sarah", "Allison", "Savannah", "Ashley", "Audrey", "Taylor", "Brianna", "Aaliyah", "Riley", "Camila", "Khloe", "Claire"];
first_names[1] = ["Amy", "Abigail"];

var last_names = new Array();
last_names[0] = ["Rice", "Smith", "Van Buren", "Washington", "Reese", "Watson", "Park", "Lee", "Cheng"];

var settings = new Array();
settings[0] = ["Beach", "Arctic tundra", "Waterpark", "Forest", "Theatre", "Mattress Factory", "Chicago alleyway", "Quiet Detroit suburb"];

var motivations = new Array();
motivations[0] = ["Greed", "Revenge", "To be a doctor", "To find long last father", "To win the Olympics", "To become a dog trainer", "To be the world burrito eating champion"];

window.onload = function () {
	var random_name = first_names[0].randomElement() + " " + last_names[0].randomElement();
	var random_setting = settings[0].randomElement();
	var random_motivation = motivations[0].randomElement();

	document.getElementById("Name").innerHTML=random_name;
	document.getElementById("Setting").innerHTML=random_setting;
	document.getElementById("Motivation").innerHTML=random_motivation;
}

function reload_selections() {
	var first_name_index = document.getElementById("first_name_selection").selectedIndex;
	var last_name_index = document.getElementById("last_name_selection").selectedIndex;
	var settings_index = document.getElementById("settings_selection").selectedIndex;
	var motivations_index = document.getElementById("motivations_selection").selectedIndex;

	var random_name = first_names[first_name_index].randomElement() + " " + last_names[last_name_index].randomElement();

	document.getElementById("Name").innerHTML=random_name;
	document.getElementById("Setting").innerHTML=settings[settings_index].randomElement();
	document.getElementById("Motivation").innerHTML=motivations[motivations_index].randomElement();
}


