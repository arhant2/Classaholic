<h1 align="center">Classaholic</h1> <br>

<h2 align="center">Installing Dependencies and Running the platform</h2>

<ui>
  <li> git clone </li>
  <li>cd Classaholic</li>
  <li> npm i </li>
  <li>cd frontend </li>
  <li>npm i </li>
  <li>cd .. </li>
  <li>npm run dev</li>
 </ui>
 <br>

## Inspiration
Due to the COVID 19 pandemic, different sectors were affected differently, however it was the education sector which was hit the most. Being part of the affected community we empathise with other students. Certainly online learning has come to aid the situation. And this is the best option for the future of our planet as well. Some obvious benefits of online learning are its flexibility, wide range of selection of programs, cost efficiency and eco- friendly nature. However, we experienced some major flaws in the current online learning platforms. In any situation, education sector should not be compromised with. Since the growth of the whole world depends upon education, online learning platforms should be hassle free and easy to adapt to. Some existing flaws in online learning platforms include minimal interaction between teachers and students, frequent backlogs and disturbances due to internet connectivity issues, no efficient way of doubt solving, etc.. We tried to build a platform which solves these problems and helps students to get adapted to online learning.  

## What it does
**Classaholic** provides a one stop solution for all the problems faced in current online learning platforms. It provides a platform for live interaction between teachers and students, a common board with multiple user access to discuss doubts and work on group projects/assignments. 
For students with temporary internet issues, there is a tutorial section which can be used to learn a concept later, in case of an internet issue while the live class is going on.
The special feature _Capture the Class_ helps students in rural areas with very poor internet connectivity. Through this, a teacher can capture the whiteboard once it is filled and the image is converted so that it can reach easily to students with minimal internet usage. This way, students can learn through live notes and avoid backlogs.

## How we built it
Basic UI has been built with React and Bootstrap as Front-End Frameworks. For discuss feature, canvas API has been used along with socket.io and peerjs. Canvas API is used for providing basic drawing features, socket.io for sending Realtime coordinates to all the joined users, peerjs which is built on top of WebRTC enables Realtime video conferencing. For record feature, mattdiamond is used.Capture the class uses Machine Learning frameworks python, numpy and opencv for first getting test data by first calebrating the board, it then converts it to grayscale and uses the edge detection,  to find the contour (outline) representing the whiteboard being scanned. It uses perspective transform to obtain the top-down view of the document. Finally jpeg image compression is used for getting a final compressed image.

## Challenges we ran into
We faced difficulties with the machine learning frameworks. We also faced some difficulties in getting adapted to some new technologies like socket.io.

## Accomplishments that we're proud of
We actually solved a major problem that a lot of students are facing currently. This will encourage students in rural areas to adapt to online learning.

## What we learned
We learned computer vision and image processing via this model. We trained neural networks to compare data and output and produce optimal image. We learnt how machine learning can be used for reducing an image size while maintaining its quality and clarity of text by grayscale conversion. 

## What's next for Classaholic
We plan to bring more accuracy to the machine learning model we have used. We would also work on the UI to make it more pleasing to the eye. We plan to incorporate a chat feature in the live classrooms as well.


## Demonstration Video
[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/RjoEIULIxxA/0.jpg)](https://www.youtube.com/watch?v=RjoEIULIxxA)
