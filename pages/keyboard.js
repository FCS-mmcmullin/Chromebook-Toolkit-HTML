parent.addEventListener("keydown", onKeyDown)
parent.addEventListener("keyup", onKeyUp)
document.addEventListener("keydown", onKeyDown)
document.addEventListener("keyup", onKeyUp)
window.addEventListener("unload", onUnload)

function onKeyDown(event)
{
    if(!event.repeat)
    {
        keyDiv = document.getElementById("key"+event.code)
        if(keyDiv)
        {
            keyDiv.classList.add("pressed")
            event.preventDefault();
        }
    }
}

function onKeyUp(event)
{
    keyDiv = document.getElementById("key"+event.code)
    if(keyDiv)
    {
        keyDiv.classList.remove("pressed");
        keyDiv.classList.add("released")
    }
}

function onUnload(event)
{
    parent.removeEventListener("keydown", onKeyDown);
    parent.removeEventListener("keyup", onKeyUp)
}
