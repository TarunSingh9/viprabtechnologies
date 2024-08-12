import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide} from 'react-slideshow-image'

 const slideImages = [
      {
        url:'/image/image-1.jpg',
        caption:'First slide'
      },
      {
        url:'/image/image-2.jpg',
        caption:'second slide'
      },
      {
        url:'/image/image-3.jpg',
        caption:'third slide'
      },
      {
        url:'/image/image-4.jpg',
        caption:'forth slide'
      },
      {
        url:'/image/image-5.jpg',
        caption:'fifth slide'
      }

   ];

const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "600px",
    backgroundSize:'cover',
}

const spanStyle = {
    fontSize: "100px",
    background: "#433D8B",
    color :"#000000"
}


const ImageSlider = () => {
  return (
    <div className='slide-container'>
      <Slide>
         {slideImages.map((image, index) => (
              <div key={index}>
                   <div style={{...divStyle, backgroundImage:`url(${image.url})`}}>
                        <span style={{spanStyle}}>{image.caption}</span>
                   </div>
              </div>
        ))}
      </Slide>
    </div>
  )
}

export default ImageSlider