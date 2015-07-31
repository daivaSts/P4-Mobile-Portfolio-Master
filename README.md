## P4: Website Performance Optimization portfolio project

####Part 1: Optimize PageSpeed Insights score for index.html

The challenge is to optimize this online portfolio for speed. In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques shown in Critical Rendering Path course.

1. Reduced dimensions of the images, compressed to level 4, images with web source were downloaded and optimized.
2. Fixed the link to google font.
3. Added asynk attribute to load analytics.js asynchronously.
4. Added media="print" atribute to load print stylesheet.
5. Created Cach manifest myCache.appcache file to cash images and resources.
6. Created .htaccess  with the expiration dates.
7. Minified js, cleaned and minified css, added to html, minified html.


####Part 2: Optimize Frames per Second in pizza.html

The chalenge is to inspect the browser's rendering pipeline, identify the causes of jank, destroy jank and make this website react quickly, render smoothly and maintain 60 frames per second performance as shown in Browser Rendering Optimization course.

1. Reduced dimensions of images, compressed to level 4, sliding pizzas image actual size is set in css, removed img size setting in DOMContent load function.
2. Removed pizza image size generator, simplyfied resizePizzas function.
3. Reduced the number of moving pizzas.
4. Added will-change property to .mover class in css
5. Replaced querySelectorAll method with getElementsByClassName, moved out of For loop.
6. Moved scrollTop calculation out of For loop.
7. Changed Sliding background pizzas position update to transform: translateX, transleteZ property.
8. Set Whole-script to "strict mode".
8. Made few style changes, per JavaScript Style Guide and Coding Conventions, moved variable assignment out of For loop, wraped For loop wich actualy creates and appends pizzas in a function, changed some variable names not to have duplicates.

####Tools:

* https://www.udacity.com/course/ud884
* https://www.udacity.com/course/ud860
* JSLint.com
* validator.w3.org/#validate_by_input
* jigsaw.w3.org/css-validator/#validate_by_input
* westciv.com/tools/manifestR/
* gruntjs.com/
* ngrok.com/
* http://www.html5rocks.com/en/tutorials/


#### Optimization Tips, Tricks and Resourses:

* FPS Counter/HUD Display useful in Chrome developer tools: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>

