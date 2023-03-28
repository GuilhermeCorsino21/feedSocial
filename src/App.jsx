import { Header } from './components/Header';
import { Post } from './components/Post';
import { SideBar } from './components/Sidebar';

import styles from './App.module.css';

import './globals.css'

// author: { avatar_url: "", name: "", role: "", }
//publishedAt: Date 
//content: String
const posts = [
  {
    id: 1,
    author: {
      avatarUrl:"https://github.com/GuilhermeCorsino21.png",
      name: "Luiz Guilherme Bastos",
      role: "Front-End Developer",
    },
    content: [
      { type: 'paragraph' , content: 'Fala galeraa 👋'},
      { type: 'paragraph' , content: 'Estou fazendo mais um projeto para meu portfólio utilizando o REACT.js'},
      {type: 'link', content: '@GuilhermeCorsino21'}
    ],
    publishedAt: new Date('2023-03-25 11:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl:"https://github.com/dmalberto.png",
      name: "Diego Alberto",
      role: "CTO @Efi",
    },
    content: [
      { type: 'paragraph' , content: 'Fala galeraa 👋'},
      { type: 'paragraph' , content: 'Estou fazendo mais um projeto para meu portfólio utilizando o REACT.js'},
      {type: 'link', content: '@GuilhermeCorsino21'}
    ],
    publishedAt: new Date('2023-03-27 11:00:00'),
  }
];

export function App() {
  

  return (
    <div>

      <Header />

      <div className={styles.wrapper}>
        <SideBar/>
        <main>

        {posts.map( post => {
          return (
          <
            Post 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />  
          ) 
        })}
      
        </main>
      </div>

    </div>
  )
};
   