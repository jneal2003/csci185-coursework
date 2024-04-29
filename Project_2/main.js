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
// let shotgun = "https://www.bungie.net/platform/Destiny2/Manifest/{shotgun}/{i}?definitions=true"; ask for help
const membershipUrl = `https://www.bungie.net/Platform/Destiny2/254/Profile/13608813/LinkedProfiles/?getAllMemberships=true`;
const accountUrl = `https://www.bungie.net/Platform/Destiny2/3/Profile/13608813/Character/2305843010049764490?components=100%2C102%2C103%2C200%2C201%2C202%2C205%2C300%2C301%2C305%2C307%2C800%2C308%2C310%2C309%2C900%2C1100%2C1200%2C104%2C1000%2C206`;
const myUrl = `https://www.bungie.net/Platform/Destiny2/3/Profile/4611686018515570423/?components=100%2C102%2C103%2C200%2C201%2C202%2C205%2C300%2C301%2C305%2C307%2C800%2C308%2C310%2C309%2C900%2C1100%2C1200%2C104%2C1000%2C206`
const characterId1 = "2305843010049764490"
const characterId2 = "2305843010071354091"
const characterId3 = "2305843010089344307"
// MAKE IF LOOP THAT SHOWS CHARACTER STATS USING AN ARRAY AND HAVE IT ON PAGE


async function getUser() {
    const response = await fetch(myUrl, headers);
    const output = await response.json();
    console.log(output);
}
// need help
// async function getItem() {
// for (let i = 0 ; i < 1000 ; i++) {
//     const response = await fetch(shotgun , headers)
//     const output = await response.json();
// console.log(output)}
// }

// async function getMemberships() {
//     const response = await fetch(membershipUrl, headers);
//     const output = await response.json();
//     console.log(output);
// }
// // FIND DIFFERENT LOCATION (NOT RESPONSE>GROUP AVATARS< LOOK IN DIM)
// async function getSettings() {
//     const response = await fetch(settingsUrl, headers);
//     const output = await response.json();
//     console.log(output);
//     const groupAvatars = output.Response.groupAvatars;
//     console.log(groupAvatars);
//     for (let i = 0; i<groupAvatars.length; i++){
//         console.log(`https://www.bungie.net${groupAvatars[i].imagePath}`)
//     }
// }
async function getInventory() {
    // console.log(myUrl);
    const response = await fetch(myUrl, headers);
    const output = await response.json();
    // console.log(output);
    const characterIds = output.Response.profile.data.characterIds;
    // console.log(characterIds)
    // console.log(accountUrl)
    const characters = output.Response.characters.data;
    // console.log(characters)
    const character1 = characters[characterId1];
    console.log(character1);
    const character2 = characters[characterId2];
    console.log(character2);
    const character3 = characters[characterId3];
    console.log(character3);


    // warlock // 
    // emblemW //
    const container1 = document.querySelector("#container1");
    const emblemW = `
        <img src="https://www.bungie.net${character1.emblemBackgroundPath}" />`;
    container1.insertAdjacentHTML('beforeend', emblemW);
    // powerW //
    const powerW1 = document.querySelector("#warlock");
    const powerW2 = `<p>Warlock Power LVL: ${character1.light}</p>`;
    powerW1.insertAdjacentHTML('beforeend', powerW2);
    // statsW //
    const statsW1 = document.querySelector("#warlock");
    const statsW2 = `<p>Warlock Stats: </p>
    <p>Mobility: ${character1.stats[2996146975]}</p>
    <p>Resilience: ${character1.stats[392767087]}</p>
    <p.Recovery: ${character1.stats[1943323491]}</p>
    <p>Discpline: ${character1.stats[1735777505]}</p>
    <p>Intellect: ${character1.stats[144602215]}</p>
    <p>Strength: ${character1.stats[4244567218]} </p>`;
    statsW1.insertAdjacentHTML('beforeend', statsW2);

    // titan //
    // emblemT //
    const container2 = document.querySelector("#container1");
    const emblemT = `
        <img src="https://www.bungie.net${character2.emblemBackgroundPath}" />`;
    container2.insertAdjacentHTML('beforeend', emblemT);
    // powerT //
    const powerT1 = document.querySelector("#titan");
    const powerT2 = `<p>Titan Power LVL: ${character2.light}</p>`;
    powerT1.insertAdjacentHTML('beforeend', powerT2);
    // statsT //
    const statsT1 = document.querySelector("#titan");
    const statsT2 = `<p>Titan Stats: </p>
    <p>Mobility: ${character2.stats[2996146975]}</p>
    <p>Resilience: ${character2.stats[392767087]}</p>
    <p.Recovery: ${character2.stats[1943323491]}</p>
    <p>Discpline: ${character2.stats[1735777505]}</p>
    <p>Intellect: ${character2.stats[144602215]}</p>
    <p>Strength: ${character2.stats[4244567218]} </p>`;
    statsT1.insertAdjacentHTML('beforeend', statsT2);


    // hunter // 
    // emblemH //
    const container3 = document.querySelector("#container1");
    const emblemH = `
        <img src="https://www.bungie.net${character3.emblemBackgroundPath}" />`;
    container3.insertAdjacentHTML('beforeend', emblemH);
    // powerH // 
    const powerH1 = document.querySelector("#hunter");
    const powerH2 = `<p>Hunter Power LVL: ${character3.light}</p>`;
    powerH1.insertAdjacentHTML('beforeend', powerH2);
    // statsH //
    const statsH1 = document.querySelector("#hunter");
    const statsH2 = `<p>Hunter Stats: </p>
    <p>Mobility: ${character3.stats[2996146975]}</p>
    <p>Resilience: ${character3.stats[392767087]}</p>
    <p.Recovery: ${character3.stats[1943323491]}</p>
    <p>Discpline: ${character3.stats[1735777505]}</p>
    <p>Intellect: ${character3.stats[144602215]}</p>
    <p>Strength: ${character3.stats[4244567218]} </p>`;
    statsH1.insertAdjacentHTML('beforeend', statsH2);
}








// Below here is how to do stats
// const container4 = document.querySelector("#body"); 
// const snippet4 = `<p>Intellect ${character3.stats[144602215]}</p>`;
// container4.insertAdjacentHTML('beforeend' , snippet4) 






// async function showCharacter1() {
//     const response = await fetch(myUrl, headers);
//     const output = await response.json();
//     console.log(output);
//     const data = output.Response.profile.data;
//     console.log(data);
// const snippet = `

//      }


// async function getRandomCharacter() {
//     const response = await fetch(galUrl, headers);
//     const output = await response.json();
//     // console.log(output);
//     const data = output.Response.data;
//     const container = document.querySelector("#container");
//     const snippet = `
//         <h2>${data.inventoryItem.itemName}</h2>
//         <p>${data.inventoryItem.itemDescription}</p>
//         <img src="https://www.bungie.net${data.inventoryItem.icon}" />
//     `;
//     container.insertAdjacentHTML("beforeend", snippet);
// }


// actually run the codes:
// getRandomCharacter();
// getMemberships();
getUser();
// getSettings();
getInventory();
// showCharacter1();
// getItem();

