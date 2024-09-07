import React, { useState } from "react";
import { Link } from "react-router-dom";
import studentData from "../data/students.json";
import { IoIosSearch } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import { VscTriangleUp, VscTriangleDown } from "react-icons/vsc";
import useSearch from "./useSearch";

const TableHeader = ({ isAscending, toggleSort }) => (
  <thead>
    <tr>
      <th>
        Pupil Name{" "}
        {isAscending ? (
          <VscTriangleUp className="sort-arrow" onClick={toggleSort} />
        ) : (
          <VscTriangleDown className="sort-arrow" onClick={toggleSort} />
        )}
      </th>
      <th>Form</th>
      <th>Send</th>
    </tr>
  </thead>
);

const StudentRow = ({ student }) => (
  <tr key={student.id}>
    <td>
      <div className="pupil-name">
        <img className="profile-pic" src={student.pfp} alt="Profile" />
        <Link to={`/student/${student.id}`}>
          {student.forename} {student.surname}
        </Link>
      </div>
    </td>
    <td>{student.form}</td>
    <td>
      {student.send ? <FaCheck /> : <FaCheck style={{ color: "#cecece" }} />}
    </td>
  </tr>
);

const StudentList = () => {
  const [searchText, setSearchText] = useState("");
  const [students, setStudents] = useState(studentData);
  const [isAscending, setIsAscending] = useState(true);
  const filteredStudents = useSearch(students, searchText);

  const toggleSort = () => {
    const sortedList = [...filteredStudents].sort((a, b) =>
      isAscending
        ? a.forename.localeCompare(b.forename)
        : b.forename.localeCompare(a.forename)
    );
    setStudents(sortedList);
    setIsAscending(!isAscending);
  };

  return (
    <div>
      <h1>All pupils</h1>
      <div className="search-cont">
        <IoIosSearch />
        <input
          value={searchText}
          maxLength="50"
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search for a pupil by name or form"
          className="search-text"
        />
      </div>

      <table className="students-table">
        <TableHeader isAscending={isAscending} toggleSort={toggleSort} />
        <tbody>
          {filteredStudents.length === 0 ? (
            <tr>
              <td colSpan="3">No Pupil Found</td>
            </tr>
          ) : (
            filteredStudents.map(student => <StudentRow student={student} />)
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
