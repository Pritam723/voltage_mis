import { React, useState, useEffect } from "react";
import { Fieldset } from "primereact/fieldset";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "/node_modules/primeflex/primeflex.css";
import { Divider } from "primereact/divider";
import PlotData from "./PlotData";
import { Button } from "primereact/button";
import "./cssFiles/Button.css";
import moment from "moment";
import axios from "axios";
export default function VoltageData() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedSubstation, setSelectedSubstation] = useState(null);
  const [substations, setSubstations] = useState(null);

  const onSubstationChange = (e) => {
    setSelectedSubstation(e.value);
  };

  useEffect(() => {
    axios
      .get("//10.3.200.63:5001/names?startDate=2022-01-01&endDate=2022-01-04")
      .then((response) => {
        const allSubStation = response.data.map((item) => ({
          name: item,
          code: item,
        }));
        setSubstations(allSubStation);
      })
      .catch((error) => {});
  }, []);

  return (
    <>
      <br />
      <br />
      <Fieldset legend="Voltage data" toggleable>
        <div class="grid">
          <div class="col">
            {" "}
            <div className="field col-12 md:col-4">
              <label htmlFor="range">From</label> <br />
              <Calendar
                id="basic"
                value={startDate}
                onChange={(e) => {
                  console.log(moment(e.value).format("YYYY-MM-DD"));

                  setStartDate(e.value);
                }}
                dateFormat="mm-dd-yy"
              />
            </div>
          </div>
          <div class="col">
            {" "}
            <div className="field col-12 md:col-4">
              <label htmlFor="range">To</label> <br />
              <Calendar
                id="basic"
                value={endDate}
                onChange={(e) => setEndDate(e.value)}
                dateFormat="mm-dd-yy"
              />
            </div>
          </div>
          <div class="col">
            <label htmlFor="range">Select substation : </label>
            <br />
            <Dropdown
              value={selectedSubstation}
              options={substations}
              onChange={onSubstationChange}
              optionLabel="name"
              filter
              showClear
              filterBy="name"
              placeholder="Select a Substation"
            />{" "}
          </div>{" "}
          <div class="col">
            {" "}
            Fetch voltage data:
            <br />
            <Button
              label="Fetch Data"
              className="p-button-rounded p-button-success"
            />
          </div>
        </div>
        <Divider />
        <PlotData />
      </Fieldset>
    </>
  );
}
