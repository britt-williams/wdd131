const journalEntries = document.querySelector('#journal-entries')
const filterCurriculumAreas = document.querySelector('.filter-curriculum-area');
const childrenFiltered = document.querySelector('#filter-child');
const dateFrom = document.querySelector('#date-from');
const dateTo = document.querySelector('#date-to');

let learningRecordArray = getLearningRecord() || [];

const curriculumAreas = [
    "English", "Mathematics", "Science", "Humanities & Social Sciences", "Health & Physical Education", "The Arts", "Technologies", "Languages"
];

function displayArray(item) {
    const article = document.createElement('article');
    article.classList.add('entry-journal')

    const date = document.createElement('p');
    date.classList.add('entry-date');

    const dateLabel = document.createElement('span');
    dateLabel.classList.add('entry-label');

    const [year, month, day] = item.date.split("-");

    const children = document.createElement('p');
    children.classList.add('entry-children');

    const childrenLabel = document.createElement('span');
    childrenLabel.classList.add('entry-label');

    const curriculum = document.createElement('p');
    curriculum.classList.add('entry-curriculum-area');

    const curriculumLabel = document.createElement('span');
    curriculumLabel.classList.add('entry-label');

    const statement = document.createElement('p');
    statement.classList.add('entry-statement');

    const statementLabel = document.createElement('span');
    statementLabel.classList.add('entry-label');

    const deleteButton = document.createElement('button');

    dateLabel.textContent = `Date: `;
    childrenLabel.textContent = `Children: `;
    curriculumLabel.textContent = `Curriculum: `;
    statementLabel.textContent = `What We Did: `;

    date.append(dateLabel, `${day}/${month}/${year.slice(-2)}`);
    children.append(childrenLabel, item.children.join(`, `));
    curriculum.append(curriculumLabel, item.selectedAreas.join(`, `));
    statement.append(statementLabel, item.statement);

    deleteButton.textContent = `Delete Entry`;
    deleteButton.classList.add('delete-button');

    deleteButton.addEventListener('click', () => {
        deleteEntry(item);
    });

    article.append(date, children, curriculum, statement, deleteButton);
    journalEntries.append(article);
};

function getLearningRecord() {
    const learningRecord = localStorage.getItem("learningRecord");
    return JSON.parse(learningRecord);
};

function filterEntries() {
    const selectedChild = childrenFiltered.value;
    const selectedCurriculum = filterCurriculumAreas.value;
    const selectedFrom = dateFrom.value;
    const selectedTo = dateTo.value;

    const filteredRecords = learningRecordArray.filter(record =>
        (selectedChild === "all" || record.children.includes(selectedChild)) &&
        (selectedCurriculum === "all" || record.selectedAreas.includes(selectedCurriculum)) &&
        (!selectedFrom || record.date >= selectedFrom) &&
        (!selectedTo || record.date <= selectedTo)
    );

    journalEntries.replaceChildren();

    const noRecordMessage = document.createElement('p');
    noRecordMessage.classList.add('no-record-message');

    if (learningRecordArray.length === 0) {
        noRecordMessage.textContent = (`No learning records have been saved yet.`)
        journalEntries.append(noRecordMessage)
    }

    else if (filteredRecords.length === 0) {
        noRecordMessage.textContent = (`No entries matching these filters.`)
        journalEntries.append(noRecordMessage)
    }
        
    else {
        filteredRecords.forEach(record => {
            displayArray(record);
        });
    }
};

function setLearningRecord() {
    localStorage.setItem("learningRecord", JSON.stringify(learningRecordArray));
};

function deleteEntry(entry) {
    const confirmed = confirm(`Are you sure you want to delete this learning record? This action cannot be undone.`)

    if (!confirmed) {
        return;
    }

    learningRecordArray = learningRecordArray.filter((item) => item !== entry);
    setLearningRecord();
    filterEntries();
};

curriculumAreas.forEach(area => {
    const option = document.createElement('option');
    option.textContent = area;
    option.value = area;
    filterCurriculumAreas.append(option);
});

childrenFiltered.addEventListener("change", filterEntries);
filterCurriculumAreas.addEventListener("change", filterEntries);
dateFrom.addEventListener("change", filterEntries);
dateTo.addEventListener("change", filterEntries);


filterEntries();