const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

function search(ev) {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

async function getTracks(term) {
    console.log(`
        get tracks from spotify based on the search term
        "${term}" and load them into the #tracks section 
        of the DOM...`);
        const url = `${baseURL}?q=${term}&type=track&limit=5`;
        const request = await fetch(url);
    const data = await request.json();
    const snippet1 = `<section class="track-item preview">
    <img src="${data[0].album.image_url}">
    <i class="fas play-track fa-play" aria-hidden="true"></i>
    <div class="label">
        <h2>${data[0].name}</h2>
        <p>
            ${data[0].artist.name}
        </p>
    </div>
</section>
<section class="track-item preview">
    <img src="${data[1].album.image_url}">
    <i class="fas fa-play play-track" aria-hidden="true"></i>
    <div class="label">
        <h2>${data[1].name}</h2>
        <p>
        ${data[0].artist.name}
        </p>
    </div>
</section>
<section class="track-item preview">
    <img src="${data[2].album.image_url}">
    <i class="fas fa-play play-track" aria-hidden="true"></i>
    <div class="label">
        <h2>${data[2].name}</h2>
        <p>
        ${data[0].artist.name}
        </p>
    </div>
</section>
<section class="track-item preview">
    <img src="${data[3].album.image_url}">
    <i class="fas fa-play play-track" aria-hidden="true"></i>
    <div class="label">
        <h2>${data[3].name}</h2>
        <p>
        ${data[0].artist.name}
        </p>
    </div>
</section>
<section class="track-item preview">
    <img src="${data[4].album.image_url}">
    <i class="fas fa-play play-track" aria-hidden="true"></i>
    <div class="label">
        <h2>${data[4].name}</h2>
        <p>
        ${data[0].artist.name}
        </p>
    </div>
</section>
</section>`
const container1 = document.querySelector("#tracks")
container1.innerHTML = snippet1;
}

async function getAlbums(term) {
    console.log(`
        get albums from spotify based on the search term
        "${term}" and load them into the #albums section 
        of the DOM...`);
        const url = `${baseURL}?q=${term}&type=album&limit=10`;
        const request = await fetch(url);
    const data = await request.json();
    const snippet2 = `<section class="album-card" id="2lATw9ZAVp7ILQcOKPCPqp">
    <div>
        <img src="${data[0].image_url}">
        <h2>${data[0].name}</h2>
        <div class="footer">
            <a href="${data[0].spotify_url}" target="_blank">
                view on spotify
            </a>
        </div>
    </div>
</section>
<section class="album-card" id="2lATw9ZAVp7ILQcOKPCPqp">
    <div>
        <img src="${data[1].image_url}">
        <h2>${data[1].name}</h2>
        <div class="footer">
            <a href="${data[1].spotify_url}" target="_blank">
                view on spotify
            </a>
        </div>
    </div>
</section>
<section class="album-card" id="2lATw9ZAVp7ILQcOKPCPqp">
    <div>
        <img src="${data[2].image_url}">
        <h2>${data[2].name}</h2>
        <div class="footer">
            <a href="${data[2].spotify_url}" target="_blank">
                view on spotify
            </a>
        </div>
    </div>
</section>
<section class="album-card" id="2lATw9ZAVp7ILQcOKPCPqp">
    <div>
        <img src="${data[3].image_url}">
        <h2>${data[3].name}</h2>
        <div class="footer">
            <a href="${data[3].spotify_url}" target="_blank">
                view on spotify
            </a>
        </div>
    </div>
</section>
<section class="album-card" id="2lATw9ZAVp7ILQcOKPCPqp">
    <div>
        <img src="${data[4].image_url}">
        <h2>${data[4].name}</h2>
        <div class="footer">
            <a href="${data[4].spotify_url}" target="_blank">
                view on spotify
            </a>
        </div>
    </div>
</section>
<section class="album-card" id="2lATw9ZAVp7ILQcOKPCPqp">
    <div>
        <img src="${data[5].image_url}">
        <h2>${data[5].name}</h2>
        <div class="footer">
            <a href="${data[5].spotify_url}" target="_blank">
                view on spotify
            </a>
        </div>
    </div>
</section>
<section class="album-card" id="2lATw9ZAVp7ILQcOKPCPqp">
    <div>
        <img src="${data[6].image_url}">
        <h2>${data[6].name}</h2>
        <div class="footer">
            <a href="${data[6].spotify_url}" target="_blank">
                view on spotify
            </a>
        </div>
    </div>
</section>
<section class="album-card" id="2lATw9ZAVp7ILQcOKPCPqp">
    <div>
        <img src="${data[7].image_url}">
        <h2>${data[7].name}</h2>
        <div class="footer">
            <a href="${data[7].spotify_url}" target="_blank">
                view on spotify
            </a>
        </div>
    </div>
</section>
<section class="album-card" id="2lATw9ZAVp7ILQcOKPCPqp">
    <div>
        <img src="${data[8].image_url}">
        <h2>${data[8].name}</h2>
        <div class="footer">
            <a href="${data[8].spotify_url}" target="_blank">
                view on spotify
            </a>
        </div>
    </div>
</section>
<section class="album-card" id="2lATw9ZAVp7ILQcOKPCPqp">
    <div>
        <img src="${data[9].image_url}">
        <h2>${data[9].name}</h2>
        <div class="footer">
            <a href="${data[9].spotify_url}" target="_blank">
                view on spotify
            </a>
        </div>
    </div>
</section>
`
    const container2 = document.querySelector("#albums")
    container2.innerHTML = snippet2
        
}

async function getArtist(term) {
    const url = `${baseURL}?q=${term}&type=artist&limit=1`;
    console.log(url);
    const request = await fetch(url);
    const data = await request.json();
    console.log(data);
    console.log(data[0].name);
    console.log(data[0].image_url);
    console.log(data[0].spotify_url)

    const snippet = `
    <section class="artist-card" id="3Nrfpe0tUJi4K4DXYWgMUX">
        <div>
            <img src="${data[0].image_url}">
            <h2>${data[0].name}</h2>
            <div class="footer">
                <a href="${data[0].spotify_url}" target="_blank">
                    view on spotify
                </a>
            </div>
        </div>
    </section>`
    const container = document.querySelector('#artist');
    container.innerHTML = snippet; 
    
};
function playtrack(trackId) {
    const template = `
    <iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/${trackId}?utm_source=generator" 
    width="100%" 
    height="352" 
    frameBorder="0" 
    allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
        document.querySelector("#artist").innerHTML = template ;
        
}


document.querySelector('#search').onkeyup = function (ev) {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
}