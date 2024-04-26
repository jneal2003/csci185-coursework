const headers = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "X-API-Key": "bdae0af9b3c340a595603547516ba81b",
    },
};
const membershipId = "13608813";
const baseURL = "https://www.bungie.net/platform";
const galUrl = `${baseURL}/Destiny/Manifest/InventoryItem/1274330687/`;
const urlUser = `${baseURL}/User/GetBungieNetUserById/${membershipId}/`;
const settingsUrl = `${baseURL}/settings`;
const membershipUrl = `https://www.bungie.net/Platform/Destiny2/254/Profile/13608813/LinkedProfiles/?getAllMemberships=true`;
const accountUrl = `https://www.bungie.net/Platform/Destiny2/254/Profile/13608813/Character/2`;

async function getUser() {
    const response = await fetch(urlUser, headers);
    const output = await response.json();
    console.log(output);
}

async function getMemberships() {
    const response = await fetch(membershipUrl, headers);
    const output = await response.json();
    console.log(output);
}
// FIND DIFFERENT LOCATION (NOT RESPONSE>GROUP AVATARS< LOOK IN DIM)
async function getSettings() {
    const response = await fetch(settingsUrl, headers);
    const output = await response.json();
    console.log(output);
    const groupAvatars = output.Response.groupAvatars;
    console.log(groupAvatars);
    for (let i = 0; i<groupAvatars.length; i++){
        console.log(`https://www.bungie.net${groupAvatars[i].imagePath}`)
    }
}
async function getInventory() {
    const response = await fetch(accountUrl, headers);
    const output = await response.json();
    console.log(output);
}


async function getRandomCharacter() {
    const response = await fetch(galUrl, headers);
    const output = await response.json();
    // console.log(output);
    const data = output.Response.data;
    const container = document.querySelector("#container");
    const snippet = `
        <h2>${data.inventoryItem.itemName}</h2>
        <p>${data.inventoryItem.itemDescription}</p>
        <img src="https://www.bungie.net${data.inventoryItem.icon}" />
    `;
    container.insertAdjacentHTML("beforeend", snippet);
}


// actually run the codes:
// getRandomCharacter();
// getMemberships();
// getUser();
// getSettings();
getInventory()
