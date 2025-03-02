import React from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { LinkOutlined,ReloadOutlined,HomeOutlined } from '@ant-design/icons'
import { base_url } from '../../App'
import { useNavigate } from 'react-router-dom'
import style from './resultButtonGroup.module.css'

const ResultButtonGroup = ({testParam, resultParam,renderTestInfo}) => {

    const navigate = useNavigate();
    const onClickHome = () => {
        navigate("/");
    }
    const onClickReload = () => {
        navigate(`/${testParam}`);
    }


  return (
    <div className={style.mainDiv}>
        <div className={style.upperDiv}>
        <CopyToClipboard text={`${base_url}/${testParam}/result/${resultParam}`}>
                <button className={style.upperButton}
                onClick={() => alert('URL이 복사되었습니다.')}>
                    <LinkOutlined />
                    &nbsp; 링크복사
                </button>
            </CopyToClipboard>
           
            <button className={style.upperButton}
            onClick={onClickReload}>
                <ReloadOutlined />
                &nbsp; 다시하기
            </button>
        </div>
        <div className={style.bottomDiv}>
            <button className={style.bottomButton}
            onClick={onClickHome}>
            <HomeOutlined />
            &nbsp; 다른 테스트 하러 가기
            </button>
        </div>
    </div>
  )
}

export default ResultButtonGroup