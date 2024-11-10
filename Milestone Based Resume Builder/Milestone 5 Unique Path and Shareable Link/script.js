// functions to create copy of each section
function createNewEduSection() {
    var _a, _b, _c;
    var newEduSection = document.createElement("div");
    newEduSection.classList.add("section-inputs-container");
    newEduSection.innerHTML = "\n    <div class=\"section-inputs\">\n      <label for=\"institute\" class=\"form-label\">Institute</label>\n      <input name=\"institute\" type=\"text\" class=\"form-control institute\" placeholder=\"e.g. University of Karachi\" required />\n    </div>\n    <div class=\"section-inputs\">\n      <label for=\"degree\" class=\"form-label\">Degree</label>\n      <input name=\"degree\" type=\"text\" class=\"form-control degree\" placeholder=\"e.g. Bachelor's in Computer Science\" required />\n    </div>\n    <div class=\"section-inputs\">\n      <label for=\"dateofcompletion\" class=\"form-label\">Date of Completion</label>\n      <input name=\"dateofcompletion\" type=\"date\" class=\"form-control dateofcompletion\" required />\n    </div>\n    <button type=\"button\" class=\"remove-btn edu-remove-btn\">-</button>\n  ";
    (_a = newEduSection
        .querySelector(".institute")) === null || _a === void 0 ? void 0 : _a.addEventListener("input", updateCVPreview);
    (_b = newEduSection
        .querySelector(".degree")) === null || _b === void 0 ? void 0 : _b.addEventListener("input", updateCVPreview);
    (_c = newEduSection
        .querySelector(".dateofcompletion")) === null || _c === void 0 ? void 0 : _c.addEventListener("input", updateCVPreview);
    return newEduSection;
}
function createNewExpSection() {
    var _a, _b, _c, _d;
    var newExpSection = document.createElement("div");
    newExpSection.classList.add("section-inputs-container");
    newExpSection.innerHTML = "\n    <div class=\"section-inputs\">\n      <label for=\"organization\" class=\"form-label\">Organization</label>\n      <input name=\"organization\" type=\"text\" class=\"form-control organization\" placeholder=\"e.g. Avanza Solutions\" required />\n    </div>\n    <div class=\"section-inputs\">\n      <label for=\"jobrole\" class=\"form-label\">Job Title</label>\n      <input name=\"jobrole\" type=\"text\" class=\"form-control jobrole\" placeholder=\"e.g. Software Engineer\" required />\n    </div>\n    <div class=\"section-inputs\">\n      <label for=\"startdate\" class=\"form-label\">Start Date</label>\n      <input name=\"startdate\" type=\"date\" class=\"form-control startdate\" required />\n    </div>\n    <div class=\"section-inputs\">\n      <label for=\"enddate\" class=\"form-label\">End Date</label>\n      <input name=\"enddate\" type=\"date\" class=\"form-control enddate\" />\n    </div>\n    <button type=\"button\" class=\"remove-btn exp-remove-btn\">-</button>\n  ";
    (_a = newExpSection
        .querySelector(".organization")) === null || _a === void 0 ? void 0 : _a.addEventListener("input", updateCVPreview);
    (_b = newExpSection
        .querySelector(".jobrole")) === null || _b === void 0 ? void 0 : _b.addEventListener("input", updateCVPreview);
    (_c = newExpSection
        .querySelector(".startdate")) === null || _c === void 0 ? void 0 : _c.addEventListener("input", updateCVPreview);
    (_d = newExpSection
        .querySelector(".enddate")) === null || _d === void 0 ? void 0 : _d.addEventListener("input", updateCVPreview);
    return newExpSection;
}
function createNewSkillSection() {
    var _a;
    var newSkillSection = document.createElement("div");
    newSkillSection.classList.add("section-inputs-container");
    newSkillSection.innerHTML = "\n  <div class=\"section-inputs\">\n  <input\n  name=\"skill\"\n  type=\"text\"\n  class=\"form-control skill\"\n  placeholder=\"e.g. Typescript\"\n  required\n  />\n  </div>\n  <div class=\"section-inputs\">\n  <input\n  name=\"skill\"\n  type=\"text\"\n  class=\"form-control skill\"\n  placeholder=\"e.g. Python\"\n  required\n  />\n  </div>\n  <div class=\"section-inputs\">\n  <input\n  name=\"skill\"\n  type=\"text\"\n  class=\"form-control skill\"\n  placeholder=\"e.g. Analysis\"\n  required\n  />\n  </div>\n  <button type=\"button\" class=\"remove-btn skills-remove-btn\">-</button>\n      \n      \n    ";
    (_a = newSkillSection
        .querySelector(".skill")) === null || _a === void 0 ? void 0 : _a.addEventListener("input", updateCVPreview);
    return newSkillSection;
}
//functionality
var addEduSection = document.getElementById("add-edu-section");
var addEduBtn = document.getElementById("edu-add-btn");
addEduBtn.addEventListener("click", function () {
    var newEduSection = createNewEduSection();
    addEduSection.appendChild(newEduSection);
});
var addExpSection = document.getElementById("add-exp-section");
var addExpBtn = document.getElementById("exp-add-btn");
addExpBtn.addEventListener("click", function () {
    var newExpSection = createNewExpSection();
    addExpSection.appendChild(newExpSection);
});
var addSkillSection = document.getElementById("add-skills-section");
var addSkillBtn = document.getElementById("skill-add-btn");
addSkillBtn.addEventListener("click", function () {
    var newSkillSection = createNewSkillSection();
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
