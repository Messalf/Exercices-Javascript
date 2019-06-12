
// fichier JSON = fichier javascript avec différent attributs

        <blockquote id="quote"> </blockquote>
        // instancier un objet avec XMLHttpRequest()
        

        const req = new XMLHttpRequest()

        const quote = document.querySelector("#quote")


        req.onreadystatechange = (event) => {
            if (req.readyState === XMLHttpRequest.DONE) {
                if (req.status === 200) {
                    json = JSON.parse(req.response)
                    console.log (json) // ajouter .quote, .author, .gender après le json pour aller chercher l'info voulue
                    // quote.innerHTML = json.quote         pour afficher sur la page mais attention à l'utilisation d' innerHTML
                    const text = document.createTextNode(json.quote)
                    quote.appendChild(text)
                    let cite = document.createElement("cite")
                    cite.innerHTML = json.author
                    quote.appendChild(cite)
                }
                else {
                    console.log ("Erreur", req.status)
                }
            }
        }
        req.open("GET", "https://thatsthespir.it/api")
        req.send ()

