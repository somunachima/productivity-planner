import { useState } from 'react';
import Swal from "sweetalert2"

const AddTask = ({onSave}) => {
  const [text, setText] = useState('');
  const [type, setType] = useState('');
  const [day, setDay] = useState('');
  const [time, setTime] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    if (!text && !day && !time && !type) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Fill in your task, type of task, date and time or close the form!'
        })
    } else if (!text && day) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Fill in your task!'
        })
    } else if (!type && day) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Fill in your type of task!'
        })
    } else if (text && !day) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Fill in your date!'
        })
    } else if (type && !day) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Fill in your date!'
        })
    } else if (text && !time) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Fill in your time!'
        })
    } else if (day && !time) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Fill in your time!'
        })
    } else {
        onSave({ text, day, time, type });
    }
    setText('');
    setTime('');
    setDay('');
    setTime('');
  }
  return (
      <form className="add-form" onSubmit={onSubmit}>
          <div className="form-control">
              <label>Task</label>
              <input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)} />
          </div>
          <div className="form-control">
              <label>Type of Task</label>
              <input type="text" placeholder="Add Type of Task" value={type} onChange={(e) => setType(e.target.value)} />
          </div>
          <div className="form-control">
              <label>Day</label>
              <input type="text" placeholder="Add Day" value={day} onChange={(e) => setDay(e.target.value)} />
          </div>
          <div className="form-control">
              <label>Time</label>
              <input type="text" placeholder="Add Time" value={time} onChange={(e) => setTime(e.target.value)} />
          </div>
          <input type="submit" className="btn btn-block" value="Save Task" />
      </form>
    )
}
export default AddTask
