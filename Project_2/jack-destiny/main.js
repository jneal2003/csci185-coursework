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
const membershipUrl = `${baseURL}/User/GetMembershipsForCurrentUser/`;

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
getRandomCharacter();
getMemberships();
getUser();
