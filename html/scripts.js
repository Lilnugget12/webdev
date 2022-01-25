function ValidateEmail(text) 
{
	var re = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
 if (text.value.match(re))
  {
    return (true)
  }
  else
    alert("Veuiller entrer une adresse email valide ");
    return (false)
}

