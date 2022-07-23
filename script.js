

// notes data 
let titles = ["Hausaufgaben",]

let texts = ["Mathe fertig machen",]


function addNote() {
    let newTitle = document.getElementById('new-title').value
    let newText = document.getElementById('new-text').value
    
    titles.push(newTitle)
    texts.push(newText)

    render()
}

function deleteNote() {
    console.log("test")

    document.getElementById('new-title').value = ''
    document.getElementById('new-text').value = ''
}


function deleteCard (i){
    console.log("delete-card-test")
    titles.splice(i, 1) 
    texts.splice(i, 1)

    render()
}




///////render///////
function render() {

    let content = document.getElementById('content')

    content.innerHTML =''
    
    content.innerHTML += `
    
    <h1>Notes</h1>


         <div  class="new-notes" id="new-notes">

        <input id="new-title" class="new-title" type="text" placeholder="Titel eingeben">
        <input id="new-text" class="new-text" type="text" placeholder="Text eingeben ">

        <div class="note-options" id="note-options">
        <button onclick="addNote()">Add Note</button>
        <button onclick="deleteNote()">Delete Note</button>
        <button onclick="archieve()">Archieve Note</button>
    
    </div>
    </div>  

   
    `

        for( let i = 0; i < titles.length; i++) {
            const title = titles[i]
            const text = texts[i]



            // card Render
            content.innerHTML += `




                <div id="content2" class="content2">

                <div class="card" id="card">
                    <h1 class="title" id="title">${title}</h1>
                    <p class="note" id="note">${text}</p>
                        <div class="card-button">
                            <button onclick="deleteCard()" >Delete</button>
                            <button onclick="archieve()">Archieve Note</button>
                        </div>
                </div>
    
    
            </div>
            `   
        }
}



















