console.log("loaded signup");
const loader = `    <div class="preloader-wrapper big active center" style="margin-top: 2rem;">
      <div class="spinner-layer spinner-blue">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div><div class="gap-patch">
          <div class="circle"></div>
        </div><div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>

      <div class="spinner-layer spinner-red">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div><div class="gap-patch">
          <div class="circle"></div>
        </div><div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>

      <div class="spinner-layer spinner-yellow">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div><div class="gap-patch">
          <div class="circle"></div>
        </div><div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>

      <div class="spinner-layer spinner-green">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div><div class="gap-patch">
          <div class="circle"></div>
        </div><div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
    </div>
        `

const updateUserInfo = async (event) => {
  event.preventDefault();
  const id = event.target.getAttribute('user-id');
  console.log(id);
  //console.log("You clicked me!");
  $('#user-update').empty().append(`<h1 class="info-heading">User Info</h1>`).append(loader);

  const first_name = $('#first_name').val();
  //console.log(first_name);

  const last_name = $('#last_name').val();
  //console.log(last_name);

  const phone = $('#phone').val();
  //console.log(phone);

  const address = $('#address').val();
  //console.log(address);
  const response = await fetch(`/api/v1/user/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ first_name, last_name, phone, address }),
    headers: { 'Content-Type': 'application/json' },
  });
  console.log(response);

  if (response.ok) {
    //   document.location.replace('/profile');
    $('#user-update').empty().append('Successfully updated!');
  } else {
    alert("Test" + response.statusText);
  }
}

const updateCarInfo = async (event) => {
  event.preventDefault();
  const id = event.target.getAttribute('user-id');
  //console.log(car_make);
  $('#car-update').empty().append(`<h1 class="info-heading">Car Info</h1>`).append(loader);

  const car_make = $('#make').val();
  const car_model = $('#model').val();
  //console.log(car_model);

  const year = $('#year').val();
  const car_year = parseInt(year);
  //console.log(car_year);

  console.log(id);

  const response = await fetch(`/api/v1/user/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ car_make, car_model, car_year }),
    headers: { 'Content-Type': 'application/json' },
  });
  console.log(response.ok)
  if (response.ok) {
    $('#car-update').empty().append('Successfully updated!');
  } else {
    alert("Test" + response.statusText);
  }
}

window.onload = function () {
  console.log("loaded function signup");
  document
    .querySelector("#update")
    .addEventListener("click", updateUserInfo);

  document
    .querySelector("#update-car")
    .addEventListener("click", updateCarInfo);
}

