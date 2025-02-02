const span = document.querySelector("#lastModified");



const lastModified = document.lastModified;


// span.textContent = lastModified;

span.innerHTML = `<strong> ${lastModified} </strong>`;





// getting the data from the form

const currentUrl = window.location.href;


const everything = currentUrl.split("?");


const formData = everything[1].split("&");

console.log(formData);

function show(cup){

    formData.forEach((element) => {
        
        if(element.startsWith(cup)){
            result = element.split("=")[1].replace("%40", "@").replace(/\+/g, " ");
        }

       
    })

    return result;
}



    const encondedTime = formData[8].split("=")[1];

    const decodedTime = decodeURIComponent(encondedTime);

    
    



const results = document.querySelector("#results");

results.innerHTML = `
<p>Applicant: ${show("first")} ${show("last")} </p>
<p>Organizational title: ${show("organizationalTitle")}</p>
<p>email: <a href = "mailto:${show("email")}">${show("email")}</a></p>
<p>Telephone number: ${show("telephone")}</p>
<p>Organization name: ${show("organizationName")}</p>
<p>Membership Level: ${show("membership")} </p>
<p>Organization Description: ${show("description")} </p>
<p>Applied on:  ${decodedTime.replace(/\+/g, " ")}</p>
`;""