// DeleteTour.js

import React, { useState, useContext } from 'react';
import { Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
import { AuthContext } from './../context/AuthContext.js';
import { BASE_URL } from './../utils/config.js';

const DeleteTour = ({ tourId, onClose }) => {
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(true);
  const { dispatch } = useContext(AuthContext);

  const handleDelete = async () => {
    dispatch({ type: 'DELETE_TOUR' });

    try {
      const res = await fetch(`${BASE_URL}/tours/${tourId}`, {
        method: 'DELETE',
        credentials: 'include',
      });

      const result = await res.json();
      if (!res.ok) alert(result.message);

      console.log(result.data);

      dispatch({ type: 'DELETE_SUCCESS', payload: tourId });
      onClose(); // Close the modal after successful deletion
    } catch (err) {
      dispatch({ type: 'DELETE_FAILURE', payload: err.message });
    }
  };

  const handleCancel = () => {
    setIsDeleteModalVisible(false);
    onClose(); // Close the modal
  };

  return (
    <Modal isOpen={isDeleteModalVisible} toggle={handleCancel}>
      <ModalBody>
        <p>Are you sure you want to delete this tour?</p>
      </ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={handleDelete}>
          Delete
        </Button>
        <Button color="secondary" onClick={handleCancel}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default DeleteTour;
