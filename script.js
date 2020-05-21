// variables
  // form
    var buttonGenera = document.getElementById('form-calcola');
    var buttonAnnulla = document.getElementById('form-annulla');
    var formNome = document.getElementById('form-nome');
    var formKm = document.getElementById('form-km');
    var formEta = document.getElementById('form-eta');
  // ticket
    var sectionTicket = document.getElementById('ticket')
    var nomeTicket = document.getElementById('nome-ticket');
    var nomeOfferta = document.getElementById('offerta-ticket');
    var carrozza = document.getElementById('carrozza-ticket');
    var codice = document.getElementById('codicecp-ticket');
    var costo = document.getElementById('costo-ticket');
  // general variables
  var formKmValue;
  var formEtaValue;

// events
  buttonGenera.addEventListener("click",
    function () {
      formKmValue = formKm.value;
      formEtaValue = formEta.value;
      formNome.innerHTML = formNome.value;
      // calc price
      var prezzo = formKmValue * 0.21;
      var offerta = "Prezzo intero";
      // calc sales
      if( formEtaValue == "under"){
        prezzo = prezzo - ( prezzo * 20 / 100);
        offerta = "Sconto Under 18";
      } else if (formEtaValue == "over"){
        prezzo = prezzo - ( prezzo * 40 / 100);
        offerta = "Sconto Over 65";
      }
      // print on html
      nomeTicket.innerHTML = formNome.value;
      nomeOfferta.innerHTML = offerta;
      carrozza.innerHTML = Math.floor(Math.random() * 10) +1;
      codice.innerHTML = Math.random()+1;
      costo.innerHTML = prezzo.toFixed(2) + " €";

      // Show ticket
      sectionTicket.className = sectionTicket.classList + "ms_visible";
    }
  );

  buttonAnnulla.addEventListener("click",
    function () {
      // delete name
      formNome.value = "";
      nomeTicket.innerHTML = "";
      // delete km
      formKm.value = "";
      // delete age
      formEta.value = "intero";
      // delete offer
      nomeOfferta.innerHTML = "";
      // hide ticket
      sectionTicket.classList.add("ms_hidden");
    }
  );
