import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import '../css/styling.scss';

function Modal(props) {
        return (
            <div className="modal">
                <div className="modal-card">
                    <li>
                        <FontAwesomeIcon icon={faTimes} className="modal-close-button" onClick={() => props.closeModal()}/>
                    </li>
                    <img src={props.card.thumbnail.large} alt="large thumbnail with background" className="modal-img"/>
                    <div className="container">
                        <li>
                            <h2 className="card-title">{props.card.title}</h2>
                        </li>
                        <li className="card-content">
                            <p>{props.card.content}</p>
                        </li>
                        <li className="two-column-div">
                            <img src={props.card.author.avatar || "https://4.bp.blogspot.com/-ZzOpik5sFZg/UleI27zMJyI/AAAAAAAAHgs/nQEZnjiSn9M/s1600/profileicon.jpg"}
                                 alt="owner avatar" className="modal-profile-picture"/>
                            <p className="modal-bottom-name">{props.card.author.name} - {props.card.author.role}</p>
                        </li>
                    </div>
                </div>
            </div>
        );
    
}

export default Modal;
