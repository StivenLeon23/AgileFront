import React,  {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Courseone() {
    const params = useParams
    const [course,setCourse]=useState({})
    useEffect(()=>{
        axios.get(`https://agil-e-courses-app.onrender.com/courses/${params.id}`)
    })
    return (
    <div className='course'>
    <h3 className='course_name'>{course.nombreCurso}</h3>
    <img className='course__img' src={course.imagenCurso} alt="" />
</div>
  )
}

export default Courseone