
## BTTH03: JS nền tảng, DOM & Sự kiện

**Đối tượng:** Sinh viên chưa học lý thuyết JavaScript

---

## 1. MỤC TIÊU HỌC TẬP

Sau buổi lab, sinh viên có thể:

- Mô tả được JavaScript là gì, chạy ở đâu, khác HTML/CSS ở điểm nào.
- Viết được các đoạn JS đơn giản với:
  - Biến, kiểu dữ liệu cơ bản (number, string, boolean),
  - Cú pháp lệnh, toán tử đơn giản,
  - Cấu trúc điều khiển if/else, vòng lặp đơn giản,
  - Hàm (function) có tham số và giá trị trả về.
- Thao tác được với DOM:
  - Lấy phần tử bằng `document.getElementById`,
  - Thay đổi nội dung văn bản, kiểu dáng (style),
  - Lắng nghe và xử lý một số sự kiện cơ bản: `click`, `input`.
- Nhận biết jQuery là một thư viện hỗ trợ thao tác DOM/sự kiện (ở mức nhận diện, chưa cần sử dụng thành thạo).

---

## 2. CẤU TRÚC THỜI GIAN BUỔI LAB
- 03 tiết thực hành.

---

## 3. HOẠT ĐỘNG 1 (45’): GIỚI THIỆU JS & CÚ PHÁP CƠ BẢN

### 3.1. Chuẩn bị file HTML & JS

Tạo file `lab-js-basic.html`:

```html
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Lab JS Cơ bản</title>
</head>
<body>
  <h1>Khám phá JavaScript</h1>
  <p id="welcome">Chưa có JavaScript...</p>
  <button id="runBtn">Nhấn để chạy JS</button>

  <script src="main.js"></script>
</body>
</html>
```

Tạo file `main.js`:

```js
console.log("Hello from JavaScript!");
```


---

### 3.2. Nhiệm vụ cho sinh viên

#### Bước 1: Mở file \& Quan sát bằng Console

1. Mở `lab-js-basic.html` trong trình duyệt (Chrome/Edge/…).
2. Mở DevTools → tab **Console**.
3. Quan sát thông báo xuất hiện.

---
> Trả lời:
> - Dòng thông báo trong console có nội dung là: Hello from JavaScript!
> - Điều này cho biết JavaScript là chương trình thông dịch, bởi câu lệnh được thực hiện trước khi bấm nút "Nhấn để chạy JS"

#### Bước 2:  “JavaScript là gì?” (Tra cứu nhanh)

Sử dụng 1–2 nguồn tài liệu (vd. W3Schools, freeCodeCamp, …), tóm tắt:
---

Trả lời:
> a) JavaScript chạy thông qua cả trình duyệt và server
> b) 
> - HTML: Xây dựng cấu trúc và nội dung cơ bản
> - CSS: Quy định về diện mạo, màu sắc, bố cục và cách sắp xếp
> - JavaScript: Tạo ra tương tác và hành động

#### Bước 3: Thử nghiệm biến \& kiểu dữ liệu trong Console

Trong tab Console, gõ từng dòng sau và ghi lại kết quả:

```js
let age = 20;
const name = "An";
let isStudent = true;

typeof age;
typeof name;
typeof isStudent;

1 + 2 * 3;
"Hello " + "world";
```

---

> Trả lời:
> - Kết quả `typeof age` là 'number'
> - Kết quả `typeof name` là 'string'
> - Kết quả `typeof isStudent` là 'boolean'
> - Em hãy tự mô tả ngắn gọn:
>   - `number` là: Giá trị dưới dạng số
>   - `string` là: Giá trị dưới dạng ký tự
>   - `boolean` là: Giá trị dưới dạng true/false

#### Bước 4: Viết đoạn script tính tuổi

Mở file `main.js`, viết thêm:

```js
let name = "An";
let yearOfBirth = 2005;
let currentYear = 2026;
let age = currentYear - yearOfBirth;

console.log("Xin chào, mình là " + name + ", năm nay mình " + age + " tuổi.");
```

Sau đó:

1. Đổi giá trị `name`, `yearOfBirth` thành thông tin của chính em.
2. Reload trang \& quan sát console.

