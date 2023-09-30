import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Header from '../Layouts/Header'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




function Courses() {
  
    const [courses, setCourses] = useState([])
    
    useEffect(()=>{
        axios.get('https://agil-e-courses-app.onrender.com/courses')
        .then ((response)=>{
            console.log (response.data)
            setCourses(response.data)
        })
    },[courses])
    return (
    <>
        <Header name="Cursos"/>
       <Container className='course_container'>
       <Row>
        {
            courses.map((course)=>{

                return (                                
                    <Col>
                    <Link key={course._id} to={`/course/${course._id}}`}>
                     
                        <h3 className='course_name'>{course.nombreCurso}</h3>
                        <img className='course__img' src={course.imagenCurso} alt="" />
                    
                    </Link>
                    </Col>
                )
            })
        }
        </Row>
        </Container>
    </>
  )
}

export default Courses