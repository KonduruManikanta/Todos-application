const Todo = require('../models/Todo');

// Create Todo
exports.createTodo = async (req, res) => {
  const { title, description } = req.body;
  const userId = req.user.id;  // Assuming JWT token is verified

  try {
    const todo = await Todo.create({
      title,
      description,
      status: 'pending',  // Default status
      userId
    });
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