---

> Trả lời:
> - Dòng log hiển thị: Xin chào, mình là Đức, năm nay mình 20 tuổi.
> - Nếu em quên dấu `+`, thì trình duyệt báo lỗi: "Uncaught SyntaxError: missing ) after argument list ()", còn quên dấu `;` thì không có chuyện gì xảy ra

#### Bước 5: Phản tư nhanh (Reflection)

> - Điều thú vị mà em vừa khám phá được là ta có thể chạy chương trình trực tiếp trên console mà không cần đến file .js
> - Em đã gặp nhiều lỗi như: quên dấu, sai cấu trúc lệnh,... Hầu hết những lỗi này em đều xử lý bằng cách tự sửa hoặc tìm Google.

## 4. HOẠT ĐỘNG 2 (40’): CẤU TRÚC ĐIỀU KHIỂN \& HÀM

### 4.1. Chuẩn bị file logic (hoặc viết tiếp trong main.js)

Ví dụ đoạn mã:

```js
// TODO: Đổi giá trị score và quan sát kết quả
let score = 7.5;

// TODO: Dự đoán điều kiện if/else đang làm gì, rồi chạy thử
if (score >= 8) {
  console.log("Giỏi");
} else if (score >= 6.5) {
  console.log("Khá");
} else if (score >= 5) {
  console.log("Trung bình");
} else {
  console.log("Yếu");
}

// TODO: Viết hàm tính điểm trung bình 3 môn
function tinhDiemTrungBinh(m1, m2, m3) {
  let avg = (m1 + m2 + m3) / 3;
  return avg;
}

// Gợi ý dùng thử hàm trong console:
// tinhDiemTrungBinh(8, 7, 9);
```


---

### 4.2. Nhiệm vụ cho sinh viên

#### Bước 1: Đoán trước – chạy sau

> a) Nếu `score = 9`, em dự đoán console sẽ in: Giỏi
> b) Nếu `score = 6`, em dự đoán console sẽ in: Trung bình

Sau đó:

1. Thay `score = 9`, reload trang hoặc chạy file và kiểm tra console.
2. Thay `score = 6`, kiểm tra lại.

> So sánh dự đoán và kết quả thực tế:
> - Trường hợp `score = 9`: Dự đoán vs Thực tế: Giỏi
> - Trường hợp `score = 6`: Dự đoán vs Thực tế: Trung bình

---

#### Bước 2: Mô tả lại if/else bằng lời

> - Chương trình in `Giỏi` khi thỏa mãn điều kiện điểm lớn hơn hoặc bằng 8
> - Khi không thỏa mãn `Giỏi` là điều kiện đầu tiên, tiếp theo là không thỏa mãn `Khá` và sau đó là `Trung bình`, Những điểm số thỏa mãn tất cả các điều kiện trên sẽ cho ra kết quả `Yếu`

> - Mô tả cấu trúc `if/else` bằng lời: Ví dụ 1 chiếc chìa khóa với 5 ổ khóa và ta cần tìm ra ổ khóa đúng với chiếc chìa. Ta thử ổ đầu tiên: Nếu mở được khóa thì kết luận ổ khóa 1 là đúng và dừng. Nếu không mở được thì ta chuyển qua ổ khóa 2 và vẫn sẽ có 2 trường hợp: mở được và không mở được. Cứ lặp lại như vậy cho đến khi tìm được ổ khóa đúng thì dừng.

........................................................................
........................................................................

---

#### Bước 3: Làm việc với hàm

1. Mở Console, gọi hàm:
```js
tinhDiemTrungBinh(8, 7, 9);
```

> Em ghi lại giá trị hàm trả về: 8

2. Viết thêm hàm `xepLoai(avg)` trong file JS:
```js
function xepLoai(avg) {
  // TODO: Dùng if/else để:
  // avg >= 8  -> "Giỏi"
  // avg >= 6.5 -> "Khá"
  // avg >= 5  -> "Trung bình"
  // còn lại   -> "Yếu"
}
```

