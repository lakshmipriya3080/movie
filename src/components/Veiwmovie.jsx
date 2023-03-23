import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Veiwmovie = (props) => {
    var[movie,setMovie]=useState(props.data)
      console.log("add page props"+props.data)
      const handleChange=(e)=>{
          const{name,value}=e.target
          setMovie({...movie,[name]:value})
          console.log(movie)
      }

    
    const saveData=()=>{
      console.log("Button clicked")
      if(props.method=="post"){
      axios.post(" http://localhost:3005/movie",movie)
      .then(response=>{
          alert("successfully added")
      })
      .catch(error=>{
          alert("Failed")
      })
    }else if(props.method=="put"){
      axios.put(" http://localhost:3005/movie/"+movie.id,movie)
      .then((response)=>{
        console.log("put data"+response.data)
        alert("success")
        window.location.reload(false);
      })
      .catch((err)=>{
        console.log(err)
      })
    }
  }
  return (
    <div>
        <TextField label='id' variant='outlined' name='id' value={movie.id} onChange={handleChange}></TextField><br></br>
      <TextField label='name' variant='outlined' name='name' value={movie.name} onChange={handleChange}></TextField><br></br>
      <TextField label='director' variant='outlined' name='director' value={movie.director} onChange={handleChange}></TextField><br></br>
      <TextField label='language' variant='outlined' name='language' value={movie.language} onChange={handleChange}></TextField><br></br>
      <TextField label='genere' variant='outlined' name='genere' value={movie.genere} onChange={handleChange}></TextField><br></br>
      <TextField label='release_year' variant='outlined 'name='release_year' value={movie.release_year} onChange={handleChange}></TextField><br></br>
      <Button variant='contained' color='success' type='submit' onClick={saveData}>SUBMIT</Button>
      
    </div>
  )
  }

export default Veiwmovie
