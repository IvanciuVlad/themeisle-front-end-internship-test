import React from "react";
import getSlides from "../apis/GetSlides";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle} from "@fortawesome/free-solid-svg-icons";
import '../css/styling.scss';

function createDate(date) {
    console.log(date);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dateTime = new Date(date*1000);
    console.log(dateTime.toLocaleDateString("en-US"));
    return months[dateTime.getMonth()] + " " +  dateTime.getDate() + ", " + dateTime.getFullYear();
}


function App(props) {
    const slides = getSlides();

    if (slides) {
        return (
            <div>
                {slides.map(slide =>
                    <div className="card" key={slide.id}>
                        <img src={slide.thumbnail.small} alt="ceva poza de fundal"/>

                        <div className="container">
                            <li>
                                <FontAwesomeIcon icon={faCircle} className="circles" style={{color:'#0099cc'}} />
                                <FontAwesomeIcon icon={faCircle} className="circles" style={{color:'#cccc00'}} />
                            </li>
                            <li>
                                <h2 className="card-title">{slide.title}</h2>
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
            </div>
        );
    } else {
        return (
            <div>Loading...</div>
        );
    }
}

export default App;
