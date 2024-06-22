import React from "react";
import '../styleSheet/StyleSheet.css'
import Paper from '@mui/material/Paper';
import ToDoListImg from '../assets/ToDoList.webp'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import useToDoListStore from '../zustandStore/toDoListStore';

const AddTask = () => {
    const { formData, setFormData } = useToDoListStore();
    const handleChange = (e, type) => {
        const { value } = e.target;
        setFormData({ [type]: value });
    };
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
                        value={formData.title}
                        onChange={(e) => { handleChange(e, 'title') }}
                    />
                </div>
                <div className="inputStyle">
                    <TextField
                        id="outlined-basic"
                        className="textField"
                        label="Add Task summary"
                        variant="outlined"
                        value={formData.summary}
                        onChange={(e) => { handleChange(e, 'summary') }}
                    />
                </div>
                <div className="TodoButtonStyle" >
                    <Button
                        className="buttonStyle"
                        variant="contained"
                        // onClick={setIsToDoListBtnClicked(true)}
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