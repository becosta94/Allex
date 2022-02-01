function showPopup() {
  let popup = document.getElementById("popup");
  popup.style.visibility = "visible";
}

function closePopup() {
  let popup = document.getElementById("popup");
  popup.style.visibility = "hidden";
}

function showButton() {
  let button = document.getElementById("pj");
  if ($("#tipo_pessoa option:selected").val() === "pj") {
    button.style.visibility = "visible";
  } else {
    button.style.visibility = "hidden";
  }
}

function showHourSegunda() {
  let show = document.getElementsByClassName("fSegunda");
  let hide = document.getElementsByClassName("aSegunda");
  for (i = 0; i < show.length; i++) {
    show[i].style.visibility = show[i].classList.toggle("hidden");
  }
  for (i = 0; i < hide.length; i++) {
    hide[i].style.visibility = hide[i].classList.toggle("hidden");
  }
}

function showHourTerca() {
  let show = document.getElementsByClassName("fTerca");
  let hide = document.getElementsByClassName("aTerca");
  for (i = 0; i < show.length; i++) {
    show[i].style.visibility = show[i].classList.toggle("hidden");
  }
  for (i = 0; i < hide.length; i++) {
    hide[i].style.visibility = hide[i].classList.toggle("hidden");
  }
}

function showHourQuarta() {
  let show = document.getElementsByClassName("fQuarta");
  let hide = document.getElementsByClassName("aQuarta");
  for (i = 0; i < show.length; i++) {
    show[i].style.visibility = show[i].classList.toggle("hidden");
  }
  for (i = 0; i < hide.length; i++) {
    hide[i].style.visibility = hide[i].classList.toggle("hidden");
  }
}

function showHourQuinta() {
  let show = document.getElementsByClassName("fQuinta");
  let hide = document.getElementsByClassName("aQuinta");
  for (i = 0; i < show.length; i++) {
    show[i].style.visibility = show[i].classList.toggle("hidden");
  }
  for (i = 0; i < hide.length; i++) {
    hide[i].style.visibility = hide[i].classList.toggle("hidden");
  }
}

function showHourSexta() {
  let show = document.getElementsByClassName("fSexta");
  let hide = document.getElementsByClassName("aSexta");
  for (i = 0; i < show.length; i++) {
    show[i].style.visibility = show[i].classList.toggle("hidden");
  }
  for (i = 0; i < hide.length; i++) {
    hide[i].style.visibility = hide[i].classList.toggle("hidden");
  }
}

function showHourSabado() {
  let show = document.getElementsByClassName("fSabado");
  let hide = document.getElementsByClassName("aSabado");
  for (i = 0; i < show.length; i++) {
    show[i].style.visibility = show[i].classList.toggle("hidden");
  }
  for (i = 0; i < hide.length; i++) {
    hide[i].style.visibility = hide[i].classList.toggle("hidden");
  }
}

function showHourDomingo() {
  let show = document.getElementsByClassName("fDomingo");
  let hide = document.getElementsByClassName("aDomingo");
  for (i = 0; i < show.length; i++) {
    show[i].style.visibility = show[i].classList.toggle("hidden");
  }
  for (i = 0; i < hide.length; i++) {
    hide[i].style.visibility = hide[i].classList.toggle("hidden");
  }
}
