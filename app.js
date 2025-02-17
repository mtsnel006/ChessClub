window.addEventListener('load', e => {
    new PWAConfApp();
    registerSW(); 
  });

  async function registerSW() { 
    if ('serviceWorker' in navigator) { 
      try {
        await navigator.serviceWorker.register('./sw.js'); 
      } catch (e) {
        alert('ServiceWorker registration failed. Sorry about that.'); 
      }
    } else {
      document.querySelector('.alert').removeAttribute('hidden'); 
    }
  }

// could we ever have a an else if in this function/
