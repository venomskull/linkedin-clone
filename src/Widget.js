import React from 'react';
import './Widget.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widget() {
    const newArticle = (heading, subtitle) => (
        <div className="widget__article">
            <div className="widget__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widget__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );


    return (
        <div className="widget">
            <div className="widget__header">
                <h2>LinkedIn news</h2>
                <InfoIcon   />
            </div>
            {newArticle('Deepan is back...!!', 'with heavy form')}
            {newArticle('Corona virus', '0 cases in NZ')}
            {newArticle('Trance', 'always blasing')}
            {newArticle('Land cruiser 70 series', 'one day I will buy that..')}
        </div>
    )
}

export default Widget
