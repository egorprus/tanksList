import { ResponseRequest, ResponseFilterRequest } from "../components/Types";
import { apiCall } from "./apiCall";
import { filteredId } from "./filterId";

export const getFilteredList = async (itemsPerPage: number, searchValue: string, currentPage: number, isFilter: boolean, setFilteredId: any) => {
    const filterOptions: ResponseFilterRequest = await apiCall(0, 0, false, '', 'name%2C+tank_id')
    let limitedIdList = filteredId(filterOptions, searchValue);
    let response: ResponseRequest;
    let tanks;
    
    if (limitedIdList) {
        response = await apiCall(itemsPerPage, currentPage, isFilter, limitedIdList);
        tanks = Object.values(response.data).filter(item => item);
    } else {
        return {
            meta: null,
            data: null
        }
    }
    

    setFilteredId(limitedIdList);

    return {
        ...response,
        data: tanks
    };
};