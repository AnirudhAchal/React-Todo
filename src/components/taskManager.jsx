import React, { Component } from "react";
import Task from "./task.jsx";
import { Button, Grid } from "@material-ui/core";

class TaskManager extends Component {
  constructor(props) {
    super(props);

    this.addNewTask = this.addNewTask.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.handleEditTask = this.handleEditTask.bind(this);
    this.handleSaveTask = this.handleSaveTask.bind(this);
    this.handleCancelTask = this.handleCancelTask.bind(this);
    this.handleCompleteTask = this.handleCompleteTask.bind(this);
    this.handleChangeTask = this.handleChangeTask.bind(this);
    this.nextID = 1;

    this.state = {
      tasks: [],
    };
  }

  addNewTask() {
    const { tasks } = this.state;

    const newTask = {
      id: this.nextID++,
      task: "New Task",
      originalTask: "New Task",
      editingMode: true,
      done: false,
    };

    tasks.push(newTask);

    this.setState({
      tasks: tasks,
    });
  }

  handleDeleteTask(task) {
    const { tasks } = this.state;
    const newTasks = tasks.filter((newTask) => newTask !== task);
    this.setState({
      tasks: newTasks,
    });
  }

  handleEditTask(task) {
    const { tasks } = this.state;

    const index = tasks.indexOf(task);
    const newTasks = [...tasks];
    newTasks[index].editingMode = true;

    this.setState({
      tasks: newTasks,
    });
  }

  handleSaveTask(task) {
    const { tasks } = this.state;
    const index = tasks.indexOf(task);
    const newTasks = [...tasks];
    newTasks[index].originalTask = newTasks[index].task;
    newTasks[index].editingMode = false;

    this.setState({
      tasks: newTasks,
    });
  }

  handleCancelTask(task) {
    const { tasks } = this.state;
    const index = tasks.indexOf(task);
    const newTasks = [...tasks];
    newTasks[index].editingMode = false;
    newTasks[index].task = newTasks[index].originalTask;

    this.setState({
      tasks: newTasks,
    });
  }

  handleCompleteTask(task) {
    const { tasks } = this.state;
    const index = tasks.indexOf(task);
    const newTasks = [...tasks];
    newTasks[index].done = true;

    this.setState({
      tasks: newTasks,
    });
  }

  handleChangeTask(task, newTaskValue) {
    const { tasks } = this.state;
    const index = tasks.indexOf(task);
    const newTasks = [...tasks];
    newTasks[index].task = newTaskValue;
  }

  render() {
    return (
      <React.Fragment>
        <Grid
          container
          spacing={3}
          direction="column"
          alignItems="center"
          justify="center"
        >
          {this.state.tasks.map((task) => (
            <Grid item xs={12}>
              <Task
                key={task.id}
                task={task}
                onDeleteTask={this.handleDeleteTask}
                onEditTask={this.handleEditTask}
                onSaveTask={this.handleSaveTask}
                onCancelTask={this.handleCancelTask}
                onCompleteTask={this.handleCompleteTask}
                onChangeTask={this.handleChangeTask}
              />
            </Grid>
          ))}

          <Grid item>
            <div>
              <Button variant="contained" onClick={this.addNewTask}>
                New Task
              </Button>
            </div>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default TaskManager;
