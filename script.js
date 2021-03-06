/* For getting random elements from array, using a prototype function
   Idea from here: http://stackoverflow.com/a/7120353 */
Array.prototype.random_element = function () {
    return this[Math.floor(Math.random() * this.length)]
}

/* The data for lists is defined here. */
var first_names = new Array();
first_names[0] = ["Jacob", "Mason", "William", "Jayden", "Noah", "Michael", "Ethan", "Alexander", "Aiden", "Daniel", "Anthony", "Matthew", "Elijah", "Joshua", "Liam", "Andrew", "James", "David", "Benjamin", "Logan", "Christopher", "Joseph", "Jackson", "Gabriel", "Ryan", "Samuel", "John", "Nathan", "Lucas", "Christian", "Jonathan", "Caleb", "Dylan", "Landon", "Isaac", "Gavin", "Brayden", "Tyler", "Luke", "Evan", "Carter", "Nicholas", "Isaiah", "Owen", "Jack", "Jordan", "Brandon", "Wyatt", "Julian", "Aaron", "Sophia", "Isabella", "Emma", "Olivia", "Ava", "Emily", "Abigail", "Madison", "Mia", "Chloe", "Elizabeth", "Ella", "Addison", "Natalie", "Lily", "Grace", "Samantha", "Avery", "Sofia", "Aubrey", "Brooklyn", "Lillian", "Victoria", "Evelyn", "Hannah", "Alexis", "Charlotte", "Zoey", "Leah", "Amelia", "Zoe", "Hailey", "Layla", "Gabriella", "Nevaeh", "Kaylee", "Alyssa", "Anna", "Sarah", "Allison", "Savannah", "Ashley", "Audrey", "Taylor", "Brianna", "Aaliyah", "Riley", "Camila", "Khloe", "Claire"];
first_names[1] = ["James", "John", "Robert", "Michael", "William", "David", "Richard", "Joseph", "Charles", "Thomas", "Christopher", "Daniel", "Matthew", "Donald", "Anthony", "Mark", "Paul", "Steven", "George", "Kenneth", "Andrew", "Edward", "Joshua", "Brian", "Kevin", "Ronald", "Timothy", "Jason", "Jeffrey", "Ryan", "Gary", "Nicholas", "Eric", "Jacob", "Stephen", "Jonathan", "Larry", "Frank", "Scott", "Justin", "Brandon", "Raymond", "Gregory", "Samuel", "Benjamin", "Patrick", "Jack", "Dennis", "Alexander", "Jerry", "Tyler", "Henry", "Douglas", "Aaron", "Peter", "Jose", "Walter", "Adam", "Zachary", "Nathan", "Harold", "Kyle", "Carl", "Arthur", "Gerald", "Roger", "Keith", "Lawrence", "Jeremy", "Terry", "Albert", "Joe", "Sean", "Willie", "Christian", "Jesse", "Austin", "Billy", "Bruce", "Ralph", "Bryan", "Ethan", "Roy", "Eugene", "Jordan", "Louis", "Wayne", "Alan", "Harry", "Russell", "Juan", "Dylan", "Randy", "Philip", "Vincent", "Noah", "Bobby", "Howard", "Gabriel", "Johnny", "Mary", "Patricia", "Jennifer", "Elizabeth", "Linda", "Barbara", "Susan", "Margaret", "Jessica", "Sarah", "Dorothy", "Karen", "Nancy", "Betty", "Lisa", "Sandra", "Ashley", "Kimberly", "Donna", "Helen", "Carol", "Michelle", "Emily", "Amanda", "Melissa", "Deborah", "Laura", "Stephanie", "Rebecca", "Sharon", "Cynthia", "Kathleen", "Anna", "Shirley", "Ruth", "Amy", "Angela", "Brenda", "Virginia", "Pamela", "Catherine", "Katherine", "Nicole", "Christine", "Samantha", "Janet", "Debra", "Carolyn", "Rachel", "Heather", "Maria", "Diane", "Julie", "Joyce", "Emma", "Frances", "Evelyn", "Joan", "Martha", "Christina", "Kelly", "Lauren", "Victoria", "Judith", "Alice", "Ann", "Cheryl", "Jean", "Doris", "Megan", "Marie", "Andrea", "Kathryn", "Jacqueline", "Gloria", "Teresa", "Sara", "Janice", "Hannah", "Julia", "Rose", "Theresa", "Grace", "Judy", "Beverly", "Olivia", "Denise", "Marilyn", "Amber", "Danielle", "Brittany", "Diana", "Mildred", "Jane", "Madison", "Lori", "Tiffany", "Kathy", "Tammy", "Kayla"]; /* Source: http://www.ssa.gov/oact/babynames/decades/century.html */
first_names[2] = ["Wěi", "Wěi", "Fāng", "Wěi", "Xiùyīng", "Xiùyīng", "Nà", "Xiùyīng", "Wěi", "Mǐn", "Jìng", "Lì", "Jìng", "Lì", "Qiáng", "Jìng", "Mǐn", "Mǐn", "Lěi", "Jūn", "Yáng", "Yǒng", "Yǒng", "Yàn", "Jié", "Lěi", "Qiáng", "Jūn", "Jié", "Juān", "Yàn", "Tāo", "Tāo", "Míng", "Yàn", "Chāo", "Yǒng", "Juān", "Jié", "Xiùlán", "Xiá", "Mǐn", "Jūn", "Lì", "Qiáng", "Píng", "Gāng", "Jié", "Guìyīng", "Fāng"]; /* Source: https://en.wikipedia.org/wiki/Chinese_given_name */
first_names[3] = ["Adrien", "Alain", "Albert", "Alexandre", "Alexis", "André", "Antoine", "Arnaud", "Arthur", "Aurélien", "Baptiste", "Benjamin", "Benoît", "Bernard", "Bertrand", "Bruno", "Cédric", "Charles", "Christian", "Christophe", "Claude", "Clément", "Cyril", "Damien", "Daniel", "David", "Denis", "Didier", "Dominique", "Dylan", "Emmanuel", "Éric", "Étienne", "Enzo", "Fabien", "Fabrice", "Florent", "Florian", "Francis", "Franck", "François", "Frédéric", "Gabriel", "Gaétan", "Georges", "Gérard", "Gilbert", "Gilles", "Grégory", "Guillaume", "Guy", "Henri", "Hervé", "Hugo", "Jacques", "Jean", "Jean-Claude", "Jean-François", "Jean-Louis", "Jean-Luc", "Jean-Marc", "Jean-Marie", "Jean-Michel", "Jean-Paul", "Jean-Pierre", "Jérôme", "Joël", "Jonathan", "José", "Joseph", "Julien", "Kevin", "Laurent", "Lionel", "Loïc", "Louis", "Luc", "Lucas", "Lucien", "Ludovic", "Marc", "Marcel", "Mathieu", "Matthieu", "Maurice", "Maxime", "Michaël", "Michel", "Mickaël", "Mohamed", "Nicolas", "Olivier", "Pascal", "Patrice", "Patrick", "Paul", "Philippe", "Pierre", "Quentin", "Raphaël", "Raymond", "Régis", "Rémi", "Rémy", "René", "Richard", "Robert", "Roger", "Roland", "Romain", "Samuel", "Sébastien", "Serge", "Simon", "Stéphane", "Sylvain", "Théo", "Thierry", "Thomas", "Valentin", "Victor", "Vincent", "William", "Yann", "Yannick", "Yves", "Xavier", "Agnès", "Alexandra", "Alice", "Aline", "Amandine", "Amélie", "Andrée", "Angélique", "Anne", "Anne-Marie", "Annick", "Annie", "Arlette", "Audrey", "Aurélie", "Aurore", "Béatrice", "Bernadette", "Brigitte", "Camille", "Carole", "Caroline", "Catherine", "Cécile", "Céline", "Chantal", "Chloé", "Christelle", "Christiane", "Christine", "Claire", "Clara", "Claudine", "Clémence", "Colette", "Coralie", "Corinne", "Danièle", "Danielle", "Delphine", "Denise", "Dominique", "Éliane", "Élisabeth", "Élise", "Élodie", "Émilie", "Emma", "Emmanuelle", "Estelle", "Évelyne", "Fabienne", "Fanny", "Florence", "Francine", "Françoise", "Gaëlle", "Geneviève", "Georgette", "Germaine", "Ghislaine", "Ginette", "Gisèle", "Hélène", "Henriette", "Huguette", "Inès", "Irène", "Isabelle", "Jacqueline", "Janine", "Jeanne", "Jeannine", "Jennifer", "Jessica", "Jocelyne", "Joëlle", "Josette", "Julie", "Juliette", "Justine", "Karine", "Laetitia", "Laura", "Laure", "Laurence", "Léa", "Liliane", "Louise", "Lucie", "Lucienne", "Lydie", "Madeleine", "Magali", "Manon", "Marcelle", "Marguerite", "Maria", "Marie", "Marie-Christine", "Marie-Claude", "Marie-Thérèse", "Marine", "Marion", "Martine", "Mathilde", "Mélanie", "Mélissa", "Michèle", "Micheline", "Michelle", "Mireille", "Monique", "Morgane", "Muriel", "Myriam", "Nadia", "Nadine", "Nathalie", "Nicole", "Noémie", "Océane", "Odette", "Odile", "Pascale", "Patricia", "Paulette", "Pauline", "Pierrette", "Raymonde", "Régine", "Renée", "Sabine", "Sabrina", "Sandra", "Sandrine", "Sarah", "Séverine", "Simone", "Solange", "Sonia", "Sophie", "Stéphanie", "Suzanne", "Sylvie", "Thérèse", "Valérie", "Vanessa", "Véronique", "Virginie", "Yvette", "Yvonne"]; /* Source: https://en.wiktionary.org/wiki/Appendix:French_given_names#The_most_common_given_names_in_France_1900-2006 */

