"use client";
import { CustomContext, useCustomization } from "@/hooks/CustomisationProvider";
import React from "react";

export default function Configurator() {
  const { material, setMaterial, chairColors, chairColor, setChairColor, cushionColor, cushionColors, setCushionColor, legs, setLegs } = useCustomization() as CustomContext;
  return (
    <div className="fixed top-[6vh] right-[24px] text-white w-[370px] p-[16px]">
      <div className="configurator__section">
        <div className="configurator_title">Chair Material</div>
        <div className="configurator_options">
          <div className={`item ${material === "leather" ? "item--active" : ""}`} onClick={() => setMaterial("leather")}>
            <div className="item__label">Leather</div>
          </div>
          <div className={`item ${material === "fabric" ? "item--active" : ""}`} onClick={() => setMaterial("fabric")}>
            <div className="item__label">Fabric</div>
          </div>
        </div>
      </div>
      <div className="configurator__section">
        <div className="configurator_title">Chair Color</div>
        <div className="configurator_options">
          {chairColors.map((item, index) => {
            return (
              <div key={index} className={`item ${chairColor.color === item.color ? "item--active" : ""}`} onClick={() => setChairColor({ ...item })}>
                <div className="item__dot" style={{ backgroundColor: item.color }} />
                <div className="item__label">{item.name}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="configurator__section">
        <div className="configurator_title">Cushion Color</div>
        <div className="configurator_options">
          {cushionColors.map((item, index) => {
            return (
              <div key={index} className={`item ${cushionColor.color === item.color ? "item--active" : ""}`} onClick={() => setCushionColor(item)}>
                <div className="item__dot" style={{ backgroundColor: item.color }} />
                <div className="item__label">{item.name}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="configurator__section">
        <div className="configurator_title">Legs</div>
        <div className="configurator_options">
          <div className={`item ${!legs ? "item--active" : ""}`} onClick={() => setLegs(false)}>
            <div className="item__label">Classic</div>
          </div>
          <div className={`item ${legs ? "item--active" : ""}`} onClick={() => setLegs(true)}>
            <div className="item__label">Legs</div>
          </div>
        </div>
      </div>
    </div>
  );
}
