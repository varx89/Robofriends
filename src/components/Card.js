import React from 'react';
import 'animate.css';


const Card = ({ name, email, id }) => {
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
            <div>
                <h3>{ name }</h3>
                <p>{ email }</p>
            </div>
        </div>
    )
}
export default Card;