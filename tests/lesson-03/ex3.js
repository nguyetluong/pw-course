// a. lặp từ 1 đến 100

// b. Trong mỗi vòng lặp in ra:
// i. Nếu giá trị của vòng lặp chia hết cho 2, in "số <i> là số chẵn"
// ii. Nếu giá trị của vòng lặp không chia hết cho 2, in "số <i> là số lẻ"
for (let i=1; i<=100; i++) {
    if (i%2===0) {
        console.log(`sô ${i} là số chẵn`);
    } else {
        console.log(`số ${i} là số lẻ`);
    }
}