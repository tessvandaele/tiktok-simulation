import React, {useState} from 'react';
import Modal from 'react-modal';
import { AiFillInfoCircle, AiFillCloseCircle } from 'react-icons/ai';

function MoreInfoWindow({ video }) {
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => { setIsOpen(true) };
    const closeModal = () => { setIsOpen(false) };

    function tooLong() {
        if(video.video_description.length > 50) {
            return true;
        }
        return false;
    }

    return (
        <div>
            <button style={{outline: 'none', border: 'none', backgroundColor: 'transparent'}} onClick={openModal}> 
                <AiFillInfoCircle size={42} style={{color: 'white'}} aria-label={"Detailed Information"}/>
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
            >
                <h3>Video Description</h3>
                {tooLong() ?
                <div>{video.summary_50}</div>
                : <div>{video.video_description}</div> }
                <h3>Engrained Text</h3>
                <div style={{whiteSpace: 'pre-line'}}>
                    {video.ocr}
                </div>
                
                <h3>Per Shot Descriptions</h3>
                <div style={{whiteSpace: 'pre-line'}}>
                    {video.shot_descriptions}
                </div>


                <button style={{outline: 'none', border: 'none', backgroundColor: 'transparent', position: 'absolute', top: '8px', right: '4px'}} onClick={closeModal}> 
                    <AiFillCloseCircle size={42} style={{color: 'black'}} aria-label={"Close window"}/>
                </button>
            </Modal>
        </div>
    )
}

export default MoreInfoWindow;