window.onload = function () {
    const carquery = new CarQuery();
  
    carquery.init();
    carquery.setFilters({ sold_in_us: true });
  
    // Esto conecta los 3 selects
    carquery.initYearMakeModelTrim('car-year', 'car-make', 'car-model');
  
    // Cuando el usuario elige modelo, puedes capturar más info
    document.getElementById('car-model').addEventListener('change', function () {
      const year = document.getElementById('car-year').value;
      const make = document.getElementById('car-make').value;
      const model = document.getElementById('car-model').value;
  
      if (year && make && model) {
        carquery.getTrims(year, make, model, function (trims) {
          console.log("Detalles del modelo:", trims);
          // Aquí puedes llenar campos ocultos si quieres enviar más data al backend
        });
      }
    });
  };
  