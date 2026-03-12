
const showError = (fieldId, message) => {
    const errorSpan = document.getElementById(`error-${fieldId}`);
    const inputField = document.getElementById(fieldId);
    if (errorSpan) errorSpan.innerText = message;
    if (inputField && inputField.type !== 'radio' && inputField.type !== 'checkbox') {
        inputField.classList.add('invalid');
    }
};

const clearError = (fieldId) => {
    const errorSpan = document.getElementById(`error-${fieldId}`);
    const inputField = document.getElementById(fieldId);
    if (errorSpan) errorSpan.innerText = "";
    if (inputField) inputField.classList.remove('invalid');
};

const validateName = () => {
    const val = document.getElementById('name').value.trim();
    const regex = /^[a-zA-ZÀ-ỹ\s]+$/;
    if (!val) { showError('name', "Họ và tên không được trống"); return false; }
    if (val.length < 3) { showError('name', "Họ và tên phải ≥ 3 ký tự"); return false; }
    if (!regex.test(val)) { showError('name', "Họ và tên chỉ chứa chữ cái và khoảng trắng"); return false; }
    clearError('name'); return true;
};

const validateEmail = () => {
    const val = document.getElementById('email').value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!val) { showError('email', "Email không được trống"); return false; }
    if (!regex.test(val)) { showError('email', "Email phải đúng định dạng name@domain.com"); return false; }
    clearError('email'); return true;
};

const validateTel = () => {
    const val = document.getElementById('tel').value.trim();
    const regex = /^0\d{9}$/;
    if (!val) { showError('tel', "Số điện thoại không được trống"); return false; }
    if (!regex.test(val)) { showError('tel', "SĐT phải 10 chữ số và bắt đầu bằng số 0"); return false; }
    clearError('tel'); return true;
};

const validatePass = () => {
    const val = document.getElementById('passwd').value;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!val) { showError('passwd', "Mật khẩu không được trống"); return false; }
    if (!regex.test(val)) { showError('passwd', "Mật khẩu ≥ 8 ký tự, có ít nhất 1 chữ hoa, 1 chữ thường, 1 số"); return false; }
    clearError('passwd'); return true;
};

const validateConfirm = () => {
    const pass = document.getElementById('passwd').value;
    const confirm = document.getElementById('repasswd').value;
    if (!confirm) { showError('repasswd', "Xác nhận mật khẩu không được trống"); return false; }
    if (confirm !== pass) { showError('repasswd', "Mật khẩu xác nhận không khớp"); return false; }
    clearError('repasswd'); return true;
};

const validateGender = () => {
    const checked = document.querySelector('input[name="gender"]:checked');
    if (!checked) { showError('gender', "Vui lòng chọn giới tính"); return false; }
    clearError('gender'); return true;
};

const validateRules = () => {
    const isChecked = document.getElementById('rules').checked;
    if (!isChecked) { showError('rules', "Bạn phải tick chọn điều khoản"); return false; }
    clearError('rules'); return true;
};

const setupEvents = (id, validateFunc) => {
    const element = document.getElementById(id);
    element.addEventListener('blur', validateFunc);
    element.addEventListener('input', () => clearError(id));
};

setupEvents('name', validateName);
setupEvents('email', validateEmail);
setupEvents('tel', validateTel);
setupEvents('passwd', validatePass);
setupEvents('repasswd', validateConfirm);

document.getElementsByName('gender').forEach(r => r.addEventListener('change', validateGender));
document.getElementById('rules').addEventListener('change', validateRules);

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const isValid = validateName() & 
                    validateEmail() & 
                    validateTel() & 
                    validatePass() & 
                    validateConfirm() & 
                    validateGender() & 
                    validateRules();

    if (isValid) {
        const name = document.getElementById('name').value;
        document.getElementById('registration-container').style.display = 'none';
        const success = document.getElementById('success-msg');
        success.style.display = 'block';
        success.innerHTML = `<h2>Đăng ký thành công! 🎉</h2><p>Chào mừng <b>${name}</b></p>`;
    }
});