
const prices = {
    "laptop": 100000000,
    "phone": 200000000,
    "watch": 300000000
};

const showError = (id, msg) => document.getElementById(`err-${id}`).innerText = msg;
const clearError = (id) => document.getElementById(`err-${id}`).innerText = "";

function calculateTotal() {
    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;
    const totalDisplay = document.getElementById('total-price');
    
    if (product && quantity > 0) {
        const total = prices[product] * parseInt(quantity);
        totalDisplay.innerText = total.toLocaleString('vi-VN') + "đ";
    } else {
        totalDisplay.innerText = "0đ";
    }
}

function validateProduct() {
    const val = document.getElementById('product').value;
    if (!val) { showError('product', "Vui lòng chọn sản phẩm"); return false; }
    clearError('product'); return true;
}

function validateQuantity() {
    const val = document.getElementById('quantity').value;
    if (!val || val < 1 || val > 99 || !Number.isInteger(Number(val))) {
        showError('quantity', "Số lượng phải từ 1 đến 99"); return false;
    }
    clearError('quantity'); return true;
}

function validateDeliveryDate() {
    const val = document.getElementById('delivery-date').value;
    if (!val) { showError('delivery-date', "Chọn ngày giao hàng"); return false; }

    const selectedDate = new Date(val);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const diffTime = selectedDate - today;
    const diffDays = diffTime / (1000 * 60 * 60 * 24);

    if (diffDays < 0) { showError('delivery-date', "Không được chọn ngày quá khứ"); return false; }
    if (diffDays > 30) { showError('delivery-date', "Không được giao quá 30 ngày"); return false; }
    
    clearError('delivery-date'); return true;
}

function validateAddress() {
    const val = document.getElementById('address').value.trim();
    if (val.length < 10) { showError('address', "Địa chỉ phải ít nhất 10 ký tự"); return false; }
    clearError('address'); return true;
}

function validateNote() {
    const val = document.getElementById('note').value;
    if (val.length > 200) { showError('note', "Ghi chú không quá 200 ký tự"); return false; }
    clearError('note'); return true;
}

function validatePayment() {
    const checked = document.querySelector('input[name="payment"]:checked');
    if (!checked) { showError('payment', "Chọn phương thức thanh toán"); return false; }
    clearError('payment'); return true;
}

document.getElementById('note').addEventListener('input', function() {
    const count = this.value.length;
    const display = document.getElementById('char-count');
    display.innerText = `${count}/200`;
    if (count > 200) {
        display.classList.add('char-error');
        validateNote();
    } else {
        display.classList.remove('char-error');
        clearError('note');
    }
});

document.getElementById('product').addEventListener('change', () => { validateProduct(); calculateTotal(); });
document.getElementById('quantity').addEventListener('input', () => { validateQuantity(); calculateTotal(); });
document.getElementById('delivery-date').addEventListener('blur', validateDeliveryDate);
document.getElementById('address').addEventListener('blur', validateAddress);

document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const isValid = validateProduct() & validateQuantity() & validateDeliveryDate() & 
                    validateAddress() & validateNote() & validatePayment();

    if (isValid) {
        const productText = document.getElementById('product').options[document.getElementById('product').selectedIndex].text;
        const quantity = document.getElementById('quantity').value;
        const total = document.getElementById('total-price').innerText;
        const date = document.getElementById('delivery-date').value;

        document.getElementById('summary-content').innerHTML = `
            <p>🎁 <b>Sản phẩm:</b> ${productText}</p>
            <p>🔢 <b>Số lượng:</b> ${quantity}</p>
            <p>💰 <b>Tổng tiền:</b> ${total}</p>
            <p>📅 <b>Ngày giao:</b> ${date}</p>
        `;

        document.getElementById('overlay').style.display = 'block';
        document.getElementById('confirm-modal').style.display = 'block';
    }
});

document.getElementById('btn-confirm-no').onclick = () => {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('confirm-modal').style.display = 'none';
};

document.getElementById('btn-confirm-yes').onclick = () => {
    document.getElementById('confirm-modal').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('order-form-container').style.display = 'none';
    document.getElementById('final-success').style.display = 'block';
};