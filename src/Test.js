import React, { useState } from "react";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import "./cssFiles/DropdownDemo.css";

export default function InputTextareaDemo() {
  const [dates2, setDates2] = useState(null);
  const [selectedSubstation, setSelectedSubstation] = useState(null);
  const [substations, setSubstations] = useState([
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ]);

  const onSubstationChange = (e) => {
    setSelectedSubstation(e.value);
  };

  return (
    <div>
      <div className="card">
        <div className="field col-12 md:col-4">
          <label htmlFor="range">Range : </label>
          <Calendar
            id="range"
            value={dates2}
            onChange={(e) => setDates2(e.value)}
            selectionMode="range"
            readOnlyInput
          />
        </div>
        <h5>Advanced with Templating, Filtering and Clear Icon</h5>
        <Dropdown
          value={selectedSubstation}
          options={substations}
          onChange={onSubstationChange}
          optionLabel="name"
          filter
          showClear
          filterBy="name"
          placeholder="Select a Substation"
        />
      </div>
    </div>
  );
}
