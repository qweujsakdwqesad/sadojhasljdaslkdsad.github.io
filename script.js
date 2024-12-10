// from this code please add a check with a shared variable when on window load show a confirm thing saying Has jon allowed you to be on this at this time? and if they press yes and i havent confirmed say alert('he has not confirmed you liar') then reload the page if i did confirm so if the user is jon and he presses yes the shared variable gets changed to true and it resets when jon closes his tab

window.onload = async function() {
    const name = localStorage.getItem("username");
    const password = localStorage.getItem("password");
    if (!name || !password) {
      alert("Hey! No bypassing security! 😡");
      document.body.innerHTML = `<h1>nu uh bad boy!</h1><p>You have been denied access to this page.</p>`;
      return;
    }
    // Send the credentials to the server for validation
    try {
      const response = await fetch('https://qweujsakdwqesad.github.io/name.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const validPasswords = await response.json();
      if (name == "liam") { // Check for Liam specifically
        alert("the site is going under maintenance for you user to prevent from removing all of your progress do not log back on until the person who owns this site tells you the migration is complete.");
        document.body.innerHTML = `<h1>nu uh bad boy!</h1><p>You have been denied access to this page.</p>`;

      } else if (validPasswords[name] !== password) {
        alert("Hey! No bypassing security! 😡");
        document.body.innerHTML = `<h1>nu uh bad boy!</h1><p>You have been denied access to this page.</p>`;
      } else {
        alert(`Welcome, ${name}! You have successfully accessed the protected page.`);
        // You can display the content of your Website.html here
        // Now call the access check
     // Make sure accessCheck is done before showing the button
        // Add the button only after access check
        // NO BUTTON
        // ... Rest of your content... 
      }
    } catch (error) {
      console.error("Error loading name.json:", error);
      alert("Error loading credentials. Please try again later.");
      document.body.innerHTML = `<h1>Error</h1><p>There was an error loading the security check. Please try again later.</p>`;
    }
  }