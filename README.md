# Milestone Project 2
![Gemba Project](https://github.com/Gonzo2500/Milestone-Project-2/blob/master/documentation/screenshots/hero-ms2.PNG "Hero-shot index.html")
## Gemba Consulting Interactive Frontend Project 
### Background 
This milestone project creation is the last step of learning and study from the fourth and fifth modules of the Full Stack Developer Course, Javascript Fundamentals & Interactive Frontend Development,, to build a mobile-first fully responsive website. In this case for the fictional company "Gemba". The emphasis was on building a quiz, that is displayed at the "Gemba" Website. As Javascript was in scope for this project, Bootstrap wasn't used and things like a responsive navbar were build independently.

![Hero-shot-quiz](https://github.com/Gonzo2500/Milestone-Project-2/blob/master/documentation/screenshots/quiz-shot.PNG "Hero-shot quiz.html")

The website provides the user with the ability to try three different quizes, revoling around software agility. 
Here is a link to the deployed [site](https://gonzo2500.github.io/Milestone-Project-2/index.html)

### User Experience (UX) 
#### User Stories 
+ As a visitor of the site I want a clear overview of the content that is offered. So that I can see if the offers draw my interest
+ As a user I want to challenge my knowledge about agile software development.  
+ As a user of the quiz I want the chance to have different quiz topics.
+ As a user of the quiz I want to be able to see a timer and how many questions are still left.
+ As a user of the quiz, I want to get a final score to see how good my knowledge of the topic really is
+ As a user of the quiz I want to see the right answer, to learn more. 
+ As a user I want to be able to join a training class to improve my skills. 

#### Design
##### Colour Scheme
the main colors used for this project are white (#fafafa) and rgb(25,25,25). Depending on the scenario they are used as background-color or the main font-color. Other colors that are used are  orange #fac371 blue #9eadf0 and yellow #daf174. These colors are also used to show the user which quiz they are currently answering, because text-colors, button-colors and background-colors(for the answer) adapts to the user choice.

![example of color change ](https://github.com/Gonzo2500/Milestone-Project-2/blob/master/documentation/screenshots/scrum-quiz.PNG "example of color change scrum")
![example of color change ](https://github.com/Gonzo2500/Milestone-Project-2/blob/master/documentation/screenshots/kanban-quiz.PNG "example of color change kanban")


##### Typography
The Roboto font is the main font used in this project. It provides a natural reading rhythm giving the webpage a nice look while also bringing accessibility in terms of easy to read text. As a fallback Sans-serif was used, in case the font doesn't load to the webpage correctly.

Bungee Outline was used for the Gemba logo. This font stands out (also works great with Roboto). The reason for the scarce usage of this font was to keep the easy readable. As a Fallback Sans-serif was used, in case the font doesn't load to the webpage correctly.

##### Imagery
Images for the hero shots were used to create a striking effect that gains the users/visitors attention. The same applies for the images for the quiz-cards.
 
##### Wireframes
A Desktop First approach was used for the design of the wireframes.  This aproach was used because the webpage revolves around software development and business learning. Users likely use their desktops or notebooks to visit the site. Because most traffic nowadays comes from mobile users, work was provided to make sure that the website is repsonsive on all screen sizes.
 + Home Page Wireframe : [Desktop](https://github.com/Gonzo2500/Milestone-Project-2/blob/master/documentation/gemba_landing_page_wireframe.pdf)   
 + Quiz Page Wireframe : [Desktop](https://github.com/Gonzo2500/Milestone-Project-2/blob/master/documentation/gemba_quiz_page_wireframe.pdf) 
 + Quiz Box Card Page Wireframe : [Desktop](https://github.com/Gonzo2500/Milestone-Project-2/blob/master/documentation/gemba_quiz_card_wireframe.pdf)   


### Features
+ Fully responsive website with vanilla javascript navigation bar
+ Play 3 different quizzes
+ Contact form for training classes
+ Get form data from user via EmailJs
+ Both forms hold data validation and all fields residing within are set to required ensuring information submitted is of the correct format.
+ Interactive elements
+ Showing right answer for questions
+ Showing how much time the user has left to answer

The fonts used throughout the site were imported into the HTML of each page from Google Fonts and are called 'Roboto' and "Bungee Outline".


#### User Stories
1. As a visitor of the site I want a clear overview of the content that is offered. So that I can see if the offers draw my interest
2. As a user I want to challenge my knowledge about agile software development.  
3. As a user of the quiz I want the chance to have different quiz topics.
4. As a user of the quiz I want to be able to see a timer and how many questions are still left.
5. As a user of the quiz, I want to get a final score to see how good my knowledge of the topic really is
6. As a user of the quiz I want to see the right answer, to learn more. 
7. As a user I want to be able to join a training class to improve my skills. 

#### Future Features  

##### Select multiple answers
The next addition would be to allow the user multiple answers. In the first version it is only possible to select one answer.

##### Training page (google maps)
The concept for the [training page](https://github.com/Gonzo2500/Milestone-Project-2/blob/master/documentation/gemba_landing_page_wireframe.pdf) was to have google maps and markers for the locations the training will take place. In the first version this was replaced by a simple form field, where the user can choose his training class. But it is planned to replace it with google maps, markers on the map and event cards next to the map
 
##### Providing an Explanation for solution after user selects answer 
This will be a button triggering a dropdown, that gives the user a detailed explanation for the right answer.
.

### Testing
The W3C Markup Validator and W3C CSS Validator Services were used on every page of the project to ensure there were no syntax errors.
+ [HTML Validator](https://github.com/Gonzo2500/Milestone-Project-2/blob/master/documentation/screenshots/html%20validator.PNG)
+ [CSS Validator](https://github.com/Gonzo2500/Milestone-Project-2/blob/master/documentation/screenshots/css%20validator.PNG)
+ [JSHint](https://jshint.com/) 

#### Testing User Stories from User Experience (UX) Section
#### 1. As a visitor of the site I want a clear overview of the content that is offered. So that I can see if the offers draw my interest
+ The Gemba landing page provides a simple overview about the content that is provided on the webpage. The user can navigate via the navigation bar or use the buttons to got to the site.
![landing page ](https://github.com/Gonzo2500/Milestone-Project-2/blob/master/documentation/screenshots/gemba_lp_screenshot.PNG "landing page")

#### 2. As a user I want to challenge my knowledge about agile software development. As a user of the quiz I want the chance to have different quiz topics.
+ When the user goes to the quiz section, he has the chance to select 1 of 3 quizzes.
![quiz section ](https://github.com/Gonzo2500/Milestone-Project-2/blob/master/documentation/screenshots/quiz-shot.PNG "quiz section")
+ After the user finishes the quiz, he gets the result page. There the user has the chance to go back to the quiz section and take another quiz. 
![button back to quiz section](https://github.com/Gonzo2500/Milestone-Project-2/blob/master/documentation/screenshots/quiz-result.PNG "button back to quiz section")

#### 3. As a user of the quiz I want to be able to see a timer and how many questions are still left.
+ Before the quiz starts the user gets informed that a time limit per question exists. This is implemented so the user isn't surpised and can mentally prepare accordingly. 
![rule box](https://github.com/Gonzo2500/Milestone-Project-2/blob/master/documentation/screenshots/gemba_rule_box_screenshot.PNG "rule box")

+ When the quiz started the user can see a timer that counts down from 60s.  
![quiz timer](https://github.com/Gonzo2500/Milestone-Project-2/blob/master/documentation/screenshots/gemba_timer.PNG "quiz timer")

+ Also right under the answer options the user can find how many questions were already answered and how many questions are still left
![quiz footer, question number](https://github.com/Gonzo2500/Milestone-Project-2/blob/master/documentation/screenshots/gemba_quiz_footer.PNG "quiz footer, question number")


#### 4. As a user of the quiz I want to see the right answer, to learn more. 
+ When the user selects an answer he gets feedback immediately. If the user selected the correct answer, the selected option is displayed green.
![user answers right](https://github.com/Gonzo2500/Milestone-Project-2/blob/master/documentation/screenshots/gemba_quiz_answer.PNG "user answers right")
+ When the user selects the wrong answer, the selectedoption is displayed red and the correct answer will appear green, to show the right solution. 
![user answers wrong](https://github.com/Gonzo2500/Milestone-Project-2/blob/master/documentation/screenshots/gemba_quiz_solution.PNG "user answers wrong")
+ In addition: When the timer reaches zero, the user can't select an answer anymore and the solution is displayed green

#### 5.  As a user of the quiz, I want to get a final score to see how good my knowledge of the topic really is
+ When the user chooses the correct answer, a point to the total score is added. The score is then displayed after the user finished answering all the questions. 
+ Depending on the score the user gets different messages and recommendation for training. As an example: When the user gets no correct answer, the recommendation is the beginner training on the quiz topic. When the user scores 8 points the "Masterclass" training is recommended 

![perfect score, no particular training is recommended](https://github.com/Gonzo2500/Milestone-Project-2/blob/master/documentation/screenshots/quiz-result.PNG "perfect score, no particular training is recommended")
![example for an other score and message](https://github.com/Gonzo2500/Milestone-Project-2/blob/master/documentation/screenshots/gemba_quiz_result_2.PNG "example for an other score and message")


#### 6.  As a user I want to be able to join a training class to improve my skills.
+ As shown in the screenshots before, the user can access the training/contact page frrom all areas of the webpage, while buttons from the start- and quizpage send the user there.
![training page](https://github.com/Gonzo2500/Milestone-Project-2/blob/master/documentation/screenshots/gemba_training_screenshot.PNG "training page")
+ The user can select a training class and training level on the form field. The information then is send via EmailJs. 
![email generated from form](https://github.com/Gonzo2500/Milestone-Project-2/blob/master/documentation/screenshots/emailjs_mail.PNG "email generated from form")


#### Further Testing 
+ The Website was tested on different browsers e.g. Chrome, Internet Explorer, Microsoft Edge, Mozilla Firefox and Safari 
+ The Website was viewed on different devices: Desktop, laptop, IPad and mobilephones
+ Friends and relatives were shown the website and reviewed it
#### Known Issues 
 + On the chrome developer tools for Iphone 5 sometimes the quiz container overflows on the kanban quiz for 5 and 7. 
 
### Technologies Used
+ HTML ~ main Language used to structure the individual pages of the website.
+ CSS ~ styling language used to format and visually build upon the accompanying HTML.
+ EmailJs ~ so the form information is sent to the website owner.
+ Javascript ~ used for interactivity on website and logic behind quiz.
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
+ [click here to access the project repository](https://github.com/Gonzo2500/Milestone-Project-2)
+ Click on the dropdown menu named "Code"
+ Click the HTTPs section (it should be preselected)
+ Click the clipboard icon to clone the repository
+ Open your IDE terminal
+ Type ‘git clone’ and paste in the url you just copied e.g. `$ git clone https://github.com/Gonzo2500/Milestone-Project-2.git`
+ Press enter, the clone will be created

### Credits

#### Content
+ All content of this site was written by the website developer

#### Code

For the quiz: https://www.youtube.com/watch?v=WUBhpSRS_fk
