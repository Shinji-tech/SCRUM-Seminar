// Lấy tham chiếu đến phần tử nút "question-add-button"
var questionAddButton = document.querySelector(".question-add-button");

// Lắng nghe sự kiện click trên nút "question-add-button"
questionAddButton.addEventListener("click", function () {
        // Tạo một phần tử "content-test-question" mới
        var newQuestion = document.createElement("div");
        newQuestion.className = "content-test-question";

        // Tạo các phần tử con cho "content-test-question"
        var questionTopic = document.createElement("div");
        questionTopic.className = "question-topic";
        questionTopic.textContent = "Question Has No Title";

        var questionRadio = document.createElement("div");
        questionRadio.className = "question-radio";

        var trueLabel = document.createElement("label");
        var trueInput = document.createElement("input");
        trueInput.type = "radio";
        trueInput.style.marginRight = "5px";
        trueInput.name = "answer" + Date.now(); // Tạo tên động cho nhóm nút radio
        trueInput.value = "True";
        trueLabel.appendChild(trueInput);
        trueLabel.appendChild(document.createTextNode("True"));

        var falseLabel = document.createElement("label");
        var falseInput = document.createElement("input");
        falseInput.type = "radio";
        falseInput.style.marginRight = "5px";
        falseInput.name = "answer" + Date.now(); // Tạo tên động cho nhóm nút radio
        falseInput.value = "False";
        falseLabel.appendChild(falseInput);
        falseLabel.appendChild(document.createTextNode("False"));

        // Đưa các phần tử con vào "content-test-question"
        questionRadio.appendChild(trueLabel);
        questionRadio.appendChild(falseLabel);
        newQuestion.appendChild(questionTopic);
        newQuestion.appendChild(questionRadio);

        // Chèn "content-test-question" vào trang
        var contentTest = document.querySelector(".content-test");
        contentTest.appendChild(newQuestion);
});
