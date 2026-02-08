const drags = document.querySelectorAll('[id^="drag"]');
const divs = document.querySelectorAll('[id^="div"]');

let draggedItem = null;

drags.forEach((drag) => {
  drag.addEventListener("dragstart", () => {
    draggedItem = drag;
  });
});

divs.forEach((div) => {
  div.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  div.addEventListener("drop", (e) => {
    const existing = div.querySelector('[id^="drag"]');

    if (existing) {
      draggedItem.parentNode.appendChild(existing);
    }
    div.appendChild(draggedItem);
  });
});
