const clockFace = document.querySelector('.clock-face');

    // Dynamically place numbers on the clock face
    function placeNumbers() {
      const radius = 100; // Clock radius
      for (let num = 1; num <= 12; num++) {
        const angle = (num * 30) * (Math.PI / 180); // Convert degrees to radians
        const x = radius + radius * 0.85 * Math.sin(angle); // X-coordinate
        const y = radius - radius * 0.85 * Math.cos(angle); // Y-coordinate

        const numberEl = document.createElement('div');
        numberEl.classList.add('number');
        numberEl.style.left = `${x}px`;
        numberEl.style.top = `${y}px`;
        numberEl.textContent = num;
        clockFace.appendChild(numberEl);
      }
    }

    // Clock hands movement
    const secondHand = document.querySelector('.second-hand');
    const minsHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');

    function setDate() {
      const now = new Date();

      const seconds = now.getSeconds();
      const secondsDegrees = ((seconds / 60) * 360) + 90;
      secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

      const mins = now.getMinutes();
      const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
      minsHand.style.transform = `rotate(${minsDegrees}deg)`;

      const hour = now.getHours();
      const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
      hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    }

    placeNumbers(); // Place the clock numbers
    setInterval(setDate, 1000);
    setDate();