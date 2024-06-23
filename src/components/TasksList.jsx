import React from "react";
import Paper from '@mui/material/Paper';
import '../styleSheet/StyleSheet.css'
import useToDoListStore from '../zustandStore/toDoListStore';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';

const TasksList = () => {
    const { data, deleteTodo } = useToDoListStore();
    console.log(data)
    const handleOnClickDelete = (id) => {
        deleteTodo(id)
    }
    return (
        <Paper elevation={10}>
            <div className="tasksList">
                {(data.length === 0) ? (
                    <div className="noDataPage">
                        <h1> You Currently have Nothing to do, Get busy mate...</h1>
                    </div>
                ) : (
                    <Grid container className='tasksListGrid' spacing={3}>
                    {data.map((item, i) => (
                        <Grid key={item.id} item xs={4}>
                            <Card className="cardStyling" key={item.id} sx={{ maxWidth: 200 }}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.summary}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Edit</Button>
                                    <Button onClick={() => handleOnClickDelete(item.id)} size="small">Delete</Button>
                                    <Checkbox color="success" />
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                ) }
            </div>
        </Paper>
    )
}

export default TasksList