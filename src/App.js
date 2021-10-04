import "./App.css";
import { motion } from "framer-motion";


function App() {
  return (
    <div className="App">
      <motion.form 
      style={{transfor:'translateX(53.2873vw)'}}
      initial={{transform:'translateX(53.2873vw)', x:'-100vw'}}
      animate={{x:'none'}}>
        <h1>Create An Account</h1>
        <label>
          Email:
          <input name="email" type="email" required />
        </label>
        <label>
          Password:
          <input name="password" type="password" required />
        </label>
        <button>Sign Up!</button>
      </motion.form>
    </div>
  );
}

export default App;
