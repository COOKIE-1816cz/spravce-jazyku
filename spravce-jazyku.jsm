export default class {
    cesta = "./jazyky",
    
    initializace: function() {
    	console.log("In this script, multilanguage support by");
    	console.log("COOKIE-1816 (C) 2022 is included. This script");
    	console.log("is licensed under MIT license. Source code can");
    	console.log("be found here: \nhttps://github.com/COOKIE-1816cz/spravce-jazyku");
    	console.log("================================================================");
    	
        const fs_modul = require("fs");
    },
    
    
    nacist_hodnotu: function(jazyk, index_hodnoty) {
        if(!jazyk.contains(".json") {
            let soubor = jazyk;
        } else {
            let soubor = jazyk + ".json";
        }
        
        let obsah = JSON.parse(
            fs_modul.readFile(cesta + "/" + soubor)
        );
        
        return obsah[index_hodnoty];
    }
}
