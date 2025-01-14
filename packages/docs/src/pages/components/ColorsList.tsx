/* eslint-disable prettier/prettier */
import React from "react";
import { colors } from "@galileo-ui/tokens";
import { getContrast } from "polished";

interface ColorInfo {
  color: string;
  key: string;
}

const getContrastColor = (color: string) => {
  const colorToContrastTo = "#FFF";
  return getContrast(color, colorToContrastTo) < 3.5 ? "#000" : "#FFF";
};

function renderColor({ color, key }: ColorInfo) {
  return (
    <div key={color} style={{ backgroundColor: color, padding: "2rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "monospace",
          color: getContrastColor(color),
        }}
      >
        <strong>{key}</strong>
        <span>{color}</span>
      </div>
    </div>
  );
}

export const ColorsList = () => {
  return Object.entries(colors).map(([key, value]) => {
    if (typeof value === "string") {
      return renderColor({ color: value, key });
    }

    return (
      <section
        key={`${key}-colors`}
        style={{
          paddingTop: "5rem",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <h2>{key.charAt(0).toUpperCase() + key.slice(1)}</h2>
        <div>
          {Object.entries(value).map(([subKey, subValue]) => {
            return renderColor({ color: subValue, key: `${key}.${subKey}` });
          })}
        </div>
      </section>
    );
  });
};
