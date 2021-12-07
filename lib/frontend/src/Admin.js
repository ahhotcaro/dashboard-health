// Style && assets
import "./styles/Dashboard2.css";

// Components
import Header from "./components/Header";

function Admin() {
  return (
    <div className="body">
      <div className="main">
        <div className="up">
          <Header title="Admin Dashboard" />
        </div>
        <table>
          <thead>
            <tr>
              <th colspan="3">Ten previous data</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Date</td>
              <td>Time in Bed</td>
              <td>Sleep Quality</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;
