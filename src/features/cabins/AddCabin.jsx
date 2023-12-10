import { Button } from "../../ui/Button";
import { CreateCabinForm } from "./CreateCabinForm";
import { Modal } from "../../ui/Modal-v1";
import { useState } from "react";

// export const AddCabin = () => {
//   return (
//     <div>
//       <Modal>
//         <Modal.Open opens="cabin-form">
//           <Button>Add new cabin</Button>
//         </Modal.Open>
//         <Modal.Window name="cabin-form">
//           <CreateCabinForm />
//         </Modal.Window>
//       </Modal>
//     </div>
//   );
// };

export const AddCabin = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpenModal((show) => !show)}>
        Add new cabin
      </Button>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
        </Modal>
      )}
    </div>
  );
};
