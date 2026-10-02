const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
let chaptersArray = getChapterList() || [];

function displayList(item) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener('click', function () { list.removeChild(li); deleteChapter(li.textContent); input.focus(); });
};

function setChapterList() {
    localStorage.setItem("favouriteChapters", JSON.stringify(chaptersArray));
};

function getChapterList() {
    const favouriteChapters = localStorage.getItem("favouriteChapters");
    return JSON.parse(favouriteChapters);
};

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
};

button.addEventListener('click', function () {
    if (input.value.trim() !== "") {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();
    }
});

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

