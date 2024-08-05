document.getElementById('checkButton').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const result = document.getElementById('result');
    if (name) {
        const khodam = checkKhodam(name);
        result.innerHTML = `Khodam Anda adalah: <strong>${khodam}</strong>`;
    } else {
        result.innerHTML = '<span style="color: red;">Silakan masukkan nama Anda!</span>';
    }
});

function checkKhodam(name) {
    const khodams = ['Monyet Kayang', 'Pocong Busuk', 'Kunti Daster', 'Macan Goyang', 'Elang Mabok', 'Tuyul', 'Bebek Penyet', 'Buaya Darat', 'Macan Sumatera', 'Kuda Poni', 'Sandal Jepit', 'Zebra Sigma', 'Jembut Skibidi', 'Nekopoi', 'Roket Geprek'];
    const index = Math.floor(Math.random() * khodams.length);
    return khodams[index];
}
