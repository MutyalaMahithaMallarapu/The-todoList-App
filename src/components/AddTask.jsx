import React, {useState} from "react";
import '../styleSheet/StyleSheet.css'
import Paper from '@mui/material/Paper';
import ToDoListImg from '../assets/ToDoList.webp'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import useToDoListStore from '../zustandStore/toDoListStore';

const AddTask = () => {
    const { data, setData } = useToDoListStore();
    const [title, setTitle] = useState('')
    const [summary, setSummary] = useState('')
 
    const handleOnClick = () => {
        const newToDoData = {
            id: Date.now(),
            title: title,
            summary: summary,
        }
        setData(newToDoData)
        setTitle('')
        setSummary('')
    }

    return (
        <Paper elevation={10}>
            <div className="addTask">
                <div>
                    <img className="imageStyle" src={ToDoListImg}></img>
                </div>
                <div className="inputStyle">
                    <TextField
                        id="outlined-basic"
                        className="textField"
                        label="Add Task title"
                        variant="outlined"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>
                <div className="inputStyle">
                    <TextField
                        id="outlined-basic"
                        className="textField"
                        label="Add Task summary"
                        variant="outlined"
                        value={summary}
                        onChange={(e) => { setSummary(e.target.value) }}
                    />
                </div>
                <div className="TodoButtonStyle" >
                    <Button
                        className="buttonStyle"
                        variant="contained"
                        onClick={handleOnClick}
                    > Add to do
                    </Button>
                </div>
                <div className="toDoListTitle">
                    <h6> The to do List App by M.M.Mahitha (m.mutyalamahitha@gmail.com) </h6>
                </div>
            </div>
        </Paper>
    )
}

export default AddTask