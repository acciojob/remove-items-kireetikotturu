//your JS code here. If required.
    let dropDown = document.getElementById("colorSelect")
  let button = document.getElementsByTagName("input")[0];

  button.addEventListener("click", ()=>{
    dropDown.removeChild(dropDown[0])
  })
