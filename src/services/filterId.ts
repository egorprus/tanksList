import { FilterPropertyInterface, ResponseFilterRequest } from "../components/Types";
import { parseName } from "./parseName";

export const filteredId = (filterOptions: ResponseFilterRequest, searchValue: string) => {
    const filterOptionsArray: FilterPropertyInterface[] = Object.values(filterOptions.data);
    const filteredList = filterOptionsArray.filter(option => parseName(option.name).indexOf(searchValue) === 0);
    let limitedIdList = '';
    if (filteredList.length) {
        console.log(filteredList)
        limitedIdList = filteredList[0].tank_id;

        for ( let i = 1; i < filteredList.length - 1 && i < 100; i++) {
            limitedIdList = limitedIdList + `%2C${filteredList[i].tank_id}`
        }
    }
    return limitedIdList;
};