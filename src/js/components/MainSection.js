import React from 'react'
import Footer from './Footer'
import VisibleTodoList from '../containers/VisibleTodoList'

const MainSection = ({ todosCount, completedCount, actions }) =>
  (
    <section className="main">
      {
        !!todosCount && 
        <span>
          <input
            className="toggle-all"
            type="checkbox"
            checked={completedCount === todosCount}
          />
          <label onClick={actions.completeAllTodos}/>
        </span>
      }
      <VisibleTodoList />
      {
        !!todosCount &&
        <Footer
          completedCount={completedCount}
          activeCount={todosCount - completedCount}
          onClearCompleted={actions.clearCompleted}
        />
      }
    </section>
  )

export default MainSection;