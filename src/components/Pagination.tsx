import React, { useMemo } from 'react';
import { createPaginationButtonsIndexes } from '../services/createPaginationButtonsIndexes';
import PaginationButton from './PaginationButton';

const DEFAULT_PAGE = 1;

interface IPaginationProps {
    itemsPerPage: number,
    totalItems: number | undefined,
    setCurrentPage: (number: number) => void,
    currentPage: number
}

const Pagination: React.FC<IPaginationProps> = ({itemsPerPage, totalItems = 1, setCurrentPage, currentPage}) => {
    const fullNumber: number = Math.ceil(totalItems / itemsPerPage);
    const pageNumbers: number[] = useMemo((): number[] => createPaginationButtonsIndexes(currentPage, DEFAULT_PAGE, fullNumber)
    , [fullNumber, currentPage])

    const setPage = (number: number = 0) => {
        if (currentPage !== number) {
            setCurrentPage(number);
        }
    };

    return (
        <div>
            <ul className="pagination">
                <li className="pagination__item">
                    <button className="pagination__btn" type="button" onClick={(): void => setPage(DEFAULT_PAGE)}>First</button>
                </li>
                {pageNumbers.map((number: number) => 
                    <li key={number} className={`pagination__item ${number === currentPage && 'pagination__item-active'}`}>
                        <PaginationButton number={number} setPage={setPage} />
                    </li>
                )}
                <li className="pagination__item">
                    <button className="pagination__btn" type="button" onClick={() => setPage(fullNumber - 1)}>Last</button>
                </li>
            </ul>
        </div>
    )
};

export default Pagination;