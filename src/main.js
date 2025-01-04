import './style.css'
import LoveCounter from './love-counter';
import Alpine from 'alpinejs'
window.Alpine = Alpine
Alpine.data('loveCounter', LoveCounter);
Alpine.start()

document.querySelector('#app').innerHTML = "I 💚 Alpine JS!"