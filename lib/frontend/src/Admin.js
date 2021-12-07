// Style && assets
import "./styles/Dashboard2.css";

import { useEffect, useState } from "react";

// Components
import Header from "./components/Header";

const Line = ({ id, sleep_quality, sleep_time, date, data, setData }) => {
  const [sleepQuality, setSleepQuality] = useState(sleep_quality);
  const [sleepTime, setSleepTime] = useState(sleep_time);
  const [sleepDate, setSleepDate] = useState(date);
  const [edit, setEdit] = useState(false);

  const handleDelete = async () => {
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
    };
    const response = await fetch("http://localhost:3001/api/time2bed", {
      method: "DELETE",
      body: `{"id": "${id}"}`,
      headers: headersList,
    });
    if (!response) return;
    if (response.status !== 200) return;
    const isSameId = (element) => element._id === id;
    const index = data.findIndex(isSameId);
    console.log(index);
    const newData = data.splice(index, 1);
    setData(newData);
  };
  const handlePatch = async () => {};
  const toggleEdit = () => {
    const oldEdit = !edit;
    setEdit(oldEdit);
  };
  if (!edit) {
    return (
      <tr>
        <td>{sleepDate}</td>
        <td>{sleepTime}</td>
        <td>{sleepQuality}</td>
        <td>
          <div className="button" onClick={toggleEdit}>
            <button className="button1">Edit</button>
          </div>
          <div className="button" onClick={handleDelete}>
            <button className="button1">Delete</button>
          </div>
        </td>
      </tr>
    );
  }
  return (
    <tr>
      <td>
        <input
          type="datetime-local"
          value={sleepDate}
          onChange={(e) => {
            setSleepDate(e.target.value);
          }}
          required
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="Sleep time"
          value={sleepTime}
          onChange={(e) => {
            setSleepTime(parseInt(e.target.value));
          }}
          required
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="Sleep quality"
          value={sleepQuality}
          onChange={(e) => {
            setSleepQuality(e.target.value);
          }}
          required
        />
      </td>
      <td>
        <div className="button" onClick={toggleEdit}>
          <button className="button1">Edit</button>
        </div>
        <div className="button" onClick={handlePatch}>
          <button className="button1">Submit</button>
        </div>
      </td>
    </tr>
  );
};

function Admin() {
  const [data, setData] = useState([]);

  const [date, setDate] = useState("");
  const [sleepTime, setSleepTime] = useState("");
  const [sleepQuality, setSleepQuality] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(
        "http://localhost:3001/api/time2bed/many/10/0"
      );
      if (!response) return;
      const data_res = await response.json();
      console.log(data_res);
      setData(data_res);
    };
    fetchApi();
  }, []);
  const handlePost = async (e) => {
    e.preventDefault();
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
    };
    const response = await fetch("http://localhost:3001/api/time2bed", {
      method: "POST",
      body: JSON.stringify({
        start: date,
        sleep_quality: sleepQuality,
        time_in_bed: sleepTime,
      }),
      headers: headersList,
    });
    console.log(response);

    if (response.status !== 200) return;
    const array = JSON.parse(JSON.stringify(data));
    array.push({
      _id: date,
      start: date,
      sleep_quality: sleepQuality,
      time_in_bed: sleepTime,
    });
    const sortDate = (a, b) => Date(a.start) - Date(b.start);
    array.sort(sortDate);
    console.log(array);
    console.log(data);
    setData(array);
  };
  return (
    <div className="body">
      <div className="main">
        <div className="up">
          <Header title="Admin Dashboard" />
        </div>
        <div className="arrayANDform">
          <table>
            <thead>
              <tr>
                <th colSpan="4">Ten last nights</th>
              </tr>
            </thead>
            <tbody>
              {data.map((itm) => (
                <Line
                  key={itm?._id}
                  id={itm?._id}
                  date={itm?.start}
                  sleep_quality={itm?.sleep_quality}
                  sleep_time={itm?.time_in_bed}
                  data={data}
                  setData={setData}
                />
              ))}
            </tbody>
          </table>
          <form onSubmit={handlePost}>
            <input
              type="datetime-local"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
              required
            />
            <input
              type="text"
              placeholder="Sleep time"
              value={sleepTime}
              onChange={(e) => {
                setSleepTime(parseInt(e.target.value));
              }}
              required
            />
            <input
              type="text"
              placeholder="Sleep quality"
              value={sleepQuality}
              onChange={(e) => {
                setSleepQuality(e.target.value);
              }}
              required
            />
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Admin;
