import React, { useState } from 'react'

const Marksheet = () => {

    const myArray = [{ name: 'Raj', marks: 60, age: 20 },  //storing an array object in a variable
    { name: 'Janak', marks: 70, age: 21 }, 
    { name: 'Akshit', marks: 80, age: 23 }, 
    { name: 'Chirag', marks: 25, age: 23 }, 
    { name: 'Mannat', marks: 40, age: 22 }, 
    { name: 'Nariyo', marks: 30, age: 20 }, 
    { name: 'Ganpat', marks: 45, age: 25 },
    { name: 'Vansaj', marks: 34, age: 21 }] 

    const [sheet, setSheet] = useState(myArray) //using useState hook
      
   
    //making a function to increase marks 
    const graceMarks = (data) => {

        //using map() method to 
        const newArray = data.map((grace) => { 
            return { name: grace.name, marks: grace.marks + 5, age: grace.age }
        })
        //setting a state of an array by calling it.
        setSheet(newArray);
    }
    //making a function to print original array
    const originalMarks = () => {
        //printing it
        setSheet(myArray)
    }


    const failed = () => {
        const failedArray = myArray.filter((f) => {
            if (f.marks < 35) {
                return { name: f.name, marks: f.marks, age: f.age }
            }
        })
        // failedArray.style.color = "red"

        setSheet(failedArray);
    }


    return (
        <>
            <h3 className='text-center my-3'>Marksheet</h3>
            <table className='container table table-bordered border border-5 text-center my-4'>
                <tr className='border border-5'>
                    <th className='border'>Name</th>
                    <th className='border'>Marks</th>
                    <th className='border'>Age</th>
                </tr>
                {/* using map method to print the data from array*/}
                {sheet.map((data) => {     
                    return (
                        <tr>
                            <td className='border'>{data.name}</td>
                            <td className='border'>{data.marks}</td>
                            <td className='border'>{data.age}</td>
                        </tr>)
                })}

             </table>

            <div className="container text-center">
                <button className='btn btn-success' onClick={() => {
                    graceMarks(sheet)
                }}>Update Grace Marks</button>

                <button className='btn btn-secondary mx-2' onClick={() => {
                    originalMarks(sheet)
                }}>Original Marks</button>

                <button className='btn btn-secondary mx-2' onClick={() => {
                    failed(sheet)
                }}>Failed Students</button>

            </div>
        </>
    )
}


export default Marksheet 