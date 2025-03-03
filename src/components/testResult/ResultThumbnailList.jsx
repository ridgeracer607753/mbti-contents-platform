import React from 'react'
import { useState } from 'react'
import { TESTS } from '../../data/TESTS';
import { Link } from 'react-router-dom';


const ResultThumbnailList = ({testParam}) => {
    const [testList, setTestList] = useState(TESTS);

    console.log('✅ ResultThumbnailList에서 받은 testParam:', testParam);  // ← 이거 추가

    return (
        <div>
             {testList.filter((test) => test?.info?.mainUrl !== testParam).map((item) => (
                <Link to={`/${item?.info?.mainUrl}`} key={item?.info?.mainUrl}>
                <img style={{width: "100%"}} src={item?.info?.thumbImage} alt={item?.info?.mainTitle}></img>
                </Link>
             ))}
        </div>
    );
}

export default ResultThumbnailList; 