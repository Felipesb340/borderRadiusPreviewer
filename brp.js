function testar() {
  var estilo = window.document.getElementById("user").value
  var teste = window.document.getElementById("teste")
  teste.style.borderRadius = estilo
  var copyText = document.getElementById("myInput");
  copyText.value = `border-radius: ${estilo};`
}



function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("myInput");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);

  /* Alert the copied text */
  alert('Texto copiado :' + copyText.value+ ';');
}