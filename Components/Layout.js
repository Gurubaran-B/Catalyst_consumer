import { ModalContext} from "../pages/_app";
import { useContext } from "react";
import {motion} from 'framer-motion';
import Modal from "./Modal";



function Layout({children}) {
    
    const [showModal, setShowModal] = useContext(ModalContext);
    
    return(
       <>
        <motion.div>
            <Modal />
        </motion.div>
        {!showModal && children}
       </>
    );

};

export default Layout;