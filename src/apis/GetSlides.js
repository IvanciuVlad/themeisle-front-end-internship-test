
 async function GetSlides()  {
   
     return await fetch('https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts',
            {
                method: "GET"
            }).then(res => res.json())
            .then(response => {
                //console.log(response);
                return response
            }).catch(error => console.log(error));
}

export default GetSlides;
