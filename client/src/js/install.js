const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  const installPrompt = document.getElementById('install-prompt');
  installPrompt.style.display = 'block';
  const installButton = document.getElementById('install-button');
  installButton.addEventListener('click', () => {
    installPrompt.style.display = 'none';
    event.prompt();
    event.userChoice.then((choiceResult) => {
      console.log(choiceResult.outcome);
    });
  });
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  if (window.deferredPrompt) {
    const installPrompt = document.getElementById('install-prompt');
    installPrompt.style.display = 'block';
  }
});

// Add a handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('The app was successfully installed');
});