function divisibility(number) {
    i = 1;
    number = Array.from(number);
    
    while (i <= number) {
        i = i + number;
        if (i % 2 == 0) {
            console.log("yu");
        } else if (i % 3) {
            console.log("gi")
        } else if (i % 5) {
            console.log('oh');
        } else if (i % 2 == 0 || i % 3 == 0 || i % 5 == 0) {
            console.log(i.split('yu', 'gi', 'oh').join('yu-gi', 'yu-oh'));
        } 
        else {
            console.log('Numbers are unchanged if not divsible by any of the above');
        }

    }
    return number
}
