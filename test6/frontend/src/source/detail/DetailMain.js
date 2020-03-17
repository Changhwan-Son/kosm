/*
    버전별 세부사항 메인 페이지
*/
import React from 'react';
import SourceList from '../../menu/SourceList';
import DetailTitle from './DetailTitle';
import DetailContents from './DetailContents';
import './DetailMain.scss';
const DetailMain = ({match}) => {
    return ( 
        <div>
            <DetailTitle/>
            <div className='detailMainContainer'>
                <SourceList/>
                <DetailContents
                    location={match.params.source}/>
            </div>            
        </div>
    )
}

export default DetailMain;