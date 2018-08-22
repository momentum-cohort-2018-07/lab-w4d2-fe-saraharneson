import request from 'superagent'

window.addEventListener('load', event => {
  event.preventDefault()

  request.get('https://api.github.com/users/saraharneson')

    .then(response => { displayProfile(response.body) })
})

function displayProfile (results) {
  document.getElementById('profileName').innerHTML = `${results.name}`

  document.getElementById('basics').innerHTML = `
      <h2 class="subheads">The Basics</h2>`

  document.getElementById('profileBasics').innerHTML = `
    <ul>
        <li class="contactCategory"><span>Name</span> ${results.name}</li>
        <li class="contactCategory"><span>GitHubURL</span> ${results.html_url}</li>
    </ul>
        `

  document.getElementById('story').innerHTML = `
    <h2 class="subheads">The Story</h2>`

  document.getElementById('profileStory').innerHTML = `
    <p>${results.bio}
    </p>
        `

  document.getElementById('profileStory').innerHTML = `${results.bio}`

  document.getElementById('col3').innerHTML = `
    <figure id="profilePic">
    <img id="profilePhoto" src="${results.avatar_url}" alt=" ">
    </figure>
    `
}
