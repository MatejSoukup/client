import { useContext } from "react";
import ShoppingListProvider from "../components/Providers/ShoppingListProvider";
import UserProvider, { UserContext } from "../components/Providers/UserProvider";
import CardList from "../components/Lists/CardList";

export function List({ShoppingList}){
    const loggedInUser = useContext(UserContext);
    return (
    <>
        <UserProvider>
            <ShoppingListProvider>
       
                <CardList/>
                
            </ShoppingListProvider>
        </UserProvider>
    </>
    )
}