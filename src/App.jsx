import React from 'react';
import {  useEffect,useState } from 'react';
// import { XAxis, YAxis, AreaChart, Area, ResponsiveContainer } from 'recharts';

export default function App(props) {

  const [sheets, setSheets] = useState([]);
  useEffect(async () => {
    const sheetsList = await props.getSheets();
    setSheets(sheetsList);

  }, []);

  return (
    <>
      <select name="country" id="country"   onChange={(event) => {

props.sheetNavigation(event.target.value)

}} >
     {sheets.map(( sheet,index) => {
         
                         return (
                              // <div key={index}>
                                   <option  >{sheet.value}</option >
                                 
                              // </div>
                         );
                    })}
  
  
    </select>
    </>
   ); 

      }


