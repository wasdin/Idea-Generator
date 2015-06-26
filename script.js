/* For getting random elements from array, using a prototype function
   Idea from here: http://stackoverflow.com/a/7120353 */
Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
}

var first_names = ["Jake", "Joanne", "Bob", "Billy", "Scott", "Fred", "Anita", "Alma", "Janet", "Woodrow", "Elizabeth", "Charles", "George"];

var last_names = ["Prolman", "Frank", "Shafer", "Lewis", "Whitefield", "Cathy", "Perkins", "Johnson", "Kraynak", "West", "Rice"];

var random_name = first_names.randomElement() + " " + last_names.randomElement();

window.onload = function () {
var change = document.getElementById("generated");
change.innerHtml = random_name;

}

//alert(random_name);

