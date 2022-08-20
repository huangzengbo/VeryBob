import { iScenario } from "../../types/scenario";
import { iSort } from "../../types/sort";

export const applySortSearch = (scenarios: iScenario[], sort: iSort, searchKeyWord: string) => {
    let returnScenarios: iScenario[] = scenarios.filter((scenarioItem: iScenario)=>{
        return (!searchKeyWord) || (scenarioItem.name.toLowerCase().indexOf(searchKeyWord.toLowerCase()) > -1);
    });

    returnScenarios.sort((a: iScenario, b: iScenario) => {
        const aSort = a[sort.sortBy];
        const bSort = b[sort.sortBy];
        if (sort.sortBy === 'created') {
            const aSortDate = new Date(aSort).getTime();
            const bSortDate = new Date(bSort).getTime();
            if (aSortDate < bSortDate){
                return sort.isAesc ? -1 : 1;
            }
            if (aSortDate > bSortDate){
                return sort.isAesc ? 1 : -1;
            }
        }
        if (aSort < bSort){
            return sort.isAesc ? -1 : 1;
        }
        if (aSort > bSort){
            return sort.isAesc ? 1 : -1;
        }
        return 0;
    })

    return returnScenarios;
}