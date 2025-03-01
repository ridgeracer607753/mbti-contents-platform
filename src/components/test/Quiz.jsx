import { useState, useEffect } from 'react';

function Quiz({questions, mbtiScore, setMbtiScore, setMode}) {

    const [questionNum, setQuestionNum] = useState(0);
    const onOptionClick = (type) => () => {
        mbtiScore[type] += 1;
        setMbtiScore({...mbtiScore});
        console.log(type);
        // Update the mbtiScore based on the type
       
        setQuestionNum(questionNum + 1);
    };

    useEffect(() => {
        if (questionNum >= questions.length) {
            setMode("loading");
        }
    },[questionNum,questions.length,setMode]);

    return ( 
        <div>
            <h3>{questions[questionNum]?.question}</h3>
            <button onClick={onOptionClick(questions[questionNum]?.answers[0]?.type)}>{questions[questionNum]?.answers[0]?.content}</button>
            <button onClick={onOptionClick(questions[questionNum]?.answers[1]?.type)}>{questions[questionNum]?.answers[1]?.content}</button>
            <div>프로그래스 바</div>
        </div>
    );
}

export default Quiz;