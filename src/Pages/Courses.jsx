import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Courses() {
  
    const [courses, setCourses] = useState([])
    useEffect(()=>{
        axios.get('https://agil-e-courses-app.onrender.com/courses')
        .then ((response)=>{
            console.log (response.data)
            setCourses(response.data)
        })
    },[])
    return (
    <div className='courses__container'>
        {
            courses.map((course)=>{

                return (
                    <Link to ="/${course.cursoUrl}">
                    <div key={course.id} className='course'>
                        <h3 className='course_name'>{course.nombreCurso}</h3>
                        <img className='course__img' src={course.imagenCurso} alt="" />
                    </div>
                    </Link>
                )
            })
        }
    </div>
  )
}

export default Courses