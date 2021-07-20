/*Create a project using create-react-app.
Convert this code into JSX and put it in the App.js file.
Make sure you add two images, “imageInPublic.jpg” in the public folder and “imageInSrc.jpg” in the src folder.
Make an external file called style.css and add a style for the classes “title” and “red”.
Tip: Make sure you change the <br> tag accordingly
 The HTML CODE:

<div style="border:solid 1px black;max-width:100vw">

 <h1 class="title red">Your name here</h1>

 <br >

 <img src="/imageInSrc.jpg" >

 <br >

 <img src="/imageInPublic.jpg" >

</div>

<video width="320" height="240" controls>

 <source src="myVideo.mp4" type="video/mp4" >

</video> */

import './App.css';
import imageInSrc from './imageInSrc.jpg';

function App() {
  return (
    <div>
      <div style={{border:"solid 1px black", maxWidth:"100vw"}}>

        <h1 className="title red">Your name here</h1>

        <br />

        <img src={imageInSrc} alt="" />

        <br />

        <img src="/imageInPublic.jpg" alt="" />

      </div>

      <video width="320" height="240" controls>

        <source src="myVideo.mp4" type="video/mp4" />

      </video>
    </div>
  );
}

export default App;
