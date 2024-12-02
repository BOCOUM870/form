document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
  
    // Get the form fields
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const position = document.getElementById('position').value;
    const resume = document.getElementById('resume').files[0];
  
    // Validate required fields
    if (!fullName || !email || !phone || !address || !position || !resume) {
      alert('Please fill in all fields and upload your resume.');
      return;
    }
  
    // Simulate form submission (you can send data to a server here)
    alert(`Application Submitted!\n\nName: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nPosition: ${position}\nResume: ${resume.name}`);
    
    // Reset the form after submission
    document.getElementById('applicationForm').reset();
  });
  