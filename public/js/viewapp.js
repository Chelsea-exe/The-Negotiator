$(document).ready(function(event) {

    var url = window.location.search;
  
  if (url.indexOf("?id=") !== -1) {
    id = url.split("=")[1];
    getid(id);
  }
  });

  function getid(id){
      $.get("/api/applications/"+id, data =>{
          console.log(data)
          var furnished;
          if(data.furnished){
            furnished = "yes";
          } else {
              furnished = "no";
          }

          var accidents; 
          if(data.recent_accidents){
              accidents = "yes";
          } else {
              accidents = "no"
          }

          var newDiv = "<div class='boxForm'><h3>Car Dealership Insurance Form</h3><br><br>"+
                        "<div class='personalInfo'><h4 style='text-align:center;'>Personal Information</h4><hr><h4>Business Name: "+data.dealer.business_name+"</h4><br>Business Owner:"+
                        data.dealer.owner+"<br><br>Address: "+data.dealer.address+", "+ data.dealer.state+", "+data.dealer.zip+"<br> Additional Addresses:"+data.additional_addresses+
                        "<br><br>Years in Industry: "+data.years_inBusiness+"<br>Dealership Years: "+ data.businessOpen_years+"<br>Phone Number: "+data.dealer.phone_number+ "<br>Email:"+data.dealer.email+
                        "<br>"+
                        "</div>"+
                        "<br><br><div class='businessInfo'><h4 style='text-align:center;'>Business Information</h4><hr><br>"+
                        "Previous Insurance Company: "+data.previous_insuranceName+"<br>"+
                        "Years with Previous Insurance Company: "+data.previous_insuranceYears+"<br>"+
                        "Previous claims: "+data.previous_insuranceClaims+"<br>"+
                        "Nature of Business"+ data.business_nature+
                        
                        "</div>"+
                        "<br><br><div class='employeeInfo'><h4 style='text-align:center;'>Employee Information</h4><hr><br>"+
                        "Owner Name: "+data.dealer.owner+"<br><br>"+
                        "Date of Birth: "+data.dob_employees+"<br>"+
                        "Driver's License No.: "+data.drivers_license+"<br>"+
                        "Furnished: "+furnished+"<br>"+
                        "Accidents in Past 3 Years: "+accidents+"<br>"+
                        "No. Employees: "+data.num_employees+"<br>"+
                        "</div>"+
                        "<br><br><div class='insuranceInfo'><h4 style='text-align:center;'>Insurance Information</h4><hr><br>"+
                        "Quote Request: "+data.insurance_type+"<br>"+
                        "Mileage Cars Driven: "+data.miles_driven+"<br>"+
                        "No. of Plates: "+data.num_plates+"<br>"+
                        "No. of Cars on the Lot: "+data.num_lotCars+"<br>"+
                        "Worth of Lot:" +data.lot_worth+"<br>"+
                        "Description Lot Protection: "+data.lot_protection+
                        "<hr></div>"
    
        $(".appBody").append(newDiv)
        
      })
  }