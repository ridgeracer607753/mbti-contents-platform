import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";

function CategoryButtons(){

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [language, setLanguage] = useState("Kor");

    useEffect(() => {
        const currentLang = searchParams.get('lang') || 'Kor';
        setLanguage(currentLang);
    }, [searchParams]);

    const onButtonClick = (category) => {

        if(category === 'all') {
            navigate(`/?lang=${language}`);
    }
        else if(category === 'love' || category === 'characteristic'){
           navigate(`/?lang=${language}&cat=${category}`);
}
        else{
            alert('잘못된 카테고리입니다.');
            navigate(`/?lang=${language}`);
        }
    };

    return <div>
        <button 
            onClick={() => onButtonClick('all')}
        >전체</button>
        <button
            onClick={() => onButtonClick('love')}
        >연예</button>
        <button
            onClick={() => onButtonClick('characteristic')}
        >성격</button>
        
    </div>
}

export default CategoryButtons;