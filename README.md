May 2015 Cohort
### P4: Website Performance Optimization portfolio project

####Part 1: Optimize PageSpeed Insights score for index.html

The challenge is to optimize this online portfolio for speed. In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques shown in Critical Rendering Path course to achieve a PageSpeed above 90 on index.html.

TO USE:
* Clone project or download project's zip folder to your computer.
* Open dist/index.html file in your browser.

DEVELOPMENT:
* Reduced dimensions of the images, compressed to level 4, images with web source were downloaded and optimized.
* Fixed the link to google font.
* Added asynk attribute to load analytics.js asynchronously.
* Added media="print" atribute to load print stylesheet.
* Created Cach manifest myCache.appcache file to cash images and resources.
* Created .htaccess  with the expiration dates.
* Minified js, cleaned and minified css, added to html, minified html.


####Part 2: Optimize Frames per Second in pizza.html

The chalenge is to inspect the browser's rendering pipeline, identify the causes of jank, destroy jank and make this website react quickly, render smoothly and maintain 60 frames per second performance as shown in Browser Rendering Optimization course.

TO USE:
* Clone project or download project's zip folder to your computer.
* Open dist/views/pizza.html file in your browser.

DEVELOPMENT:
* Reduced dimensions of images, compressed to level 4.
* Sliding pizzas image actual size is set in css, removed img size setting in DOMContent load function.
* Removed pizza image size generator, simplyfied resizePizzas function.
* Reduced the number of moving pizzas, number of pizzas calculated based on screen size.
* Added will-change property to .mover class in css.
* Replaced querySelectorAll method with getElementsByClassName, moved out of For loop.
* Moved scrollTop calculation out of For loop.
* Changed Sliding background pizzas position update to transform: translateX, transleteZ property.
* Set Whole-script to "strict mode".
* Made few style changes, per JavaScript Style Guide and Coding Conventions, moved variable assignment out of For loop, wraped For loop wich actualy creates and appends pizzas in a function, changed some variable names not to have duplicates.
* Added comments to code using JSDoc 3  markup language.

#### Optimization Tips, Tricks and Resourses:
* Open Assets/Tips-tricks-resources.txt

