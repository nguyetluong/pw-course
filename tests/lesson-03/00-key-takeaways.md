#1 Câu điều kiện: 
if
if..else
if..elseif..else

#2 Vòng lặp: vô hạn, hữu hạn
for (i)  i - <điều kiện khởi tạo, điều kiện lặp, điều kiện thay đổi>
- Điều kiện khởi tạo: chạy 1 lần
- vòng 1:  Điều kiện lặp = true thì chạy code - tiếp tục xét điều kiện thay đổi 
- vòng 2: Điều kiện lặp = true thì chạy code - tiếp tục xét điều kiện thay đổi
- vòng 3: ĐIều kiện lặp = false thì dừng chạy code, thoát khỏi vòng lặp
Ví dụ: 
for (let i=0; i<5; i++)
console.log ("hello");
==> in ra 5 lần vì:
- khởi tạo i= 0, i<5 (true) => in ra hello 1
- vòng 2: xét điều kiện thay đổi i++ => i =1, điều kiện lặp i =1 <5 (true) => in ra hello 2
- vòng 3: xét điều kiện thay đổi i++ => i =2, điều kiện lặp i =2 <5 (true) => in ra hello 3
- vòng 4: xét điều kiện thay đổi i++ => i =3, điều kiện lặp i =3 <5 (true) => in ra hello 4
- vòng 5: xét điều kiện thay đổi i++ => i =4, điều kiện lặp i =4 <5 (true) => in ra hello 5
- vòng 6: xét điều kiện thay đổi i++ => i =5, điều kiện lặp i =5 <5 (false) => không chạy code, thoát khỏi vòng lặp

#3 Convention
Template Literals
snake_case  nguyet_luong -không dùng
kebab-case  nguyet-luong - Đặt trên file/tên folder
camelCase   nguyetLuong - Tên biến/hàm
PascalCase  NguyetLuong - Tên Class
SCREAMING_SNACK_CASE    NGUYET_LUONG

#4 Format code ALT+SHIF+F