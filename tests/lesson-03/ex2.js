// a. Khai báo chiều cao của bạn (cm)
const chieucao = 160; //cm
// b. In ra cân nặng lý tưởng, cân nặng tối đa, cân nặng tối thiểu trên cùng 1 dòng.

let sole = chieucao - 100;
let cannanglytuong = sole *9/10;
let cannangtoida = sole;
let cannangtoithieu = sole * 8/10;
if (100< chieucao && chieucao <200) {
    console.log(`Cân nặng lý tưởng: ${cannanglytuong}kg, Cân nặng tối đa: ${cannangtoida}kg, Cân nặng tối thiểu: ${cannangtoithieu}kg`);
} else {
    console.log(`Chiều cao không hợp lệ`);
}   