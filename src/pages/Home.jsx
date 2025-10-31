import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import ObjectList from "../components/ObjectList";
import SubjectList from "../components/SubjectList";

// ✅ Import ảnh như import module
import banner from "../assets/banner.jpg";

const Home = () => {
  const [objects, setObjects] = useState([]);
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    fetch("/src/data/objects.json")
      .then((res) => res.json())
      .then((data) => setObjects(data));

    fetch("/src/data/subjects.json")
      .then((res) => res.json())
      .then((data) => setSubjects(data));
  }, []);

  return (
    <>
      <Container className="text-center mt-4">
        <Image
          src={banner} // ✅ Dùng biến import
          alt="FPT Aptech Banner"
          fluid
          rounded
          className="shadow-sm"
        />
      </Container>

      <Container className="text-center mt-5">
        <h2 className="fw-bold mb-4">
          SHOULD WHO LEARN PROGRAMMING IN FPT APTECH?
        </h2>
        <ObjectList objects={objects} />
      </Container>

      <Container className="text-center mt-5">
        <h2 className="fw-bold mb-4">WHAT IS THE COURSE PROGRAM?</h2>
        <SubjectList subjects={subjects} />
        <p className="mt-4 text-secondary">
          With a program design that includes 04 semesters with important technologies
          such as ReactJS, PHP, Python, .NET Core, and Spring Boot — learners quickly
          enter the world of programming effectively and confidently.
        </p>
      </Container>
    </>
  );
};

export default Home;
