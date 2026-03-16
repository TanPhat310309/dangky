import React, { useState } from 'react';
import LogIn from './components/LogIn';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';

function App() {
  // Quản lý trang hiện tại đang hiển thị: 'login', 'register', hoặc 'forgot'
  const [currentPage, setCurrentPage] = useState('login');

  return (
    <div className="App">
      {currentPage === 'login' && <LogIn onSwitchTo={setCurrentPage} />}
      {currentPage === 'register' && <Register onSwitchTo={setCurrentPage} />}
      {currentPage === 'forgot' && <ForgotPassword onSwitchTo={setCurrentPage} />}
    </div>
  );
}

export default App;