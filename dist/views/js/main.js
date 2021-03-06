/*
This code randomly generates pizzas: images, pizza names and its ingredients.
The contributors chalenge is to inspect the browser's rendering pipeline, identify the causes of jank,
destroy jank and make this website react quickly, render smoothly and maintain 60 frames per second
performance as shown in Browser Rendering Optimization course.

Creator:
Cameron Pittman, Udacity Course Developer
cameron *at* udacity *dot* com

Contributor:
Daiva Satas, Udacity Front-End Developer Nanodegree, May'2015 Cohort.
*/

"use strict";

/** Here are arrays of all possible pizza ingredients. */
var pizzaIngredients = {};
pizzaIngredients.meats = [
    "Pepperoni",
    "Sausage",
    "Fennel Sausage",
    "Spicy Sausage",
    "Chicken",
    "BBQ Chicken",
    "Chorizo",
    "Chicken Andouille",
    "Salami",
    "Tofu",
    "Bacon",
    "Canadian Bacon",
    "Proscuitto",
    "Italian Sausage",
    "Ground Beef",
    "Anchovies",
    "Turkey",
    "Ham",
    "Venison",
    "Lamb",
    "Duck",
    "Soylent Green",
    "Carne Asada",
    "Soppressata Picante",
    "Coppa",
    "Pancetta",
    "Bresola",
    "Lox",
    "Guanciale",
    "Chili",
    "Beef Jerky",
    "Pastrami",
    "Kielbasa",
    "Scallops",
    "Filet Mignon"
];
pizzaIngredients.nonMeats = [
    "White Onions",
    "Red Onions",
    "Sauteed Onions",
    "Green Peppers",
    "Red Peppers",
    "Banana Peppers",
    "Ghost Peppers",
    "Habanero Peppers",
    "Jalapeno Peppers",
    "Stuffed Peppers",
    "Spinach",
    "Tomatoes",
    "Pineapple",
    "Pear Slices",
    "Apple Slices",
    "Mushrooms",
    "Arugula",
    "Basil",
    "Fennel",
    "Rosemary",
    "Cilantro",
    "Avocado",
    "Guacamole",
    "Salsa",
    "Swiss Chard",
    "Kale",
    "Sun Dried Tomatoes",
    "Walnuts",
    "Artichoke",
    "Asparagus",
    "Caramelized Onions",
    "Mango",
    "Garlic",
    "Olives",
    "Cauliflower",
    "Polenta",
    "Fried Egg",
    "Zucchini",
    "Hummus"
];
pizzaIngredients.cheeses = [
    "American Cheese",
    "Swiss Cheese",
    "Goat Cheese",
    "Mozzarella Cheese",
    "Parmesean Cheese",
    "Velveeta Cheese",
    "Gouda Cheese",
    "Muenster Cheese",
    "Applewood Cheese",
    "Asiago Cheese",
    "Bleu Cheese",
    "Boursin Cheese",
    "Brie Cheese",
    "Cheddar Cheese",
    "Chevre Cheese",
    "Havarti Cheese",
    "Jack Cheese",
    "Pepper Jack Cheese",
    "Gruyere Cheese",
    "Limberger Cheese",
    "Manchego Cheese",
    "Marscapone Cheese",
    "Pecorino Cheese",
    "Provolone Cheese",
    "Queso Cheese",
    "Roquefort Cheese",
    "Romano Cheese",
    "Ricotta Cheese",
    "Smoked Gouda"
];
pizzaIngredients.sauces = [
    "Red Sauce",
    "Marinara",
    "BBQ Sauce",
    "No Sauce",
    "Hot Sauce"
];
pizzaIngredients.crusts = [
    "White Crust",
    "Whole Wheat Crust",
    "Flatbread Crust",
    "Stuffed Crust"
];

/** Capitalizes first letter of each word. */
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

/**
 * Pulls adjectives using random string sent from generator().
 * @param {string} x - A random item from a adjectivesList array.
 * @return {array} a random array of adjectives.
 */
