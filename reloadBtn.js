import {createElement} from './create.js';
import {$arenas} from './main.js';

export const createReloadButton = () => {
    const $reloadButtonDiv = createElement('div', 'reloadWrap');
    const $reloadButton = createElement('button', 'button');
    $reloadButton.innerText = 'Restart';

    $arenas.appendChild($reloadButtonDiv);
    
    $reloadButtonDiv.appendChild($reloadButton);
    
    $reloadButton.addEventListener('click', function() {
        window.location.reload()
    });
}
