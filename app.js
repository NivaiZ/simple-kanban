const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

const onDragStart = (evt) => {
    evt.target.classList.add('hold');
    setTimeout(() => {

        evt.target.classList.add('hide');
    }, 0);
};

const onDragEnd = (evt) => {
    evt.target.className = 'item'
};

item.addEventListener('dragstart', onDragStart);
item.addEventListener('dragend', onDragEnd);

const onDragover = (evt) => {
    evt.preventDefault()
};

const onDragenter = (evt) => {
    evt.target.classList.add('hovered');
};

const onDragleave = (evt) => {
    evt.target.classList.remove('hovered');
};

const onDragDrop = (evt) => {
    evt.target.classList.remove('hovered');
    evt.target.append(item);
};
for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', onDragover);
    placeholder.addEventListener('dragenter', onDragenter);
    placeholder.addEventListener('dragleave', onDragleave);
    placeholder.addEventListener('drop', onDragDrop);
};