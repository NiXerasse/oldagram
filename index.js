const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const sectionsEl = document.getElementById("sections")
let postHTML = ""
for (let i = 0; i < posts.length; i++) {
    const p = posts[i]
    postHTML += `
        <section>
            <div class="section-header">
                <img class="avatar-img" src="${p.avatar}">
                <div>
                    <h3>${p.name}</h3>
                    <p>${p.location}</p>
                </div>
            </div>
            <img class="section-img" src="${p.post}">
            <div class="section-footer">
                <img class="icon-img" src="images/icon-heart.png">
                <img class="icon-img" src="images/icon-comment.png">
                <img class="icon-img" src="images/icon-dm.png">
                <h3>${p.likes} likes</h3>
                <p><h3 class="emph">${p.username}</h3> ${p.comment}</p>
            </div>
        </section>
    `
}

sectionsEl.innerHTML = postHTML