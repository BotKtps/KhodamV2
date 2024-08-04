document.getElementById('checkButton').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const result = document.getElementById('result'); // Perbaikan pada assignment
    if (name) {
        const khodam = checkKhodam(name);
        result.innerHTML = `Khodam Anda adalah: <strong>${khodam}</strong>`; // Perbaikan pada template literal dan penutupan tag strong
    } else {
        result.innerHTML = '<span style="color: red;">Silakan masukkan nama Anda!</span>';
    }
});

function checkKhodam(name) {
    const khodams = ['Monyet Kayang', 'Pocong Busuk', 'Kunti Daster', 'Macan Goyang', 'Elang Mabok', 'Tuyul', 'Bebek Penyet', 'Buaya Darat']; // Perbaikan pada penugasan array
    const index = Math.floor(Math.random() * khodams.length);
    return khodams[index];
}