var last_names = new Array();
last_names[0] = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Miller", "Davis", "Garcia", "Rodriguez", "Wilson", "Martinez", "Anderson", "Taylor", "Thomas", "Hernandez", "Moore", "Martin", "Jackson", "Thompson", "White", "Lopez", "Lee", "Gonzalez", "Harris", "Clark", "Lewis", "Robinson", "Walker", "Perez", "Hall", "Young", "Allen", "Sanchez", "Wright", "King", "Scott", "Green", "Baker", "Adams", "Nelson", "Hill", "Ramirez", "Campbell", "Mitchell", "Roberts", "Carter", "Phillips", "Evans", "Turner", "Torres", "Parker", "Collins", "Edwards", "Stewart", "Flores", "Morris", "Nguyen", "Murphy", "Rivera", "Cook", "Rogers", "Morgan", "Peterson", "Cooper", "Reed", "Bailey", "Bell", "Gomez", "Kelly", "Howard", "Ward", "Cox", "Diaz", "Richardson", "Wood", "Watson", "Brooks", "Bennett", "Gray", "James", "Reye", "Cruz", "Hughes", "Price", "Myers", "Long", "Foster", "Sanders", "Ross", "Morales", "Powell", "Sullivan", "Russell", "Ortiz", "Jenkins", "Gutierrez", "Perry", "Butler", "Barnes", "Fisher"]; /* Source: https://en.wikipedia.org/wiki/List_of_most_common_surnames_in_North_America */
last_names[1] = ["Tremblay", "Gagnon", "Roy", "Cote", "Bouchard", "Gauthier", "Morin", "Lavoie", "Fortin", "Gagne", "Ouellet", "Pelletier", "Belanger", "Levesque", "Bergeron", "Leblanc", "Paquette", "Girard", "Simard", "Boucher", "Caron", "Beaulieu", "Cloutier", "Dube", "Poirier", "Fournier", "Lapointe", "Leclerc", "Lefebvre", "Poulin", "Thibault", "St-Pierre", "Nadeau", "Martin", "Landry", "Martel", "Bedard", "Grenier", "Lessard", "Bernier", "Richard", "Michaud", "Hebert", "Desjardins", "Couture", "Turcotte", "Lachance", "Parent", "Blais", "Gosselin", "Savard", "Proulx", "Beaudoin", "Demers", "Perreault", "Boudreau", "Lemieux", "Cyr", "Perron", "Dufour", "Dion", "Mercier", "Bolduc", "Berube", "Boisvert", "Langlois", "Menard", "Therrien", "Plante", "Bilodeau", "Blanchette", "Dubois", "Champagne", "Fortier", "Arsenault", "Dupuis", "Gaudreault", "Hamel", "Houle", "Villeneuve", "Paradis", "Rousseau", "Gravel", "Theriault", "Lemay", "Robert", "Allard", "Deschenes", "Giroux", "Guay", "Leduc", "Boivin", "Charbonneau", "Lambert", "Raymond", "Vachon", "Gilbert", "Audet", "Jean", "Larouche"]; /* Source: https://en.wikipedia.org/wiki/List_of_most_common_surnames_in_North_America */
last_names[2] = ["Martinez", "Garcia", "Hernandez", "Gonzalez", "Lopez", "Rodriguez", "Perez", "Sanchez", "Ramirez", "Flores"]; /* Source: https://en.wikipedia.org/wiki/List_of_most_common_surnames_in_North_America */
last_names[3] = ["Satō", "Suzuki", "Takahashi", "Tanaka", "Watanabe", "Itō", "Nakamura", "Kobayashi", "Yamamoto", "Katō", "Yoshida", "Yamada", "Sasaki", "Yamaguchi", "Matsumoto", "Inoue", "Kimura", "Shimizu", "Hayashi", "Saitō", "Saitō", "Yamazaki ", "Yamasaki", "Nakajima ", "Nakashima", "Mori", "Abe", "Ikeda", "Hashimoto", "Ishikawa", "Yamashita", "Ogawa", "Ishii", "Hasegawa", "Gotō", "Okada", "Kondō", "Maeda", "Fujita", "Endō", "Aoki", "Sakamoto", "Murakami", "Ōta", "Kaneko", "Fujii", "Fukuda", "Nishimura", "Miura", "Takeuchi", "Nakagawa", "Okamoto", "Matsuda", "Harada", "Nakano", "Kojima", "Wada", "Morita", "Uchida", "Shibata", "Sakai", "Hara", "Takagi ", "Takaki", "Yokoyama", "Andō", "Miyazaki ", "Miyasaki", "Ueda Ueta", "Shimada", "Kudō", "Ōno", "Miyamoto", "Sugiyama", "Imai", "Maruyama", "Masuda", "Takada ", "Takata", "Murata", "Hirano", "Ōtsuka", "Sugawara ", "Sugahara", "Takeda ", "Taketa", "Arai", "Koyama ", "Oyama", "Noguchi", "Sakurai", "Chiba", "Iwasaki", "Sano", "Taniguchi", "Ueno", "Matsui", "Kōno ", "Kawano", "Ichikawa", "Watanabe ", "Watabe", "Nomura", "Kikuchi", "Kinoshita"]; /* Source: https://en.wikipedia.org/wiki/List_of_most_common_surnames_in_Asia */
last_names[4] = ["Wáng", "Lǐ", "Zhāng", "Liú", "Chén", "Yáng", "Huáng", "Zhào", "Wú", "Zhōu", "Xú", "Sūn", "Mǎ", "Zhū", "Hú", "Guō", "Hé", "Gāo", "Lín", "Luó"]; /* Source: https://en.wikipedia.org/wiki/List_of_most_common_surnames_in_Asia */

