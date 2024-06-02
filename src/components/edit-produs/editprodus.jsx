import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from 'axios';

export default function UpdateProdus() {
    const {id} =  useParams();
      const [values, setValues] = useState({
         id: id,
         title: '',
         descriere: '',
         pret: ''
      })
      
    useEffect(() => {
        axios.get('http://localhost:3000/meniu/' + id).
        then(res => {setValues({...values, title: res.data.title, descriere: res.data.descriere, pret: res.data.pret})})
        .catch(err => console.log(err))
    }, [])

    const navigate = useNavigate();
    const updateProdusItem = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3000/meniu/' + id, values)
        .then(res => {
            navigate('/');})
        .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={updateProdusItem}>
                <div>
                    <label>Title</label>
                    <input type="text" name="title" className="title" placeholder="title" value={values.title} 
                    onChange={e => setValues({...values,title:e.target.value})}/>
                      <label>Descriere</label>
                    <input type="text" name="descriere" className="title" placeholder="title" value={values.descriere} 
                    onChange={e => setValues({...values,descriere:e.target.value})}/>
                    <input type="text" name="pret" className="title" placeholder="title" value={values.pret} 
                    onChange={e => setValues({...values,pret:e.target.value})}/>
                </div>
                <button> Update</button>
            </form>
        </div>
    )
} 
