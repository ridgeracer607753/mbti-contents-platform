import React from 'react'
import { FacebookIcon, FacebookShareButton, TwitterShareButton, XIcon } from 'react-share'
import { base_url } from '../../App'

const ShareButtonGroup = ({testParam, resultParam,renderTestInfo}) => {
  return (
    <div>
        <h3>공유하기</h3>
        <div>
            <FacebookShareButton
            url={`${base_url}/${testParam}/result/${resultParam}`}
            hashtag={`#${renderTestInfo?.info?.mainTitle}`}
            quote='나만의 테스트 결과를 확인해보세요!'>
                <FacebookIcon size={48} round={true} />
            </FacebookShareButton>
            <TwitterShareButton
            title={renderTestInfo?.info?.mainTitle}
            url={`${base_url}/${testParam}/result/${resultParam}`}
            hashtags={[renderTestInfo?.info?.mainTitle]}
            >
                <XIcon size={48} round={true} />
            </TwitterShareButton>
            
        </div>
    </div>
  )
}

export default ShareButtonGroup