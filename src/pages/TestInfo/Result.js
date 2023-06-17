import React from 'react';
import axios from 'axios';
import { useSelector } from "react-redux";

const Result = ({ showResult, quizs, marks, startOver, level, category }) => {
    const { user } = useSelector((state) => state.auth);
    const updateMarksOnBackend = async () => {
        try {
            // Make a POST request to update the marks on the backend
            const response = await axios.post('/addUpdateGrades', 
            { 
                student_id:user._id,
                level:level,
                week:category, 
                value: marks });
            console.log(response.data); // Assuming the response contains the necessary information or success message
        } catch (error) {
            console.error('Error in updating marks:', error);
        }
    };

    const handleStartOver = () => {
        // Reset the marks to 0
        const updatedMarks = 0;

        // Call the method to update the marks on the backend
        updateMarksOnBackend(updatedMarks);

        // Call the startOver function
        startOver();
    };

    return (
        <section className="bg-dark text-white" style={{ display: `${showResult ? 'block' : 'none'}` }}>
            <div className="container">
                <div className="row vh-100 align-items-center justify-content-center">
                    <div className="col-lg-6">
                        <div className={`text-light text-center p-5 rounded ${marks > (quizs.length * 10 / 2) ? 'bg-success' : 'bg-danger'}`}>
                            <h1 className='mb-2 fw-bold'>{marks > (quizs.length * 10 / 2) ? 'Awesome!' : 'Oops!'}</h1>
                            <h3 className='mb-3 fw-bold'>Your score is {marks} out of {quizs.length * 10}</h3>

                            <button onClick={handleStartOver} className='btn py-2 px-4 btn-light fw-bold d-inline'>Back to courses</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Result;