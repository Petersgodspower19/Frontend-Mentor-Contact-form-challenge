let form = document.querySelector("form");
        let firstNameInput = document.getElementById("first-name");
        let firstnameError = document.getElementById("firstnameError");
        let lastNameInput = document.getElementById("last-name");
        let lastnameError = document.getElementById("lastnameError");
        let emailInput = document.getElementById("email");
        let emailError = document.getElementById("emailError");
        let textArea = document.getElementById("message");
        let textAreaError = document.getElementById("text-error");
        let checkBox = document.getElementById("consent");
        let checkBoxError = document.getElementById("consentError");
        let radios = Array.from(document.getElementsByName("query-type"));
        let radioError = document.getElementById("radioError");

        form.addEventListener("submit", function(event) {
            event.preventDefault();

            checkInputs();
            checkBoxFunction();
            checkRadios();
        });

        function checkInputs() {
            showError(firstNameInput, firstnameError);
            showError(lastNameInput, lastnameError);
            showError(emailInput, emailError);
            showError(textArea, textAreaError);
        }

        function showError(inputElement, errorElement) {
            if (inputElement.value.trim() === "") {
                errorElement.style.display = "block";
                inputElement.classList.add("error");
            } else {
                errorElement.style.display = "none";
                inputElement.classList.remove("error");
            }
        }

        function checkBoxFunction() {
            if (!checkBox.checked) {
                checkBoxError.style.display = "block";
            } else {
                checkBoxError.style.display = "none";
            }
        }

        function checkRadios() {
            let selected = radios.some(radio => radio.checked);
            if (!selected) {
                radioError.style.display = "block";
            } else {
                radioError.style.display = "none";
            }
        }