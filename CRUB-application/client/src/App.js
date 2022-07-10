import './App.css';
import React, { useState, useEffect } from "react";
import Axios from 'axios'

function App() {

  const [projectName, setProjectName] = useState('')
  const [review, setReview] = useState('')
  const [projectReviewList, setProjectReviewList] = useState([])

  useEffect(() => {
    Axios.get('http://localhost:4001/api/get')
    .then((response) => {
      console.log(response.data)  
      setProjectReviewList(response.data)
    })
  }, [])

  const submitReview = () => {
    Axios.post('http://localhost:4001/api/insert', {
      projectName : projectName, 
      projectReview : review
    }).then(() => {
      alert('successful insert')
    })
  }
  
  return (
    <div className="App">
        <h1>ReactJS, NodeJS, MySQL</h1>
        <h3>CRUD APPLICATION</h3>

      <div className='Project'>
        <div className="reviewform">
        <label>Project Name: </label>
        <input type='text' name="projectName" onChange={(e) => {
          setProjectName(e.target.value)
        }}/>
        <label>Project Review: </label>
        <input type='text' name="review" onChange={(e) => {
          setReview(e.target.value)
        }}/>
        <button onClick={submitReview}>Submit</button>

        {projectReviewList.map((val) => {
          return (
          <>
          <h1>Project Name: {val.projectName}</h1>
          <p>Project Review: {val.projectReview}</p>
          </>

          )
        })}
        </div>
      </div>

  
    </div>
  );
}


export default App;
