import { useState } from 'react'
import Header from './components/Header.js'
import Tasks from './components/Tasks.js'


function App() {
  const [tasks, setTasks] = useState([
      {
          id: 1,
          text: 'Watch anime',
          day: '228',
          reminder: true
      },

      {
          id: 2,
          text: 'Shitpost',
          day: '1488',
          reminder: true
      },

      {
          id: 3,
          text: 'Cry because no gf',
          day: 'kawo',
          reminder: false
      }
  ])

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleRemider = (id) => {
    setTasks(
      tasks.map((taskItem) => taskItem.id === id ? { ...taskItem, reminder: !taskItem.reminder } : taskItem)
    )
  }

  return (
    <div className="container">
      <Header title='Task Tracker'/>
      {tasks.length > 0? (
          <Tasks tasks={tasks} 
            onDelete={deleteTask}
            onToggle={toggleRemider}/>
          ) : (
            'No Tasks To Show'
          )}
    </div>
  );
}

export default App;
