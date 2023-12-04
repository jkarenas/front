import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Read = () => {

    const [students, setStudents] = useState([])
    console.log(students)
    useEffect(()=>{
        const getStudents = async () => {
            try {
                const response = await axios.get('http://localhost:3003/students/read')
                setStudents(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        getStudents()
    },[])

    

  return (
    <div>crud
        <div>{students.map((student)=>(
            <div>
                <h2>
                    {student.nombre}
                </h2>
                <h1>
                    {student.nota1}
                </h1>
                <h1>
                    {student.nota2}
                </h1>
                <h1>
                    {student.nota3}
                </h1>
                <h1>
                    {student.nota4}
                </h1>
            </div>
        ))}</div>

    </div>
  )
}

export default Read