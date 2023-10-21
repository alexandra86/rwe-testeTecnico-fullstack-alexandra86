import { useContext } from "react";
import { createPortal } from "react-dom";
import { StyledContainerDeleteModal } from "./style.js";
import { AuthContext } from "../../contexts/AuthContext.jsx";

export const DeleteUserModal = () => {
  const { handleDeleteUserModal, RemoveUser, user } = useContext(AuthContext);

  const modalDeleteUserContent = (
    <StyledContainerDeleteModal>
      <div className="modalContent">
        <div className="headerModal">
          <h2 className="titleModal">Delete Profile</h2>
          <button
            onClick={() => handleDeleteUserModal()}
            className="btCloseModal"
          >
            X
          </button>
        </div>
        <div className="areaDeleteInfo">
          <p className="freseDelete">
            Are you sure you want to delete your profile?
          </p>
          <div className="areaButtonsDelete">
            <button
              className="btConfirmDelete"
              onClick={() => RemoveUser(user.id)}
            >
              Confirm
            </button>
            <button
              className="btCancelDelete"
              onClick={() => handleDeleteUserModal()}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </StyledContainerDeleteModal>
  );
  return createPortal(
    modalDeleteUserContent,
    document.getElementById("modalUserDelete-root")
  );
};
