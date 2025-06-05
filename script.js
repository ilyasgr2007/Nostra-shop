
function showProduct(name) {
    document.getElementById('productTitle').innerText = name;
    document.getElementById('modal').style.display = 'flex';
}
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
