import ResultButtonGroup from "../components/testResult/ResultButtonGroup";
import ResultThumbnailList from "../components/testResult/ResultThumbnailList";
import ShareButtonGroup from "../components/testResult/ShareButtonGroup";
import TestResultRenderer from "../components/testResult/TestResultRenderer";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TESTS } from "../data/TESTS";
import { useState } from "react";

function TestResult() {

  const navigate = useNavigate();
  const {testParam, resultParam} = useParams(); // URL에서 전달된 값을 가져옴
  const [renderResultInfo, setRenderResultInfo] = useState({});

  useEffect(() => {
    const testInfo = TESTS?.find((test) => test?.info?.mainUrl === testParam);
    if (!testInfo) {
      alert("존재하지 않는 테스트입니다.");
      return navigate("/");
    }

    const resultInfo = testInfo?.results?.find((result) => 
      result.query === resultParam
    );
    if (!resultInfo) {
      alert("존재하지 않는 결과입니다.");
      return navigate(`/${testInfo?.info?.mainUrl}`);
    }
    setRenderResultInfo(resultInfo);
console.log(resultInfo);

  }
  , [testParam, resultParam, navigate]);




  return <div>
    <TestResultRenderer  renderResultInfo={renderResultInfo} />
    <ShareButtonGroup />
    <ResultButtonGroup />
    <ResultThumbnailList />
  </div>;
}

export default TestResult;
