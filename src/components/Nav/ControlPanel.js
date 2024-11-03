import { useState, useContext } from "react";
import { AddItemModal } from "../Modal/AddItemModal";
import { MemberModal } from "../Modal/MemberModal";
import { useNavigate } from "react-router-dom";
import { Profile } from "./Profile";
import { ShoppingListContext } from "../Providers/ShoppingListProvider";
import { ReactComponent as ArrowBack} from "../../Assets/arrowBack.svg"
import { ReactComponent as Visibility} from "../../Assets/visibility.svg"
import {ReactComponent as Create } from "../../Assets/addCircle.svg"
import {ReactComponent as GroupAdd } from "../../Assets/groupAdd.svg"
export function ControlPanel() {
  const [addItemModal, setAddItemModal] = useState(false);
  const [memberModal, setMemberModal] = useState(false);

  const openItemModal = () => setAddItemModal(true);
  const closeItemModal = () => setAddItemModal(false);

  const openMemberModal = () => setMemberModal(true);
  const closeMemberModal = () => setMemberModal(false);

  const navigate = useNavigate();

  const {
    handleDeleteItem,
    showFulfilled,
    setShowFulfilled,
    handleUpdateItem,
  } = useContext(ShoppingListContext);
  return (
    <div className="centred">
      <AddItemModal closeModal={closeItemModal} isModalOpen={addItemModal} />
      <MemberModal closeModal={closeMemberModal} isModalOpen={memberModal} />
      <div className="controlPanel">
        <div onClick={() => navigate("/")}>
            <ArrowBack/>
        </div>
        <div onClick={() => openItemModal()}>
            <Create/>
        </div>
        <div onClick={() => openMemberModal()}>
            <GroupAdd/>
        </div>
        <div onClick={() => setShowFulfilled(!showFulfilled)}>
            <Visibility/>
        </div>
      </div>

      <div>
        <Profile />
      </div>
    </div>
  );
}
