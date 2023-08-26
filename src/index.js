const init = () => {
    const inputForm = document.querySelector("form");
    inputForm.addEventListener('submit', (event) =>{
        // Preventing the default behavior of the form submit
        event.preventDefault();
        // Targetting the input and retraive the value from it
        // event.target.children[1].value; => This is a 2nd qay to do it.
        const input = document.querySelector("input#searchByID");
        console.log(input.value);

        // Fetching data from db.json
        fetch(`http://localhost:3000/movies/${input.value}`)
        .then((response) => response.json())
        // Desplying some data in the webpage
        .then ((data) => {
            const title = document.querySelector("section#movieDetails h4");
            const summary = document.querySelector("section#movieDetails p");

            title.innerText = data.title;
            summary.innerText = data.summary;
        });
        
    });
};

document.addEventListener('DOMContentLoaded', init);