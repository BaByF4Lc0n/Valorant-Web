var people = [
    {
        username: "new",
        password: "runner"
    },
    {
        username: "Jirawat",
        password: "donboran"
    },
    {
        username: "B4b4y",
        password: "f4lc0n"
    },
    {
        username: "rosvasgamer@gmail.com",
        password: "falcon1246737722"
    },
];
function getInfomation(){
    var username = document.getElementById("form-username").value;
    var password = document.getElementById("form-password").value;
    for(var i = 0; i < people.length; i++){
        if(username == people[i].username && password == people[i].password){
            alert("เข้าสู่ระบบสำเร็จ");
            window.location.href = "Index valorant.html";
        }
    }
    console.log("ไม่มีข้อมูลนี้ในระบบ");
}