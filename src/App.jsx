import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content with Background Gradient */}
      <main className="min-h-screen flex flex-col justify-center items-center 
bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.3),rgba(255,255,255,0))] 
px-4 sm:px-6">

        <Manager />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
