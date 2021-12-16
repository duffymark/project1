
 function displayMenu() {

  const menuAppear = document.getElementById('#buttonMenu');    
  if(menuAppear.style.display === "block") { 
    menuAppear.style.display = "none";
  }
  else { 
    menuAppear.style.display = "block";
  }
}

/* ----------- Email Submit ---------------------*/
 const submitted = document.querySelector('.footerButton');

  function submitEmail() {
                document.getElementById("footerEmail").submitEmail();
            }

 submitted.addEventListener('click', function(){
  console.log("click it");
  return submitEmail();
  });           



/*
const submitted = document.querySelector('.footerButton');

function submitEmailAddress(footerEmail) {
  footerEmail.submit();
};

submitted.addEventListener('click', function(){
  console.log("click it");
  submitEmailAddress();
  });

function submitEmailAddress() {
  document.getElementById("#footerEmail").submitEmail();
}
*/




