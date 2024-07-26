document.addEventListener('DOMContentLoaded', function () {
    const skills = document.querySelectorAll('.skills ul li');

    skills.forEach(skill => {
        skill.addEventListener('click', () => {
            alert(`Bạn đã chọn kỹ năng: ${skill.textContent}`);
        });
    });
});