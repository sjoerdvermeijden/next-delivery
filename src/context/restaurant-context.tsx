import React, {
    Dispatch,
    SetStateAction,
    createContext,
    useState,
} from "react";

import { RestaurantType } from '@/types/restaurant';

type Props = {
    children: React.ReactNode;
};

type ContextValue = [RestaurantType[], Dispatch<SetStateAction<RestaurantType[]>>];

export const RestaurantContext = createContext<ContextValue>([[], () => { }]);

export function RestaurantComponent({ children }: Props) {
    const [restaurantItems, setRestaurantItems] = useState<RestaurantType[]>([]);

    return (
        <>
            <RestaurantContext.Provider value={[restaurantItems, setRestaurantItems]}>
                {children}
            </RestaurantContext.Provider>
        </>
    );
}

export default RestaurantComponent;