import { Header } from './components/Header';
import { Post } from './Post';
import './global.css';
export function App() {
  return (
    <div>
      <Header />
    <Post 
      author="Brenda Renata"
      content="Lorem ipsum dolor" 
      />
    <Post 
      author="Beatriz Suellen"
      content="Lorem ipsum dolor" 
      />
    </div>
  )
}
