let history = [];

function checkAttendance() {
    const name = document.getElementById('nameInput').value;
    const now = new Date();
    const hour = now.getHours();
    let message = '';

    if (hour == 10) {
        message = `Hello, ${name}! You are on time. (Current time: ${hour} AM)`;
    }
    else if(name == message){
        message = alert("Please Enter a name")
    } 
    else if (hour == 10.05) {
        message = `Hello, ${name}! You are late. Please give a warning. (Current time: ${hour} AM)`;
    } else {
        message = `Hello, ${name}! You are very late. Salary should be deducted. (Current time: ${hour} AM)`;
    }

    history.push(message);
    // document.getElementById('result').innerHTML = message;
    document.getElementById('history').innerHTML = history.join('<br><br>');
}