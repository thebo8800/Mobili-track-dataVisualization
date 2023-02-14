import Papa from './PapaParse/papaparse';

let fareArr = [];
let milesArr = [];
Papa.parse(fileName,
    {
        download: true,
        header: true,
        skipEmptyLines: true,
        complete: function (results) {


            for (let i = 0; i < 67082; i++) {
                let ans = results.data[i].fare;
                let miles = results.data[i].estimated_miles;
                fareArr[i] = ans;
                milesArr[i] = miles;
            }
            milesArr.sort(function (a, b) { return a - b });;
            fareArr.sort(function (a, b) { return a - b });;
        }
    })

