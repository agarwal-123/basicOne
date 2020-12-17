import React from 'react';
import TopicCardWrapper from './style';

function TopicCard(props) {
  return (
    <TopicCardWrapper>
      <div class='chap-topic-card chap-box-shadow clearfix'>
        <div class='chap-topic-card-img-box'>
          <img src='https://toppscholar-upload.s3.ap-southeast-1.amazonaws.com/content-package/7491303a-9de3-48e4-a8a1-41c873460896.jpg' />
          <div class='chap-topic-card-title medium-18 line-height'>
            {props.details}
          </div>
        </div>

        <div class='chap-topic-card-content-box'>
          <li>12 Concepts</li>
          <li>23 Videos</li>
          <li>0% Learnt</li>
          <li>0% Practiced</li>
        </div>
      </div>
    </TopicCardWrapper>
  );
}

export default TopicCard;
