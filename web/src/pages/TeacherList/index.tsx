import React from 'react'

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'
import Input from '../../components/Input'
import Select from '../../components/Select'

import './styles.css'

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <Select
                        name="subject"
                        label="Matéria"
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Computação', label: 'Computação' },
                            { value: 'Educação física', label: 'Educação física' },
                            { value: 'Espanhol', label: 'Espanhol' },
                            { value: 'Física', label: 'Física' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'História', label: 'História' },
                            { value: 'Inglês', label: 'Inglês' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Música', label: 'Música' },
                            { value: 'Português', label: 'Português' },
                            { value: 'Química', label: 'Química' }
                        ]}
                    />
                    <Select
                        name="week_day"
                        label="Dia da Semana"
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-feira' },
                            { value: '2', label: 'Terça-feira' },
                            { value: '3', label: 'Quarta-feira' },
                            { value: '4', label: 'Quinta-feira' },
                            { value: '5', label: 'Sexta-feira' },
                            { value: '6', label: 'Sábado' }
                        ]}
                    />
                    <Input type="time" name="time" label="Hora" />
                </form>
            </PageHeader>

            <main>
                <TeacherItem
                    avatar="https://lh3.googleusercontent.com/a-/AOh14GiSPKohT4i0sNJc6GNeLKIxxFuPjkcaqaA0-LC3QA=s96-c-rg-br100"
                    name="Carlos Roberto De Rolt Jr."
                    subject="Violão"
                    description="Entusiasta das melhores músicas de anime. Grande conhecedor de Naruto e mestre da música erudita, você vai aprender os melhores hits da vila oculta da folha com grande classe e arranjos únicos."
                    price="R$ 80,00"
                />

                <TeacherItem
                    avatar="https://media-exp1.licdn.com/dms/image/C5603AQGbssztv_gZfA/profile-displayphoto-shrink_200_200/0?e=1602720000&v=beta&t=kKKPTyUQBQt77-Fpj0nLOsKMyDsiXb5FUIkl7Fz1heI"
                    name="Nadya Vicentini"
                    subject="Inglês"
                    description="Poliglota por consequência, curiosa de nascença. Tem um espírito livre e jovem, ama viajar e conhecer novas culturas. Atualmente, domina mais de 5 idiomas e está em busca de aprender muito mais e compartilhar o conhecimento com você"
                    price="R$ 120,00"
                />

                <TeacherItem
                    avatar="https://instagram.ffln1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/52416039_572100413309523_4096855864978178048_n.jpg?_nc_ht=instagram.ffln1-1.fna.fbcdn.net&_nc_ohc=cFl6Reh_4RYAX-9TgK4&oh=fbdb563c642ba70e9e8585d4de90cde1&oe=5F68544B"
                    name="Felipe Nardi"
                    subject="Meditação"
                    description="Conhecedor das artes milenares hinduístas. Tem controle total sobre suas emoções. Praticante assíduo de yoga, ele vai te ensinar a ter foco, leveza e controlar sua raiva através da técnica dos 8 portões de chakra."
                    price="R$ 75,00"
                />
            </main>
        </div>
    )
}

export default TeacherList
