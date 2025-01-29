const currentUrl = window.location.href;



// divide de url in haf

const everything = currentUrl.split("?");


// grab the second half and break the form name value pairs into an array

let formData = everything[1].split("&");




function show(cup){
    
    formData.forEach((element) => {
        
        if(element.startsWith(cup)){
            result = element.split("=")[1].replace("%40", "@").replace(/\+/g, " ");
            

        } //end if
    })

    return result;
} // end show




// displaying the data

const showInfo = document.querySelector("#results");
showInfo.innerHTML = `
<p>Appointment for: ${show("first")} ${show("last")}</p>
<p>Proxy ${show("ordinance")} on ${show("fecha")} in the ${show("location")}</p>
<p>Your Phone: ${show("phone")}</p>
<p>Your Email: <a href = "mailto:${show("email")}">${show("email")}</a></p>

`;

show("phone");