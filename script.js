let menu = document.querySelector('#menu')
let aside = document.querySelector('#aside')
let logoMenu = document.querySelector('#hiddenIcon')
let search = document.querySelector('#search')
let ulMenu = document.querySelector('#ulMenu')
let pngFooter = document.querySelector('#pngFooter')
let textFooter = document.querySelector('#textFooter')
let widthAsideFooter = document.querySelector('#asideFooter')

let menuList1 = document.querySelector('.menuList1')
let menuList2 = document.querySelector('.menuList2')
let menuList3 = document.querySelector('.menuList3')
let menuList4 = document.querySelector('.menuList4')
let menuList5 = document.querySelector('.menuList5')


menu.addEventListener('click', function () {
  aside.classList.toggle('closeMenu')
  logoMenu.classList.toggle('hiddenIcon')
  search.classList.toggle('hiddenSearch')
  ulMenu.classList.toggle('hiddenUl')
  pngFooter.classList.toggle('hiddenAsideFooter')
  textFooter.classList.toggle('hiddenAsideFooter')
  widthAsideFooter.classList.toggle('widthAsideFooter')
  menuList1.classList.toggle('hiddenList')
  menuList2.classList.toggle('hiddenList')
  menuList3.classList.toggle('hiddenList')
  menuList4.classList.toggle('hiddenList')
  menuList5.classList.toggle('hiddenList')

} )