# **Flippin' Hack**


Project is deployed [here](https://bobshort4bobby4.github.io/Flipping-Tiles-Game-PP2/)  
  
Github repository is [here](https://github.com/bobshort4bobby4/Flipping-Tiles-Game-PP2/)    
  
    
![screen shot of am i responsive](https://github.com/bobshort4bobby4/Flipping-Tiles-Game-PP2/blob/main/assets/media/readmeimages/responsive.png)


# Introduction
This project is the second one I've undertaken as part of the Full Stack Software Diploma course at [Codeinstitute.net](https://www.CodeInstitute.net).

It is a version of the kids memory card game, familiar to most people.  The aim is to turn the cards over in pairs and 
note the position of the various icons on the face side, if they match they are  left face-side up, if not matched they
are flipped back to blank-side up.  The game is won when all the pairs are found.  The game will have two difficulty levels and options to toggle the music and soundfx.  



Memory games have been shown to greatly help children develop key skills. Brain functions such as focus, attention and concentration
are improved by games such as this one. Visual recognition is also improved as are both short-term and long-term memory.  
Adults also can greatly benefit from 'exercising' the brain, as any activity which encourages mental activity maintains and
can improve mental function.    
  
    
# User Experience/User Interface (UX/UI)

<details>
  
  <summary>User Experience/User Interface (UX/UI)</summary>
  
  ### User Stories
  
  ##### First Time Visitor Goals
  As a first time visitor I want:  
  - the rules and final aim of the game to be obvious.  
  - to be entertained and engaged with the game from the initial load.  
  - the game to function correctly and gameplay to be intuitive.  
  - to be able to play the game on various different devices.  
  
  ##### Return/frequent Visitor Goals.
  As a return/frequent visitor I want:  
  - to be able to gauge/score my performance.
  - to be able to challenge myself by increasing difficulty of the game.
  - to be able to play the game on various different devices.
  - to be able to mute music/sound effects if so desired.
  
  ##### Website's Owner Goals.
  As the developer I want:
  - to provide a fun game.
  - to provide a game to stimulate mental function.
  - to encourage continued use of the game.

  
   ### Design
  
  
  ##### Colour Scheme 
  I trialled  many different colour palettes whilst building the game and settled on a simple combination of shades of red, blue and black.
  Black is used for text colour and contrasts well with the other two primary colours.  Default Orange was used for the ink colour for the times as black
  did not shown up well against the background in the chosen font.  Lightsalmon was used for the display box in the modal screen.
  
  Red #E52521  
  
  ![Red#e52521](https://github.com/bobshort4bobby4/Flipping-Tiles-Game-PP2/blob/main/assets/media/readmeimages/red%23E52521-pp2.png)  
  
  Blue #049CD8  
  
  ![Blue#049cd8](https://github.com/bobshort4bobby4/Flipping-Tiles-Game-PP2/blob/main/assets/media/readmeimages/blue%23049CD8-pp2.png)  
  
  Black #000000  
  
  ![Black#000000](https://github.com/bobshort4bobby4/Flipping-Tiles-Game-PP2/blob/main/assets/media/readmeimages/black%23000000-pp2.png)  
  
  Light Salmon#FFa07A  
  
  ![Light Salmon#FFA07A](https://github.com/bobshort4bobby4/Flipping-Tiles-Game-PP2/blob/main/assets/media/readmeimages/lightsalmon-pp2.png)  
  
  Orange #FFA500    
  
  ![Orange#FFA500](https://github.com/bobshort4bobby4/Flipping-Tiles-Game-PP2/blob/main/assets/media/readmeimages/orange-pp2.png)  
  
  
  
  The background image is "blue maze" which was found at [Public Domain Pictures](https://www.publicdomainpictures.net/en/view-image.php?image=307680&picture=blue-maze-background)  
  
  
  ![Background image](https://github.com/bobshort4bobby4/Flipping-Tiles-Game-PP2/blob/main/assets/media/readmeimages/blue-maze-background-pp2.jpg)  
  
  ##### Typography
  I choose 'Titan One' as the font for the site. It is a big bold type that stands out from the background well and is easy to read.
    
  
  
  ![font example](https://github.com/bobshort4bobby4/Flipping-Tiles-Game-PP2/blob/main/assets/media/readmeimages/titan1-design-pp2.png)
    
  ##### Wireframes
  CTRL + Click to open in a new tab.
  
  [Mobile WireFrames](https://github.com/bobshort4bobby4/Flipping-Tiles-Game-PP2/blob/main/assets/media/readmeimages/flippin-mobilewt-pp2.pdf)  
  [Tablet WireFrames](https://github.com/bobshort4bobby4/Flipping-Tiles-Game-PP2/blob/main/assets/media/readmeimages/flippin-tabletwf-pp2.pdf)  
  [Desktop WireFrames](https://github.com/bobshort4bobby4/Flipping-Tiles-Game-PP2/blob/main/assets/media/readmeimages/flippin-desktopwf-pp2.pdf)
               
</details>  
  
  
  
 # Features

<details>
  
  <summary>Features</summary>
  
  ### Responsive  Website
  The site displays properly at a wide range of screen sizes and on landscape mode, further information on this is listed in the testing section.  
  This satisfies the user need to be able to play the game on various devices.   
    
    
  ![screenshot of iphone](https://github.com/bobshort4bobby4/Flipping-Tiles-Game-PP2/blob/main/assets/media/readmeimages/iphonelandscape-pp2.png)  
    
    
  ### Instruction Page 
  On loading there is a button in the bottom right hand of the screen (positioning depends on screen size) which the user can click to display 
  the game instructions and the game options.  This satisfies the user need to quickly understand how to play
  the game and to be easily able to toggle options.  
    
    
  ![picture of the instruction page](https://github.com/bobshort4bobby4/Flipping-Tiles-Game-PP2/blob/main/assets/media/readmeimages/instructionpage-pp2.png)  
    
    
  ### Timer
  As the game is in progress the time taken is tracked and displayed above the play area.  When the player completes the final pair the time taken 
  is displayed in the modal screen display area.  If the time is quicker than any other during that playing session or it is the first game in that session the Best Time display
  is up-dated with the new best time.  This satisfies the user need to be able to gauge/score their performance.  
    
    
  ![a picture of the timer section](https://github.com/bobshort4bobby4/Flipping-Tiles-Game-PP2/blob/main/assets/media/readmeimages/timer-pp2.png)  
    
    
  ### Customisable Features
  In order to increase player enjoyment and engagement with the site, I felt it was necessary to add an option to increase difficulty.
  This is achieved by simply adding another 6 cards to be matched, from 12 to 18. This option is accessed from the slide-down screen as shown above.  
  It is possible to stop the music and/or sound effects from playing by clicking on the speaker icons, also found on the instruction page.  These features address the user need
  to be able to vary difficulty and customize gameplay. 
  
    
    
  ![a picture of the hard difficulty level](https://github.com/bobshort4bobby4/Flipping-Tiles-Game-PP2/blob/main/assets/media/readmeimages/hardlevel-pp2.png)  
    
    
  ### Modal Screen
  When the player completes all the matches a modal screen is displayed with a congratulatory message and details of the time taken and the difficulty level.  
    
    
  ![a picture of the victory screen](https://github.com/bobshort4bobby4/Flipping-Tiles-Game-PP2/blob/main/assets/media/readmeimages/modal-pp2.png)
  
  
  ### Animated Start Button
  The start button is animated whilst the game is not in play, in order to direct the user's attention to it.
  
  
  ### Possible Future Features
  I'd would like to add extra features to the game such as;
  - Progressively harder levels as the player finishes each stage, this will be achieved by adding extra cards and shortening the time the un-matched cards are left turned.
  - Different colours and icons on the face side of the cards as player progresses through the game.
  - Set up a high-scores table on localStorage so players could see their ranking.
  
  
  </details>    
    
      
# Technologies Used
<details>
  <summary>Technologies Used</summary>
  
  #### Languages Used
  
  - HTML5
  - CSS
  - Javascript
  
  #### Applications Used
  
  - [Balsamiq](https://www.balsamiq.com) was used to create wireframes for this project.
  - [Google Fonts](https://fonts.google.com/) fonts were downloaded from Google Fonts.
  - [Fontawesome](https://www.fontawesome.com) icons were downloaded from Font Awesome.com.
  - [Git](https://git-scm.com/) Git was used for version control.
  - [GitHub](https://github.com/) GitHub is used to store the projects code.
  - [Gitpages](https://pages.github.com/) Gitpages are used to deploy the site.
  - [Chrome Developer Tools](https://developer.chrome.com/docs/devtools/) used for layout and responsive testing.
  - [Wave](https://wave.webaim.org/) used for accessibility testing.
  - [favICO.com](https://convertico.com/favicon/) used for creating favicon.
  - [W3 Validator](https://jigsaw.w3.org/css-validator/) used to test html and css code.
  - [Jshint](https://jshint.com/) used to validate Javascript code.
  - [autoprefixer.github.io](https://autoprefixer.github.io/) used to improve browser compatibility.
  - [Freeconvert.com](https://www.freeconvert.com) was used to convert the background image file to the  webp format.
  - [https://caniuse.com/webp](https://caniuse.com/webp)  used to check compatibility of the webp file format.
  - [color.a11y.com](https://color.a11y.com) used for testing colour contrasts.  
  - [audit.deque.com](https://audit.deque.com) used to check for any accessibility issues.  
  
 
</details>  
  
    
      
# Testing 
<details>
  <summary>Testing</summary>
  
  
  #### Lighthouse
  The web page was tested using the Lighthouse feature on the chrome browser giving the following result for desktop.    
  It should be noted that the performance score was variable, ranging from the low eighties to 100 for desktop and from high seventies to high nineties for mobile.  
  
      
  
  
  ![lighthouse desktop result](https://github.com/bobshort4bobby4/Flipping-Tiles-Game-PP2/blob/main/assets/media/readmeimages/lighthousedesktop-pp2.png)    
  
  The Lighthouse result for mobile is shown below.  
    
    
  ![a picture of the lighthouse mobile result](https://github.com/bobshort4bobby4/Flipping-Tiles-Game-PP2/blob/main/assets/media/readmeimages/mobilelighthouse-pp2.png)
    
  
  #### W3c CSS Validator
  The css file was tested using the W3c CSS validator showing no errors and one warning which concerned the importation of the google font. From what I have learned about this warning from internet research it does not seem to be considered a matter for concern.
  
  
  ![css validation result](https://github.com/bobshort4bobby4/Flipping-Tiles-Game-PP2/blob/main/assets/media/readmeimages/cssvalidation-pp2.png)
    
   The autoprefixer parsed css file was tested using the W3c CSS validator, which showed no errors but produced 58 warnings.  The warning were all of the type "is a vendor extension" as shown below.  
    
    
  ![a picture of the autoprefixer css warnings](https://github.com/bobshort4bobby4/Flipping-Tiles-Game-PP2/blob/main/assets/media/readmeimages/autoprefixerresult-pp2.png)  
  
  
  
  
  
  ![a picture of the autoprefixer css validation result](https://github.com/bobshort4bobby4/Flipping-Tiles-Game-PP2/blob/main/assets/media/readmeimages/autofixercssvalidation-pp2.png)
  
  #### W3c HTML Validator
  The HTML was tested with the W3c HTML Validator with no error returned.  
  
  
  ![ a picture of the html validation result](https://github.com/bobshort4bobby4/Flipping-Tiles-Game-PP2/blob/main/assets/media/readmeimages/htmlvalidation-pp2.png)  
    
  
  #### JSHint
  The Javascript file was validated using JSHint, with the following result.  The `New JavaScript features (ES6)` option was ticked in the 
  Configure menu. 
  
  ![a picture of the jshint result](https://github.com/bobshort4bobby4/Flipping-Tiles-Game-PP2/blob/main/assets/media/readmeimages/jshintvalidation-pp2.png)  
    
    
  #### WAVE Web Accessibility Evaluation Tool
  The WAVE tool was used to test the page for accessibility.  The inital result produced 8 contrast errors, these were caused by the colour of the ink used for the times  (orange).  
    
  ![ a picture of the initial wave result](https://github.com/bobshort4bobby4/Flipping-Tiles-Game-PP2/blob/main/assets/media/readmeimages/waveinitial-pp2.png)  
    
    
  I changed the ink colour to black, this produced no contrast errors but to me at least was extremely hard to see against the blue background.  
  
    
  ![a picture of the wave result black ink](https://github.com/bobshort4bobby4/Flipping-Tiles-Game-PP2/blob/main/assets/media/readmeimages/waveblack-pp2.png)  
    
    
  I then decided to check the webpage in two other accessibility checkers namely color.a11y.com and audit.deque.com.  Both of these sites reported no errors so I will use the original orange colour in the deployed site.  
    
    
  ![ a picture of the color.a11y result](https://github.com/bobshort4bobby4/Flipping-Tiles-Game-PP2/blob/main/assets/media/readmeimages/colora11y-pp2.png)  
     
    
    
  
    
  ![ a picture of the audit.deque.com result](https://github.com/bobshort4bobby4/Flipping-Tiles-Game-PP2/blob/main/assets/media/readmeimages/audit.deque-pp2.png)    
  
 **Note** the website webaccessability.com was used to test for accessibilty compliance initially, returning a score of 100%, however during my final check of this document I found that that website no longer seem to work so I used the audit.deque website in it's place.  
  
    
    
  
    
    
  #### Responsiveness
  Media queries based on screen width were used to ensure the page displayed correctly across a range of screen sizes.
  the Chrome and Edge browsers were used to test responsiveness.  
  
  Breakpoints used are as follows 280px, 375px, 425px, 768px, 1024px, 1440px, 1700px, 1900px and 2100px.  
  
  Queries were also implemented for landscape mode (orientation:landscape) at the following 5 breakpoints:  
  (min-height:250px and max-height:280px),  
  (min-height:281px and max-height:374px),    
  (min-height:375px and max-height:424px),  
  (min-height:425px and max-height:595px),  
  (min-height:596px and max-height:767px),  
  (min-height:768px and max-height:850px).
  
  The responsive testing tools included within the Google Chrome  and the Edge browsers were used to test these, all display correctly.  
  
  I also used the device specific tool within these browsers to test a number of devices representng a wide range of device types.  
  The results are given below.
  
  
  |Device          |  Result  Portrait           |         Result Landscape      |
  |----------------|-----------------------------|-------------------------------|
  | Blackberry Z30 | Displays ok                 | Displays ok                   |
  | MS Lumia 550   | N/A                         | Displays ok                   |
  | Nexus 7        | Displays ok                 | Displays ok                   |
  | iPhone 6/7/8   | Displays ok                 | Displays ok                   |
  | Galaxy Fold    | Displays ok (single screen) | Displays ok (single screen)   |
  | Galaxy Fold    | Displays ok (double screen) | Displays ok (double screen)   |
  | Nest Hub Max   | Displays ok                 | N/A                           |
  
  
  
    
   #### Issues Encountered Building The Game
  A brief summary of some of the difficulties I had building this game and how I attempted to fix them.  
  
  
  I had many problems positioning the two divs I used to make the two-sided card and then to get them to flip satisfactorily.
  I had to become familiar with many new (to me) css properties such as transform-origin, transform-style, backface-visibility and perspective.
  
  I was attempting to build a function using the math random function when I came across the Fisher–Yates shuffle Algorithm on a google search.
  I used this rather than writing a bespoke function.
  
  The next major problem I encountered was within the compare function where the two picked cards are compared.
  Initially I tried to use the innerText property of the two picked cards as parameters to compare, which worked intermittently, I then used textContent and innerHTML
  to compare, these worked approximately 75-80% of the time, which I couldn't figure as when the two properties were put through diffchecker
  they came back as identical.  I then tried to set a data attribute to each card in the populateBehindCards function, I was using the counter (i)
  to set a attribute for each type of card, when the cards were randomly set from javascript (in the for loop shown below)  
  
  
  `
        for (let i =0 ; i < scrambledArray.length; i++){
            behinds[i].innerHTML = cardIcons[scrambledArray[i]];
        }
     }
  `
  
  At this point it was pointed out to me that including this in the html would also be possible, this was so much simpler and I used that method.  
                                                    
  The tiles were flipping askew due to me having given them both a small padding and margin value.  This issue was easily fixed once I had tracked down what was causing it.   
                                                    
                                                    
  ![a picture of the askew tile](https://github.com/bobshort4bobby4/Flipping-Tiles-Game-PP2/blob/main/assets/media/readmeimages/askewflippedtile-pp2.png)                                                
                                                  
                                                  
  

  
    
 #### Manual Testing for Bugs
  When I had the game working I set about using it with a view to identifying any possible flaws in the logic or a combination of user actions which would
  cause the program to fail. To this end I played the game through numerous times checking for expected outcomes and noting in which situations a fault occured.
  I also cycled through the various screen sizes and noted any mis-alignment of elements on the screen.  
                                                  
  
  Then I methodically worked through the list of faults and corrected the code to solve each bug.  
                                                  
  
  Some of the faults are listed here along with how I fixed them.
                                                  
  - There were many faults with the appearance of the game and these were corrected with CSS properties.
  - The Instruction Page was not retracting up completely out of view at certain screen sizes (length), solved by re-positioning using the top property.
  - All the cards should be 'unclickable' while the game was not being played.  If a user randomly clicked on cards before the first play through, then
    these cards would be out of synch with the remainder and would show the wrong face during play. I set the pointerEvent property of the cards elements to 'none'
    until the start button was clicked.
  - Once a card had been turned it should be unclickable untill another card had been turned and the comparison made.  I set the pointerEvents property
    for that card to "none" within the turncard function leaving it this way until the second card had been turned and just before the compare function was called.
  - When a match was made the two matched cards needed to be made 'unclickable' for the rest of the game cycle. I used the pointerEvents property also for this.
  - During the one second gap between two un-matched cards being re-turned back down, the player should not be able to click another un-turned card.
    It was not possible to use the pointerEvents property for this as it re-set the pointerEvents property of the matched pairs already found.  To solve this I declared a           variable 'freezeOut' set to false.  I put this in an if statement in the turncard function which returned from the function immediately if true.  I could then set freezeOut     to the appropriate value depending on game state.  
  
  
   `function turnCard(){
    if(freezeOut){                //prevents user clicking on card during 1 second delay before unmatched cards are re-turned
    return;
    }
   `
  
  - If a player pressed the start button mid-game ie. before the victory function had been called it caused the timer to run at double speed.  This was fixed by resetting the 
    timer as the first action in the startGame function.  
  - If a player pressed the start button mid game with only one unmatched card turned, the matching algorithm would not work due to the `firstItemClicked` variable 
    being the wrong value.  I set this to true at the start of the startGame function which solved the issue.  
  - The time shown in the timer area at game finish would often differ from the time shown in the modal screen by one second.  This was fixed by moving the stopclock function       call to before the call to the showmodal function.  
                                                  
                                                    
                                                    
   #### Testing game for achievement of User Goals.  
  
  
  |                       Goal                                              |                          Outcome                                                               |
  |-------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
  |The rules and final aim of the game to be obvious.                       |Instruction Page button prominently displayed.                                                  |
  |To be entertained and engaged with the game from the initial load.       |Colour,sound and animation used in an effort to engage user.                                    |
  |The game to function correctly and gameplay to be intuitive.             |No logic errors in code, sound used to signal correct/incorrect flips.                          |
  |To be able to play the game on various different devices.                |Media queries used to make game accessible across a range of devices.                           |
  |To be able to gauge/score my performance.                                |Timer function and Best time function meets this need.                                          |
  |To be able to challenge myself by increasing difficulty of the game.     |Easy/Hard difficulty toggle options provided.                                                   |
  |To be able to play the game on various different devices.                |Media queries used to make game accessible across a range of devices.                           |
  |To be able to mute music/sound effects if so desired.                    |Music and sounds are optional, changed via the Instruction/option page.                         |
  |To provide a fun game.                                                   |Colour,sound and animation used in an effort to engage user.                                    |
  |To provide a game to stimulate mental function.                          |Game play requires attention and focus.                                                         |
  |To encourage continued use of the game.                                  |Colour,sound and animation used in an effort to entertain user and encourage continued use.     |
   
    
    
 #### Automated Testing
  I did not have the expertise to use a unit-testing framework such as Jasmine or Jest.   
    
    
 #### Issues Remaining (Known to me)
 There is a very small lag between the start button being clicked and the timer starting.  This issue appeared when I put the timer reset code in the startGame function
 to handle the problem of the timer running too fast.  
 
 It may have been preferable to have the music/sound effects toggle icons visible at all times, but the games are short enough that it should not be an issue for anybody.  
  
 When a user clicks on the Easy/Hard button in order to change difficulty, the display is not up-dated with the extra/lesser amount of cards untill the start button is clicked and the game 
 begins. This has no adverse effect on game-play but it may have been better from a UX point of view to have the changes displayed straight away to confirm the players        actions.  
  
  
  
  </details>
    
# Deployment
  <details>
    
  <summary>Deployment</summary>
  
  This project was built on the Gitpod IDE using the Code Institute template found here:<br>https://github.com/Code-Institute-Org/gitpod-full-template
      
  
    
#### GitHub Pages
   
  GitHub Pages is a static site hosting service which uses files from a GitHub repository to publish a website.  I used Github Pages to deploy this project
    following the process set out below.  
    
  1. Open the Github repository page you wish to publish, in this case [Here](https://github.com/bobshort4bobby4/Flipping-Tiles-Game-PP2/).
  1. Click on the 'Settings' option from the list of options above the repo contents.
  1. Scroll down the page untill the Github Pages heading appears and click on the link 'Check it out here!".
  1. Select Branch Main and leave /root unchanged.
  1. Click 'Save'.
  1. The URL for the website will be shown in a panel towards the top of the page.  After a brief wait it will turn green indicating the website is published.
    
  ![ghpages-published](https://github.com/bobshort4bobby4/Flipping-Tiles-Game-PP2/blob/main/assets/media/readmeimages/githubpages.png) 
 
#### Forking
  Forking a Github repository is the the process of making a copy of any repository that you can use without affecting the original, this original is known as the 
  "upstream repository".
  The process for forking a repository is set out below.
  1. Go to the Github page that hosts the repository you wish to fork.
  1. On the top-right of the page there is a button "Fork".
  1. Click this button.
  1. This creates a repository in your Github home page which is a copy of the original. You can submit and receive changes to the code by using pull requests 
  and/or syncing with the upstream repository.
    
  (Taken from the Github Docs guide "Forking Projects")
    
#### Cloning 
  Cloning a repository involves making a full copy of that repository on your local machine. This makes working on the code easier.  Changes can be pushed back up to the 
  GitHub site or changes from other sources pulled to your local copy. To make a clone follow the process below.
  1. Goto the repository page on GitHub.
  1. Above the file list click on the green button titled "Code".
  1. You can choose to download a zip file of the repository, unpack it on your local machine and open it in your IDE or,
  1. Clone using HTTPS by copying the URL under the HTTPS tab.
  1. Open a terminal window, set current directory to the one you want to contain the clone.
  1. Type `git clone `and paste the URL copied from the GitHub page.
  1. The repository clone will be created on your machine.
    
  (Taken from the Github Docs guide "Cloning a repository")
    
  </details>
    


# Credits
  <details>
  <summary>Credits</summary>
 
  #### Images
  The Background image was downloaded from  [Public Domain Pictures](https://www.publicdomainpictures.net/en/view-image.php?image=307680&picture=blue-maze-background)  
  The font used was taken from [Google Fonts](https://fonts.google.com/)  
  The icons were downloaded from [FontAwesome](https://www.fontawesome.com)  
    
  #### Music/Sound FX
  Music was sourced at [opengameart.org](https://www.opengameart.org)  
  Remaining sound effects were downloaded from [Freesound.org](https://www.freesound.org)  
  All sounds are free to use.
 
  #### Code/Reference 
  The method of placing two identical divs on top of each other using different display properties, I learned from a You-Tube video by [Shaun Pelling](https://www.youtube.com/watch?v=QhKdOrOh90w&list=PL4cUxeGkcC9iGYgmEd2dm3zAKzyCGDtM5&index=13&t=401s).  
  I referenced this video by [freecodecamp.org](https://www.youtube.com/watch?v=ZniVgo8U7ek&t=1697s) to help me get the flipping animation working properly and some aspects of     program flow.  
  I used [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio) to learn about the use of the Audio constructor.  
  The [w3 schools](https://www.w3schools.com/jsref/default.asp) website was also used particularly in relation to element attributes and how best to set them.  
  I referenced the Fisher–Yates shuffle algorithm at [Wikipedia](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle).  
  I learned the method for adding a leading 0 to one digit time values at [TechnicalCafe](https://www.youtube.com/watch?v=1INmsFnD-u4&t=59s).  
  I used the [Udemy](https://www.udemy.com/course/modern-javascript-from-novice-to-ninja) "Modern Javascript" course for information regarding Modal screens, 
  event delegation and arrow functions.  
  The [Code Institute](https://www.CodeInstitute.net) course material.
  
  
  #### Thanks
  Thank you to my Mentor Mr. Ben Kavanagh and to the Code Institute tutor who pointed me in the right direction regarding which parameters to use when comparing two elements.  
  
    
  </details>
