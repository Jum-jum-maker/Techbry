let open = document.querySelector('.open')
let sidebar = document.querySelector('.navbar-links')
let close = document.querySelector('.close')

open.addEventListener('click', () => {
  sidebar.classList.add('show')
})

close.addEventListener('click', () => {
  sidebar.classList.remove('show')
})