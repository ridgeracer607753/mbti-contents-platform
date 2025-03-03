import { Link, useSearchParams } from "react-router-dom";
import { TESTS } from "../../data/TESTS";
import { use, useEffect, useState } from 'react';
import { base_url } from "../../App";

function ThumbnailList() {
    const [testList, setTestList] = useState(TESTS);

    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const currentLanguage = searchParams.get('lang') || 'kor';
        console.log(currentLanguage);
        console.log(111);
        if (currentLanguage){
            console.log(currentLanguage);
            const languagefilteredTests = TESTS.filter((test) => test?.info?.lang === currentLanguage);
            setTestList(languagefilteredTests);
        }

    }, [searchParams]);

    return (
        <div>
            {testList?.map((test) => (
                <Link to={`/${test?.info?.mainUrl}`} key={test?.info?.mainUrl}>
                <img 
                    style={{ width: "100%"}}
                    src={test?.info?.thumbImage} 
                    alt={test?.info?.mainUrl} 
                    key={test?.info?.mainUrl} 
                />
                </Link>
            ))}
        </div>
    );
}

export default ThumbnailList;
 