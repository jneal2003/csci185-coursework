let isOn = false;
function turnOnOff() {
    // target img then change src to bulb_on.gif
    if (isOn === false) {
    document.querySelector("#my_image").src = "bulb_on.gif";
    isOn=true;
    console.log(isOn);
    } else {
        document.querySelector("#my_image").src = "bulb_off.gif";
        isOn=false;
    console.log(isOn);

    }
}
