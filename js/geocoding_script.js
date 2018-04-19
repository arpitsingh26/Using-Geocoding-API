var address_form = document.getElementById('input_form');
address_form.addEventListener('submit', geocoding);

function geocoding(e){
  e.preventDefault();
  var input_address = document.getElementById('input_address').value;

  axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
    params:{
      address:input_address, 
      key:'AIzaSyB96ZCHp_gAIvmI0QtLaEETpYDz408vbWQ'
    }
  })
  .then(function(response){
    console.log(response);

    var formatted_address = response.data.results["0"].formatted_address;
    var latitude = response.data.results["0"].geometry.location.lat;
    var longitude = response.data.results["0"].geometry.location.lng;

    document.getElementById('address').innerHTML = 'Address: '+formatted_address;
    document.getElementById('latitude').innerHTML = 'Latitude: '+latitude;
    document.getElementById('longitude').innerHTML = 'Longitude: '+longitude;
  })
  .catch(function(error){
    console.log(error);
  });
}
