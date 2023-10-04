localStorage.setItem("candy", "fudge");
localStorage.setItem("holiday", {name: "haloween", length: 1});

function showKey() {
    const keyValue = document.getElementById("storage_key").value;
    const output = document.getElementById("values");
    output.textContent = `> ${localStorage.getItem(keyValue)}`;
}

function clearOutput() {
    const output = document.getElementById("values");
    output.textContent = "";
}