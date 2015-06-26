/* For getting random elements from array, using a prototype function
   Idea from here: http://stackoverflow.com/a/7120353 */
Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
}

window.onload = function () {
var first_names = ["Jake", "Joanne", "Bob", "Billy", "Scott", "Fred", "Anita", "Alma", "Janet", "Woodrow", "Elizabeth", "Charles", "George"];
var last_names = ["Rice", "Smith", "Van Buren", "Washington", "Reese", "Watson", "Park", "Lee", "Cheng"];
var settings = ["Beach", "Arctic tundra", "Waterpark", "Forest", "Theatre", "Mattress Factory", "Chicago alleyway", "Quiet Detroit suburb"];
var motivations = ["Greed", "Revenge", "To be a doctor", "To find long last father", "To win the Olympics", "To become a dog trainer", "To be the world burrito eating champion"];

var random_name = first_names.randomElement() + " " + last_names.randomElement();
var random_setting = settings.randomElement();
var random_motivation = motivations.randomElement();

document.getElementById("Name").innerHTML=random_name;
document.getElementById("Setting").innerHTML=random_setting;
document.getElementById("Motivation").innerHTML=random_motivation;

}


