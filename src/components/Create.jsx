import React, { useState } from 'react'
import axios from 'axios'

const Create = () => {
    const [newStudent, setNewStudent] = useState({
        nombre: "",
        nota1: '',
        nota2: '',
        nota3: '',
        nota4: '',
        promedio: 0
    })
    console.log(newStudent)
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e.target.nombre.value);

        try {
            await axios.post('http://localhost:3003/students/create', newStudent)
        } catch (error) {

        }

    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewStudent({ ...newStudent, [name]: value });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Tu nombre '
                    name="nombre"
                    value={newStudent.nombre}
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    placeholder='Nota 1'
                    name="nota1"
                    value={newStudent.nota1}
                    onChange={handleInputChange}
                />
                <input
                    type="Nota 2"
                    placeholder='Nota 2'
                    name="nota2"
                    value={newStudent.nota2}
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    placeholder='Nota 3'
                    name="nota3"
                    value={newStudent.nota3}
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    placeholder='Nota 4'
                    name="nota4"
                    value={newStudent.nota4}
                    onChange={handleInputChange}
                />
                <button type="submit">Add Student</button>
            </form>
        </div>
    )
}

export default Create