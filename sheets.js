const scriptURL = 'https://script.google.com/macros/s/AKfycbzgiOmkrUn6wI24HFzwAHuJKS7WvRJx67dWp08yj1jG4Ypr5UYOInZBWQ1W2NmLP8eG/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Gracias. Se ha enviado correctamente" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})