function getAdj(x){
    var dark, colors, whimsy, shiny, noisy, apocalyptic, insulting, praise, scientific, scientific_default;
    switch(x) {
        case "dark":
            dark = ["dark","morbid", "scary", "spooky", "gothic", "deviant", "creepy", "sadistic", "black", "dangerous", "dejected", "haunted",
            "morose", "tragic", "shattered", "broken", "sad", "melancholy", "somber", "dark", "gloomy", "homicidal", "murderous", "shady", "misty",
            "dusky", "ghostly", "shadowy", "demented", "cursed", "insane", "possessed", "grotesque", "obsessed"];
            return dark;
        case "color":
            colors = ["blue", "green", "purple", "grey", "scarlet", "NeonGreen", "NeonBlue", "NeonPink", "HotPink", "pink", "black", "red",
            "maroon", "silver", "golden", "yellow", "orange", "mustard", "plum", "violet", "cerulean", "brown", "lavender", "violet", "magenta",
            "chestnut", "rosy", "copper", "crimson", "teal", "indigo", "navy", "azure", "periwinkle", "brassy", "verdigris", "veridian", "tan",
            "raspberry", "beige", "sandy", "ElectricBlue", "white", "champagne", "coral", "cyan"];
            return colors;
        case "whimsical":
            whimsy = ["whimsical", "silly", "drunken", "goofy", "funny", "weird", "strange", "odd", "playful", "clever", "boastful", "breakdancing",
            "hilarious", "conceited", "happy", "comical", "curious", "peculiar", "quaint", "quirky", "fancy", "wayward", "fickle", "yawning", "sleepy",
            "cockeyed", "dizzy", "dancing", "absurd", "laughing", "hairy", "smiling", "perplexed", "baffled", "cockamamie", "vulgar", "hoodwinked",
            "brainwashed"];
            return whimsy;
        case "shiny":
            shiny = ["sapphire", "opal", "silver", "gold", "platinum", "ruby", "emerald", "topaz", "diamond", "amethyst", "turquoise",
            "starlit", "moonlit", "bronze", "metal", "jade", "amber", "garnet", "obsidian", "onyx", "pearl", "copper", "sunlit", "brass", "brassy",
            "metallic"];
            return shiny;
        case "noisy":
            noisy = ["untuned", "loud", "soft", "shrieking", "melodious", "musical", "operatic", "symphonic", "dancing", "lyrical", "harmonic",
            "orchestral", "noisy", "dissonant", "rhythmic", "hissing", "singing", "crooning", "shouting", "screaming", "wailing", "crying", "howling",
            "yelling", "hollering", "caterwauling", "bawling", "bellowing", "roaring", "squealing", "beeping", "knocking", "tapping", "rapping",
            "humming", "scatting", "whispered", "whispering", "rasping", "buzzing", "whirring", "whistling", "whistled"];
            return noisy;
        case "apocalyptic":
            apocalyptic = ["nuclear", "apocalyptic", "desolate", "atomic", "zombie", "collapsed", "grim", "fallen", "collapsed", "cannibalistic",
            "radioactive", "toxic", "poisonous", "venomous", "disastrous", "grimy", "dirty", "undead", "bloodshot", "rusty", "glowing", "decaying",
            "rotten", "deadly", "plagued", "decimated", "rotting", "putrid", "decayed", "deserted", "acidic"];
            return apocalyptic;
        case "insulting":
            insulting = ["stupid", "idiotic", "fat", "ugly", "hideous", "grotesque", "dull", "dumb", "lazy", "sluggish", "brainless", "slow",
            "gullible", "obtuse", "dense", "dim", "dazed", "ridiculous", "witless", "daft", "crazy", "vapid", "inane", "mundane", "hollow", "vacuous",
            "boring", "insipid", "tedious", "monotonous", "weird", "bizarre", "backward", "moronic", "ignorant", "scatterbrained", "forgetful", "careless",
            "lethargic", "insolent", "indolent", "loitering", "gross", "disgusting", "bland", "horrid", "unseemly", "revolting", "homely", "deformed",
            "disfigured", "offensive", "cowardly", "weak", "villainous", "fearful", "monstrous", "unattractive", "unpleasant", "nasty", "beastly", "snide",
            "horrible", "syncophantic", "unhelpful", "bootlicking"];
            return insulting;
        case "praise":
            praise = ["beautiful", "intelligent", "smart", "genius", "ingenious", "gorgeous", "pretty", "witty", "angelic", "handsome", "graceful",
            "talented", "exquisite", "enchanting", "fascinating", "interesting", "divine", "alluring", "ravishing", "wonderful", "magnificient", "marvelous",
            "dazzling", "cute", "charming", "attractive", "nifty", "delightful", "superior", "amiable", "gentle", "heroic", "courageous", "valiant", "brave",
            "noble", "daring", "fearless", "gallant", "adventurous", "cool", "enthusiastic", "fierce", "awesome", "radical", "tubular", "fearsome",
            "majestic", "grand", "stunning"];
            return praise;
        case "scientific":
            scientific = ["scientific", "technical", "digital", "programming", "calculating", "formulating", "cyberpunk", "mechanical", "technological",
            "innovative", "brainy", "chemical", "quantum", "astro", "space", "theoretical", "atomic", "electronic", "gaseous", "investigative", "solar",
            "extinct", "galactic"];
            return scientific;
        default:
            scientific_default = ["scientific", "technical", "digital", "programming", "calculating", "formulating", "cyberpunk", "mechanical", "technological",
            "innovative", "brainy", "chemical", "quantum", "astro", "space", "theoretical", "atomic", "electronic", "gaseous", "investigative", "solar",
            "extinct", "galactic"];
            return scientific_default;
    }
}

