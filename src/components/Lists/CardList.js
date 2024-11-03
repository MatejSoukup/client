import { useContext } from "react";
import {UserContext} from "../Providers/UserProvider";
import { ShoppingListContext } from "../Providers/ShoppingListProvider";
import { useNavigate } from 'react-router-dom';



export default function CardList(){
    const navigate = useNavigate();

    const {loggedInUser} = useContext(UserContext);
    const {shoppingLists} = useContext(ShoppingListContext);

    console.log(shoppingLists)
    

    return (
    <>
        {shoppingLists.map(list => (
            <div key={list.name} onClick={() => {navigate(`detail/${list.id}` , {state:list})}}>
                {list.name}
            </div>
        ))}
    </>
    )
}