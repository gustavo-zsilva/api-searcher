import { output, outputLabels, selectApp } from './variables';
import { apis } from './script';

// Populates the output with the given params
export function populateOutput(...params) {
    params.map((param, index) => {
        output.innerHTML += `<p> ${outputLabels[0][index]} ${param} </p>`
    })
}

// Function that handles populating the select with options
export function selectPopulator() {
    apis.map((item, index) => {
        let option = document.createElement('option')

        option.innerHTML = item.name
        option.value = index

        selectApp.appendChild(option)
    })
}