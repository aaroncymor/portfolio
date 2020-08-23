AOS.init({
    duration: 1200,
    once: true
});

// setTimeout(()=>{document.body.style.overflow = "auto";}, 5000);

highlightSkills('.skills__html5', '.html-tech');
highlightSkills('.skills__css', '.css-tech');
highlightSkills('.skills__js', '.js-tech');
highlightSkills('.skills__python', '.python-tech');
highlightSkills('.skills__php', '.php-tech');
highlightSkills('.skills__sql', '.sql-tech');
highlightSkills('.skills__devops', '.devops-tech');
highlightSkills('.skills__os', '.os-tech');
highlightSkills('.skills__mobile', '.mobile-tech');


function highlightSkills(targetCard, techList){
    const card = document.querySelector(targetCard);
    const technologies = document.querySelectorAll(`li${techList}`);
    const notTechnologies = document.querySelectorAll(`li:not(${techList})`);

    card.addEventListener('mouseover', ()=>{
        technologies.forEach((li, index)=>{
            li.classList.add("highlight");
        });

        notTechnologies.forEach((li, index)=>{
            li.classList.add("hide");
        });
    });    

    card.addEventListener('mouseout', ()=>{
        technologies.forEach((li, index)=>{
            li.classList.remove("highlight");
        });
        notTechnologies.forEach((li, index)=>{
            li.classList.remove("hide");
        });
    });

    // card.addEventListener('click', ()=>{
    //     technologies.forEach((li, index)=>{
    //         li.classList.toggle("highlight");
    //     });

    //     notTechnologies.forEach((li, index)=>{
    //         li.classList.toggle("hide");
    //     });
    // });  
}

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