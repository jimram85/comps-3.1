import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";


function ModalPage(){
    const [showModal, setShowModal] = useState(false);
    
    const handleClick =() =>{
        setShowModal(true);
    };
    const handleClose =() =>{
        setShowModal(false);
    };
    
    const actionBar = <div>
        <Button onClick= {handleClose} primary>I Accept</Button>
    </div>
    const modal = <Modal onClose ={handleClose} actionBar={actionBar}>
        <p>
            Here is an important agreement for you to accept
        </p>
    </Modal>
    return(
    <div className="relative">
                <Button onClick ={handleClick} primary>Open Modal</Button>
        {showModal && modal}
        
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec dolor viverra, semper leo at, eleifend ex. Sed eget suscipit nunc. In leo mi, venenatis eget ligula ac, ultrices viverra dui. Quisque nisl arcu, fringilla nec est ac, mollis ornare mi. Ut molestie molestie turpis in euismod. Quisque elementum aliquam nulla ut laoreet. Fusce tincidunt eros mauris, sit amet pretium neque malesuada eu. Nulla faucibus, mauris at finibus facilisis, est odio aliquet enim, sit amet ornare urna lorem in tortor. Suspendisse rhoncus mi mi, a sodales orci pharetra eu. Morbi a felis at velit pretium maximus a vel mi.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec dolor viverra, semper leo at, eleifend ex. Sed eget suscipit nunc. In leo mi, venenatis eget ligula ac, ultrices viverra dui. Quisque nisl arcu, fringilla nec est ac, mollis ornare mi. Ut molestie molestie turpis in euismod. Quisque elementum aliquam nulla ut laoreet. Fusce tincidunt eros mauris, sit amet pretium neque malesuada eu. Nulla faucibus, mauris at finibus facilisis, est odio aliquet enim, sit amet ornare urna lorem in tortor. Suspendisse rhoncus mi mi, a sodales orci pharetra eu. Morbi a felis at velit pretium maximus a vel mi.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec dolor viverra, semper leo at, eleifend ex. Sed eget suscipit nunc. In leo mi, venenatis eget ligula ac, ultrices viverra dui. Quisque nisl arcu, fringilla nec est ac, mollis ornare mi. Ut molestie molestie turpis in euismod. Quisque elementum aliquam nulla ut laoreet. Fusce tincidunt eros mauris, sit amet pretium neque malesuada eu. Nulla faucibus, mauris at finibus facilisis, est odio aliquet enim, sit amet ornare urna lorem in tortor. Suspendisse rhoncus mi mi, a sodales orci pharetra eu. Morbi a felis at velit pretium maximus a vel mi.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec dolor viverra, semper leo at, eleifend ex. Sed eget suscipit nunc. In leo mi, venenatis eget ligula ac, ultrices viverra dui. Quisque nisl arcu, fringilla nec est ac, mollis ornare mi. Ut molestie molestie turpis in euismod. Quisque elementum aliquam nulla ut laoreet. Fusce tincidunt eros mauris, sit amet pretium neque malesuada eu. Nulla faucibus, mauris at finibus facilisis, est odio aliquet enim, sit amet ornare urna lorem in tortor. Suspendisse rhoncus mi mi, a sodales orci pharetra eu. Morbi a felis at velit pretium maximus a vel mi.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec dolor viverra, semper leo at, eleifend ex. Sed eget suscipit nunc. In leo mi, venenatis eget ligula ac, ultrices viverra dui. Quisque nisl arcu, fringilla nec est ac, mollis ornare mi. Ut molestie molestie turpis in euismod. Quisque elementum aliquam nulla ut laoreet. Fusce tincidunt eros mauris, sit amet pretium neque malesuada eu. Nulla faucibus, mauris at finibus facilisis, est odio aliquet enim, sit amet ornare urna lorem in tortor. Suspendisse rhoncus mi mi, a sodales orci pharetra eu. Morbi a felis at velit pretium maximus a vel mi.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec dolor viverra, semper leo at, eleifend ex. Sed eget suscipit nunc. In leo mi, venenatis eget ligula ac, ultrices viverra dui. Quisque nisl arcu, fringilla nec est ac, mollis ornare mi. Ut molestie molestie turpis in euismod. Quisque elementum aliquam nulla ut laoreet. Fusce tincidunt eros mauris, sit amet pretium neque malesuada eu. Nulla faucibus, mauris at finibus facilisis, est odio aliquet enim, sit amet ornare urna lorem in tortor. Suspendisse rhoncus mi mi, a sodales orci pharetra eu. Morbi a felis at velit pretium maximus a vel mi.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec dolor viverra, semper leo at, eleifend ex. Sed eget suscipit nunc. In leo mi, venenatis eget ligula ac, ultrices viverra dui. Quisque nisl arcu, fringilla nec est ac, mollis ornare mi. Ut molestie molestie turpis in euismod. Quisque elementum aliquam nulla ut laoreet. Fusce tincidunt eros mauris, sit amet pretium neque malesuada eu. Nulla faucibus, mauris at finibus facilisis, est odio aliquet enim, sit amet ornare urna lorem in tortor. Suspendisse rhoncus mi mi, a sodales orci pharetra eu. Morbi a felis at velit pretium maximus a vel mi.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec dolor viverra, semper leo at, eleifend ex. Sed eget suscipit nunc. In leo mi, venenatis eget ligula ac, ultrices viverra dui. Quisque nisl arcu, fringilla nec est ac, mollis ornare mi. Ut molestie molestie turpis in euismod. Quisque elementum aliquam nulla ut laoreet. Fusce tincidunt eros mauris, sit amet pretium neque malesuada eu. Nulla faucibus, mauris at finibus facilisis, est odio aliquet enim, sit amet ornare urna lorem in tortor. Suspendisse rhoncus mi mi, a sodales orci pharetra eu. Morbi a felis at velit pretium maximus a vel mi.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec dolor viverra, semper leo at, eleifend ex. Sed eget suscipit nunc. In leo mi, venenatis eget ligula ac, ultrices viverra dui. Quisque nisl arcu, fringilla nec est ac, mollis ornare mi. Ut molestie molestie turpis in euismod. Quisque elementum aliquam nulla ut laoreet. Fusce tincidunt eros mauris, sit amet pretium neque malesuada eu. Nulla faucibus, mauris at finibus facilisis, est odio aliquet enim, sit amet ornare urna lorem in tortor. Suspendisse rhoncus mi mi, a sodales orci pharetra eu. Morbi a felis at velit pretium maximus a vel mi.
        </p>

     </div>
    );
}

export default ModalPage;