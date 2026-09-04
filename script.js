var display = document.getElementById("display");
var buttons = document.querySelectorAll(".btn");

// Lắng nghe sự kiện click trên tất cả các nút
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        var value = this.innerText;

        if (value === "Clear") {
            // Đặt lại màn hình về 0
            display.innerText = "0";
        } else if (value === "=") {
            // Tính toán biểu thức
            try {
                display.innerText = eval(display.innerText);
            } catch (e) {
                display.innerText = "Lỗi";
            }
        } else {
            // Nối số hoặc phép toán vào màn hình
            if (display.innerText === "0" || display.innerText === "Lỗi") {
                display.innerText = value;
            } else {
                display.innerText = display.innerText + value;
            }
        }
    });
}
