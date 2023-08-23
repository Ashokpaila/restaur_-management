import React, { useState } from 'react';
import './stylings.css'; // Import your CSS file

function TableManagement() {
  const [tables, setTables] = useState([
    { id: 1, number: 1, isOccupied: false, reservation: { timeSlot: '', name: '' } },
    { id: 2, number: 2, isOccupied: true, reservation: { timeSlot: '7:00 PM', name: 'Ashok' } },
    
  ]);

  const timeSlots = [
    '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM', '11:00 PM'
  ];

  const handleReservation = (tableId) => {
    const table = tables.map(table => {
      if(table.id === tableId){
          return {...table,isOccupied: true}
      }
      return table;
    })
    setTables(table)
    console.log(tables)
      }
    

  const handleClearTable = (tableId) => {
    const updatedTables = tables.map(table => {
      if (table.id === tableId) {
        return { ...table, isOccupied: false, reservation: { timeSlot: '', name: '' } };
      }
      return table;
    });
    setTables(updatedTables);
  };

  return (
    <div className="table-management">
      <h2>Table Management</h2>
      <div className="tables">
        {tables.map(table => (
          <div key={table.id} className={`table ${table.isOccupied ? 'occupied' : 'vacant'}`}>
            <p>Table #{table.number}</p>
            {table.isOccupied ? (
              <div>
                <p>Reserved for: {table.reservation.timeSlot} - {table.reservation.name}</p>
                <button onClick={() => handleClearTable(table.id)}>Clear Table</button>
              </div>
            ) : (
              <div>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={table.reservation.name}
                  onChange={(e) => {
                    const name = e.target.value;
                    const updatedTables = tables.map(t => {
                      if (t.id === table.id) {
                        return { ...t, reservation: { ...t.reservation, name } };
                      }
                      return t;
                    });
                    setTables(updatedTables);
                  }}
                />
                <select
                  value={table.reservation.timeSlot}
                  onChange={(e) => {
                    const timeSlot = e.target.value;
                    const updatedTables = tables.map(t => {
                      if (t.id === table.id) {
                        return { ...t, reservation: { ...t.reservation, timeSlot } };
                      }
                      return t;
                    });
                    setTables(updatedTables);
                  }}
                >
                  <option value="">Select a Time Slot</option>
                  {timeSlots.map(slot => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
                <button onClick={() => handleReservation(table.id)}>Submit Reservation</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TableManagement;
