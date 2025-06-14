import './Courses.css'
import ChromaGrid from './ChromaGrid.jsx'

export default function Courses() {
  const courses = [
    {
      id: 1,
      title: 'React Basics',
      subtitle: 'Базовый курс',
      image: 'https://placekitten.com/300/200',
      borderColor: '#4F46E5',
      gradient: 'linear-gradient(145deg, #4F46E5, #000)',
      url: '#',
    },
    {
      id: 2,
      title: 'Advanced React',
      subtitle: 'Продвинутый уровень',
      image: 'https://placekitten.com/301/200',
      borderColor: '#10B981',
      gradient: 'linear-gradient(210deg, #10B981, #000)',
      url: '#',
    },
    {
      id: 3,
      title: 'Vite Essentials',
      subtitle: 'Быстрый старт',
      image: 'https://placekitten.com/302/200',
      borderColor: '#F59E0B',
      gradient: 'linear-gradient(165deg, #F59E0B, #000)',
      url: '#',
    },
    {
      id: 4,
      title: 'State Management',
      subtitle: 'Управление состоянием',
      image: 'https://placekitten.com/303/200',
      borderColor: '#EF4444',
      gradient: 'linear-gradient(195deg, #EF4444, #000)',
      url: '#',
    },
    {
      id: 5,
      title: 'Testing React',
      subtitle: 'Тестирование приложений',
      image: 'https://placekitten.com/304/200',
      borderColor: '#8B5CF6',
      gradient: 'linear-gradient(225deg, #8B5CF6, #000)',
      url: '#',
    },
    {
      id: 6,
      title: 'Deploy & Cloud',
      subtitle: 'Облачные технологии',
      image: 'https://placekitten.com/305/200',
      borderColor: '#06B6D4',
      gradient: 'linear-gradient(135deg, #06B6D4, #000)',
      url: '#',
    },
  ]

  return (
    <section className="courses" id="courses">
      <h2 className="courses-title">Наши курсы</h2>
      <ChromaGrid items={courses} columns={courses.length} rows={1} />
    </section>
  )
}
