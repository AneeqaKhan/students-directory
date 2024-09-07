import React from "react";
import { useParams } from "react-router-dom";
import studentData from "../data/students.json";
import { IoMdArrowRoundBack } from "react-icons/io";

const StudentDetails = () => {
  const { id } = useParams();
  const student = studentData.find((s) => s.id === parseInt(id));

  if (!student) {
    return <div>Student not found</div>;
  }

  return (
    <div>
      <a href="/" className="back-button">
        <IoMdArrowRoundBack style={{marginRight: "3px"}}/>
        Back to list
      </a>
      <div className="student-card">
        <h2>
          {student.forename} {student.surname}
        </h2>
        <p>Form: {student.form}</p>
        <p>Send: {student.send ? "Yes" : "No"}</p>
      </div>
    </div>
  );
};

export default StudentDetails;