var settings = new Array();
settings[0] = ["Amazon rainforest", "1930s New York City", "Downtown Tokyo", "Subsaharan Africa", "A remote island", "A fantasy kingdom under siege", "A baseball field", "The Grand Canyon", "Somewhere in the Bermuda Triangle", "Under the sea", "Neptune", "A distant asteroid", "Jupiter", "Saturn", "Mercury", "London during the Blitzkrieg ", "Ancient Rome", "Earth, Year 3040", "Ancient China", "Prehistoric Earth", "Caverns underneath the Earth", "Post-Apocalyptic Tokyo", "Post-Apocalyptic Earth", "A rural farm town", "The city", "At a high school", "1950s United States", "At a mall", "Revolutionary France", "Medieval England", "A parallel universe"];


var motivations = new Array();
motivations[0] = ["To win the heart of the one they love", "To find the last unicorn in existence", "To save a prince locked in a tower", "Curiosity", "Love", "Adventure", "Money", "Saving an ailing loved one from death", "Finding their father", "To be the best that no one ever was at…", "Fame", "Destruction", "Conquest", "Seeking Forgiveness", "Recompensing for past wrongs", "Finding love", "Finding mother", "Hatred", "Immortality", "Happiness", "Surviving", "Getting over a recent death", "Getting over grief", "Discovering a new world"];

