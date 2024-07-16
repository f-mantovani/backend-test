import dataFormatted from "../../../data-formatted.json";
const target = dataFormatted.find(
  (a) => a.title == "Cummulative CO2 emissions"
);

export const reducerAFOLU = (target: any) => {
    return target.reduce((acc, cV) => {
        const existing = acc.find((a) => a.location === cV.location);
        if (existing) {
          existing.data[0].value += cV.data[0].value / 1000;
          existing.data[1].value += cV.data[1].value / 1000;
          return acc;
        } else {
          const newObj = {
            location: cV.location,
            data: [
              {
                id: "CO2 from LUC",
                label: "CO2 from LUC",
                value: cV.data[0].value / 1000,
                color: "hsl(260, 70%, 50%)",
              },
              {
                id: "CO2 from on-farm energy use",
                label: "CO2 from on-farm energy use",
                value: cV.data[1].value / 1000,
                color: "hsl(198, 70%, 50%)",
              },
            ],
          };
          return [...acc, newObj];
        }
      }, []);
}


