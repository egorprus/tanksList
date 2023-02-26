import React from 'react';

interface PaginationButtonProps {
    number: number,
    setPage: (number: number) => void
}

const PaginationButton : React.FC<PaginationButtonProps> = ({number, setPage}) => {
    return (
        <button className="pagination__btn" type="button" onClick={(): void => setPage(number)}>
            {number}
        </button>
    )
};

export default PaginationButton;