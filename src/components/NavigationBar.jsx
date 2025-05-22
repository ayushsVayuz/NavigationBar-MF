import React, { useState } from "react";
import * as ReactRouterDom from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function NavigationBar() {
  
    const { Link} = ReactRouterDom
    const [isOpen , setIsOpen] = useState (false)

    return ( 
            <nav className=" bg-blue-500 shadow-md p-4">
              <div className="  max-w-6xl mx-auto flex justify-between items-center">
                <Link to="/home" className="text-2xl sm:text-3xl font-bold text-white">
                  CRUD
                </Link>

                <button 
                  onClick={() => setIsOpen(!isOpen)} 
                  className="md:hidden p-2 text-white rounded hover:bg-white/20 focus:outline-none"
                >
                    <FontAwesomeIcon icon={faBars} size="lg" />
                </button>
        
                <div className={`w-full md:flex md:w-auto ${isOpen ? "block" : "hidden"}`}>
                  <ul className="flex flex-col md:flex-row md:space-x-8 text-lg text-white font-semibold">
                    <li>
                      <Link to="/home" className="block py-2 px-3 rounded">Home</Link>    
                    </li>
                    <li>
                      <Link to="/about" className="block py-2 px-3 rounded">About</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>  
    );
}

export default NavigationBar;