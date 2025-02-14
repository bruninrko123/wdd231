


//doing the home card


import { displayRandomCard } from "./functions.js";

displayRandomCard();




if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
   
   let time =  new Date()
    console.log('The page was refreshed or reloaded at');
    console.log(time);

  } else {
    console.log('The page was not refreshed or reloaded.');
  }







  // membership time

import { saveSubscriptionTime, calculateMembershipTime } from "./functions.js";




calculateMembershipTime();