/**
 * Pulls nouns using random string sent from generator().
 * @param {string} y - A random item from a nounsList array.
 * @return {array} a random array of nouns.
 */
function getNoun(y) {
    var animals, professions, fantasy, music, horror, gross, everyday, jewelry, places, scifi, scifi_default;
    switch(y) {
        case "animals":
            animals = ["flamingo", "hedgehog", "owl", "elephant", "pussycat", "alligator", "dachsund", "poodle", "beagle", "crocodile", "kangaroo",
            "wallaby", "woodpecker", "eagle", "falcon", "canary", "parrot", "parakeet", "hamster", "gerbil", "squirrel", "rat", "dove", "toucan",
            "raccoon", "vulture", "peacock", "goldfish", "rook", "koala", "skunk", "goat", "rooster", "fox", "porcupine", "llama", "grasshopper",
            "gorilla", "monkey", "seahorse", "wombat", "wolf", "giraffe", "badger", "lion", "mouse", "beetle", "cricket", "nightingale",
            "hawk", "trout", "squid", "octopus", "sloth", "snail", "locust", "baboon", "lemur", "meerkat", "oyster", "frog", "toad", "jellyfish",
            "butterfly", "caterpillar", "tiger", "hyena", "zebra", "snail", "pig", "weasel", "donkey", "penguin", "crane", "buzzard", "vulture",
            "rhino", "hippopotamus", "dolphin", "sparrow", "beaver", "moose", "minnow", "otter", "bat", "mongoose", "swan", "firefly", "platypus"];
            return animals;
        case "profession":
            professions = ["doctor", "lawyer", "ninja", "writer", "samurai", "surgeon", "clerk", "artist", "actor", "engineer", "mechanic",
            "comedian", "fireman", "nurse", "RockStar", "musician", "carpenter", "plumber", "cashier", "electrician", "waiter", "president", "governor",
            "senator", "scientist", "programmer", "singer", "dancer", "director", "mayor", "merchant", "detective", "investigator", "navigator", "pilot",
            "priest", "cowboy", "stagehand", "soldier", "ambassador", "pirate", "miner", "police"];
            return professions;
        case "fantasy":
            fantasy = ["centaur", "wizard", "gnome", "orc", "troll", "sword", "fairy", "pegasus", "halfling", "elf", "changeling", "ghost",
            "knight", "squire", "magician", "witch", "warlock", "unicorn", "dragon", "wyvern", "princess", "prince", "king", "queen", "jester",
            "tower", "castle", "kraken", "seamonster", "mermaid", "psychic", "seer", "oracle"];
            return fantasy;
        case "music":
            music = ["violin", "flute", "bagpipe", "guitar", "symphony", "orchestra", "piano", "trombone", "tuba", "opera", "drums",
            "harpsichord", "harp", "harmonica", "accordion", "tenor", "soprano", "baritone", "cello", "viola", "piccolo", "ukelele", "woodwind", "saxophone",
            "bugle", "trumpet", "sousaphone", "cornet", "stradivarius", "marimbas", "bells", "timpani", "bongos", "clarinet", "recorder", "oboe", "conductor",
            "singer"];
            return music;
        case "horror":
            horror = ["murderer", "chainsaw", "knife", "sword", "murder", "devil", "killer", "psycho", "ghost", "monster", "godzilla", "werewolf",
            "vampire", "demon", "graveyard", "zombie", "mummy", "curse", "death", "grave", "tomb", "beast", "nightmare", "frankenstein", "specter",
            "poltergeist", "wraith", "corpse", "scream", "massacre", "cannibal", "skull", "bones", "undertaker", "zombie", "creature", "mask", "psychopath",
            "fiend", "satanist", "moon", "fullMoon"];
            return horror;
        case "gross":
            gross = ["slime", "bug", "roach", "fluid", "pus", "booger", "spit", "boil", "blister", "orifice", "secretion", "mucus", "phlegm",
            "centipede", "beetle", "fart", "snot", "crevice", "flatulence", "juice", "mold", "mildew", "germs", "discharge", "toilet", "udder", "odor", "substance",
            "fluid", "moisture", "garbage", "trash", "bug"];
            return gross;
        case "everyday":
            everyday = ["mirror", "knife", "fork", "spork", "spoon", "tupperware", "minivan", "suburb", "lamp", "desk", "stereo", "television", "TV",
            "book", "car", "truck", "soda", "door", "video", "game", "computer", "calender", "tree", "plant", "flower", "chimney", "attic", "kitchen",
            "garden", "school", "wallet", "bottle"];
            return everyday;
        case "jewelry":
            jewelry = ["earrings", "ring", "necklace", "pendant", "choker", "brooch", "bracelet", "cameo", "charm", "bauble", "trinket", "jewelry",
            "anklet", "bangle", "locket", "finery", "crown", "tiara", "blingBling", "chain", "rosary", "jewel", "gemstone", "beads", "armband", "pin",
            "costume", "ornament", "treasure"];
            return jewelry;
        case "places":
            places = ["swamp", "graveyard", "cemetery", "park", "building", "house", "river", "ocean", "sea", "field", "forest", "woods", "neighborhood",
            "city", "town", "suburb", "country", "meadow", "cliffs", "lake", "stream", "creek", "school", "college", "university", "library", "bakery",
            "shop", "store", "theater", "garden", "canyon", "highway", "restaurant", "cafe", "diner", "street", "road", "freeway", "alley"];
            return places;
        case "scifi":
            scifi = ["robot", "alien", "raygun", "spaceship", "UFO", "rocket", "phaser", "astronaut", "spaceman", "planet", "star", "galaxy",
            "computer", "future", "timeMachine", "wormHole", "timeTraveler", "scientist", "invention", "martian", "pluto", "jupiter", "saturn", "mars",
            "quasar", "blackHole", "warpDrive", "laser", "orbit", "gears", "molecule", "electron", "neutrino", "proton", "experiment", "photon", "apparatus",
            "universe", "gravity", "darkMatter", "constellation", "circuit", "asteroid"];
            return scifi;
        default:
            scifi_default = ["robot", "alien", "raygun", "spaceship", "UFO", "rocket", "phaser", "astronaut", "spaceman", "planet", "star", "galaxy",
            "computer", "future", "timeMachine", "wormHole", "timeTraveler", "scientist", "invention", "martian", "pluto", "jupiter", "saturn", "mars",
            "quasar", "blackHole", "warpDrive", "laser", "orbit", "gears", "molecule", "electron", "neutrino", "proton", "experiment", "photon", "apparatus",
            "universe", "gravity", "darkMatter", "constellation", "circuit", "asteroid"];
            return scifi_default;
  }
}

