import {ReactElement, useState} from "react";
import {SortOption} from "../../types/SortOption.tsx";
import "../../styles/SortList.css";

function SortList({onSort}) : ReactElement {
    const [selected, setSelected] = useState(0);

    const sortOptions: Array<string> = Object.keys(SortOption).filter(key => isNaN(Number(key)));

    function getSortOptionState(index: number) : string {
        if (index === selected) {
            return "list-group-item active";
        }
        return "list-group-item";
    }

    function onClick(sort: string, index: number): void {
        setSelected(index);
        onSort(sort);
    }

    return (
        <div className="pt-4 pb-2">
            <div className="header">Sorting Options</div>
            <div className="list-group mt-3">
                {sortOptions.map((sortName, index) => (
                    <button type="button" key={index} className={getSortOptionState(index)} onClick={() => onClick(sortName, index)}>{sortName}</button>
                ))}
            </div>
        </div>
    );
}

export default SortList;