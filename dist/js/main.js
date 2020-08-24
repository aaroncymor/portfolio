AOS.init({
    duration: 1200,
    once: true
});

// setTimeout(()=>{document.body.style.overflow = "auto";}, 5000);

var skillIndex = 0;
skillList = [
    '.skills__html5',
    '.skills__css',
    '.skills__js',
    '.skills__python',
    '.skills__php',
    '.skills__sql',
    '.skills__devops',
    '.skills__os',
    '.skills__mobile'
];
techList = [
    '.html-tech',
    '.css-tech',
    '.js-tech',
    '.python-tech',
    '.php-tech',
    '.sql-tech',
    '.devops-tech',
    '.os-tech',
    '.mobile-tech'
];

// every x seconds, add highlight to target div, and
// add fade/hide to target lists
setInterval(()=>{
    if (skillIndex < skillList.length) {

        // index to remove added highlight and hide classes
        // from div.skills__<name> and li.<name>-tech
        // if current skillIndex -1 is less than 0, we assign
        // last element index, else it will be current skill index - 1
        var removeIndex = skillIndex - 1 < 0 
            ? skillList.length - 1
            : skillIndex - 1;
        
        document.querySelector(skillList[removeIndex])
            .classList.remove("enlarge");

        // remove highlight and hide classes with removeIndex
        document.querySelectorAll(`li${techList[removeIndex]}`)
        .forEach((li, item)=>{
            li.classList.remove("highlight");
        });

        document.querySelectorAll(`.skills__tags li:not(${techList[removeIndex]})`)
        .forEach((li, item)=>{
            li.classList.remove("inactive");
        });

        document.querySelector(skillList[skillIndex])
            .classList.add("enlarge");
        
        // highlight list of target tech and fade others
        document.querySelectorAll(`li${techList[skillIndex]}`)
        .forEach((li, item)=>{
            li.classList.add("highlight");
        });

        document.querySelectorAll(`.skills__tags li:not(${techList[skillIndex]})`)
        .forEach((li, item)=>{
            li.classList.add("inactive");
        });

        skillIndex++;
    } else {
        // reset
        skillIndex = 0;
    }
}, 5000);

const projectItems = document.querySelectorAll('.projects__item');
projectItems.forEach((projectItem, index) => {
    projectItem.addEventListener('click', (e)=>{
        if (e.target.parentElement.classList.contains("projects__story")) {
            e.target.parentElement.parentElement.classList.toggle("active");
        } else {
            e.target.parentElement.classList.toggle("active");           
        }
    });
});