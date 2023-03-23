import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Movienew = () => {
    var [update, setUpdate] =useState(false)
    var [singleValue, setSingleValue] = useState([])
    var [movie, setMovie] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3005/movie")
            .then(response => {
                console.log(response.data)
                setMovie(movie = response.data)
            })
            .catch(err => console.log(err))
    }, [])
    const deleteMovie = (id) => {
        console.log("delete clicked" + id);
        axios.delete(" http://localhost:3005/movie" + id)
            .then(response => {
                alert("deleted")
                Window.location.reload(false)
            })
    }
    const updateval = (value) => {
        setSingleValue(value);
        setUpdate(true);
    }
  return (
    <div>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>DIRECTOR</TableCell>
                    <TableCell>LANGUAGE</TableCell>
                    <TableCell>GENERE</TableCell>
                    <TableCell>RELEASE_YEAR</TableCell>
                    <TableCell>DELETE</TableCell>
                    <TableCell>UPDATE</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {movie.map((value, index) => {
                    return <TableRow>
                        <TableCell>{value.id}</TableCell>
                        <TableCell>{value.name}</TableCell>
                        <TableCell>{value.director}</TableCell>
                        <TableCell>{value.language}</TableCell>
                        <TableCell>{value.genere}</TableCell>
                        <TableCell>{value.release_year}</TableCell>
                        <TableCell><Button variant='text' color='error' onClick={() => deleteMovie(value.id)}>DELETE</Button></TableCell>
                        <TableCell><Button variant='text' color='secondary' onClick={() => updateval(value)}>UPDATE</Button></TableCell>
                    </TableRow>
                })}
            </TableBody>


        </Table>
    </TableContainer>
    </div>
  )
}

export default Movienew
