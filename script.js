const notes = [
  { text: "Заметка 1", pinned: false },
  { text: "Заметка 2", pinned: true },
];

function renderNotes() {
  const container = document.querySelector(".tags");
  if (!container) return; // Если контейнер не найден, выходим из функции
  container.innerHTML = "";

  notes.forEach((note, index) => {
    const noteDiv = document.createElement("div");
    noteDiv.textContent = note.text;
    noteDiv.classList.add("note");
    if (note.pinned) {
      noteDiv.classList.add("pinned");
    }
    container.appendChild(noteDiv);
  });
}

renderNotes();

const addNoteButton = document.querySelector(".addNote");
const inputField = document.querySelector(".tagInput");

addNoteButton.addEventListener("click", () => {
  const newText = inputField.value.trim();
  if (newText) {
    notes.push({ text: newText, pinned: false });
    inputField.value = "";
    renderNotes();
  } else {
    console.log("Пустую заметку добавлять нельзя!");
  }
});
