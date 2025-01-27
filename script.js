document.getElementById("akanForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    // Get user input
    const birthdate = document.getElementById("birthdate").value;
    const gender = document.getElementById("gender").value;
  
    if (!birthdate || !gender) {
      alert("Please fill out all fields.");
      return;
    }
  
    // Parse date
    const [year, month, day] = birthdate.split("-").map(Number);
    const century = Math.floor(year / 100);
    const yearDigits = year % 100;
  
    // Calculate day of the week
    const dayOfWeek = Math.round(
      ((century / 4) - 2 * century - 1 + (5 * yearDigits / 4) + (26 * (month + 1) / 10) + day) % 7
    );
  
    // Map day of the week to Akan names
    const akanNames = {
      0: { male: "Kwasi", female: "Akosua" }, // Sunday
      1: { male: "Kwadwo", female: "Adwoa" }, // Monday
      2: { male: "Kwabena", female: "Abenaa" }, // Tuesday
      3: { male: "Kwaku", female: "Akua" }, // Wednesday
      4: { male: "Yaw", female: "Yaa" },     // Thursday
      5: { male: "Kofi", female: "Afua" },   // Friday
      6: { male: "Kwame", female: "Ama" },   // Saturday
    };
  
    const dayName = akanNames[dayOfWeek < 0 ? (dayOfWeek + 7) % 7 : dayOfWeek][gender];
  
    // Display result
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = `You were born on a ${
      ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][dayOfWeek]
    }, and your Akan name is ${dayName}.`;
  });
  