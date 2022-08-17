import React, {  } from 'react';

// Stateless Functional Component
const Navbar = ({totalCounters}) => {
    return (        
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
            Navbar <span className="badge bg-secondary">
                {totalCounters}
            </span>
        </a>
    </nav>
    );
};
 
export default Navbar;
