// main.js
document.addEventListener("DOMContentLoaded", function () {
    // Tạo một XMLHttpRequest hoặc sử dụng Fetch API để tải header.html
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "header.html", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Nạp nội dung của header vào phần tử header trên trang hiện tại
            document.querySelector("#header-container").innerHTML = xhr.responseText;
        }
    };
    xhr.send();
});
