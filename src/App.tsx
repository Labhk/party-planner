import React, { useState } from 'react';
import { Calendar, Clock, Users, Music, Utensils, MapPin, PartyPopper, Plus, Trash2 } from 'lucide-react';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');
  const [guestCount, setGuestCount] = useState(0);

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask.trim(), completed: false }]);
      setNewTask('');
    }
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <header className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <PartyPopper className="h-16 w-16 text-purple-600" />
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Party Perfect</h1>
          <p className="text-xl text-gray-600">Plan your perfect celebration with ease</p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          <section className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Calendar className="text-purple-600" />
              Event Details
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg">
                <Clock className="text-purple-600" />
                <div>
                  <h3 className="font-medium">Date & Time</h3>
                  <input
                    type="datetime-local"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200"
                  />
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg">
                <MapPin className="text-purple-600" />
                <div>
                  <h3 className="font-medium">Location</h3>
                  <input
                    type="text"
                    placeholder="Enter venue address"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200"
                  />
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg">
                <Users className="text-purple-600" />
                <div>
                  <h3 className="font-medium">Guest Count</h3>
                  <div className="flex items-center gap-4 mt-2">
                    <button
                      onClick={() => setGuestCount(Math.max(0, guestCount - 1))}
                      className="px-3 py-1 bg-purple-100 rounded-md hover:bg-purple-200 transition-colors"
                    >
                      -
                    </button>
                    <span className="text-xl font-medium w-12 text-center">{guestCount}</span>
                    <button
                      onClick={() => setGuestCount(guestCount + 1)}
                      className="px-3 py-1 bg-purple-100 rounded-md hover:bg-purple-200 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold mb-6">Planning Checklist</h2>
            
            <form onSubmit={addTask} className="mb-6">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Add a new task..."
                  className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200"
                />
                <button
                  type="submit"
                  className="p-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                >
                  <Plus className="h-5 w-5" />
                </button>
              </div>
            </form>

            <div className="space-y-3">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                >
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                    className="h-5 w-5 text-purple-600 rounded focus:ring-purple-500"
                  />
                  <span className={`flex-1 ${task.completed ? 'line-through text-gray-400' : ''}`}>
                    {task.text}
                  </span>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Music className="text-purple-600" />
              <h3 className="text-xl font-semibold">Entertainment</h3>
            </div>
            <textarea
              placeholder="Music playlist, games, activities..."
              className="w-full h-32 rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200"
            ></textarea>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Utensils className="text-purple-600" />
              <h3 className="text-xl font-semibold">Menu</h3>
            </div>
            <textarea
              placeholder="Food and beverages..."
              className="w-full h-32 rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200"
            ></textarea>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <PartyPopper className="text-purple-600" />
              <h3 className="text-xl font-semibold">Decorations</h3>
            </div>
            <textarea
              placeholder="Theme, colors, supplies needed..."
              className="w-full h-32 rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;