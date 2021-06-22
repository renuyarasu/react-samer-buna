// The GiHub Cards App
import React from 'react';

class Card extends React.Component {

    render() {
        return (
            <div className='github-profile'>
                <img src='https://via.placeholder.com/75' style={{border:'1px solid crimson'}} />
                <div className="info">
                    <div className="name">Name Here..</div>
                    <div className="company">Company Name Here..</div>
                </div>
            </div>
        );
    }
}

export default Card;