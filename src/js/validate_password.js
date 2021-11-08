/* 
 * Event handler for the password-submission button.
 * Determines validity of the password and toggles appropriate response-text.
 */
button_validatePass.onclick = function()
{
	// I. Test password against input mask and set validity flag
		var psw = document.getElementById("password").value;
		var mask_psw = /.{3,5}-.{3,5}-.{3,5}/;
		let valid = mask_psw.test(psw);
	
	// II. Toggle appropriate response-text
		// i. Obtain the div elements
		var div_valid = document.getElementById("password_valid");
		var div_invalid = document.getElementById("password_invalid");
		
		// ii. Toggle control-area
		switch (valid)
		{
			case true:    // Comments for this case apply to all other cases
				if (div_valid.classList.contains("hidden"))    // Only toggle if the text is still hidden
				{
					if (!div_invalid.classList.contains("hidden"))    // Hide the other text if still present
						div_invalid.classList.toggle("hidden");
					div_valid.classList.toggle("hidden");    // Unhide response-text
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
