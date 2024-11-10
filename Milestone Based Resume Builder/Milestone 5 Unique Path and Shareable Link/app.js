//selecting all inputs
var firstNameInput = document.querySelector('.firstname');
var lastNameInput = document.querySelector('.lastname');
var imageInput = document.querySelector('.image');
var designationInput = document.querySelector('.designation');
var addressInput = document.querySelector('.address');
var emailInput = document.querySelector('.email');
var phoneInput = document.querySelector('.phone');
//selecting all previews
var fullNameDisplay = document.getElementById('fullname_dsp');
var imageDisplay = document.getElementById('image_dsp');
var designationDisplay = document.getElementById('designation_dsp');
var addressDisplay = document.getElementById('address_dsp');
var emailDisplay = document.getElementById('email_dsp');
var phoneDisplay = document.getElementById('phoneno_dsp');
var skillsDisplay = document.getElementById('skills_dsp');
var educationsDisplay = document.getElementById('educations_dsp');
var experiencesDisplay = document.getElementById('experiences_dsp');
//function to update preview on real time
function updateCVPreview() {
    var fullName = "".concat(firstNameInput.value, " ").concat(lastNameInput.value);
    fullNameDisplay.textContent = fullName;
    designationDisplay.textContent = designationInput.value;
    addressDisplay.textContent = addressInput.value;
    emailDisplay.textContent = emailInput.value;
    phoneDisplay.textContent = phoneInput.value;
    var file = document.querySelector('.image').files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var imageElement = document.getElementById('image_dsp');
            imageElement.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
    else {
        var imageElement = document.getElementById('image_dsp');
        imageElement.src = '';
    }
    updateSkills();
    updateEducation();
    updateExperience();
}
function updateSkills() {
    var skillInputs = document.querySelectorAll('.skill');
    skillsDisplay.innerHTML = '';
    skillInputs.forEach(function (input) {
        if (input.value) {
            var skillItem = document.createElement('div');
            skillItem.textContent = input.value;
            skillsDisplay.appendChild(skillItem);
        }
    });
}
function updateEducation() {
    var instituteInputs = document.querySelectorAll('.institute');
    var degreeInputs = document.querySelectorAll('.degree');
    var dateInputs = document.querySelectorAll('.dateofcompletion');
    educationsDisplay.innerHTML = '';
    instituteInputs.forEach(function (instituteInput, index) {
        var degreeInput = degreeInputs[index];
        var dateInput = dateInputs[index];
        if (instituteInput.value && degreeInput.value && dateInput.value) {
            var eduItem = document.createElement('div');
            eduItem.innerHTML = "<span class=\"bold\"> ".concat(degreeInput.value, " </span> from <span class=\"bold\"> ").concat(instituteInput.value, "</span>, Completed on: <em> ").concat(dateInput.value, " </em>");
            eduItem.style.marginBottom = '15px';
            educationsDisplay.appendChild(eduItem);
        }
    });
}
function updateExperience() {
    var organizationInputs = document.querySelectorAll('.organization');
    var jobRoleInputs = document.querySelectorAll('.jobrole');
    var startDateInputs = document.querySelectorAll('.startdate');
    var endDateInputs = document.querySelectorAll('.enddate');
    experiencesDisplay.innerHTML = '';
    organizationInputs.forEach(function (organizationInput, index) {
        var jobRoleInput = jobRoleInputs[index];
        var startDateInput = startDateInputs[index];
        var endDateInput = endDateInputs[index];
        if (organizationInput.value && jobRoleInput.value) {
            var expItem = document.createElement('div');
            expItem.innerHTML = "<span class=\"bold\"> ".concat(jobRoleInput.value, " </span> at <span class=\"bold\"> ").concat(organizationInput.value, " </span> from <em>").concat(startDateInput.value, "</em> to <em>").concat(endDateInput.value || 'Present', "</em>");
            expItem.style.marginBottom = '15px';
            experiencesDisplay.appendChild(expItem);
        }
    });
}
// event listeners for sections
firstNameInput.addEventListener('input', updateCVPreview);
lastNameInput.addEventListener('input', updateCVPreview);
imageInput.addEventListener('change', updateCVPreview);
designationInput.addEventListener('input', updateCVPreview);
addressInput.addEventListener('input', updateCVPreview);
emailInput.addEventListener('input', updateCVPreview);
phoneInput.addEventListener('input', updateCVPreview);
//note: changes in institute and organization sections will only reflect in real time when you have enter all the inputs
var instituteInputs = document.querySelectorAll('.institute');
var degreeInputs = document.querySelectorAll('.degree');
var dateInputs = document.querySelectorAll('.dateofcompletion');
instituteInputs.forEach(function (instituteInput, index) {
    instituteInput.addEventListener('input', updateCVPreview);
    degreeInputs[index].addEventListener('input', updateCVPreview);
    dateInputs[index].addEventListener('input', updateCVPreview);
});
var organizationInputs = document.querySelectorAll('.organization');
var jobRoleInputs = document.querySelectorAll('.jobrole');
var startDateInputs = document.querySelectorAll('.startdate');
var endDateInputs = document.querySelectorAll('.enddate');
organizationInputs.forEach(function (organizationInput, index) {
    organizationInput.addEventListener('input', updateCVPreview);
    jobRoleInputs[index].addEventListener('input', updateCVPreview);
    startDateInputs[index].addEventListener('input', updateCVPreview);
    endDateInputs[index].addEventListener('input', updateCVPreview);
});
var skillInputs = document.querySelectorAll('.skill');
skillInputs.forEach(function (skillInput) {
    skillInput.addEventListener('input', updateCVPreview);
});
updateCVPreview();
//download resume
function printPreviewSection() {
    var previewSection = document.getElementById("preview-sc");
    var printWindow = window.open("", "_blank");
    if (printWindow) {
        printWindow.document.write("\n            <html>\n                <head>\n                    <title>Print Preview</title>\n                    <link rel=\"stylesheet\" href=\"style.css\">\n                </head>\n                <body>\n            ");
        printWindow.document.write(previewSection.outerHTML);
        printWindow.document.write("\n                </body>\n            </html>\n        ");
        printWindow.document.close();
        printWindow.print();
        printWindow.onafterprint = function () { return printWindow.close(); };
    }
    else {
        console.error("Failed to open print window.");
    }
}
