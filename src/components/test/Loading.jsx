import Lottie from 'react-lottie'
import React, { useState, useEffect } from 'react'
import * as animationData from '../../assets/loading-animation.json'
import { useNavigate } from 'react-router-dom'

function Loading({ mbtiScore, currentTest }) {
    const navigate = useNavigate();
    const loadingTime = 3700;

    const [resultQuery, setResultQuery] = useState("");

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData.default,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    useEffect(() => {
        const mbtiPairs = [
            ["E", "I"],
            ["S", "N"],
            ["T", "F"],
            ["J", "P"],
        ];

        let resultType = "";

        for (let pair of mbtiPairs) {
            if (mbtiScore[pair[0]] > mbtiScore[pair[1]]) {
                resultType += pair[0];
            } else {
                resultType += pair[1];
            }
        }

        const query = currentTest?.results?.find(result => result?.type === resultType)?.query;

        setResultQuery(query); // 저장
        console.log(resultType, query);
    }, [mbtiScore, currentTest]);

    useEffect(() => {
        if (!resultQuery) return;
    
        const timer = setTimeout(() => {
            navigate(`/${currentTest.info.mainUrl}/result/${resultQuery}`);
        }, loadingTime);
    
        return () => clearTimeout(timer); // 언마운트 시 클린업
    }, [loadingTime, resultQuery, navigate, currentTest]);
    

    return <Lottie options={defaultOptions} height={250} width={250} style={{ marginTop: "10rem" }} />;
}

export default Loading;
