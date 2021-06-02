import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

const EditTestimonialModal = ({ modalIsOpen, closeModal, setEditedSuccess, editedTestimonial: { _id, name, from, quote } }) => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch(`https://diligent-detectives-server.herokuapp.com/editTestimonial/${_id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    swal("Poof! Service has been updated!", {
                        icon: "success",
                    });
                    closeModal()
                    setEditedSuccess(true)
                }else{
                    swal("Error",  "Something is wrong", 'error');
                }
            })
    }

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <form className="p-3" onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-group row">
                        <div className="form-group col-6">
                            <h3>User Name</h3>
                            <input className="form-control" type="text" name="name" defaultValue={name} placeholder="User Name" ref={register()} />
                        </div>
                        <div className="form-group col-6">
                            <h3>Where From</h3>
                            <input className="form-control" type="text" name="from" defaultValue={from} placeholder="Where From" ref={register()} />
                        </div>
                    </div>

                    <div className="form-group">
                        <h3>Service Description</h3>
                        <textarea className="form-control" type="text" rows="5" name="quote" defaultValue={quote} placeholder="Description" ref={register()} ></textarea>
                    </div>

                    <div className="form-group d-flex justify-content-between">
                        <button onClick={() => closeModal()} type="reset" className="btn btn-danger">Cancel</button>
                        <input className="btn btn-success" type="submit" value="Update" />
                    </div>

                </form>
            </Modal>
        </div>
    );
};

export default EditTestimonialModal;