export const createPaginationButtonsIndexes = (currentPage: number, DEFAULT_PAGE: number, fullNumber: number): number[] => {
    const minIndex: number = currentPage - 3 > 0 ? currentPage - 2 : DEFAULT_PAGE;
    const maxIndex: number = currentPage + 3 > fullNumber ? fullNumber : currentPage + 3;
    const length: number = maxIndex - minIndex ?? 5;
    const newArray: number[] = [...Array(length)].map((item, index: number): number => index + minIndex);

    return newArray;
}