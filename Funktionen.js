        //Zum berechnen vom BMI
        function berechneBMI() {
            const groesse = parseFloat(document.getElementById("groesse").value) / 100;
            const gewicht = parseFloat(document.getElementById("gewicht").value);
        
            const bmi = gewicht / (groesse * groesse);
        
            const ergebnisElement = document.getElementById("bmi-ergebnis");
        
            ergebnisElement.textContent = `Dein BMI ist: ${bmi.toFixed(2)}`;
        
            if (bmi < 19 || bmi > 25) {
                ergebnisElement.style.color = "red";
            } else {
                ergebnisElement.style.color = "green";
            }
        }
        
        // Funktion um Körpertyp herauszufinden
        function handleSubmit(event) {
            event.preventDefault();

            var bodyBuild = document.querySelector('input[name="bodyBuild"]:checked').value;
            var weightGain = document.querySelector('input[name="weightGain"]:checked').value;
            var exercise = document.querySelector('input[name="exercise"]:checked').value;
            var posture = document.querySelector('input[name="posture"]:checked').value;
            var metabolism = document.querySelector('input[name="metabolism"]:checked').value;
            var muscleMass = document.querySelector('input[name="muscleMass"]:checked').value;

            var result = "";

            // Bestimmung des Körpertyps basierend auf den Antworten
            if (bodyBuild === "ektomorph" && weightGain === "hard" && metabolism === "fast") {
                result = "Du bist wahrscheinlich ein Ektomorph.";
            } else if (bodyBuild === "mesomorph" && exercise === "intense" && muscleMass === "high") {
                result = "Du bist wahrscheinlich ein Mesomorph.";
            } else if (bodyBuild === "endomorph" && weightGain === "easy" && metabolism === "slow") {
                result = "Du bist wahrscheinlich ein Endomorph.";
            } else if (bodyBuild === "ektomorph" && weightGain === "average") {
                result = "Du bist wahrscheinlich ein Ektomesomorph.";
            } else if (bodyBuild === "mesomorph" && weightGain === "easy") {
                result = "Du bist wahrscheinlich ein Mesoendomorph.";
            } else if (bodyBuild === "ektomorph" && exercise === "none") {
                result = "Du bist wahrscheinlich ein Ektodendomorph.";
            } else {
                result = "Dein Körpertyp ist nicht klar definierbar. Vielleicht hast du Eigenschaften mehrerer Typen.";
            }

            document.getElementById("result").innerText = result;
            document.getElementById("result").style.display = "block";
        };

        
        //Script um die anderen Containers zu Hiden (ForntBody- und BackBodyPicture)
        function hideAllContainers() {
            const containers = [
                'Bizeps-container',
                'Front-Schulders-container',
                'Traps-container',
                'Forearms-container',
                'Hands-container',
                'Obliquus-container',
                'Thighs-container',
                'Calves-container',
                'Abdominals-container',
                'Chest-container',
                'Hands-container',
                'Triceps-container',
                'Back-Shoulders-container',
                'Lats-container',
                'Hamstring-container',
                'Calves-container',
                'Traps-Middel-container',
                'Lower-Back-container',
                'Glutes-container'
            ];

            // Alle Container ausblenden mit none
            containers.forEach(containerId => {
                document.getElementById(containerId).style.display = 'none';
            });
        }

        // FrontBodyPicture
        // Script zum Anzeigen des jeweiligen Containers
        function showBizepsInfo() {
            hideAllContainers();
            document.getElementById('Bizeps-container').style.display = 'block';
        }

        function showfrontschuldersInfo() {
            hideAllContainers();
            document.getElementById('Front-Schulders-container').style.display = 'block';
        }

        function showObliquusInfo() {
            hideAllContainers();
            document.getElementById('Obliquus-container').style.display = 'block';
        }

        function showThighsInfo() {
            hideAllContainers();
            document.getElementById('Thighs-container').style.display = 'block';
        }

        function showAbdominalsInfo() {
            hideAllContainers();
            document.getElementById('Abdominals-container').style.display = 'block';
        }

        function showChestInfo() {
            hideAllContainers();
            document.getElementById('Chest-container').style.display = 'block';
        }

        // BackBodyPicture
        // Script zum Anzeigen des jeweiligen Containers
        function showTricepsInfo() {
            hideAllContainers();
            document.getElementById('Triceps-container').style.display = 'block';
        }

        function showBackShouldersInfo() {
            hideAllContainers();
            document.getElementById('Back-Shoulders-container').style.display = 'block';
        }

        function showLatsInfo() {
            hideAllContainers();
            document.getElementById('Lats-container').style.display = 'block';
        }

        function showHamstringInfo() {
            hideAllContainers();
            document.getElementById('Hamstring-container').style.display = 'block';
        }

        function showTrapsMiddelInfo() {
            hideAllContainers();
            document.getElementById('Traps-Middel-container').style.display = 'block';
        }

        function showLowerBackInfo() {
            hideAllContainers();
            document.getElementById('Lower-Back-container').style.display = 'block';
        }

        function showGlutesInfo() {
            hideAllContainers();
            document.getElementById('Glutes-container').style.display = 'block';
        }

        // Beide Picture
        // Script zum Anzeigen des jeweiligen Containers
        function showHandsInfo() {
            hideAllContainers();
            document.getElementById('Hands-container').style.display = 'block';
        }

        function showForearmsInfo() {
            hideAllContainers();
            document.getElementById('Forearms-container').style.display = 'block';
        }

        function showTrapsInfo() {
            hideAllContainers();
            document.getElementById('Traps-container').style.display = 'block';
        }

        function showCalvesInfo() {
            hideAllContainers();
            document.getElementById('Calves-container').style.display = 'block';
        }



        // Validiert Formular-Eingaben und leitet weiter
        document.addEventListener("DOMContentLoaded", function() {
            const form = document.getElementById("fitnessForm");
        
            // Nur Buchstaben und Leerzeichen erlauben
            function allowOnlyLetters(event) {
                const regex = /^[A-Za-zÄÖÜäöüß\s]*$/;
                if (!regex.test(event.key)) {
                    event.preventDefault();
                }
            }
        
            // Nur Ziffern erlauben
            function allowOnlyNumbers(event) {
                const regex = /^[0-9]*$/;
                if (!regex.test(event.key)) {
                    event.preventDefault();
                }
            }
        
            // E-Mail-Formatierung prüfen
            function validateEmailInput(event) {
                const emailField = event.target;
                if (!emailField.value.includes("@") || !emailField.value.includes(".")) {
                    emailField.setCustomValidity("Bitte geben Sie eine gültige E-Mail-Adresse ein (z. B. beispiel@domain.com)");
                } else {
                    emailField.setCustomValidity("");
                }
            }
        
            // Event-Listener für Eingabefelder hinzufügen
            document.getElementById("vorname").addEventListener("keypress", allowOnlyLetters);
            document.getElementById("nachname").addEventListener("keypress", allowOnlyLetters);
            document.getElementById("strasse").addEventListener("keypress", allowOnlyLetters);
            document.getElementById("ort").addEventListener("keypress", allowOnlyLetters);
            document.getElementById("hausnummer").addEventListener("keypress", allowOnlyNumbers);
            document.getElementById("plz").addEventListener("keypress", allowOnlyNumbers);
            document.getElementById("email").addEventListener("input", validateEmailInput);
        
            // Überprüft Formularfelder und leitet bei erfolgreicher Prüfung weiter
            document.getElementById("Formular-submit").addEventListener("click", function(event) {
                event.preventDefault();
        
                if (form.checkValidity()) {
                    // Weiterleitung auf die Danke-Seite, falls das Formular gültig ist
                    window.location.href = "Danke.html";
                } else {
                    // Fehler, falls das Formular ungültig ist
                    form.reportValidity();
                }
            });
        });
        