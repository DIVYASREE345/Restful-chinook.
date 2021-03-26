'use strict';
export class Artist {
    constructor(id, name){
        this.id = id,
        this.name = name
    }

    render(){

        const listItem = document.createElement("li");
        listItem.className = 'item';
        listItem.style.display='flex';
        listItem.style.justifyContent="space-between";
        listItem.style.alignItems="center";

        const name = document.createElement('h2');
        name.className = 'item-text-name';
        name.innerHTML = `${this.name}`;
        listItem.appendChild(name);

        return listItem;
    }
}