import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import TodoApp from './TodoApp'
import todoReducer from './todoSlice'

const renderWithProvider = (ui, { reduxState } = {}) => {
  const store = configureStore({
    reducer: {
      todos: todoReducer
    },
    preloadedState: reduxState
  })
  return render(
    <Provider store={store}>
      {ui}
    </Provider>
  )
}

describe('TodoApp', () => {
  beforeEach(() => {
    renderWithProvider(<TodoApp />)
  })

  it('renders TODO List heading', () => {
    expect(screen.getByText(/TODO List/i)).toBeInTheDocument()
  })

  it('allows entering text in the input field', () => {
    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'New Todo Item' } })
    expect(input.value).toBe('New Todo Item')
  })

  it('adds a new todo when form is submitted', () => {
    const input = screen.getByRole('textbox')
    const addButton = screen.getByText('Add')
    
    fireEvent.change(input, { target: { value: 'New Todo Item' } })
    fireEvent.click(addButton)
    
    expect(screen.getByText('New Todo Item')).toBeInTheDocument()
  })

  it('does not add empty todos', () => {
    const addButton = screen.getByText('Add')
    const initialTodos = screen.queryAllByRole('listitem').length
    
    fireEvent.click(addButton)
    
    expect(screen.queryAllByRole('listitem').length).toBe(initialTodos)
  })

  it('removes a todo when Remove button is clicked', () => {
    const input = screen.getByRole('textbox')
    const addButton = screen.getByText('Add')
    
    fireEvent.change(input, { target: { value: 'Todo to remove' } })
    fireEvent.click(addButton)
    
    const removeButton = screen.getByText('Remove')
    fireEvent.click(removeButton)
    
    expect(screen.queryByText('Todo to remove')).not.toBeInTheDocument()
  })
})