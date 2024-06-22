import React from "react";
import Paper from '@mui/material/Paper';
import '../styleSheet/StyleSheet.css'
import useToDoListStore from '../zustandStore/toDoListStore';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const TasksList = () => {
    const { formData, isToDoListBtnClicked } = useToDoListStore();
    return (
        <Paper elevation={10}>
            <div className="tasksList">
                {isToDoListBtnClicked &&
                    <Card sx={{ maxWidth: 345 }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {formData.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {formData.summary}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Edit</Button>
                            <Button size="small">Delete</Button>
                        </CardActions>
                    </Card>
                }
            </div>
        </Paper>
    )
}

export default TasksList