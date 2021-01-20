function showWords(str, callback, time = 1){
    const strArray = str.split(' ');

    let timeInterval = time * 1000;

    let cant = 0;

    let id = setInterval((words)=>{
        if(!(cant < words.length)){
            clearInterval(id);
            callback(cant);
        }
        console.log(words[cant++]);
    }, timeInterval, strArray);
}

let text1 = "La pleine lune est jalouse.";
let text2 = "Se non sentiamo male, non ci sentiamo vivi.";
let text3 = "She dreamed she would go to California.";

showWords(text1, (count)=>{

    let cantTotal = count;

    showWords(text2, (count)=>{

        cantTotal += count;

        showWords(text3, ()=>{

            cantTotal += count;
            console.log("Proceso completo.");
            console.log(`Cantidad total de palabras ingresadas: ${cantTotal}`);
            
        }, 0.5)
    }, 0.75)
}); 



/*function finalWords(cant){
    console.log("Proceso completo.");
    console.log(`Cantidad total de palabras ingresadas: ${cant}`);

}*/