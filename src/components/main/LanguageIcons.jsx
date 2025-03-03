import { CircleFlag } from "react-circle-flags";
import { useNavigate } from "react-router-dom";
import style from './languageIcons.module.css';


function LanguageIcons(){

    const navigate = useNavigate();

    const onButtonClick = (lang) => {
        navigate(`/?lang=${lang}`);
    }


    return <div>
        <CircleFlag 
            className={style.flagIcon}
        onClick={() => onButtonClick('Kor')} countryCode="kr" height="50" width="50" />
        <CircleFlag 
        className={style.flagIcon}
        onClick={() => onButtonClick('Eng')} countryCode="us" height="50" width="50" />
        <CircleFlag 
        className={style.flagIcon}
        onClick={() => onButtonClick('JP')} countryCode="jp" height="50" width="50" />
    </div>
}

export default LanguageIcons;