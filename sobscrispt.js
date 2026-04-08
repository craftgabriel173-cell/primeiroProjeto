const nigth2 = document.getElementById('nigth2');

  let corP = '#35446d';
  let corS = '#1e3651';
  let mod2 = false;

nigth2.addEventListener("click", () => {

if (mod2 === false ) {
    document.body.style.backgroundColor = corS;
    mod2 = true;
}
else {
  document.body.style.backgroundColor = corP;
  mod2 = false;
}})