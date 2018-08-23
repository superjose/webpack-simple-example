// ES2015 imports. Since it's a class name we can import it through curly
// brackets.
import { AlertBox } from './alert-box/alert-box';

import writeText from './write-text/write-text';
// This also works
// const writeText = require('./write-text/write-text.js');

// Since it's a class, we need to instantiate it before we can use it.
const alertUser = new AlertBox();

document.addEventListener('DOMContentLoaded', () => {
    const alertButton = document.getElementById('js-button');
    alertButton.addEventListener('click', alertUser.sayHi);

    const pTagButton = document.getElementById('js-write-text-button');
    const pTag = document.querySelector('p');
    /**
     * This is another variation. We create an anonymous function (Search more about it online)
     * and we call the function. 
     */
    pTagButton.addEventListener('click', () => {
        writeText(pTag)
    });
    
    
    
    /**
     * The approach below is cleaner, and it works! I also recommend it over the above method
     * because it allows you to remove the event listener by doing 
     * pTagButton.removeEventListener('click', writeText). You can't do this via anonymous functions
     */
    // pTagButton.addEventListener('click', writeText.bind(this, pTag));
    

});