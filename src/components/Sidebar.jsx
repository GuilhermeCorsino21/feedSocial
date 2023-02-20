import {PencilSimple } from 'phosphor-react'

import styles from './Sidebar.module.css';

export function SideBar(){
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src='https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50'
                />
            <div className={styles.profile}>
                <img className ={styles.avatar}src='https://media.licdn.com/dms/image/C4D03AQEwBzdQKw7e5A/profile-displayphoto-shrink_800_800/0/1643218915096?e=1682553600&v=beta&t=OIxaHuwjzBqKekBrlm4cJYGEcKfAe1eHOP5RqldW0YU' 
                
                 />

            <strong> Luiz Guilherme Bastos</strong>
            <span> Web Developer</span>
            </div>

            <footer>
                <a href='#'>
                    <PencilSimple size={20}/>
                    Editar seu perfil
                </a>
            </footer>
       </aside>
    );
};