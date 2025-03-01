import { useState } from "react";
import Intro from "./Intro";
import Quiz from "./Quiz";
import Loading from "./Loading";



function IntroRenderer({currentTest}) {

    const [mode, setMode] = useState("loading");
    // const [mode, setMode] = useState("intro");
    const [mbtiScore, setMbtiScore] = useState({
        E: 0,
        I: 0,
        S: 0,
        N: 0,
        T: 0,
        F: 0,
        J: 0,
        P: 0,
    });



    if (mode === "intro") {
        return <Intro info={currentTest?.info} setMode={setMode}/>;
    } else if (mode === "quiz") {
        return <Quiz 
            questions={currentTest?.questions}
            mbtiScore={mbtiScore}
            setMbtiScore={setMbtiScore}
            setMode={setMode}
         />;
    } else if (mode === "loading") {
        return <Loading />;
    } else {
        return <div>잘못된 페이지 입니다.</div>;
    }
}

export default IntroRenderer;