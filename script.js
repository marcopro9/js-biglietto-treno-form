// variables
  // form
    var formNome = document.getElementById('form-nome');
    var formKm = document.getElementById('form-km');
    var formEta = document.getElementById('form-eta');
  // buttons
    var buttonGenera = document.getElementById('form-calcola');
    var buttonAnnulla = document.getElementById('form-annulla');
  // error
    var errore = document.getElementById('form-errore');
  // ticket
    var sectionTicket = document.getElementById('ticket');
    var nomeTicket = document.getElementById('nome-ticket');
    var nomeOfferta = document.getElementById('offerta-ticket');
    var carrozza = document.getElementById('carrozza-ticket');
    var codice = document.getElementById('codicecp-ticket');
    var costo = document.getElementById('costo-ticket');

// events
  buttonGenera.addEventListener("click",
    function (){
      // variables to calc costs
        var km = parseInt(formKm.value);
        var eta = formEta.value;
        var nome = formNome.value;
      // condition error
      if (nome.length == 0 || isNaN(km)){
        errore.className = "ms_visible";
        sectionTicket.classList.add("ms_hidden");        
      } else {
          // hide error
            errore.className = "ms_hidden";
          // variables price
            var prezzo = km * 0.21;
            var offerta = "Prezzo intero";
        }
        // calc sales
        if (eta == "under"){
          prezzo = prezzo - (prezzo * 20 / 100);
          offerta = "Sconto Under 18";
        } else if (eta == "over"){
            prezzo = prezzo - (prezzo * 40 / 100);
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
      // delete ticket on error
        errore.className = "ms_hidden";
      // delete name
        formNome.value = "";
        nomeTicket.innerHTML = "";
      // delete km
        formKm.value = "";
      // reset age
        formEta.value = "intero";
      // delete offer
        nomeOfferta.innerHTML = "";
      // hide ticket
        sectionTicket.classList.add("ms_hidden");
    }
  );
