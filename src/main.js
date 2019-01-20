document.addEventListener('DOMContentLoaded', () => {
  'use strict'

  const open = document.querySelector('.page-btn-open')
  const close = document.querySelector('.page-btn-close')
  const nav = document.querySelector('.page-nav')

  open.addEventListener('click', () => {
    open.classList.add('open')
    close.classList.add('open')
    nav.classList.add('open')
  })
  close.addEventListener('click', () => {
    open.classList.remove('open')
    close.classList.remove('open')
    nav.classList.remove('open')
  })

})