import React, {
    Dispatch,
    SetStateAction,
    createContext,
    useState,
} from "react";

type Props = {
    children: any;
};

interface Cartegories {
    categories: {
        id: number,
        title: string,
        image: {
            img: string,
            alt: string
        }
    };
}

type ContextValue = [Cartegories[], Dispatch<SetStateAction<Cartegories[]>>];

export const FilterContext = createContext<ContextValue>([[], () => { }]);

export function FilterComponent({ children }: Props) {
    const [filterItems, setFilterItems] = useState<Cartegories[]>([]);

    return (
        <>
            <FilterContext.Provider value={[filterItems, setFilterItems]}>
                {children}
            </FilterContext.Provider>
        </>
    );
}

export default FilterComponent;