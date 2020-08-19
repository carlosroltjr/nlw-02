import React from 'react'

import whatsappIcon from '../../assests/images/icons/whatsapp.svg'

import './styles.css'

interface TeacherItemProps {
    avatar: string
    name: string
    subject: string
    description1: string
    description2: string
    price: string
}

const TeacherItem: React.FunctionComponent<TeacherItemProps> = (props) => {
    return (
        <article className="teacher-item">
            <header>
                <img src={props.avatar} alt="Foto de perfil" />
                <div>
                    <strong>{props.name}</strong>
                    <span>{props.subject}</span>
                </div>
            </header>

            <p>
                {props.description1}
                <br /><br />
                {props.description2}
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>{props.price}</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem
