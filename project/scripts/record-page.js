const learningDate = document.querySelector('#learning-date');
const selectedCurriculumAreas = document.querySelectorAll('.curriculum-area');
const learningStatement = document.querySelector('#learning-statement');
const form = document.querySelector('.record-form');
const saveMessage = document.querySelector('#save-message');
const children = document.querySelectorAll('input[name="children"]');
const childError = document.querySelector('#child-error');
let learningRecordArray = getLearningRecord() || [];

const curriculumAreas = [
    "English", "Mathematics", "Science", "Humanities & Social Sciences", "Health & Physical Education", "The Arts", "Technologies", "Languages"
];

function getLearningRecord() {
    const learningRecord = localStorage.getItem("learningRecord");
    return JSON.parse(learningRecord);
};

function setLearningRecord() {
    localStorage.setItem("learningRecord", JSON.stringify(learningRecordArray));
};

selectedCurriculumAreas.forEach(selection => {

    curriculumAreas.forEach(area => {
        const option = document.createElement('option');
        option.textContent = area;
        option.value = area;
        selection.append(option);
    });

});

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const selectedChildren = [];
    const learningArea = [];


    children.forEach(child => {
        if (child.checked) {
            selectedChildren.push(child.value);
        };
    });

    if (selectedChildren.length === 0) {
        document.querySelector('#child-error').textContent =
            `Please select at least one child.`;
        return;
    };
    childError.textContent = ``;

    selectedCurriculumAreas.forEach(selection => {
        if (selection.value) {
            learningArea.push(selection.value);
        }
    });

    const learningEntry = {
        date: learningDate.value,
        children: selectedChildren,
        selectedAreas: learningArea,
        statement: learningStatement.value
    };

    learningRecordArray.push(learningEntry);
    setLearningRecord();

    form.reset();
    saveMessage.textContent = `✓ Your learning has been recorded!`;

});

form.addEventListener("input", () => {
    saveMessage.textContent = ``;
    childError.textContent = ``;

});
