import { Header } from './components/Header';
import { Post } from './Post';

import './globals.css'
import styles from './App.module.css';
import { SideBar } from './components/Sidebar';

export function App() {
  

  return (
    <div>

      <Header />

      <div className={styles.wrapper}>
        <SideBar/>
        <main>
          
      <Post
      author="Guilherme Corsino" 
      content= "Lorem"/>

      <Post
      author="Guilherme Bastos" 
      content= "Lorem2"/>
      
      
      
        </main>
      </div>

    </div>
  )
};
   