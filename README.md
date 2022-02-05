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
are improved by games such as this one. Visual recognition is also improved as is both short-term and long-term memory.  
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
  is displayed in the modal screen display area.  If the time is quicker than any other during that playing session the Best Time display
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
  - [webaccessibility.com](https://webaccessibility.com) used to check for any accessibility issues.  
  
 
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
