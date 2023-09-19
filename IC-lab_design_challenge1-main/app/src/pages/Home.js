import React from 'react';
import './Home.css'; // Import your custom CSS file for styling

const Home = () => {
  
  return (
    <div className='home-container'>
      <div className='container mt-5'>
        <div className='card'>
          <div className='card-body'>
            <div className='row'>
              <div className='col-md-4 col-sm-12'>
                <img
                  src="https://i.guim.co.uk/img/media/607d649ad00c8701357f592ae36a5bd57666bbac/95_0_3598_2160/master/3598.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=9f96d29e2f217497fa4a461c3a9a6375"
                  alt="Profile"
                  className='img-fluid rounded hover-bounce'
                />
              </div>
              <div className='col-md-8 col-sm-12'>
                <h1 className='display-4'>Pradyumna P</h1>
                <p className='lead'>Student at Sahyadri College of Engineering & Management</p>
                <p className='lead'>Information Science Department</p>
                <p className='lead'>2nd Year</p>
                <p className='lead'>Learning</p>
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item'>
                    <span className="fw-bold">Web Development:</span> Frontend and Backend
                  </li>
                  <li className='list-group-item'>
                    <span className="fw-bold">Database Management:</span> SQL, NoSQL
                  </li>
                  <li className='list-group-item'>
                    <span className="fw-bold">Data Structures and Algorithms:</span> Problem Solving
                  </li>
                  <li className='list-group-item'>
                    <span className="fw-bold">Machine Learning:</span> AI and ML Models
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='card mt-3'>
          <div className='card-body'>
            <h3 className='card-title'>About</h3>
            <p className='card-text'>
              Hi, I'm Pradyumna, a dedicated student in the Information Science department. I'm passionate about exploring the world of technology and computer science, with a keen interest in web development, database management, and machine learning.
            </p>
            <p className='card-text'>
              In addition to my academic pursuits, I enjoy coding and solving complex problems. My knowledge includes proficiency in various programming languages such as Python, JavaScript, and Java, and I'm continuously expanding my skillset.
            </p>
            <p className='card-text'>
              I am always eager to collaborate with like-minded individuals and take on challenging projects. Whether it's building a website, optimizing a database, or working on cutting-edge machine learning algorithms, I'm committed to delivering high-quality solutions.
            </p>
            <p className='card-text'>
              Feel free to connect with me, and let's explore exciting opportunities together!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
