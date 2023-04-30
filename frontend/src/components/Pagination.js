import React from 'react'
import 'bulma/css/bulma.min.css';
import "./NavBar.css"




const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }
    
    
    return (
        <nav class="pagination">
        <ul class="pagination-list">
            {pageNumbers.map(number => (
                <li key={number}>
                    <button id="pagination-button" class="pagination-link" onClick={() => paginate(number)}>{number}</button>
                </li>
            ))}
        </ul>
        </nav>
    )
}

export default Pagination