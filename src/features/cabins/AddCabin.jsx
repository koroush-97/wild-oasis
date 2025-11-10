import { useState } from "react";
import Button from "../../ui/Button";

import Modal from "../../ui/Modal";

export default function AddCabin() {
  const [OpenModal, setIsOpenModal] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpenModal((show) => !show)}>
        {OpenModal && "close"}
        {!OpenModal && " Add new cabin"}
      </Button>
      {OpenModal && <Modal />}
    </div>
  );
}
