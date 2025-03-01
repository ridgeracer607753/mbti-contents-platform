import { Link } from "react-router-dom";
import { TESTS } from "../../data/TESTS";
import { useState } from 'react';
import { base_url } from "../../App";

function ThumbnailList() {
    const [testList] = useState(TESTS);

    return (
        <div>
            {testList?.map((test) => (
                <Link to={`${base_url}/${test?.info?.mainUrl}`} key={test?.info?.mainUrl}>
                <img 
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
 