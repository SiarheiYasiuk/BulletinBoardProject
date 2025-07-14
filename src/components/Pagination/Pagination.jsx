import React from "react";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";

import { getAdsPaginationInfo } from "./../../store/selectors/adsSelectors";
import "./styles.css";

const Pagination = React.memo(({ onPageClick }) => {
    const adsPaginationInfo = useSelector(getAdsPaginationInfo);

    let pagesCount = Math.ceil(
        adsPaginationInfo.totalCount / adsPaginationInfo.limit
    );

    const handlePageChange = (selectedPage) => {
        const page = selectedPage.selected + 1;

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

        onPageClick(page);
    };

    return (
        <div className="pagination">
            <ReactPaginate
                previousLabel={"<<<"}
                nextLabel={">>>"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={pagesCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                forcePage={adsPaginationInfo.page - 1}
                onPageChange={handlePageChange}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
            />
        </div>
    );
});

export default Pagination;
