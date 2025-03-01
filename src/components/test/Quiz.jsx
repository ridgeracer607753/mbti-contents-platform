import { useState, useEffect } from 'react';
import styles from './quiz.module.css';
import { Progress } from 'antd';
import { arrayShuffler } from '../../tools/tools';

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
            <h3 className={styles.questionText}>{questions[questionNum]?.question}</h3>

            {questions[questionNum]?.answers && 
            arrayShuffler(questions[questionNum]?.answers).map((option) => (
                <button
                    className={styles.optionButton}
                    onClick={onOptionClick(option.type)}
                    key={option.content}
                >
                {option.content}
                </button>
            ))}
            
            <Progress percent={(questionNum / questions.length) * 100} showInfo={false} />
        </div>
    );
}

export default Quiz;