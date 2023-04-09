import { BrazzersCorousel } from "./components/brazzers-corousel/BrazzersCorousel";
import React from 'react'
import Finger from './components/Finger'
import Run from './components/Run'
import image_1 from './static/images/svo/photo_2023-03-28_00-21-38.jpg'
import image_2 from './static/images/svo/photo_2023-03-28_00-21-43.jpg'
import image_3 from './static/images/svo/photo_2023-03-28_00-21-44.jpg'
import image_4 from './static/images/svo/photo_2023-03-28_00-21-46.jpg'
import image_5 from './static/images/svo/photo_2023-03-28_00-21-47.jpg'
import image_6 from './static/images/svo/photo_2023-03-28_00-23-33.jpg'
import image_7 from './static/images/svo/photo_2023-03-28_00-21-38.jpg'
const images = [image_1,image_2, image_3, image_4, image_5, image_6, image_7]
function App() {
  return (
    <div className="App">
      <div>
        <a href='https://github.com/SergeyGuns/brazzers-corousel'> https://github.com/SergeyGuns/brazzers-corousel</a>
      </div>
      <BrazzersCorousel imageUrls={images} />
      <Run/>
      <Finger/>
    </div> 
  );
}

export default App;
