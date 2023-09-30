import React,  {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Header from '../Layouts/Header'

function Courseone() {
    const params = useParams()
    const [course,setCourse]=useState({})
    useEffect(()=>{
        axios.get(`https://agil-e-courses-app.onrender.com/course/${params.id}`).then((response)=>{
            setCourse(response.data)
        })
    }, [])
    return (
        <>
            <Header name="Cursos"/>
            <h3 className='course_name'>{course.nombreCurso}</h3>
            <img className='course__img' src={course.imagenCurso} alt="" />
            <h4 className='course__insti'>{course.impartidoPor} </h4>
            <p className='course_descrip'>{course.descripcion} </p>
            <Link to={course.cursoUrl}>Inscribirse</Link>
        </>
  )
}

export default Courseone