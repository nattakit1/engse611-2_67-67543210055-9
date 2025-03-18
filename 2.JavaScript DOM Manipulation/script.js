document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const todoList = document.getElementById("todoList");
    const clearCompletedButton = document.getElementById("clearCompleted");
    const clearAllButton = document.getElementById("clearAll");

    // ฟังก์ชันเพิ่มรายการ
    addTaskButton.addEventListener("click", function () {
        if (taskInput.value.trim() === "") return;

        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskInput.value}</span>
            <div>
                <button class="complete-btn">✔️</button>
                <button class="delete-btn">🗑️</button>
            </div>
        `;

        // ทำเครื่องหมายว่าสำเร็จแล้ว
        li.querySelector(".complete-btn").addEventListener("click", function () {
            li.classList.toggle("completed");
        });

        // ลบรายการ
        li.querySelector(".delete-btn").addEventListener("click", function () {
            li.remove();
        });

        todoList.appendChild(li);
        taskInput.value = "";
    });

    // ลบรายการที่เสร็จแล้ว
    clearCompletedButton.addEventListener("click", function () {
        document.querySelectorAll(".completed").forEach(item => item.remove());
    });

    // ลบทั้งหมด
    clearAllButton.addEventListener("click", function () {
        todoList.innerHTML = "";
    });
});
