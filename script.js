const notesList = document.getElementById('notes-list');
const titleInput = document.getElementById('note-title');
const contentInput = document.getElementById('note-content');
const saveButton = document.getElementById('save-note');

// Load notes from local storage
const notes = JSON.parse(localStorage.getItem('notes')) || [];

function renderNotes() {
    notesList.innerHTML = '';
    notes.forEach((note, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${note.title}</strong><p>${note.content}</p><button onclick="deleteNote(${index})">Delete</button>`;
        notesList.appendChild(li);
    });
}

function saveNote() {
    const title = titleInput.value;
    const content = contentInput.value;
    if (title && content) {
        const newNote = { title, content };
        notes.push(newNote);
        localStorage.setItem('notes', JSON.stringify(notes));
        renderNotes();
        titleInput.value = '';
        contentInput.value = '';
    }
}

function deleteNote(index) {
    notes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
    renderNotes();
}

saveButton.addEventListener('click', saveNote);
renderNotes();
