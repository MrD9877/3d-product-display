import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

const chairColors = [
  {
    color: "#683434",
    name: "brown",
  },
  {
    color: "#1a5e1a",
    name: "green",
  },
  {
    color: "#659994",
    name: "blue",
  },
  {
    color: "#896599",
    name: "mauve",
  },
  {
    color: "#ffa500",
    name: "orange",
  },
  {
    color: "#59555b",
    name: "grey",
  },
  {
    color: "#222222",
    name: "black",
  },
  {
    color: "#ececec",
    name: "white",
  },
];

const cushionColors = [
  {
    color: "#683434",
    name: "brown",
  },
  {
    color: "#1a5e1a",
    name: "green",
  },
  {
    color: "#659994",
    name: "blue",
  },
  {
    color: "#896599",
    name: "mauve",
  },
  {
    color: "#ffa500",
    name: "orange",
  },
  {
    color: "#59555b",
    name: "grey",
  },
  {
    color: "#222222",
    name: "black",
  },
  {
    color: "#ececec",
    name: "white",
  },
];

export type Color = {
  color: string;
  name: string;
};

export type Materials = "leather" | "fabric";

export type CustomContext = {
  material: Materials;
  setMaterial: Dispatch<SetStateAction<Materials>>;
  legs: boolean;
  setLegs: Dispatch<SetStateAction<boolean>>;
  chairColor: Color;
  chairColors: Color[];
  setChairColor: Dispatch<SetStateAction<Color>>;
  cushionColor: Color;
  cushionColors: Color[];
  setCushionColor: Dispatch<SetStateAction<Color>>;
};

const CustomizationContext = createContext<CustomContext | null>(null);

export const CustomizationProvider = ({ children }: { children: ReactNode }) => {
  const [material, setMaterial] = useState<Materials>("leather");
  const [legs, setLegs] = useState<boolean>(true);
  const [chairColor, setChairColor] = useState<Color>(chairColors[0]);
  const [cushionColor, setCushionColor] = useState<Color>(cushionColors[0]);

  return (
    <CustomizationContext.Provider
      value={{
        material,
        setMaterial,
        legs,
        setLegs,
        chairColors,
        chairColor,
        setChairColor,
        cushionColors,
        cushionColor,
        setCushionColor,
      }}
    >
      {children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => {
  const context = useContext(CustomizationContext);

  return context;
};
