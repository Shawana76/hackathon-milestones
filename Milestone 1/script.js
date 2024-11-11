function showSection(section) {
    // Hide all sections
    const sections = document.querySelectorAll('.contact, .education, .skill, .language, .experience, .Reference');
    sections.forEach(sec => sec.style.display = 'none');

    // Show the requested section
    const targetSection = document.querySelector(`.${section}`);
    if (targetSection) {
        targetSection.style.display = 'block';
    }
}
