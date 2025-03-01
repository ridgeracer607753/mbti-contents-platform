import React from 'react';

function Quiz({questions, mbtiScore, setMbtiScore, setMode}) {

    const [questionNum, setQuestionNum] = React.useState(0);
    const onOptionClick = (option) => {
        setQuestionNum(questionNum + 1);
    };

    return ( 
        <div>
            <h3>{questions[questionNum]?.question}</h3>
            <button onClick={onOptionClick}>{questions[questionNum]?.answers[0]?.content}</button>
            <button onClick={onOptionClick}>{questions[questionNum]?.answers[1]?.content}</button>
            <div>프로그래스 바</div>
        </div>
    );
}

export default Quiz;