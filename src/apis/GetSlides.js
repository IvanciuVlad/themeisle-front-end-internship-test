import {useState, useEffect} from "react";

function GetSlides()  {
    const [resources, setResources] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts',
            {
                method: "GET"
            }).then(res => res.json())
            .then(response => {
                console.log(response);
                setResources(response);
            }).catch(error => console.log(error));
    }, []);

    return resources;
}

export default GetSlides;
