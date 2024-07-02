// import React from 'react';
// import { Container, Row, Col, Card } from 'react-bootstrap';
// import { Bar } from 'react-chartjs-2';
// import 'chart.js/auto'; // Ensure Chart.js is loaded

// const Dashboard = () => {
//   const data = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June'],
//     datasets: [
//       {
//         label: 'Students',
//         backgroundColor: 'rgba(75,192,192,0.4)',
//         borderColor: 'rgba(75,192,192,1)',
//         borderWidth: 1,
//         hoverBackgroundColor: 'rgba(75,192,192,0.6)',
//         hoverBorderColor: 'rgba(75,192,192,1)',
//         data: [65, 59, 80, 81, 56, 55],
//       },
//     ],
//   };

//   return (
//     <Container>
//       <Row>
//         <Col md={4}>
//           <Card>
//             <Card.Body>
//               <Card.Title>Dashboard</Card.Title>
//               <Card.Text>Welcome to the school management system.</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={8}>
//           <Bar data={data} />
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Dashboard;

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto'; // Ensure Chart.js is loaded
import './Dashboard.css'; // Ensure you have the correct path to your CSS file

const Dashboard = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Students',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.6)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [65, 59, 80, 81, 56, 55],
      },
    ],
  };

  return (
    <div className="dashboard-bg App-header">
      <Container>
        <Row>
          <Col md={4}>
            <Card className="dashboard-card">
              <Card.Body>
                <Card.Title>Dashboard</Card.Title>
                <Card.Text>Welcome to the school management system.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={8}>
            <Card className="dashboard-card">
              <Card.Body>
                <Bar data={data} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;

