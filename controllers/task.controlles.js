import { request } from 'express';
import {pool} from '../db.js'

export const getTask = async (req, res) =>{

    try {

    const [Gtarea] =  await pool.query("SELECT * FROM tasks WHERE id = ?", [req.params.id]);

    if(Gtarea.length === 0 ){
        return res.status(404).json({message: "task not found"})
    }
    res.json(Gtarea[0])
        
    } catch (error) {
        return res.status(500).json({ message: error.message})
    }
    

 
}

export const getTasks = async(req, res) =>{

    try {
        const [Gtareas] =  await pool.query("SELECT * FROM tasks ORDER BY createAT ASC");
    res.json(Gtareas)
    console.log(Gtareas)
        
    } catch (error) {
        return res.status(500).json({ message: error.message})
    }
    
}



export const createTask = async (req, res) =>{

    try {
        const {title, description} = req.body
    const [Ctareas] = await pool.query('INSERT INTO tasks(title,description) VALUES (?,?)', 
    [
        title,
        description
    ]

    )
    console.log(Ctareas)
    res.json({
        id: Ctareas.insertId,
        title,
        description
    })
        
    } catch (error) {
        return res.status(500).json({ message: error.message})
    }
    
    
}

export const updateTask = async(req, res) =>{

    try {
        const [Utask] = await pool.query("UPDATE  tasks SET ? WHERE id = ?", [req.body, req.params.id])

        res.json(Utask)
        
    } catch (error) {
        return res.status(500).json({ message: error.message})
    }
    

}


export const deleteTask = async(req, res) =>{

    try {

        const [Dtask] = await pool.query("DELETE FROM tasks WHERE id = ?", [req.params.id])

    if(Dtask.affectedRows === 0 ){
        return res.status(404).json({message: "task not found"})
    }
    // res.json(Dtask)

    return res.sendStatus(204)
        
    } catch (error) {
        return res.status(500).json({ message: error.message}) 
    }

    

}