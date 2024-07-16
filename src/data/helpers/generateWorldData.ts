export const generateWorld = (data: any[], restriction: "water" | "annual_co2_by_country" | "annual_GHG_by_country") => {
  const obj: Record<string, any> = {};

  if (restriction === "water") {
    data.forEach((d) => {
      if (d.location === "WORLD") return;
      if (d.year in obj) {
        obj[d.year][d.location] = d.water_requirement / 1000;
      } else {
        obj[d.year] = {
          [d.location]: d.water_requirement / 1000,
        };
      }
    });
  }

  if (restriction === "annual_co2_by_country") {
    data.forEach((d) => {
      if (d.location === "WORLD") return;
      if (d.year in obj) {
        obj[d.year][d.location] =
          d.calccropco2 / 1000 + d.calcalllandco2e / 1000;
      } else {
        obj[d.year] = {
          [d.location]: d.calccropco2 / 1000 + d.calcalllandco2e / 1000,
        };
      }
    });
  }

  if (restriction === "annual_GHG_by_country") {
    data.forEach((d) => {
      if (d.location === "WORLD") return;
      if (d.year in obj) {
        obj[d.year][d.location] =
          d.calcallagrico2e;
      } else {
        obj[d.year] = {
          [d.location]: d.calcallagrico2e,
        };
      }
    });
  }

  const array = [];

  for (const [year, value] of Object.entries(obj)) {
    const newValue = { valueX: year, ...value };
    array.push(newValue);
  }

  const keys = Object.keys(obj[2000]);

  return { array, keys };
};
