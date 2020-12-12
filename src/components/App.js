import React, {useState, useEffect} from "react";
import getSlides from "../apis/GetSlides";
import Modal from "./Modal";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle} from "@fortawesome/free-solid-svg-icons";
import '../css/styling.scss';

function createDate(date) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dateTime = new Date(date*1000);
    return months[dateTime.getMonth()] + " " +  dateTime.getDate() + ", " + dateTime.getFullYear();
}


function App(props) {
    const [modalState, setModalState] = useState(false);
    const [modalCard, setModalCard] = useState({});
    console.log(modalState);
    const slides = getSlides();

    useEffect(() => {

        window.onclick = (event) => {

            const closeModal = () => {
                if(modalState)
                    setModalState(false);
            }

            let modal = document.getElementsByClassName("modal")[0]

            if(event.target === modal) {
                modal.style.display = "none"
                closeModal();
            }
        }

    }, [modalState]);

    const closeModal = () => {
        if(modalState)
            setModalState(false);
    }


    if (slides) {
        return [
            <div className="cards">
                {slides.map(slide =>
                    <div className="card" key={slide.id}>
                        <div className="image-container" >
                            <img src={slide.thumbnail.small} alt="small thumbnail with background"/>
                            <div className="overlay">
                                <div className="overlay-text">
                                    <h2 onClick={() => {setModalCard(slide); setModalState(true)}}>Learn More</h2>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <li>
                                <FontAwesomeIcon icon={faCircle} className="circles" style={{color:'#0099cc'}} />
                                <FontAwesomeIcon icon={faCircle} className="circles" style={{color:'#cccc00'}} />
                            </li>
                            <li>
                                <h2 className="card-title" onClick={() => {setModalCard(slide); setModalState(true) }}>{slide.title}</h2>
                            </li>
                            <li className="card-content">
                                <p>{slide.content}</p>
                            </li>
                            <li>
                                <div className="two-column-div">
                                    <p className="slide-bottom-content">{slide.author.name} - {slide.author.role}</p>
                                    <p className="slide-bottom-content" style={{textAlign:"right"}}>{createDate(slide.date)}</p>
                                </div>
                            </li>
                        </div>
                    </div>
                )}
            </div>,
            <Modal show={modalState} card={modalCard} closeModal={closeModal()} />
        ];
    } else {
        return (
            <div>Loading...</div>
        );
    }
}

export default App;
