import UserProvider from '../components/Providers/UserProvider';
import ShoppingListProvider from '../components/Providers/ShoppingListProvider';
import { ShoppingListDetail } from '../components/Details/ShoppingListDetail';
import { ControlPanel } from '../components/Nav/ControlPanel';

export  function Detail() {

  return (
    <UserProvider>
        <ShoppingListProvider>
            <ShoppingListDetail/>
            <ControlPanel/>
        </ShoppingListProvider>
    </UserProvider>
  );
}
