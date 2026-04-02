const EmployeeTable = ({ data, onEdit, onDelete }) => (
  
  <table>
    <thead>
      <tr>
        <th>STT</th>
        <th>Tên hội thảo</th>
        <th>Diễn giả</th>
        <th>Email</th>
        <th>Ngày tổ chức</th>
        <th>Địa điểm</th>
      </tr>
    </thead>
    <tbody>
      {data.map((emp, index) => (
        <tr key={emp.id}>
          <td>{index + 1}</td>
          <td>{emp.name}</td>
          <td>{emp.diengia}</td>
          <td>{emp.email}</td>
          <td>{emp.checkIn}</td>
          <td>{emp.position}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default EmployeeTable;