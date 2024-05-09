function skillsMember() {
    var member = JSON.parse(localStorage.getItem('member'));
    var skills = member.skills;
    var skillsHTML = '';
    for (var i = 0; i < skills.length; i++) {
        skillsHTML += '<li>' + skills[i] + '</li>';
    }
    document.getElementById('skills').innerHTML = skillsHTML;
}