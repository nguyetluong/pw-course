// Bài 1
// a. Khai báo một hằng số với giá trị kiểu Number bất kỳ.
const Number = 0;
// b. In ra dòng sau ở console:
// i. Nếu hằng số lớn hơn 0: “Giá trị bạn nhập là số dương”
// ii. Nếu hằng số nhỏ hơn 0: “Giá trị bạn nhập là số âm”
if (Number > 0) {
    console.log("Giá trị bạn nhập là số dương");
} else if (Number === 0) {
    console.log("Giá trị bằng 0");
} else {
    console.log("Giá trị bạn nhập là số âm");
}

// Bài 2
const chieucao = 170; //cm
let sole = chieucao -100;
let cannanglytuong = sole *9/10;
let cannangtoida = sole;
let cannangtoithieu = sole * 8/10;
if (100< chieucao && chieucao <200) {
    console.log("Cân nặng lý tưởng:"+cannanglytuong + " kg");
    console.log("Cân nặng tối đa:"+cannangtoida + " kg");
    console.log("Cân nặng tối thiểu:"+cannangtoithieu + " kg");
} else {
    console.log("Chiều cao không hợp lệ");
}