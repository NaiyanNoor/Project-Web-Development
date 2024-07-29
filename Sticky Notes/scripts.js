function addNote() {
    const noteInput = document.getElementById('note-input');
    const noteText = noteInput.value.trim();

    if (noteText !== '') {
        const notesContainer = document.getElementById('notes-container');
        const note = document.createElement('div');
        note.className = 'note';

        const textarea = document.createElement('textarea');
        textarea.value = noteText;
        textarea.oninput = function() {
            noteText = this.value;
        };

        const removeButton = document.createElement('button');
        removeButton.textContent = 'X';
        removeButton.onclick = function() {
            notesContainer.removeChild(note);
        };

        note.appendChild(textarea);
        note.appendChild(removeButton);
        notesContainer.appendChild(note);

        noteInput.value = '';
    }
}
