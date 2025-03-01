import Lottie from 'react-lottie'
import React from 'react'
import * as animationData from '../../assets/loading-animation.json'

function Loading() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData.default,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
        }; 

  return <Lottie options={defaultOptions} height={250} width={250} style={{marginTop: "10rem"}}/>;
}

export default Loading