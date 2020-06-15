import React from "react";
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const Pagination = ({ totalCollections,collectionsPerPage,paginate}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCollections/collectionsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div style={{position:"fixed",bottom:-12,left:'45%'}}>
      
      <ul className="pagination">
      <ArrowLeftIcon/>
        {pageNumbers.map(number => (
          <li style={{display:"inline"}} key={number} className="page-item">
            <a onClick={() => paginate(number)} href className="page-link">
              {number}
            </a>
          </li>
        ))}
      <ArrowRightIcon/>  
      </ul>
    </div>  

  );
};

export default Pagination;
