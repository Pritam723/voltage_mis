import React, { useState } from "react";
import { TabMenu } from "primereact/tabmenu";
import { Button } from "primereact/button";

export default function TabMenuDemo() {
  const [activeIndex, setActiveIndex] = useState(1);

  const items = [
    { label: "Home", icon: "pi pi-fw pi-home", url: "/" },
    {
      label: "Voltage Data",
      icon: "pi pi-fw pi-database",
      url: "/voltageData",
    },
  ];

  return (
    <div>
      <div className="card">
        {/* <div className="pt-2 pb-4">
          <Button
            onClick={() => setActiveIndex(0)}
            className="p-button-text"
            label="Activate 1st"
          />
          <Button
            onClick={() => setActiveIndex(1)}
            className="p-button-text"
            label="Activate 2nd"
          />
          <Button
            onClick={() => setActiveIndex(2)}
            className="p-button-text"
            label="Activate 3rd"
          />
        </div> */}

        <TabMenu
          model={items}
          activeIndex={activeIndex}
          onTabChange={(e) => setActiveIndex(e.index)}
        />
      </div>
    </div>
  );
}
