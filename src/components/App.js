import React from "react";
import getSlides from "../apis/GetSlides";
import '../css/styling.scss';

function App(props) {
    /*    const [resources, setResources] = useState([]);

        useEffect(() => {
            fetch('https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts',
                {
                    method: "GET"
                }).then(res => res.json())
                .then(response => {
                    console.log(response);
                    setResources(response);
                }).catch(error => console.log(error));
        });*/

    const slides = getSlides();

    if (slides) {
        return (
            <div>
                Hello word
                {slides.map(slide =>
                    <li key={slide.id}>
                        <p>{slide.title}</p>
                        <img src={slide.thumbnail.small} alt="ceva poza de fundal"/>
                    </li>
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
