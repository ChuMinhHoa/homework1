// //Bài tập về nhà (deadline: 13h00 ngày 22/01/2021)
// bài 1 (3đ). Nhập từ bàn phím 1 dãy số, mỗi số cách nhau bởi dấu ",". Tìm và in ra những số nguyên tố có trong dãy số đó
// VD: Input: 2, 9, 4, 5, 7
//     Output: 2, 5, 7
// bài 2 (5đ). Điểm tổng kết (ĐTK) của môn "Lập trình hướng đối tượng" được tính bằng trọng số
// 0.4 * (Điểm thành phần) + 0.6 * (Điểm cuối kì)
// Nếu ĐTK >= 8.0 --> đạt A
//     7.0 <= ĐTK < 8.0 --> đạt B
//     6.0 <= ĐTK < 7.0 --> đạt C
//     4.0 <= ĐTK < 6.0 --> đạt D
//     ĐTK < 4.0 --> đạt F (trượt)
// Hãy viết 1 chương trình để nhập điểm (điểm TP và điểm CK) cho n sinh viên (n > 2) và xác định:
//     + Chọn bất kì 1 sinh viên, tính xác suất để sinh viên đó đạt B 😀
//     + Số sinh viên đạt A
//     + Số sinh viên bị trượt
// bài 3 (2đ). Tìm hiểu về OOP: Khái niệm? 4 tính chất? (Lấy được ví dụ minh họa thì càng tốt)

//Bai1
 function nt_Check(x){
     if (x<=0) return false;
     for (let i = 2; i <= Math.floor(Math.sqrt(x)); i++) {
         if (x%i==0) return false;
     }
     return true;
 }
 let s=prompt("nhap so bai 1 (moi so cach nhau boi dau ','):");
 let number=s.split(",")
 console.log("ket qua bai 1:")
 for (let i = 0; i < number.length; i++) {
     if (nt_Check(number[i])) console.log(number[i]);
}

//Bai2
 let n=prompt("Nhap so luong HS:")
 let dtk=[];
 let b=0;
 let a=0;
 let f=0;
 for (let i = 0; i < n; i++) {
     let dtp=prompt("Điểm thành phần của HS "+(i+1)+":")
     let dck=prompt("Điểm cuối kỳ của HS "+(i+1)+":")
     dtk.push(dtp*0.4+dck*0.6);
     if (dtk[i]>=8) a++;
     else if (dtk>=7.0&&dtk<8) b++;
     else if(dtk<4) f++;
 }
 console.log(dtk)
 console.log("Xac xuat de 1 sv dat B la:"+((b/n)*100)+"%")
 console.log("So sv dat A la:"+a);
 console.log("So sv truot la:"+f);

//Bai3
// lập trình hướng đối tượng hay OOP theo e tự hiểu là trong khi lập trình chúng ta sẽ tạo ra các đối tượng mà mỗi
//  đối tượng có một hoặc một số thuộc tính nhất định.Thậm chí với mỗi đối tượng chúng ta cũng có thể phân quyền và
// hành động mà đối tượng đó có thể thực hiện đc. 
// Phân biệt giữa đối tượng và 1 class: class chỉ chung hơn còn object có thể hiểu là mô tả chi tiết hơn của class
// ví dụ class: mèo, nhưng object lại là mèo loại gì?, mèo tên gì?, mèo màu gì?

//4 tính chất bao gồm: đóng gói (Encapsulation), tính kế thừa (Inheritance), tính đa hình (Polymorphism), tính trừu
// tượng (Abtrasction)

//1. tính đóng gói:
// oop giúp cho việc quản lý các thành phần của object hoặc các thành phần liên quan khác dễ dàng hơn. Đóng gói cũng
// che di những thông tin mà bên ngoài không thể nhìn thấy
//2. tính kế thừa:
// đúng như tên gọi thì thằng con có thể kế thừa những gì mà thằng cha nó có.
//3. tính đa hình:
// tính đa hình được mô tả khá rõ ở ví dụ: chó và mèo đều là động vật biết phát ra âm thanh nhưng mỗi con lại kêu 1
// kiểu. Tính đa hình được nhắc đến ở đây là cách mà mỗi con phát ra âm thanh hay cách mà bạn thực thi một việc gì
// đó có chung kết quả nhưng bằng cách khác nhau
//4. tính trừu tượng:
// em không biết giải thích như nào cho vừa đại khái thì nó là mỗi đối tượng đều có những thuộc tính riêng nhưng không
// hẳn phải dùng hết các thuộc tính đó để xử lý một vấn đề. Chúng ta có thể chỉ cần 1 hoặc 1 vài những tính năng hoặc
// thuộc tính của đối tượng đó để giải thích vấn đề thôi.
