// Toggle project details visibility
function toggleProject(projectNumber) {
    const projectDetails = document.getElementById(`project-${projectNumber}`);
    const toggleIcon = event.target.closest('.project-title').querySelector('.toggle-icon');
    
    if (projectDetails.style.display === 'none') {
        projectDetails.style.display = 'block';
        toggleIcon.textContent = '-';
    } else {
        projectDetails.style.display = 'none';
        toggleIcon.textContent = '+';
    }
}
