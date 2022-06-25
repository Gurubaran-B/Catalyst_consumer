import React, {useState, useContext} from "react";
import Header from '../Components/Header'
import Layout from '../Components/Layout'
import '../styles/globals.css';

export const ModalContext = React.createContext();
export const ModalDataContext = React.createContext();
export const HeaderContext = React.createContext();
export const ExperienceContext = React.createContext();

function MyApp({ Component, pageProps }) {

  const [showModal, setShowModal] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [description, setDescription] = useState(" ");
  const [rules, setRules] = useState([]);
  const [experience, setExperience] = useState([]);

  return (
    <ModalDataContext.Provider value={[description, setDescription, rules, setRules ]}>
        <ModalContext.Provider value={[showModal, setShowModal]}>
          <HeaderContext.Provider value={[ showHeader, setShowHeader]}>
            <ExperienceContext.Provider value={[ experience, setExperience]}>
              <Layout>
                <div className="app">
                <Header/>
                <Component {...pageProps} />
                </div>
            </Layout>
          </ExperienceContext.Provider>
        </HeaderContext.Provider>
      </ModalContext.Provider>
    </ModalDataContext.Provider>
  );
};

export default MyApp;
