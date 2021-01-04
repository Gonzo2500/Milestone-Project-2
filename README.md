# Milestone Project 2
![Gemba Project](https://github.com/Gonzo2500/Milestone-Project-2/blob/master/documentation/screenshots/hero-ms2.PNG "Hero-shot index.html")
## Gemba Consulting Interactive Frontend Project 
### Background 
This milestone project creation is the last step of learning and study from the fourth and fifth modules of the Full Stack Developer Course, Javascript Fundamentals & Interactive Frontend Development,, to build a mobile-first fully responsive website. In this case for the fictional company "Gemba". The emphasis was on building a quiz, that is displayed at the "Gemba" Website.

![Hero-shot-quiz](https://github.com/Gonzo2500/Milestone-Project-2/blob/master/documentation/screenshots/quiz-shot.PNG "Hero-shot quiz.html")

The website provides the user with the ability to try three different quizes, revoling around software agility. 
Here is a link to the deployed [site](https://gonzo2500.github.io/Milestone-Project-2/index.html)

### User Experience (UX) 
#### User Stories 
+ As a visitor of the site I want a clear overview of games that are offered. So that I can see if the offers draw my interest
+ As a visitor I want to see links to social accounts from "Pulze", so I can see how many people are following and using "Pulze" and get more trust.  
+ As a visitor i want an easy way to navigate to the events/tournaments offered by "Pulze"
+ As a visitor interested joining a tournament I need to understand easily which tournament starts where?(region) when? (time) and how many people can join. (party size). To make a decision for what tournaments I might want to sign up to. 
+ As a visitor I want to able to sign up for a tournament, to later be able to participate on the tournament.
+ As a visitor I want to get more information on the benefits I might have when using this service, to make a decision for or against the usage.

#### Design
##### Colour Scheme
the main colors used for this project are white (#fafafa) neon-pink (#ff6ec7) and a dark grey (rgba(15, 15, 15, 1)). These colors together give the website a appearance close to style used for <a href="https://en.wikipedia.org/wiki/Vaporwave" target="_blank">vaporwave</a> art.

Throughout the page text-shadow is used to give e.g. headlines a bright look that builts a strong contrast to the dark grey background. 
![example of text-shadow ](https://github.com/Gonzo2500/Milestone_project_1/blob/master/documentation/screenshots/headline-shadow-screenshot.PNG "example of text-shadow")

##### Typography
The Roboto font is the main font used in this project. It provides a natural reading rhythm giving the webpage a nice look while also bringing accessibility in terms of easy to read text. As a fallback Sans-serif was used, in case the font doesn't load to the webpage correctly.

Press Start 2P is a bitmap font based on the font design from 1980s Namco arcade games. It was used mostly for headers. It gives the webpage an arcade feeling, which suits the theme "gaming" perfectly. The reason for the scarce usage of this font was to keep the easy readable. As a Fallback Sans-serif was used, in case the font doesn't load to the webpage correctly.

##### Imagery
Images for the hero shots were used to create a striking effect that gains the users/visitors attention. Game logos were used to show what kind of games are offered on the webpage, because for users that play these games remember these images (logos) and though get a better understanding of the purpose of this website .
 
##### Wireframes
A Desktop First approach was used for the design of the wireframes.  This aproach was used because the webpage revolves around esports and gaming. Users likely use their desktops or notebooks to visit the site. Because most traffic nowadays comes from mobile users, work was provided to make sure that the website is repsonsive on all screen sizes.
 + Home Page Wireframe : [Desktop](https://github.com/Gonzo2500/Milestone_project_1/blob/master/documentation/lp_desktop.pdf)    [Mobile](https://github.com/Gonzo2500/Milestone_project_1/blob/master/documentation/lp_mobile.pdf) [Tablet](https://github.com/Gonzo2500/Milestone_project_1/blob/master/documentation/LP_tablet.pdf)
 + Event Page Wireframe : [Desktop](https://github.com/Gonzo2500/Milestone_project_1/blob/master/documentation/event_desktop.pdf)    [Mobile](https://github.com/Gonzo2500/Milestone_project_1/blob/master/documentation/eventpage_mobile.pdf) [Tablet](https://github.com/Gonzo2500/Milestone_project_1/blob/master/documentation/event_tablet.pdf)
 + About Page Wireframe : [Desktop](https://github.com/Gonzo2500/Milestone_project_1/blob/master/documentation/about_us_desktop.pdf)    [Mobile](https://github.com/Gonzo2500/Milestone_project_1/blob/master/documentation/about_us_mobile.pdf) [Tablet](https://github.com/Gonzo2500/Milestone_project_1/blob/master/documentation/about-tablet.pdf)


### Features
+ Fully responsive website
+ Sign up to different tournaments
+ Contact form for requests
+ Both forms hold data validation and all fields residing within are set to required ensuring information submitted is of the correct format.
+ Interactive elements

The fonts used throughout the site were imported into the HTML of each page from Google Fonts and are called 'Roboto' and "Press Start 2p".

Disclaimer:
Although this website contains "forms" i.e. modals on the event.html and a contact form on contact.html they do not alert anyone that a sign up has been created and will not populate any server database.

#### User Stories
1. As a visitor of the site I want a clear overview of games that are offered. So that I can see if the offers draw my interest
2. As a visitor I want to see links to social accounts from "Pulze", so I can see how many people are following and using "Pulze" and get more trust.
3. As a visitor i want an easy way to navigate to the events/tournaments offered by "Pulze"
4. As a visitor interested joining a tournament I need to understand easily which tournament starts where?(region) when? (time) and how many people can join. (Party size). To make a decision for what tournaments I might want to sign up to. 
5. As a visitor I want to able to sign up for a tournament, to participate on the tournament.
6. As a visitor I want to get more information on the benefits I might have when using this Service, to make a decision for or against the usage.

#### Future Features  

##### Form Data
The data users enter in the form will be sent. This could be to an email or a created database.

##### Theme switch
In the [style.css](https://github.com/Gonzo2500/Milestone_project_1/blob/master/assets/css/style.css) file the colors that are used in this project are mostly stored in variables. There were 2 reasons for this, first it makes it less error-prone to misplace color. The second reson was a feature idea of switching the color theme of the website via an option in the navigation bar. Here you can find an <a href="https://alligator.io/" target="_blank">example.</a>
The idea was to reverse engineer it and switch variables with Javascript. As Javascript is not in the scope of this project, the feature will be added in the future.
 
##### Modal form
To sign up for a tournament right now everything has to be stated in detail. That means that information like region, game and day are not preselected via the card the user clicks on. With Javascript the implemented feature would be: The User clicks on a specific card and just needs to fill out name, email and party-size.

##### Tournament cards
![tournament cards ](https://github.com/Gonzo2500/Milestone_project_1/blob/master/documentation/screenshots/tournament-cards.PNG "tournament cards")
Right know only the "Join" button of tournament cards is clickable. In Future the whole card will be clickable and a modal will appear. This will be handled with Javascript and replacing the bootstrap modal.

### Testing
The W3C Markup Validator and W3C CSS Validator Services were used on every page of the project to ensure there were no syntax errors.
+ [HTML Validator](https://github.com/Gonzo2500/Milestone_project_1/blob/master/documentation/screenshots/screenshot-html.PNG)
+ [CSS Validator](https://github.com/Gonzo2500/Milestone_project_1/blob/master/documentation/screenshots/css-validator.PNG)

#### Testing User Stories from User Experience (UX) Section
#### 1. As a visitor of the site I want a clear overview of games that are offered. So that I can see if the offers draw my interest
+ On the hero shot the user can see a notable  [button](https://github.com/Gonzo2500/Milestone_project_1/blob/master/documentation/screenshots/btn-games.PNG) in the hero section. When clicking on the button the user will be sent to the games overview section. 
![games overview section ](https://github.com/Gonzo2500/Milestone_project_1/blob/master/documentation/screenshots/choose-your-game.PNG "games overview section")

#### 2. As a visitor I want to see links to social accounts from "Pulze", so I can see how many people are following and using "Pulze" and get more trust.  
+ Social links are shown on the landing page. For this an extra section was created.
![social links section ](https://github.com/Gonzo2500/Milestone_project_1/blob/master/documentation/screenshots/join-us.PNG "social links section")
+ Because this section is just on the landing page, social links are also provided in the footer. So Visitors can access the "Pulze" social media accounts from everywhere
![footer of the page with social links](https://github.com/Gonzo2500/Milestone_project_1/blob/master/documentation/screenshots/footer.PNG "footer of the page with social links")

#### 3. As a visitor i want an easy way to navigate to the events/tournaments offered by "Pulze"
+ The event page can be easily reached via the navigation bar
![navigation bar](https://github.com/Gonzo2500/Milestone_project_1/blob/master/documentation/screenshots/navigation-bar-screenshot.PNG "navigation bar")

+ The visitor can also get to the event page by clicking on the game images provided on the landing page
![event pages image link](https://github.com/Gonzo2500/Milestone_project_1/blob/master/documentation/screenshots/choose-your-game.PNG "event pages image link")

+ On the event page the user can use to button in the hero shot to automatically scroll down to the events
![event pages hero button](https://github.com/Gonzo2500/Milestone_project_1/blob/master/documentation/screenshots/event-hero-btn-screenshot.PNG "event pages hero button")


#### 4. As a visitor interested joining a tournament I need to understand easily which tournament starts where?(region) when? (time) and how many people can join. (Party size). To make a decision for what tournaments I might want to sign up to. 
+ Right before the user comes to the tournament cards, the user first sees the region section. A color was used to show a specific region.
![region section on event page](https://github.com/Gonzo2500/Milestone_project_1/blob/master/documentation/screenshots/region.PNG "region section on event page")
+ The tournament cards use the same colors to indicate the region for the tournament. In the card the user can find more information on time and party size. Because the cards are sorted by weekdays, the user is always able to know when a tournament takes place.
![tournament cards](https://github.com/Gonzo2500/Milestone_project_1/blob/master/documentation/screenshots/tournament-cards.PNG "tournament cards")

#### 5. As a visitor I want to able to sign up for a tournament, to participate on the tournament.
+ Each tournament card has a "Join" button. When a user clicks on one of these buttons a contact form opens up.
+ Because this project is focused on HTML & CSS only. The user needs to fill out the form, while also stating which game he wants to play, at which region and at which day. Other information that are asked in this form are a name, email and the party-size, if the user wants to play together with friends in a premade party.

![modal form view](https://github.com/Gonzo2500/Milestone_project_1/blob/master/documentation/screenshots/modal.PNG "modal form view")

#### 6. As a visitor I want to get more information on the benefits I might have when using this Service, to make a decision for or against the usage.
+ The about page was created to provide the user with more information. In the hero shot the "Pulze" vision is stated. It summarizes what the webpage tries to achieve and gives a great outlook too. 

![pulze vision](https://github.com/Gonzo2500/Milestone_project_1/blob/master/documentation/screenshots/about-vision.PNG "pulze vision")

+ The offer section gives more detailed information on what "pulze" is doing to fulfill the vision.

![pulze offer](https://github.com/Gonzo2500/Milestone_project_1/blob/master/documentation/screenshots/about-offer.PNG "pulze offer")

+The benefit parts explains to the user every detail on why they should use "Pulze" and what to gain from it.

![Pulze benefit](https://github.com/Gonzo2500/Milestone_project_1/blob/master/documentation/screenshots/about-benefits.PNG "Pulze benefit")

#### Further Testing 
+ The Website was tested on different browsers e.g. Chrome, Internet Explorer, Microsoft Edge, Mozilla Firefox and Safari 
+ The Website was viewed on different devices: Desktop, laptop, IPad and mobilephones
+ Friends and relatives were shown the website and reviewed it

### Technologies Used
+ HTML ~ main Language used to structure the individual pages of the website.
+ CSS ~ styling language used to format and visually build upon the accompanying HTML.
+ [Bootstrap Framework](https://getbootstrap.com/) ~ Used as the core structuring layout building blocks of the website, ensuring responsive size display.
+ [Gitpod](https://www.gitpod.io/) ~ Gitpod was used as the preferred IDE for this project.
+ Gitpod Terminal ~ Used to commit to local repository and further push to Github Repo ensuring version controlling of the project build.
+ [Git](https://git-scm.com/) ~ Version control system for tracking changes to your coding projects.
+ [Github](https://github.com/) ~ Used to host the deployed website and repository of all previous versions of the build.
+ Google Chrome Developer Tools ~ Used as the core test phase throughout the project build life, testing the responsiveness of elements and CSS visuals.
+ [Pexels](https://www.pexels.com/) ~ Online Free stock imagery. Used to provide the hero shot images.
+ [Fontawesome](https://fontawesome.com/) ~ for icons 
+ [Freepnglogos](https://www.freepnglogos.com/) ~ used for images that of the logo from the games that are shown on the Webpage
+ [Balsamiq](https://balsamiq.com/) ~ used to create the wireframes for this project

### Deployment
#### Github Pages
The following steps were used to deploy the page to Github Pages 
+ Navigate to the site’s repository.
+ Under the site repositories name, click "Settings"
+ Scroll down the page to "GitHub Pages section"
+ Under Source, click on the dropdown tab that is defaulted to "None"
+ Select "Branch: Master" then hit Save. 
+ At this point, the page will automatically refresh and the website is deployed
+ Scroll back down to the GitHub pages section to obtain the link to the  published site. 

#### How to run the project locally
+ [click here to access the project repository](https://github.com/Gonzo2500/Milestone_project_1)
+ Click on the dropdown menu named "Code"
+ Click the HTTPs section (it should be preselected)
+ Click the clipboard icon to clone the repository
+ Open your IDE terminal
+ Type ‘git clone’ and paste in the url you just copied e.g. `$ git clone https://github.com/Gonzo2500/Milestone_project_1.git`
+ Press enter, the clone will be created

### Credits

#### Content
+ All content of this site was written by the website developer

#### Code
The [Bootstrap](https://getbootstrap.com/) library was used to structure parts of the website
+ The Navigation bar (mainly the collapse function on small screens)
+ the modal on the event page

To keep the footer at the bottom of the page [CSS-tricks](https://css-tricks.com/couple-takes-sticky-footer/) provided an easy solution, which was used in this project
