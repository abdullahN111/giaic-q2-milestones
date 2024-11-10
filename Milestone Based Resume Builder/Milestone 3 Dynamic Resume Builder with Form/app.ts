//selecting all inputs

const firstNameInput = document.querySelector<HTMLInputElement>('.firstname')!;
const lastNameInput = document.querySelector<HTMLInputElement>('.lastname')!;
const imageInput = document.querySelector<HTMLInputElement>('.image')!;
const designationInput = document.querySelector<HTMLInputElement>('.designation')!;
const addressInput = document.querySelector<HTMLInputElement>('.address')!;
const emailInput = document.querySelector<HTMLInputElement>('.email')!;
const phoneInput = document.querySelector<HTMLInputElement>('.phone')!;

//selecting all previews

const fullNameDisplay = document.getElementById('fullname_dsp')!;
const imageDisplay = document.getElementById('image_dsp')!;
const designationDisplay = document.getElementById('designation_dsp')!;
const addressDisplay = document.getElementById('address_dsp')!;
const emailDisplay = document.getElementById('email_dsp')!;
const phoneDisplay = document.getElementById('phoneno_dsp')!;
const skillsDisplay = document.getElementById('skills_dsp')!;
const educationsDisplay = document.getElementById('educations_dsp')!;
const experiencesDisplay = document.getElementById('experiences_dsp')!;

//function to update preview on real time

function updateCVPreview() {
    const fullName = `${firstNameInput.value} ${lastNameInput.value}`;
    fullNameDisplay.textContent = fullName;
    designationDisplay.textContent = designationInput.value;
    addressDisplay.textContent = addressInput.value;
    emailDisplay.textContent = emailInput.value;
    phoneDisplay.textContent = phoneInput.value;

    const file = (document.querySelector('.image') as HTMLInputElement).files![0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const imageElement = document.getElementById('image_dsp') as HTMLImageElement;
            imageElement.src = e.target!.result as string;
        };
        reader.readAsDataURL(file);
    } else {
        const imageElement = document.getElementById('image_dsp') as HTMLImageElement;
        imageElement.src = ''; 
    }

    updateSkills();
    updateEducation();
    updateExperience();
}

function updateSkills() {
    const skillInputs = document.querySelectorAll<HTMLInputElement>('.skill');
    skillsDisplay.innerHTML = '';
    skillInputs.forEach(input => {
        if (input.value) {
            const skillItem = document.createElement('div');
            skillItem.textContent = input.value;
            skillsDisplay.appendChild(skillItem);
        }
    });
}

function updateEducation() {
    const instituteInputs = document.querySelectorAll<HTMLInputElement>('.institute');
    const degreeInputs = document.querySelectorAll<HTMLInputElement>('.degree');
    const dateInputs = document.querySelectorAll<HTMLInputElement>('.dateofcompletion');
    
    educationsDisplay.innerHTML = '';
    instituteInputs.forEach((instituteInput, index) => {
        const degreeInput = degreeInputs[index];
        const dateInput = dateInputs[index];
        
        if (instituteInput.value && degreeInput.value && dateInput.value) {
            const eduItem = document.createElement('div');
            eduItem.innerHTML = `<span class="bold"> ${degreeInput.value} </span> from <span class="bold"> ${instituteInput.value}</span>, Completed on: <em> ${dateInput.value} </em>`;
            eduItem.style.marginBottom = '13px';
            educationsDisplay.appendChild(eduItem);
        }
    });
}

function updateExperience() {
    const organizationInputs = document.querySelectorAll<HTMLInputElement>('.organization');
    const jobRoleInputs = document.querySelectorAll<HTMLInputElement>('.jobrole');
    const startDateInputs = document.querySelectorAll<HTMLInputElement>('.startdate');
    const endDateInputs = document.querySelectorAll<HTMLInputElement>('.enddate');
    
    experiencesDisplay.innerHTML = '';
    organizationInputs.forEach((organizationInput, index) => {
        const jobRoleInput = jobRoleInputs[index];
        const startDateInput = startDateInputs[index];
        const endDateInput = endDateInputs[index];
        
        if (organizationInput.value && jobRoleInput.value) {
            const expItem = document.createElement('div');
            expItem.innerHTML = `<span class="bold"> ${jobRoleInput.value} </span> at <span class="bold"> ${organizationInput.value} </span> from <em>${startDateInput.value}</em> to <em>${endDateInput.value || 'Present'}</em>`;
            expItem.style.marginBottom = '13px'
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

const instituteInputs = document.querySelectorAll<HTMLInputElement>('.institute');
const degreeInputs = document.querySelectorAll<HTMLInputElement>('.degree');
const dateInputs = document.querySelectorAll<HTMLInputElement>('.dateofcompletion');
instituteInputs.forEach((instituteInput, index) => {
    instituteInput.addEventListener('input', updateCVPreview);
    degreeInputs[index].addEventListener('input', updateCVPreview);
    dateInputs[index].addEventListener('input', updateCVPreview);
});

const organizationInputs = document.querySelectorAll<HTMLInputElement>('.organization');
const jobRoleInputs = document.querySelectorAll<HTMLInputElement>('.jobrole');
const startDateInputs = document.querySelectorAll<HTMLInputElement>('.startdate');
const endDateInputs = document.querySelectorAll<HTMLInputElement>('.enddate');
organizationInputs.forEach((organizationInput, index) => {
    organizationInput.addEventListener('input', updateCVPreview);
    jobRoleInputs[index].addEventListener('input', updateCVPreview);
    startDateInputs[index].addEventListener('input', updateCVPreview);
    endDateInputs[index].addEventListener('input', updateCVPreview);
});

const skillInputs = document.querySelectorAll<HTMLInputElement>('.skill');
skillInputs.forEach(skillInput => {
    skillInput.addEventListener('input', updateCVPreview);
});





updateCVPreview();
