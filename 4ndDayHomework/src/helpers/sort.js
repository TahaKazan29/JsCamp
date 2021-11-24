export const SortEnum = {
    asc : 'asc',
    desc: 'desc'
}

export default class Sort {
    static sort(list,sortEnum,valueToSort){
        if(sortEnum === SortEnum.asc){
            return list.sort((a, b) => (a[valueToSort] > b[valueToSort]) ? 1 : -1)
        }
        return list.sort((a, b) => (a[valueToSort] > b[valueToSort]) ? -1 : 1)
    }
}