var adjectivesList = ["dark", "color", "whimsical", "shiny", "noisy", "apocalyptic", "insulting", "praise", "scientific"];  // types of adjectives for pizza titles
var nounsList = ["animals", "everyday", "fantasy", "gross", "horror", "jewelry", "places", "scifi"];                        // types of nouns for pizza titles

/**
 * Generates random numbers for getAdj() and getNoun() functions and returns a new pizza name.
 * @param {string} adj - A random item from adjectivesList array.
 * @param {string} noun - A random item from nounsList array.
 * @return {string} name - new pizza name.
 */
function generator(adj, noun) {
    var adjectives = getAdj(adj);
    var nouns = getNoun(noun);
    var randomAdjective = parseInt(Math.random() * adjectives.length);
    var randomNoun = parseInt(Math.random() * nouns.length);
    var name = "The " + adjectives[randomAdjective].capitalize() + " " + nouns[randomNoun].capitalize();
    return name;
}

/**
 * Chooses random adjective and random noun. Is called by pizzaElementGenerator().
 * @return {function} generator().
 */
function randomName() {
    var randomNumberAdj = parseInt(Math.random() * adjectivesList.length);
    var randomNumberNoun = parseInt(Math.random() * nounsList.length);
    return generator(adjectivesList[randomNumberAdj], nounsList[randomNumberNoun]);
}

/**
 * These functions return a string of a random ingredient from each respective category of ingredients.
 * Is called by makeRandomPizza().
 * @return {string} respective random ingredient name.
 */
