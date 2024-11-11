// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Reference Section Toggle
    let ref_section = document.getElementById('ref');
    let ref_btn = document.getElementById('ref_btn');
    ref_btn?.addEventListener('click', () => {
        ref_section?.classList.toggle('hide');
    });

    // Experience Section Toggle
    let exp_section = document.getElementById('experience');
    let exp_btn = document.getElementById('exp-btn');
    exp_btn?.addEventListener('click', () => {
        exp_section?.classList.toggle('hide');
    });

    // Print Button Functionality
    let print_btn = document.getElementById('print_btn');
    print_btn?.addEventListener('click', () => {
        window.print();
    });
});
