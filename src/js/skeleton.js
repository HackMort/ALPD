const btns = document.querySelectorAll('.skeleton__option');
const sections = document.querySelectorAll('section.skeleton__content');

btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const sectionId = btn.getAttribute('id');
      console.log(sectionId);
      sections.forEach(section => {
        //Only if a section is not hidden
        if (section.getAttribute("aria-hidden") === "false") {
          section.setAttribute("aria-hidden", "true");
          section.setAttribute("hidden", "true");
        }
      });

      //Add active class to the button
      btns.forEach(btn => {
        btn.classList.remove('skeleton__option--active');
      });

      btn.classList.add('skeleton__option--active');

      const currentSection = document.querySelector(`#${sectionId}-content`) || document.querySelector(`#${sectionId}-content`);

      currentSection.setAttribute("aria-hidden", "false");
      currentSection.removeAttribute("hidden");

    });
});