var selectRandomMeat = function () {
    var randomMeat = pizzaIngredients.meats[Math.floor(Math.random() * pizzaIngredients.meats.length)];
    return randomMeat;
};

var selectRandomNonMeat = function () {
    var randomNonMeat = pizzaIngredients.nonMeats[Math.floor(Math.random() * pizzaIngredients.nonMeats.length)];
    return randomNonMeat;
};

var selectRandomCheese = function() {
    var randomCheese = pizzaIngredients.cheeses[Math.floor(Math.random() * pizzaIngredients.cheeses.length)];
    return randomCheese;
};

var selectRandomSauce = function() {
    var randomSauce = pizzaIngredients.sauces[Math.floor(Math.random() * pizzaIngredients.sauces.length)];
    return randomSauce;
};

var selectRandomCrust = function() {
    var randomCrust = pizzaIngredients.crusts[Math.floor(Math.random() * pizzaIngredients.crusts.length)];
    return randomCrust;
};

var ingredientItemizer = function(string) {
    return "<li>" + string + "</li>";
};

/**
 * Generates a string with random pizza ingredients nested inside <li> tags.
 * Is called by pizzaElementGenerator().
 * @return {string} pizza - ingredients nested inside <li> tags.
 */
var makeRandomPizza = function() {
    var pizza = "";
    var numberOfMeats = Math.floor(Math.random() * 4);
    var numberOfNonMeats = Math.floor(Math.random() * 3);
    var numberOfCheeses = Math.floor(Math.random() * 2);
    var i, j, k;

    for (i = 0; i < numberOfMeats; i+=1) {
    pizza = pizza + ingredientItemizer(selectRandomMeat());
    }

    for (j = 0; j < numberOfNonMeats; j+=1) {
    pizza = pizza + ingredientItemizer(selectRandomNonMeat());
    }

    for (k = 0; k < numberOfCheeses; k+=1) {
    pizza = pizza + ingredientItemizer(selectRandomCheese());
    }

    pizza = pizza + ingredientItemizer(selectRandomSauce());
    pizza = pizza + ingredientItemizer(selectRandomCrust());

    return pizza;
};

/**
 * Creates a DOM element for each pizza.
 * Is called by pizzas().
 * @return {DOM element} pizzaContainer - complete individual pizza DOM element.
 */
var pizzaElementGenerator = function(i) {
    var pizzaContainer,             // contains pizza title, image and list of ingredients
        pizzaImageContainer,        // contains the pizza image
        pizzaImage,                 // the pizza image itself
        pizzaDescriptionContainer,  // contains the pizza title and list of ingredients
        pizzaName,                  // the pizza name itself
        ul;                         // the list of ingredients

    pizzaContainer  = document.createElement("div");
    pizzaImageContainer = document.createElement("div");
    pizzaImage = document.createElement("img");
    pizzaDescriptionContainer = document.createElement("div");

    pizzaContainer.classList.add("randomPizzaContainer");
    pizzaContainer.style.width = "33.33%";
    pizzaContainer.style.height = "325px";
    pizzaContainer.id = "pizza" + i;                // gives each pizza element a unique id
    pizzaImageContainer.classList.add("col-md-6");

    pizzaImage.src = "images/pizza.png";
    pizzaImage.classList.add("img-responsive");
    pizzaImageContainer.appendChild(pizzaImage);
    pizzaContainer.appendChild(pizzaImageContainer);


    pizzaDescriptionContainer.classList.add("col-md-6");

    pizzaName = document.createElement("h4");
    pizzaName.innerHTML = randomName();
    pizzaDescriptionContainer.appendChild(pizzaName);

    ul = document.createElement("ul");
    ul.innerHTML = makeRandomPizza();
    pizzaDescriptionContainer.appendChild(ul);
    pizzaContainer.appendChild(pizzaDescriptionContainer);

    return pizzaContainer;
};

/**
 * Changes the label and resizes the pizza image when the slider in the "Our Pizzas" section of the website moves.
 * @param {string} size - the value of the input element #sizeSlider.
 */
