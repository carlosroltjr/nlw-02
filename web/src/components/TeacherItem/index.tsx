import React from 'react'

import whatsappIcon from '../../assests/images/icons/whatsapp.svg'

import api from '../../services/api'

import './styles.css'

export interface Teacher {
    id: number
    avatar: string
    name: string
    subject: string
    bio: string
    cost: string
    whatsapp: string
}

interface TeacherItemProps {
    teacher: Teacher
}

const TeacherItem: React.FunctionComponent<TeacherItemProps> = ({ teacher }) => {
    function createNewConnection() {
        api.post('/connections', {
            user_id: teacher.id
        })
    }

    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt={teacher.name} />
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>

            <p>{teacher.bio}</p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ {teacher.cost}</strong>
                </p>

                <a href={`https://wa.me/${teacher.whatsapp}?text=Oi+professor%28a%29%2C+te+achei+pela+plataforma+de+estudos+online+Proffy+e+me+interessei+nas+suas+aulas+de+${encodeURIComponent(teacher.subject)}%2C+podemos+marcar+um+hor%C3%A1rio%3F`}
                    onClick={createNewConnection}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </a>
            </footer>
        </article>
    )
}

export default TeacherItem
