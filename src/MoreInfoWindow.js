import React, {useState} from 'react';
import Modal from 'react-modal';
import { AiFillInfoCircle, AiFillCloseCircle } from 'react-icons/ai';

function MoreInfoWindow({ detailedInfo }) {
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => { setIsOpen(true) };
    const closeModal = () => { setIsOpen(false) };

    return (
        <div>
            <button style={{outline: 'none', border: 'none', backgroundColor: 'transparent'}} onClick={openModal}> 
                <AiFillInfoCircle size={42} style={{color: 'white'}} aria-label={"Detailed Information"}/>
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
            >
                <h3>Summary</h3>
                <div>
                    {detailedInfo.long_description}
                </div>

                <h3>OCR Transcript</h3>
                <div>
                    {detailedInfo.ocr_text}
                </div>
                
                <h3>Per shot summary</h3>
                <div>
                    {detailedInfo.shot_descriptions}
                </div>


                <button style={{outline: 'none', border: 'none', backgroundColor: 'transparent', position: 'absolute', top: '8px', right: '4px'}} onClick={closeModal}> 
                    <AiFillCloseCircle size={42} style={{color: 'black'}} aria-label={"Close window"}/>
                </button>
            </Modal>
        </div>
    )
}

export default MoreInfoWindow;