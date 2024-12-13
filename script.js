  // Optional: Add some interactivity to details/summary if needed
  document.querySelector('details').addEventListener('mouseover', function () {
    console.log(this.open ? 'Opened' : 'Closed');
  });