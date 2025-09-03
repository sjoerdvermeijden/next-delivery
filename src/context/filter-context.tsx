import React, {
    Dispatch,
    SetStateAction,
    createContext,
    useState,
} from "react";

type Props = {
    children: React.ReactNode;
};

type ContextValue = [string[], Dispatch<SetStateAction<string[]>>];

export const FilterContext = createContext<ContextValue>([[], () => { }]);

export function FilterComponent({ children }: Props) {
    const [filterItems, setFilterItems] = useState<string[]>([]);

    return (
        <>
            <FilterContext.Provider value={[filterItems, setFilterItems]}>
                {children}
            </FilterContext.Provider>
        </>
    );
}

export default FilterComponent;