/* This loads on page load and will generate the specified part of the page */
window.onload = function () {	
	/* Setup the initial generated names */
	var random_name = first_names[0].random_element() + " " + last_names[0].random_element();
	var random_setting = settings[0].random_element();
	var random_motivation = motivations[0].random_element();

	document.getElementById("Name").innerHTML=random_name;
	document.getElementById("Setting").innerHTML=random_setting;
	document.getElementById("Motivation").innerHTML=random_motivation;
}

/* This is run on button press to update based on selections */
function reload_selections() {
	var first_name_index = get_select_values(document.getElementById("first_name_selection"));
	var last_name_index = get_select_values(document.getElementById("last_name_selection"));
	var settings_index = get_select_values(document.getElementById("settings_selection"));
	var motivations_index = get_select_values(document.getElementById("motivations_selection"));

	//alert( document.getElementById("last_name_selection").selectedIndex);

	var random_name = get_combined(first_names, first_name_index).random_element() + " " + get_combined(last_names, last_name_index).random_element();

	document.getElementById("Name").innerHTML=random_name;
		
	document.getElementById("Setting").innerHTML=get_combined(settings, settings_index).random_element();
	document.getElementById("Motivation").innerHTML=get_combined(motivations, motivations_index).random_element();
}

/* This will return a new array combining subarrays with given indeces. If only one is passed, one will be returned. */
function get_combined (array, index) {
	if (index.length == 1) {
		return array[index];
	}
	
	else {
		combined = [];
		for (var i=0; i<index.length; i++) {
			combined = combined.concat(array[index[i]]);
		}
		return combined;	
	}
}

/* This will determine the values selected from a select element. */
function get_select_values (element) {
	var result = [];
	var options = element && element.options;

	for (var i=0; i<options.length; i++) {
		option = options[i];

	if (option.selected) {
		result.push(option.value || option.text);
		}
	}
	
	return result;
}
