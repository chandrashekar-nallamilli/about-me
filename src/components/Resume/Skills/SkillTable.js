import React from "react";
const SkillTable = ({ data }) => (
  <table className="skillsTable">
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          <td>{item.id}</td>
          <td>{item.value}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default SkillTable;
