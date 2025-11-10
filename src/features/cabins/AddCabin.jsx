import { useState } from "react";
import Button from "../../ui/Button";

import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

export default function AddCabin() {
  const [OpenModal, setIsOpenModal] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpenModal((show) => !show)}>
        {OpenModal && "close"}
        {!OpenModal && " Add new cabin"}
      </Button>
      {OpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateCabinForm />
        </Modal>
      )}
    </div>
  );
}
