// ES2015 imports. Since it's a class name we can import it through curly
// brackets.
import { AlertBox } from './alert-box/alert-box';

// Since it's a class, we need to instantiate it before we can use it.
const alertUser = new AlertBox();

document.addEventListener('DOMContentLoaded', () => {
    const alertButton = document.getElementById('js-button')
});