import React from 'react';



function Header(props) {
    
    return (
        <section>
            <img src={props.profileImg} alt = 'Profile' />
            <h1>{props.username}</h1>
        </section>
    );
};

export default Header;