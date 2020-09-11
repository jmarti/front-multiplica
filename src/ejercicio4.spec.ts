import MockDate from 'mockdate';
import { func } from './ejercicio4.js';

describe(`ejercicio 4`, () => {
    
    let date: Date;

    beforeEach(() => {
        date = new Date();
        MockDate.set(date);
    });

    afterEach(() => {
        MockDate.reset();
    })

    it(`modifica el contenido poniendo la hora actual en el elemento 'item' al que se le ha hecho click`, () => {
        
        const list = document.createElement('ul');
        document.body.appendChild(list);
        for (let i = 1; i <= 6666; i++) {
            const element = document.createElement('li') as HTMLElement;
            element.innerHTML = `item ${i}`;
            element.className = 'item';
            list.appendChild(element);
        }
        
        func();
        const selectedItemIdx = Math.round(Math.random() * 6666);
        const selectedItem = document.getElementsByClassName('item')[selectedItemIdx] as HTMLElement
        selectedItem.click();
        
        const changedLi = document.getElementsByClassName('item')[selectedItemIdx];
        const time = new Date().toTimeString().split(" ")[0]
        expect(changedLi.innerHTML).toBe(time);
    });
});
