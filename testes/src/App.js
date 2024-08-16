import Navbar from './components/navbar.jsx';
import Container from './components/container.jsx';
import Chatbar from './components/chatbar.jsx';
import Sidebar from './components/sidebar.jsx';
import './components/css/style.css'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Navbar />
      <Container />
      <Chatbar />
    </div>
  );
}

export default App;
