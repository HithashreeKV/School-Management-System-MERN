// Home.js
// import React from 'react';
// import './Home.css'; // Import the CSS file

// function Home() {
//   return (
//     <div className="home-container">
//       <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Hibbing_High_School_2014.jpg/1200px-Hibbing_High_School_2014.jpg" alt="Background" className="background-image" />
//       <div className="content">
//         <h1>Welcome to the School Management System</h1>
//         <p>Your gateway to managing school activities efficiently.</p>
//       </div>
//     </div>
//   );
// }

// export default Home;

// client/src/components/Home.js
import React from 'react';
import './Home.css'; // If you have specific styles for Home

const Home = () => {
  return (
    <div className="home-bg App-header">
      <h1>Welcome to the School Management System</h1>
      <p>Your gateway to managing school activities efficiently.</p>
    </div>
  );
};

export default Home;
