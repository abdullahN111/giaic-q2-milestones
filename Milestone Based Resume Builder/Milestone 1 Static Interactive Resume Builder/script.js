"use strict";
// functions to create copy of each section
function createNewEduSection() {
    const newEduSection = document.createElement("div");
    newEduSection.classList.add("section-inputs-container");
    newEduSection.innerHTML = `
    
  <div class="section-inputs">
  <label for="institute" class="form-label">Institute</label>
  <input
          name="institute"
          type="text"
          class="form-control institute"
          placeholder="e.g. University of Karachi"
          required
        />
      </div>
      <div class="section-inputs">
        <label for="degree" class="form-label">Degree</label>
        <input
          name="degree"
          type="text"
          class="form-control degree"
          placeholder="e.g. Bachelor's in Computer Science"
          required
          />
      </div>
      <div class="section-inputs">
        <label for="dateofcompletion" class="form-label">Date of Completion</label>
        <input
          name="dateofcompletion"
          type="date"
          class="form-control dateofcompletion"
          required
          />
          </div>
          <button type="button" class="remove-btn edu-remove-btn">-</button>
      
    `;
    return newEduSection;
}
function createNewExpSection() {
    const newExpSection = document.createElement("div");
    newExpSection.classList.add("section-inputs-container");
    newExpSection.innerHTML = `
  <div class="section-inputs">
  <label for="organization" class="form-label">Organization</label>
  <input
  name="organization"
  type="text"
  class="form-control organization"
          placeholder="e.g. Avanza Solutions"
          required
        />
      </div>
      <div class="section-inputs">
        <label for="jobrole" class="form-label">Job Title</label>
        <input
        name="jobrole"
        type="text"
        class="form-control jobrole"
        placeholder="e.g. Software Engineer"
        required
        />
        </div>
        <div class="section-inputs">
        <label for="startdate" class="form-label">Start Date</label>
        <input
        name="startdate"
        type="date"
        class="form-control startdate"
        required
        />
        </div>
        <div class="section-inputs">
        <label for="enddate" class="form-label">End Date</label>
        <input
        name="enddate"
        type="date"
        class="form-control enddate"
        />
        </div>
        <button type="button" class="remove-btn exp-remove-btn">-</button>
      
    `;
    return newExpSection;
}
function createNewSkillSection() {
    const newSkillSection = document.createElement("div");
    newSkillSection.classList.add("section-inputs-container");
    newSkillSection.innerHTML = `
  <div class="section-inputs">
  <input
  name="skill"
  type="text"
  class="form-control skill"
  placeholder="e.g. Typescript"
  required
  />
  </div>
  <div class="section-inputs">
  <input
  name="skill"
  type="text"
  class="form-control skill"
  placeholder="e.g. Typescript"
  required
  />
  </div>
  <div class="section-inputs">
  <input
  name="skill"
  type="text"
  class="form-control skill"
  placeholder="e.g. Typescript"
  required
  />
  </div>
  <button type="button" class="remove-btn skills-remove-btn">-</button>
      
      
    `;
    return newSkillSection;
}
//functionality
let addEduSection = document.getElementById("add-edu-section");
let addEduBtn = document.getElementById("edu-add-btn");
addEduBtn.addEventListener("click", () => {
    const newEduSection = createNewEduSection();
    addEduSection.appendChild(newEduSection);
});
let addExpSection = document.getElementById("add-exp-section");
let addExpBtn = document.getElementById("exp-add-btn");
addExpBtn.addEventListener("click", () => {
    const newExpSection = createNewExpSection();
    addExpSection.appendChild(newExpSection);
});
let addSkillSection = document.getElementById("add-skills-section");
let addSkillBtn = document.getElementById("skill-add-btn");
addSkillBtn.addEventListener("click", () => {
    const newSkillSection = createNewSkillSection();
    addSkillSection.appendChild(newSkillSection);
});
document.addEventListener("click", function (event) {
    var _a, _b, _c;
    if (event.target &&
        event.target.classList.contains("edu-remove-btn")) {
        (_a = event.target.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
    }
    else if (event.target &&
        event.target.classList.contains("exp-remove-btn")) {
        (_b = event.target.parentElement) === null || _b === void 0 ? void 0 : _b.remove();
    }
    else if (event.target &&
        event.target.classList.contains("skills-remove-btn")) {
        (_c = event.target.parentElement) === null || _c === void 0 ? void 0 : _c.remove();
    }
});
