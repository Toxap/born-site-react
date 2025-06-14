import './Courses.css'

export default function Courses() {
  const courses = [
    { id: 1, title: 'React Basics', image: 'https://placekitten.com/300/200' },
    { id: 2, title: 'Advanced React', image: 'https://placekitten.com/301/200' },
    { id: 3, title: 'Vite Essentials', image: 'https://placekitten.com/302/200' },
    { id: 4, title: 'State Management', image: 'https://placekitten.com/303/200' },
    { id: 5, title: 'Testing React', image: 'https://placekitten.com/304/200' },
  ]

  return (
    <section className="courses">
      <h2 className="courses-title">Наши курсы</h2>
      <div className="courses-list">
        {courses.map((course) => (
          <div className="course-card" key={course.id}>
            <img src={course.image} alt={course.title} />
            <h3>{course.title}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}
