import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import IntroRenderer from "../components/test/IntroRenderer";
import { TESTS } from "../data/TESTS";

function Test() {

  const {testParam} = useParams(); // URL에서 전달된 값을 가져옴
  const [currentTest, setCurrentTest] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // testParam이 DB에 존재 체크
    console.log(testParam);
    const theTest = TESTS?.find((test) => test?.info?.mainUrl === testParam);

    if (!theTest) {
      alert("존재하지 않는 테스트입니다.");
      return navigate("/");
    }

    console.log(theTest);
    setCurrentTest(theTest);
  }, [testParam, navigate]);


  return <div>
    <IntroRenderer currentTest={currentTest} />
  </div>;
}

export default Test;
