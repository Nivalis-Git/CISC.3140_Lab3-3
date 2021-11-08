button_validatePass.onclick = function()
{
	var psw = document.getElementById("password").value;
	var mask_psw = /.{3,5}-.{3,5}-.{3,5}/;
	let valid = mask_psw.test(psw);
	
	var div_valid = document.getElementById("password_valid");
	var div_invalid = document.getElementById("password_invalid");
	
	switch (valid)
	{
		case true:
			if (div_valid.classList.contains("hidden"))
			{
				if (!div_invalid.classList.contains("hidden"))
					div_invalid.classList.toggle("hidden");
				div_valid.classList.toggle("hidden");
			}
			break;
		
		case false:
			if (div_invalid.classList.contains("hidden"))
			{
				if (!div_valid.classList.contains("hidden"))
					div_valid.classList.toggle("hidden");
				div_invalid.classList.toggle("hidden");
			}
			break;
		
		default:
			break;
	}
}