3. Gọi thử trong console:
```js
let avg = tinhDiemTrungBinh(8, 7, 9);
let loai = xepLoai(avg);
console.log("Điểm TB:", avg, " - Xếp loại:", loai);
```

> Câu hỏi:
> - Một hàm gồm những phần chính nào?
>   - Tên hàm: tinhDiemTrungBinh
>   - Tham số (parameters): m1, m2, m3
>   - Thân hàm (body): let avg = (m1 + m2 + m3) / 3;
>   - Giá trị trả về (return): avg
> - Ưu điểm của việc dùng hàm thay vì lặp lại cùng một đoạn code nhiều lần là có thể tái sử dụng, không khiến code dài dòng.

---

#### Bước 4: Mở rộng nhỏ (tuỳ chọn)

Viết hàm `kiemTraTuoi(age)`:

```js
function kiemTraTuoi(age) {
  // TODO:
  if( age >= 18)
     console.log("Đủ 18 tuổi");
  else
     console.log("Chưa đủ 18 tuổi");
}
```

Gọi thử: `kiemTraTuoi(16);`, `kiemTraTuoi(20);`.

---

16 -> "Chưa đủ 18 tuổi"
20 -> "Đủ 18 tuổi"

#### Bước 5: Phản tư

> - Phần trả về bằng console/return trong if/else khiến em khó hiểu nhất
> - Em đã vượt qua bằng cách thử lại nhiều lần

---

## 5. HOẠT ĐỘNG 3 (40’): THAO TÁC DOM \& SỰ KIỆN

### 5.1. Chuẩn bị HTML

Thêm vào trang (hoặc tạo file mới):

```html
<section>
  <h2>DOM & Sự kiện</h2>
  <p id="status">Chưa có tương tác...</p>

  <button id="btnHello">Chào</button>
  <button id="btnRed">Đổi màu nền thành đỏ</button>

  <div style="margin-top: 20px;">
    <label>Nhập tên: </label>
    <input id="nameInput" type="text" />
    <p id="greeting"></p>
  </div>
</section>

<script src="dom.js"></script>
```

Tạo file `dom.js`:

```js
const statusEl = document.getElementById("status");
const btnHello = document.getElementById("btnHello");

btnHello.addEventListener("click", function () {
  statusEl.textContent = "Xin chào! Đây là nội dung được thay đổi bằng JavaScript.";
});
```


---

### 5.2. Nhiệm vụ cho sinh viên

#### Bước 1: Đọc \& giải thích

> Câu hỏi:
> - `document.getElementById("status")` đang làm gì?
> - Sự kiện `"click"` xảy ra khi nào?
> - Trong đoạn code trên, khi nhấn nút `btnHello`, điều gì thay đổi trên trang?

---

#### Bước 2: Thử nghiệm nút đổi màu nền

Hoàn thiện code:

```js
const btnRed = document.getElementById("btnRed");

btnRed.addEventListener("click", function () {
  // TODO: Đổi màu nền trang thành đỏ
  document.body.style.backgroundColor = "red";
});
```

> Câu hỏi:
> - Em có thể đổi sang màu khác, chẳng hạn như `lightblue`
> - 1 ví dụ khác mà JavaScript có thể làm với `document.body.style`: Tùy chỉnh cỡ font `document.body.style.fontSize = "...px"`

---

#### Bước 3: Xử lý sự kiện input – gõ tên, hiện lời chào

Hoàn thiện code:

```js
const nameInput = document.getElementById("nameInput");
const greeting = document.getElementById("greeting");

nameInput.addEventListener("input", function () {
  const value = nameInput.value;
  greeting.textContent = "Xin chào, " + value + "!";
});
```

> Câu hỏi:
> - Sự kiện `"input"` khác `"click"` ở: `input` cho phép người dùng sửa đổi nội dung nhập và hiển thị ngay lập tức trên trình duyệt, còn `click` chỉ có thể chỉnh sửa trong file .js và hiện thị sau khi nhấn
> - Khi em xoá hết nội dung ô input, dòng `greeting` hiển thị: `Xin chào, !` bởi value rỗng

---

#### Bước 4: Liên hệ khái niệm DOM

