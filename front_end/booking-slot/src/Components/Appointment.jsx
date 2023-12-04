import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';




const Appointment = () => {
    const [value, onChange] = useState (new Date());
 console.log(value);
    return (
        <div>
            <Calendar  onChange={onChange} value={value} />
        </div>
    );
}

export default Appointment