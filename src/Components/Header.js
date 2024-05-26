import React from 'react';

const Header = ({ title, paragraph }) => {
    return (
        <div>
            <h1 className='header-title'>{title}</h1>
            <p className='header-paragraph'>{paragraph}</p>
        </div>
    );
};

export default Header;
