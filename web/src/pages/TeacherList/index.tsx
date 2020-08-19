import React from 'react'

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'
import Input from '../../components/Input'

import './styles.css'

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <Input name="subject" label="Matéria" />
                    <Input name="week_day" label="Dia da semana" />
                    <Input type="time" name="time" label="Hora" />
                </form>
            </PageHeader>

            <main>
                <TeacherItem
                    avatar="https://lh3.googleusercontent.com/a-/AOh14GiSPKohT4i0sNJc6GNeLKIxxFuPjkcaqaA0-LC3QA=s96-c-rg-br100"
                    name="Carlos Roberto De Rolt Jr."
                    subject="Violão"
                    description1="Entusiasta das melhores músicas de anime."
                    description2="Grande conhecedor de Naruto e mestre da música erudita, você vai aprender os melhores hits da vila oculta da folha com grande classe e arranjos únicos."
                    price="R$ 80,00"
                />

                <TeacherItem
                    avatar="https://media-exp1.licdn.com/dms/image/C5603AQGbssztv_gZfA/profile-displayphoto-shrink_200_200/0?e=1602720000&v=beta&t=kKKPTyUQBQt77-Fpj0nLOsKMyDsiXb5FUIkl7Fz1heI"
                    name="Nadya Vicentini"
                    subject="Inglês"
                    description1="Poliglota por consequência, curiosa de nascença."
                    description2="Tem um espírito livre e jovem, ama viajar e conhecer novas culturas. Atualmente, domina mais de 5 idiomas e está em busca de aprender muito mais e compartilhar o conhecimento com você"
                    price="R$ 120,00"
                />
            </main>
        </div>
    )
}

export default TeacherList
