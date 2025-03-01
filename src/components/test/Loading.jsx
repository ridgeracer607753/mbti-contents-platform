import Lottie from 'react-lottie'
import React, { use } from 'react'
import * as animationData from '../../assets/loading-animation.json'
import { useEffect } from 'react'

function Loading({mbtiScore, currentTest}) {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData.default,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
        }; 

    useEffect(() => {
        console.log(mbtiScore);
        console.log(currentTest);

        const mbtiPais = [
            ["E", "I"],
            ["S", "N"],
            ["T", "F"],
            ["J", "P"],
        ];

        let resultType = "";

        for (let pair of mbtiPais) {
            if (mbtiScore[pair[0]] > mbtiScore[pair[1]]) {
                resultType += pair[0];
            } else {
                resultType += pair[1];
            }
        }

        

        //DB에서 결과값 찾기
        const resultQuery =  currentTest?.results?.find((result) => (
            result?.type === resultType
        ))?.query;

        console.log(resultType , resultQuery);
             

    },[mbtiScore,currentTest]);

  return <Lottie options={defaultOptions} height={250} width={250} style={{marginTop: "10rem"}}/>;
}

export default Loading