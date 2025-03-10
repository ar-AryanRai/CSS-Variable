const inputs = document.querySelectorAll('.controls input');

    function handleChange(){
      let suffix = this.dataset.sizing || "";
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('mousemove', handleChange));