// 1. PHẦN IMPORT (Dán ở trên cùng)
import React, { useState, useEffect } from 'react';

const EmployeeForm = ({ onSubmit, onClose, initialValue }) => {
  
  // 2. PHẦN LOGIC (Khai báo State và các hàm xử lý handleChange, handleSubmit)
  const [formData, setFormData] = useState({
    name: '', email: '', diengia: '', position: '',checkIn:''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialValue) setFormData(initialValue);
  }, [initialValue]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
  const newErrors = {};
  const { name, diengia, email, position, checkIn} = formData;

  if (name.trim().length > 60) {
    newErrors.name = "Tên tối đa 60 ký tự" ;
  }

  if(checkIn < 4/2/2026){
    newErrors.name = "Ngày tổ chức phải lớn hơn hoặc bằng ngày hiện tại";
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()){
    onSubmit(formData);
  }
  };

  // 3. PHẦN RENDER (Dán nội dung HTML/JSX vào trong cặp ngoặc return)
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h3>{initialValue ? "Sửa nhân sự" : "Thêm nhân sự mới"}</h3>
          <span className="close-btn" onClick={onClose}>&times;</span>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-body">
            <div className="form-group">
              <label>Tên hội thảo</label>
              <input name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Diễn giả</label>
              <input name="diengia" value={formData.diengia} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input name="email" type="email" value={formData.email} onChange={handleChange} required />
            </div>

              <div className="form-group">
              <label>Ngày tổ chức</label>
              <input type="date" value={formData.checkIn} onChange={e => setFormData({...formData, checkIn: e.target.value})} required/>
            </div>
            <div className="form-group">
              <label>Địa điểm</label>
              <input name="position" value={formData.position} onChange={handleChange} required />
            </div>
          </div>

          <div className="modal-footer">
            <button type="submit" className="btn-save">Lưu</button>
            <button type="button" className="btn-cancel" onClick={onClose}>Hủy</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeForm;