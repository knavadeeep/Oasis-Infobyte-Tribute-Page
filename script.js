function showAchievements() {
    const achievements = document.getElementById('achievements');
    if (achievements.classList.contains('hidden')) {
        achievements.classList.remove('hidden');
    } else {
        achievements.classList.add('hidden');
    }
}
