

// DIGITAL CLOCK PROGRAM

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    

    // Convert to 12-hour format
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 0; // Convert '0' hour to '12'
    hours = hours.toString().padStart(2, '0')

    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById('clock').textContent = timeString;
}

updateClock(); // Initial call to display clock immediately
setInterval(updateClock, 1000); // Update every second