document.getElementById('edit-btn').addEventListener('click', function() {
    document.getElementById('edit-form').style.display = 'block';
});

document.getElementById('cancel-btn').addEventListener('click', function() {
    document.getElementById('edit-form').style.display = 'none';
});

document.getElementById('form-edit').addEventListener('submit', function(e) {
    e.preventDefault();

    
    const name = document.getElementById('name').value;
    const role = document.getElementById('role').value;
    const availability = document.getElementById('availability').value;
    const age = document.getElementById('age').value;
    const location = document.getElementById('location').value;
    const experience = document.getElementById('experience').value;
    const email = document.getElementById('email').value;

    document.getElementById('profile-name').textContent = name;
    document.getElementById('profile-role').textContent = role;
    document.getElementById('profile-availability').textContent = availability;
    document.getElementById('profile-age').textContent = age;
    document.getElementById('profile-location').textContent = location;
    document.getElementById('profile-experience').textContent = experience;
    document.getElementById('profile-email').textContent = email;

    document.getElementById('edit-form').style.display = 'none';
});