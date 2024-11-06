import React, { useState } from 'react';
import styled, { keyframes, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    overflow-x: hidden;
  }
`;
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const CoursesContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url('/background.jpg') no-repeat center center fixed;
  background-size: cover;
  color: #fff;
  padding: 20px;
  overflow-x: hidden;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  padding: 40px;
  border-radius: 10px;
  max-width: 800px;
  width: 100%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  animation: ${fadeIn} 1s ease-in;
  overflow-x: hidden;
`;

const CourseList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-x: hidden;
`;

const CourseItem = styled.li`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s, background-color 0.3s;

  &:hover {
    transform: translateY(-5px);
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const CourseTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #fff;
  color: #333;
  padding: 30px;
  border-radius: 15px;
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  animation: ${fadeIn} 0.3s ease-out;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #333;
`;

const courseData = [
  {
    title: "Курс класичного масажу",
    description: "Класичний масаж - це базова техніка, яка впливає на всі частини тіла. Він покращує кровообіг, знімає м'язову напругу та сприяє загальному розслабленню.",
    bodyParts: "Спина, шия, руки, ноги, живіт",
    benefits: "Зняття стресу, покращення гнучкості, полегшення болю",
    price: "500 грн за сеанс"
  },
  {
    title: "Курс тайського масажу",
    description: "Тайський масаж поєднує акупресуру, розтяжку та елементи йоги. Він працює з енергетичними лініями тіла.",
    bodyParts: "Все тіло, включаючи суглоби та м'язи",
    benefits: "Підвищення гнучкості, покращення циркуляції енергії, зняття стресу",
    price: "700 грн за сеанс"
  },
  {
    title: "Курс лімфодренажного масажу",
    description: "Лімфодренажний масаж спрямований на стимуляцію лімфатичної системи та виведення токсинів з організму.",
    bodyParts: "Ноги, руки, живіт, обличчя",
    benefits: "Зменшення набряків, покращення імунітету, детоксикація",
    price: "600 грн за сеанс"
  },
  {
    title: "Курс антицелюлітного масажу",
    description: "Антицелюлітний масаж спрямований на боротьбу з целюлітом та покращення стану шкіри.",
    bodyParts: "Стегна, сідниці, живіт",
    benefits: "Зменшення целюліту, покращення тонусу шкіри, стимуляція кровообігу",
    price: "650 грн за сеанс"
  },
  {
    title: "Курс спортивного масажу",
    description: "Спортивний масаж допомагає підготувати м'язи до фізичних навантажень та відновитися після них.",
    bodyParts: "Залежно від виду спорту, але зазвичай ноги, спина, плечі",
    benefits: "Підвищення продуктивності, швидше відновлення, профілактика травм",
    price: "750 грн за сеанс"
  }
];

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <>
      <GlobalStyle />
      <CoursesContainer>
        <Content>
          <Title>Наші курси</Title>
          <CourseList>
            {courseData.map((course, index) => (
              <CourseItem key={index} onClick={() => setSelectedCourse(course)}>
                <CourseTitle>{course.title}</CourseTitle>
              </CourseItem>
            ))}
          </CourseList>
        </Content>
        {selectedCourse && (
          <Modal onClick={() => setSelectedCourse(null)}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <CloseButton onClick={() => setSelectedCourse(null)}>&times;</CloseButton>
              <h2>{selectedCourse.title}</h2>
              <p><strong>Опис:</strong> {selectedCourse.description}</p>
              <p><strong>Частини тіла:</strong> {selectedCourse.bodyParts}</p>
              <p><strong>Переваги:</strong> {selectedCourse.benefits}</p>
              <p><strong>Ціна:</strong> {selectedCourse.price}</p>
            </ModalContent>
          </Modal>
        )}
      </CoursesContainer>
    </>
  );
};

export default Courses;

