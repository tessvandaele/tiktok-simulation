import React, {useState} from 'react';
import Modal from 'react-modal';
import { AiFillInfoCircle, AiFillCloseCircle } from 'react-icons/ai';

import summaries from './static/video_summaries.json';
import video_data from './static/video_data.json';

function MoreInfoWindow({ id }) {
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => { setIsOpen(true) };
    const closeModal = () => { setIsOpen(false) };

    return (
        <div>
            <AiFillInfoCircle size={42} style={{color: 'white'}} onClick={openModal}/>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="More Info"
            >
                <h3>Summary</h3>
                <div>
                    {/* {summaries[id]["summary_50"]} */}
                    This is filler text where the long summary will eventually go.
                </div>
                
                <h3>Per shot summary</h3>
                <div>
                    This is filler text where the per shot summary will eventually go.
                </div>

                <h3>OCR Transcript</h3>
                <div>
                    
                </div>

                {/* <h3>Other Details</h3> */}
                {/* <div>
                    <div>Number of Likes: {video_data[id]["likes"]}</div> <br />
                    <div>Number of Comments: {video_data[id]["comments"]} </div> <br />
                    <div>Number of Bookmarks: {video_data[id]["bookmarks"]}</div> <br />
                    <div>Number of Shares: {video_data[id]["shares"]}</div> <br />
                </div> */}

                <AiFillCloseCircle size={42} onClick={closeModal} style={{position: "absolute", top: 15, right: 10, lineHeight: 0}}/>

            </Modal>
        </div>
    )
}

export default MoreInfoWindow;