function numberOneTriangle(number) {
    
    let stars = "";
    
    if (number >= 1 && number <= 10 && Number.isInteger(number)) {
        for (let i = 0; i < number; i++) {
            stars += "*";
            console.log(stars);
        }

    } else {
        console.log("Chỉ được nhập trong khoảng từ 1 đến 10");
    }

    return stars;
}

numberOneTriangle(4);