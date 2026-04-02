import React, { useState, useEffect } from 'react';
import { initialData } from './data/data';
import EmployeeTable from './components/EmployeeTable';
import EmployeeForm from './components/EmployeeForm';
import './App.css'

function App() {
    // App.jsx
  const [employees, setEmployees] = useState(() => {
    const savedData = localStorage.getItem('employees_list');
    return savedData ? JSON.parse(savedData) : initialData;
  });
  // const [employees, setEmployees] = useState(initialData);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);

    // Thêm useEffect này vào trong function App
  useEffect(() => {
    localStorage.setItem('employees_list', JSON.stringify(employees));
  }, [employees]); // Chạy lại mỗi khi mảng employees thay đổi

  // Hàm thêm hoặc cập nhật nhân sự
  const saveEmployee = (employee) => {
    if (editingEmployee) {
      // Logic Sửa
      setEmployees(employees.map(emp => emp.id === employee.id ? employee : emp));
    } else {
      // Logic Thêm mới
      setEmployees([...employees, { ...employee, id: Date.now() }]);
    }
    closeForm();
  };

  const deleteEmployee = (id) => {
    if(window.confirm("Bạn có chắc chắn muốn xóa?")) {
      setEmployees(employees.filter(emp => emp.id !== id));
    }
  };

  const openForm = (employee = null) => {
    setEditingEmployee(employee);
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setEditingEmployee(null);
  };

  return (
    <div className="container">
      <h2>Bảng điều khiển hội thảo</h2> 
      <p>Theo dõi lịch, diễn ra và địa điểm các sự kiện</p>
      
      <button onClick={() => openForm()} className="btn-add">+ Thêm mới</button>
      
      <EmployeeTable 
        data={employees} 
        onEdit={openForm} 
        onDelete={deleteEmployee} 
      />

      {isFormOpen && (
        <EmployeeForm 
          onSubmit={saveEmployee} 
          onClose={closeForm} 
          initialValue={editingEmployee} 
        />
      )}
    </div>
  );
}

export default App;