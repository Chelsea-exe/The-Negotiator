$(document).ready(function(event) {

  var url = window.location.search;
console.log(url)
console.log(window.location.href)

if (url.indexOf("?id=") !== -1) {
  id = url.split("=")[1];
  console.log(id)
  getid(id);
}
});

function getid(id) {
$.get("/api/contact/" + id, data =>  {
    console.log(data)
    var location = (data.state + ' , ' + data.zip)
    $('#fullName').html(data.owner)
    $('#busninessName').html(data.business_name)
    $('#typeOfBusiness').html(data.agent)
    $('#businessLocation').html(location)
    $('#email').html(data.email)
    $('#phoneNumber').html(data.phone_number)
   })
  }
 

// Applications: []
// User: null
// UserId: null
// address: "3213 East Point Street"
// agent: "Agent"
// business_name: "1991"
// createdAt: "2019-12-10T22:11:14.000Z"
// email: "dmmartens91@gmail.com"
// id: 1
// owner: "Devon M Martens"
// phone_number: "6786774416"
// state: "GEORGIA"
// updatedAt: "2019-12-10T22:11:14.000Z"
// zip: 30344
// __proto__: Object