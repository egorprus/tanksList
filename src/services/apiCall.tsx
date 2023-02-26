import data from './data.json';

export const apiCall = (itemsPerPage: number = 10, currentPage: number = 1, isFilter: boolean = false, tankIdFilters: string = '',  fields: string = data.defaultFields) => {
    const limit = itemsPerPage ? `&limit=${itemsPerPage}` : '';
    const pageNumber = currentPage ? `&page_no=${currentPage}` : '';
    const field = fields ? `&fields=${fields}` : '';
    const tanksId = isFilter ? `&tank_id=${tankIdFilters}` : '';

    return fetch(`${data.url + field + limit + pageNumber + tanksId}`)
        .then(res => res.json())
        .then(response => response);
};