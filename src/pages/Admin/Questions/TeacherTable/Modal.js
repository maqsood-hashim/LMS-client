import React, { useState,useEffect } from 'react';
import { Modal, Typography, TextField, Button, MenuItem } from '@material-ui/core';
import './Modal.css';

const EditModal = ({ isOpen, onClose,rowData,onUpdate }) => {
  const [questionId, setQuestionId] = useState(''); 
  const [question, setQuestion] = useState('');
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [option3, setOption3] = useState('');
  const [option4, setOption4] = useState('');
  const [correctOption, setCorrectOption] = useState('');
  const [category, setCategory] = useState('');
  const [level, setLevel] = useState('');
  const [levelNum, setLevelNum] = useState(0);


const update = ()=>{
    
    
    console.log("Inside update");
  
    const updatedQuestionData = {
      _id : questionId,
      question: question,
      options: [option1, option2, option3, option4],
      category: category,
      level: levelNum,
      answer: correctOption
    };
    
    fetch(`/update-questions/${questionId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedQuestionData),
    })
      .then(response => response.json())
      .then(updatedQuestion => {
        // Handle the response from the server
        console.log("upadted question from update api")
        console.log(updatedQuestion);
        alert("Question updated")

        // Call the onUpdate function to send the updated data back to the parent component

        onUpdate(updatedQuestionData);
        onClose()
        // Add any necessary logic after the update is successful
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });
      console.log("After fetch")

     
}


  const handleCancel = () => {
    console.log("inside cancel");
    onClose();
  };
  
  const mapLevelValue = (value) => {
    switch (value) {
      case 0:
        return 'beginner';
      case 1:
        return 'intermediate';
      case 2:
        return 'expert';
      default:
        return 'beginner';
    }
  };
  useEffect(() => {
    if (isOpen && rowData) {
      // Set the initial values from the rowData prop
      console.log(rowData)
      setQuestionId(rowData._id)
      setQuestion(rowData.question);
      setOption1(rowData.options[0]);
      setOption2(rowData.options[1]);
      setOption3(rowData.options[2]);
      setOption4(rowData.options[3]);
      setCorrectOption(rowData.answer)
      setCategory(rowData.category);
      setLevelNum(rowData.level)
      
      setLevel(mapLevelValue(rowData.level));
      

    }
  }, [isOpen, rowData]);
  return (
    <Modal open={isOpen} onClose={onClose}>
      <div className="modal-container">
        <div className="modal-content">
          <Typography variant="h5" component="h2" style={{ marginBottom: '16px' }}>
            Edit Question
          </Typography>

          <TextField
            label="Question"
            variant="outlined"
            fullWidth
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            style={{ marginBottom: '16px' }}
          />

          <div style={{ display: 'flex', marginBottom: '16px' }}>
            <TextField
              label="Option 1"
              variant="outlined"
              fullWidth
              value={option1}
              onChange={(e) => setOption1(e.target.value)}
              style={{ marginRight: '8px' }}
            />

            <TextField
              label="Option 2"
              variant="outlined"
              fullWidth
              value={option2}
              onChange={(e) => setOption2(e.target.value)}
              style={{ marginLeft: '8px' }}
            />
          </div>

          <div style={{ display: 'flex', marginBottom: '16px' }}>
            <TextField
              label="Option 3"
              variant="outlined"
              fullWidth
              value={option3}
              onChange={(e) => setOption3(e.target.value)}
              style={{ marginRight: '8px' }}
            />

            <TextField
              label="Option 4"
              variant="outlined"
              fullWidth
              value={option4}
              onChange={(e) => setOption4(e.target.value)}
              style={{ marginLeft: '8px' }}
            />
          </div>

          <TextField
            label="Correct Option"
            variant="outlined"
            fullWidth
            value={correctOption}
            onChange={(e) => setCorrectOption(e.target.value)}
            style={{ marginBottom: '16px' }}
          />

          <TextField
            select
            label="Category"
            variant="outlined"
            fullWidth
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{ marginBottom: '16px' }}
          >
            <MenuItem value="week1">Week 1</MenuItem>
            <MenuItem value="week2">Week 2</MenuItem>
            <MenuItem value="week3">Week 3</MenuItem>
            <MenuItem value="week4">Week 4</MenuItem>
            <MenuItem value="week5">Week 5</MenuItem>
            <MenuItem value="mega">Mega</MenuItem>
          </TextField>

          <TextField
            select
            label="Level"
            variant="outlined"
            fullWidth
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            style={{ marginBottom: '16px' }}
          >
            <MenuItem value="beginner">Beginner</MenuItem>
            <MenuItem value="intermediate">Intermediate</MenuItem>
            <MenuItem value="expert">Expert</MenuItem>
          </TextField>
          
         
          <div style={{ display: 'flex', justifyContent: 'space-between', margin: '5px' }}>
  <Button variant="contained" color="secondary" onClick={handleCancel}>
    Cancel
  </Button>
 

  <div style={{ marginLeft: '10px' }}></div>

  <Button variant="contained" color="primary" onClick={update}>

    Submit
  </Button>
</div>

        </div>
      </div>
    </Modal>
  );
};

export default EditModal;
