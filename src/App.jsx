import { Header } from './components/Header';
import { Post } from './components/Post';
import { SideBar } from './components/Sidebar';

import styles from './App.module.css';

import './globals.css'


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
   