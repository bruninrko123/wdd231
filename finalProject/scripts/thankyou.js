






import { showFormResults } from "./functions.js";




const results = document.querySelector("#results");


results.innerHTML = 
`
<p>New member: ${showFormResults("first")} ${showFormResults("last")}</p>
<p>Email: <a href = "mailto:${showFormResults("email")}">${showFormResults("email")}</a></p>
<p>Subscription Level: ${showFormResults("subscription")}</p>

`;






  // membership time

  import { saveSubscriptionTime, calculateMembershipTime } from "./functions.js";




  calculateMembershipTime();