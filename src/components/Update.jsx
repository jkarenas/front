import React,{useState} from 'react'
import axios from 'axios'

const Update = () => {
    const [updateStudent, setUpdateStudent] = useState({
        nombre: "",
        id: '',
        nota1: '',
        nota2: '',
        nota3: '',
        nota4: '',
        promedio: 0
    })
    console.log("el del update de q",updateStudent)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.put(`http://localhost:3003/students/update/${updateStudent.id}`, updateStudent)
            window.location.reload()
        } catch (error) {
            console.log(error)
        }

    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdateStudent({ ...updateStudent, [name]: value })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Tu nombre '
                    name="nombre"
                    value={updateStudent.nombre}
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    placeholder='id'
                    name="id"
                    value={updateStudent.id}
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    placeholder='Nota 1'
                    name="nota1"
                    value={updateStudent.nota1}
                    onChange={handleInputChange}
                />
                <input
                    type="Nota 2"
                    placeholder='Nota 2'
                    name="nota2"
                    value={updateStudent.nota2}
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    placeholder='Nota 3'
                    name="nota3"
                    value={updateStudent.nota3}
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    placeholder='Nota 4'
                    name="nota4"
                    value={updateStudent.nota4}
                    onChange={handleInputChange}
                />
                <button type="submit">Update Student</button>
            </form>
        </div>
    )
}

export default Update