const newData = document.querySelector('.main-section');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const searched = document.querySelector('input').value;
  // const searched = 'omegapaulo';
  console.log(searched);

  async function gitHub() {
    const users = await fetch(`https://api.github.com/users/${searched}`);
    const usersData = await users.json();

    console.log(usersData);

    const user = `
      <div class="profiles">
      <img src="${usersData.avatar_url}" alt="">
      <div class="profiles-info">
      <p class="profile-name">${usersData.name}</p>
      <p class="followers">Followers: <span class="numbers">${usersData.followers}</span></p>
      <p class="following">Following: <span class="numbers">${usersData.following}</span></p>
      <p class="publick-repos">Repository: <span class="numbers">${usersData.public_repos}</span></p>
      <p class="public-gists">Public Gists: <span class="numbers">${usersData.public_gists}</span></p>
      </div>
      </div>
      `;
    document.querySelector('.main-section').innerHTML = user;
    document.querySelector('input').value = '';
  }
  gitHub();
});
