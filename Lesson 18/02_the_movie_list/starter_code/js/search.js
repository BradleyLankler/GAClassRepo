// http://www.omdbapi.com/?i=tt3896198&apikey=7e0df2f7

let data = null

let apiKey = "7e0df2f7";

// Target the results
let results = document.querySelector("#results")

let inputField = document.querySelector("#seachField")


function cardRepeat(title, poster, year, type, element, index){
    let snippet = `<div class="col-md-4 mb-3"><div class="card text-white card-has-bg click-col result-card" id=${index} style="background-image:url('${poster}');">
    <img class="card-img d-none" src="${poster}" alt="${title}">
    <div class="card-img-overlay d-flex flex-column">
    <div class="card-body">
       <small class="card-meta mb-2">${year}</small>
       <h4 class="card-title mt-0 text-white ">${title}</h4>
     </div>
     <div class="card-footer">
      <div class="media">
    
    <h3 class="hiddenClick">Clicked</h3>
    <div class="media-body">
    <small>${type}</small>
    </div>
    </div>
     </div>
    </div>
    </div>
    </div>`;    
    element.innerHTML+= snippet
}




document.querySelector("#searchMovies").addEventListener("click", async function(e){
    
    // Stop the default behavior
    e.preventDefault;

    // Make the results an empty Div
    results.innerHTML = "<div></div>"

    // Insert GET function to retrieve a list of movies
    let theFetchURL = "http://www.omdbapi.com/?apikey=" + apiKey + "&s=" + inputField.value;

    const theFetchResponse = await fetch(theFetchURL);

    // Format the results as JSON
    
    const theFetchResponseJSON = await theFetchResponse.json();

    console.log(theFetchResponseJSON);


    // Loop through your data and use the cardRepeat() function to add a new movie to the displayed list.
    theFetchResponseJSON.Search.forEach(function(arrayElement){
        cardRepeat(arrayElement.Title, arrayElement.Poster, arrayElement.Year, arrayElement.Type, results, arrayElement.imdbID);
    })

        // Loop through the newly created cards
    let theCards = document.querySelectorAll("#results .result-card");
        for (let c = 0; c<theCards.length; c++) {
            theCards[c].addEventListener("click", async function(e){
                const requestOptions = {
                    method: "POST",
                    headers: {"Content-Type": 'application/json'},
                    body: JSON.stringify({id: this.id })
                }

                const apiUrl = "https://peaceful-springs-91970.herokuapp.com/api/create";
                const response = await fetch(apiUrl, requestOptions);
            })
        }
        
        // Create a click event for each card
        
           
            // insert post function to submit the ID of the card clicked

                // Create request options for a POST method
            
                // Run the post and wait for the answer
            

            // shows what has been clicked on by setting the .hiddenClick item to have a display of block
            
        

})





