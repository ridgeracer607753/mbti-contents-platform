import { TESTS } from "../../data/TESTS";
import { useState } from 'react';

function ThumbnailList() {
    const [testList] = useState(TESTS);

    return (
        <div>
            {testList?.map((test) => (
                <img 
                    src={test?.info?.thumbImage} 
                    alt={test?.info?.mainUrl} 
                    key={test?.info?.mainUrl} 
                />
            ))}
        </div>
    );
}

export default ThumbnailList;