> DOM (Document Object Model) là mô hình biểu diễn trang HTML dưới dạng một **cây các đối tượng** mà JavaScript có thể truy cập và thay đổi.
>
> Em hãy:
> - Tự mô tả DOM bằng lời của em:
DOM là ngôn ngữ chung giúp JavaScript hiểu và thao tác được với các thẻ HTML.
>   ................................................................
> - Ví dụ “thao tác DOM” trong bài:
`greeting.textContent = "Xin chào, " + value + "!";`

---

#### Bước 5: Ảnh kết quả

Hãy chụp các ảnh màn hình:

1. Khi vừa tải trang (chưa tương tác).
2. Sau khi nhấn “Chào”.
3. Sau khi đổi nền sang màu đỏ.
4. Khi gõ tên và nhìn thấy lời chào xuất hiện.

*(Ảnh có thể được yêu cầu nộp cùng bài hoặc dán vào báo cáo)*

---

## 6. KẾT THÚC (15’): GIỚI THIỆU JQUERY \& PHẢN TƯ

### 6.1. Nhìn nhanh jQuery (so sánh với JS thuần)

Ví dụ:

```js
// JS thuần
document.getElementById("btnHello").addEventListener("click", function () {
  alert("Hello from JS!");
});

// jQuery (giả sử đã import jQuery)
$("#btnHello").on("click", function () {
  alert("Hello from jQuery!");
});
```

> Câu hỏi:
> - Điểm giống nhau về chức năng giữa 2 đoạn code trên là lắng nghe sự kiện (Event Listening).
> - Điểm khác nhau về cú pháp là gì (`document.getElementById` vs `$("#id")`, `addEventListener` vs `.on`)?
Js thuần: Viết dài dòng hơn nhưng tường minh hơn.
jQuery: Ngắn gọn, nhưng phải tải thêm file thư viện thì trình duyệt mới hiểu được `$`.

> - Em hãy tra cứu nhanh “What is jQuery used for?” và ghi 2 ý chính:
>   1. Đơn giản hóa thao tác DOM (DOM Manipulation): jQuery giúp việc chọn, thay đổi nội dung, hoặc ẩn/hiện các phần tử HTML trở nên cực kỳ ngắn gọn (thay vì viết 5 dòng code JS thuần, bạn chỉ cần 1 dòng với jQuery).
>   2. Xử lý tương thích trình duyệt (Cross-browser Compatibility): Ngày xưa, mỗi trình duyệt (IE, Chrome, Firefox) hiểu JS một kiểu khác nhau. jQuery đóng vai trò "người hòa giải", giúp code của bạn chạy ổn định trên mọi trình duyệt mà không cần viết code riêng cho từng cái.

---

### 6.2. Tự đánh giá \& định hướng

> 1. Sau buổi lab, em tò mò nhất về phần nào của JavaScript/DOM?
> 2. Em muốn tự làm thêm tính năng gì trên trang web (vd: bộ đếm, đổi theme, pop-up, mini game, …)?
> 3. Em đánh giá mức độ hiểu của mình về:
>    - Biến \& kiểu dữ liệu: [ ] Chưa hiểu  [ ] Tạm ổn  [x] Khá rõ
>    - If/else \& hàm:       [ ] Chưa hiểu  [ ] Tạm ổn  [x] Khá rõ
>    - DOM \& sự kiện:       [ ] Chưa hiểu  [x] Tạm ổn  [ ] Khá rõ

---

## 7. GHI CHÚ CHO GIẢNG VIÊN (NỘI BỘ)

- Có thể cho SV làm theo cặp/nhóm 2–3 để hỗ trợ nhau thử nghiệm, đọc lỗi, tra cứu.
- Tùy thời lượng thực tế, có thể:
    - Giảm bớt phần mở rộng (hàm `kiemTraTuoi`, tuỳ biến thêm hiệu ứng).
    - Hoặc tăng thêm bài tập DOM (ẩn/hiện một khối, đếm số lần click, v.v.).
- Phiếu học tập tiếp theo có thể chi tiết hóa từng hoạt động thành form trả lời, chỗ dán ảnh, và câu hỏi mini test trắc nghiệm.

```

---```

