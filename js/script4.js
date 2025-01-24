function use() {
    var a = parseFloat(document.getElementById('side1').value);
    var b = parseFloat(document.getElementById('side2').value);
    var c = parseFloat(document.getElementById('side3').value);

    const min = Math.min(a, b, c);
    const max = Math.max(a, b, c);

    document.getElementById('result').innerText = `Min: ${min} Max: ${max}`
}