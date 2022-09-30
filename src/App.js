import Header from "./Components/Header";
import Notes from "./Components/Notes";

function App() {
   return (
      <div className="max-w-[960px] mx-auto min-h-full">
         <Header />
         <Notes size={20} />
      </div>
   );
}

export default App;
