const socialMediaLinks = {
  github: 'Dggamer007k7',
  instagram: 'diogo.machado.de.souza',
  facebook: 'DGgamer007',
  youtube: 'channel/UCU5FYQ7d4gQN71caUHZ_rlw',
  twitter: 'DGgamer007'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${socialMediaLinks[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${socialMediaLinks.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      username.textContent = data.name
      userbio.textContent = data.bio
      git.href.textContent = data.html_url
      userim.src = data.avatar_url
      userlogin.textContent = data.login
    })
}

getGitHubProfileInfos()
