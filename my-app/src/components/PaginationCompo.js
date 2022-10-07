import ReactPaginate from 'react-paginate';      //https://www.npmjs.com/package/react-paginate

import { useSelector , useDispatch } from "react-redux"
import { useEffect, useState } from "react";
import {getCurrentPageAction} from "../redux/actions/movieAction.js"


const PaginationCompo = () =>{
    const [PagesCountState,setPagesCountState]=useState(0)
    const dispatch = useDispatch();


    // state come from moviesReducer
    const pages = useSelector((state) => state.PagesCountState)



    //  get pages count at start ..
    useEffect( () => { 
        setPagesCountState(pages);
    },[] 
    )

    
    
    

    // getResponse  by using axios that get CurrnetPage that selected by the current user:
    const getCurrnetPage = async(page) =>{
                        dispatch(getCurrentPageAction(page))
    }
    



    const handlePageClick = (data) =>{
                        getCurrnetPage(data.selected+1)
    }







    return(
        //https://www.npmjs.com/package/react-paginate
        <ReactPaginate
            breakLabel="..."                      // Label for ellipsis.

            nextLabel="Next"                      // Label for the next button.

            onPageChange={handlePageClick}        /* The method to call when a page is changed. 
                                                     Exposes the current page object as an argument.*/

            pageRangeDisplayed={2}                // The range of pages displayed.

            pageCount={pages}                 // Required. The total number of pages.

            previousLabel="Previous"              // Label for the previous button.

                                                          
            //https://getbootstrap.com/docs/5.2/components/pagination/#overview
            containerClassName={"pagination pagination-sm justify-content-center p-3"}
            
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}

            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}

            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            
            activeClassName={"active"}

      />                                      
    );
}

export default PaginationCompo;