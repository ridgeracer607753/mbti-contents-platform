import React from 'react'
import { FacebookIcon, FacebookShareButton, TwitterShareButton, XIcon } from 'react-share'
import { base_url } from '../../App'
import styles from './shareButtonGroup.module.css'
import CopyToClipboard from 'react-copy-to-clipboard'

const ShareButtonGroup = ({testParam, resultParam,renderTestInfo}) => {
  return (
    <div>
        <h3>공유하기 {resultParam}</h3>

 

        <div className={styles.shareButtonDiv}>

            <FacebookShareButton
            url={`${base_url}/${testParam}/result/${resultParam}`}
            hashtag={`#${renderTestInfo?.info?.mainTitle}`}
            quote='나만의 테스트 결과를 확인해보세요!'>
                <FacebookIcon 
                    className={styles.socialMediaIcon}
                    size={48} 
                    round={true} 
                />
            </FacebookShareButton>

            <TwitterShareButton
            title={renderTestInfo?.info?.mainTitle}
            url={`${base_url}/${testParam}/result/${resultParam}`}
            hashtags={[renderTestInfo?.info?.mainTitle]}
            >
                <XIcon 
                    className={styles.socialMediaIcon}
                    size={48} 
                    round={true} 
                />
            </TwitterShareButton>

            <CopyToClipboard text={`${base_url}/${testParam}/result/${resultParam}`}>
            <button 
                onClick={() => alert('URL이 복사되었습니다.')}
                className={styles.urlShareButton} >URL</button>
            </CopyToClipboard>
        </div>
    </div>
  )
}

export default ShareButtonGroup