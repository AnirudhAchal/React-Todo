import React, { Component } from "react";
import { Button, ButtonGroup, TextField } from "@material-ui/core";
import { Save, Edit, Delete, Done } from "@material-ui/icons";

class Task extends Component {
  renderTask() {
    const {
      task,
      onDeleteTask,
      onEditTask,
      onSaveTask,
      onCancelTask,
      onCompleteTask,
      onChangeTask,
    } = this.props;

    if (task.editingMode) {
      return (
        <div>
          <TextField
            defaultValue={task.task}
            onChange={(e) => onChangeTask(task, e.target.value)}
          />
          <ButtonGroup>
            <Button
              variant="contained"
              color="primary"
              onClick={() => onSaveTask(task)}
              startIcon={<Save />}
            >
              Save
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => onCancelTask(task)}
            >
              Cancel
            </Button>
          </ButtonGroup>
        </div>
      );
    } else if (task.done) {
      return (
        <React.Fragment>
          <p>
            {task.task} <Done />
          </p>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => onDeleteTask(task)}
            startIcon={<Delete />}
          >
            Delete
          </Button>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <p>{task.task}</p>
          <ButtonGroup>
            <Button
              variant="contained"
              color="primary"
              startIcon={<Edit />}
              onClick={() => onEditTask(task)}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => onDeleteTask(task)}
              startIcon={<Delete />}
            >
              Delete
            </Button>
            <Button
              variant="contained"
              style={{ backgroundColor: "#00DB1E", color: "#FFFFFF" }}
              onClick={() => onCompleteTask(task)}
              startIcon={<Done />}
            >
              Done
            </Button>
          </ButtonGroup>
        </React.Fragment>
      );
    }
  }

  render() {
    return this.renderTask();
  }
}

export default Task;