var resizePizzas = function(size) {
    window.performance.mark("mark_start_resize");   // User Timing API function

    /**
    * Changes the value for the size of the pizza label above the slider.
    */
    function changeSliderLabel(size) {
        switch(size) {
            case "1":
                document.querySelector("#pizzaSize").innerHTML = "Small";
                return;
            case "2":
                document.querySelector("#pizzaSize").innerHTML = "Medium";
                return;
            case "3":
                document.querySelector("#pizzaSize").innerHTML = "Large";
                return;
            default:
                console.log("bug in changeSliderLabel");
        }
    }

    changeSliderLabel(size);

    /**
    * Iterates through pizza elements on the page and changes their widths.
    */
    function changePizzaSizes(size) {
        var randomPizzaCont = document.getElementsByClassName("randomPizzaContainer");
        var len = randomPizzaCont.length;
        var sizes = {
            1: "300px",
            2: "360px",
            3: "420px"
        };
        var b;
        for (b = 0; b < len; b += 1) {
            randomPizzaCont[b].style.width = sizes[size];
        }
  }

    changePizzaSizes(size);

    /** User Timing API to extract timing data to resize pizzas */
    window.performance.mark("mark_end_resize");
    window.performance.measure("measure_pizza_resize", "mark_start_resize", "mark_end_resize");
    var timeToResize = window.performance.getEntriesByName("measure_pizza_resize");
    console.log("Time to resize pizzas: " + timeToResize[0].duration + "ms");
};

/** collect timing data */
window.performance.mark("mark_start_generating");

/**
 * This function actually creates and appends all of the pizzas when the page loads
 * @return {DOM element} pizzasDiv.
 */
function pizzas() {
    var pizzasDiv, c;
    for (c = 2; c < 100; c+=1) {
        pizzasDiv = document.getElementById("randomPizzas");
        pizzasDiv.appendChild(pizzaElementGenerator(c));
    }
    return pizzasDiv;
}

pizzas();

/** User Timing API to mesure how long it took to generate the initial pizzas. */
window.performance.mark("mark_end_generating");
window.performance.measure("measure_pizza_generation", "mark_start_generating", "mark_end_generating");
var timeToGenerate = window.performance.getEntriesByName("measure_pizza_generation");
console.log("Time to generate pizzas on load: " + timeToGenerate[0].duration + "ms");

/** Iterator for number of times the pizzas in the background have scrolled.
 * Used by updatePositions() to decide when to log the average time per frame.
 */
var frame = 0;

/**
 * Logs the average amount of time per 10 frames needed to move the sliding background pizzas on scroll.
 * Is called by updatePositions().
 * @param {array} times - the array of User Timing measurements from updatePositions().
 */
function logAverageFrame(times) {
      var numberOfEntries = times.length;
      var sum = 0;
      var m;
      for (m = numberOfEntries - 1; m > numberOfEntries - 11; m-=1) {
        sum = sum + times[m].duration;
      }
      console.log("Average time to generate last 10 frames: " + sum / 10 + "ms");
}

/**
 * Updates and moves the sliding background pizzas positions based on scroll position.
 * Is called from scroll event listener.
 */
function updatePositions() {
    frame += 1;
    window.performance.mark("mark_start_frame");

    var items = document.getElementsByClassName("mover");
    var len = items.length;
    var scrolls = document.body.scrollTop/1250;
    var phase,n;

    /** Iterates through moving background pizza elements and changes their X position */
    for (n = 0; n < len; n += 1) {
        phase = 100 * Math.sin(scrolls + (n % 5));
        items[n].style.transform = 'translateX('+ phase + 'px) translateZ(0)';
    }

    /** User Timing API to extract timing data to mesure frame duration */
    window.performance.mark("mark_end_frame");
    window.performance.measure("measure_frame_duration", "mark_start_frame", "mark_end_frame");
    if (frame % 10 === 0) {
        var timesToUpdatePosition = window.performance.getEntriesByName("measure_frame_duration");
        logAverageFrame(timesToUpdatePosition);
    }
}

/** runs updatePositions on scroll */
window.addEventListener('scroll', updatePositions);

/**
 * Generates and appends the sliding pizzas when the page loads, the quantity based on the screen size.
 */
document.addEventListener('DOMContentLoaded', function() {
    var cols = 8;
    var s = 256;
    /** Calculates how many pizzas can fit to the screen */
    var numOfPizzas = (window.screen.height / 256) * cols;
    var movingPizzas = document.getElementById("movingPizzas1");
    var elem, v;

    for (v = 0; v < numOfPizzas; v += 1) {
        elem = document.createElement('img');
        elem.className = 'mover';
        elem.src = "images/pizza-q.png";
        elem.style.left = (v % cols) * s + 'px';
        elem.style.top = (Math.floor(v / cols) * s) + 'px';
        movingPizzas.appendChild(elem);
    }
    updatePositions();
});
