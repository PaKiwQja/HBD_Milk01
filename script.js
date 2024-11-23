// ฟังก์ชันแสดงข้อความอวยพรเมื่อคลิกที่กล่องของขวัญ
function showMessage() {
    const messageBox = document.getElementById("message");
    if (messageBox.style.display === "none" || messageBox.style.display === "") {
        messageBox.style.display = "block"; // แสดงข้อความ
    } else {
        messageBox.style.display = "none"; // ซ่อนข้อความ
    }
}

// ฟังก์ชันตรวจสอบรหัสผ่าน
function checkPassword() {
    // รับค่าจากช่อง input ทั้ง 4 ช่อง
    const char1 = document.getElementById("char1").value.toLowerCase();
    const char2 = document.getElementById("char2").value.toLowerCase();
    const char3 = document.getElementById("char3").value.toLowerCase();
    const char4 = document.getElementById("char4").value.toLowerCase();

    // รหัสผ่านที่ถูกต้อง
    const correctPassword = ['m', 'i', 'l', 'k'];  // ตัวอักษรของรหัสผ่าน

   // ตรวจสอบรหัสผ่าน
   if (char1 === correctPassword[0] && char2 === correctPassword[1] && char3 === correctPassword[2] && char4 === correctPassword[3]) {
    alert("รหัสผ่านถูกต้อง! เปิดของขวัญได้เลย");
    
    // แสดงวิดีโอ
    document.getElementById("video-container").style.display = "block";

    // เปิดใช้งานปุ่มแสดงรูปภาพ
    document.getElementById("card-button").disabled = false;
} else {
    alert("รหัสผ่านไม่ถูกต้อง ลองอีกครั้ง");
}
}

// ฟังก์ชันให้ทำงานลบในช่องกรอกรหัส
function autoTab(current, next) {
    if (current.value.length == current.maxLength) {
        // ถ้าคีย์บอร์ดเสร็จแล้วให้ไปยังช่องถัดไป
        if (next) {
            document.getElementById(next).focus();
        }
    }
}

function handleBackspace(event, prevInput) {
    // ถ้ากด backspace แล้วไม่ต้องคลิกที่ปุ่มลบทีละตัว
    if (event.key === "Backspace") {
        if (prevInput) {
            document.getElementById(prevInput).focus();
        }
    }
}

// ใส่ event listener ให้กับช่องกรอกรหัส
document.querySelectorAll('.password-input input').forEach((input, index, inputs) => {
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Backspace' && index > 0 && inputs[index].value === '') {
            handleBackspace(event, inputs[index - 1].id);
        }
    });
});

// ฟังก์ชันแสดงกรอบรูป
function showImages() {
    const carousel = document.getElementById("image-carousel");
    const button = document.getElementById("card-button");

    // ซ่อนปุ่ม
    button.style.display = "none";
    
    // แสดงกรอบรูป
    carousel.style.display = "block";  // เปลี่ยนจาก display: none เป็น display: block
}


