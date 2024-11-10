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
let addEduSection = document.getElementById("add-edu-section") as HTMLElement;
let addEduBtn = document.getElementById("edu-add-btn") as HTMLElement;

addEduBtn.addEventListener("click", () => {
  const newEduSection = createNewEduSection();
  addEduSection.appendChild(newEduSection);
 
});

let addExpSection = document.getElementById("add-exp-section") as HTMLElement;
let addExpBtn = document.getElementById("exp-add-btn") as HTMLElement;

addExpBtn.addEventListener("click", () => {
  const newExpSection = createNewExpSection();
  addExpSection.appendChild(newExpSection);
  
});

let addSkillSection = document.getElementById(
  "add-skills-section"
) as HTMLElement;
let addSkillBtn = document.getElementById("skill-add-btn") as HTMLElement;

addSkillBtn.addEventListener("click", () => {
  const newSkillSection = createNewSkillSection();
  addSkillSection.appendChild(newSkillSection);
  
});

document.addEventListener("click", function (event) {
  if (
    event.target &&
    (event.target as HTMLElement).classList.contains("edu-remove-btn")
  ) {
    (event.target as HTMLElement).parentElement?.remove();
   
  } else if (
    event.target &&
    (event.target as HTMLElement).classList.contains("exp-remove-btn")
  ) {
    (event.target as HTMLElement).parentElement?.remove();
    
  } else if (
    event.target &&
    (event.target as HTMLElement).classList.contains("skills-remove-btn")
  ) {
    (event.target as HTMLElement).parentElement?.remove();
    
  }
});
