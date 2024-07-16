import { endCountries } from "./endCountries";
import { generateWorld } from "./generateWorldData";
import { identifiers, type Identifiers } from "./identifier";
import { mapper } from "./mapper";
import { reducerAFOLU } from "./reducer";
import { sortByYear } from "./sortByYear";

type Base = {
  title: string;
  description: string;
  axisY: string;
  axisX: string;
  graphType: string;
  legend: any[];
  data: any[];
  maxYAxis?: number;
  withMarker?: any; // { value: number } | undefined;
  withUnder?: boolean;
  upperLower?: boolean;
  byCountry?: boolean;
  byMultipleCountry?: boolean;
  withTarget?: any;
  keys: any[];
  test?: any;
};

export const formatter = (filter: any[], identifier: Identifiers) => {
  const base: Base = {
    title: "",
    description: "",
    axisY: "",
    axisX: "",
    graphType: "",
    legend: [],
    data: [],
    keys: identifiers[identifier],
  };

  if (identifier === "undernourishment") {
    base.title = "Prevalence of undernourishment in 2030";
    base.description = "Food Security";
    base.axisY = "% of total population undernourished";
    base.axisX = "country";
    base.graphType = "bar";
    base.withMarker = {
      value: 5,
    };
    base.withUnder = true;
    base.data = filter
      .filter((a) => a.year === 2030)
      .map((c) => mapper(c, "undernourishment"))
      .sort((a, b) => {
        // If 'a' is in the endCountries set and 'b' is not, 'a' should come after 'b'
        if (endCountries.has(a!.valueX) && !endCountries.has(b!.valueX)) {
          return 1;
        }
        // If 'b' is in the endCountries set and 'a' is not, 'b' should come after 'a'
        if (!endCountries.has(a!.valueX) && endCountries.has(b!.valueX)) {
          return -1;
        }
        // If both or neither are in the endCountries set, sort alphabetically
        return a!.valueX.localeCompare(b!.valueX);
      });
  }

  if (identifier === "undernourishment_by_country") {
    base.title = "Prevalence of undernourishment in 2030";
    base.byCountry = true;
    base.description = "Food Security";
    base.axisY = "% of total population undernourished";
    base.axisX = "country";
    base.graphType = "bar";
    base.withMarker = {
      value: 5,
    };
    base.withUnder = true;
    base.data = filter
      .map((c) => mapper(c, "undernourishment_by_country"))
      .sort((a, b) => a!.valueX - b!.valueX);
  }

  if (identifier === "average_calories") {
    base.title = "Average daily intake per capita in 2030";
    base.description =
      "The average daily intake of water per capita in 2030, based on the 2020 baseline scenario.";
    base.axisY = "kcal / cap / day";
    base.axisX = "country";
    base.graphType = "bar";
    base.upperLower = true;
    base.data = filter
      .filter((a) => a.year === 2030)
      .map((c) => mapper(c, "average_calories"))
      .sort((a, b) => {
        // If 'a' is in the endCountries set and 'b' is not, 'a' should come after 'b'
        if (endCountries.has(a!.valueX) && !endCountries.has(b!.valueX)) {
          return 1;
        }
        // If 'b' is in the endCountries set and 'a' is not, 'b' should come after 'a'
        if (!endCountries.has(a!.valueX) && endCountries.has(b!.valueX)) {
          return -1;
        }
        // If both or neither are in the endCountries set, sort alphabetically
        return a!.valueX.localeCompare(b!.valueX);
      });
  }

  if (identifier === "calories_by_country") {
    base.title = "Average daily intake per capita in 2030";
    base.byCountry = true;
    base.description =
      "The average daily intake of water per capita in 2030, based on the 2020 baseline scenario.";
    base.axisY = "kcal / cap / day";
    base.axisX = "country";
    base.graphType = "bar";
    base.upperLower = true;
    base.data = filter
      .map((c) => mapper(c, "calories_by_country"))
      .sort((a, b) => a!.valueX - b!.valueX);
  }

  if (identifier === "land_inside_protected") {
    base.title =
      "Total area land inside protected areas or other effective conservation measures";
    base.description = "Share of protected area in land";
    base.axisY = "Mha Protected Areas and OECM";
    base.axisX = "year";
    base.graphType = "bar";
    base.legend = [];
    base.data = filter
      .map((c) => mapper(c, "land_inside_protected"))
      .sort((a, b) => a!.valueX - b!.valueX);
    base.byCountry = true;
    base.withTarget = true;
  }

  if (identifier === "natural_processes") {
    base.title = "Area of land where natural processes predominate";
    base.description = "";
    base.axisY = "Mha LNPP";
    base.axisX = "year";
    base.graphType = "bar";
    base.legend = [];
    base.data = filter
      .map((c) => mapper(c, "natural_processes"))
      .sort((a, b) => a!.valueX - b!.valueX);
    base.byCountry = true;
    base.withTarget = true;
  }

  if (identifier === "forest_loss") {
    base.title = "Loss of forest";
    base.description = "Share of forest loss";
    base.axisY = "Mha mature forest";
    base.axisX = "year";
    base.graphType = "bar";
    base.legend = [];
    base.data = sortByYear(filter.map((c) => mapper(c, "forest_loss")));
    base.byCountry = true;
  }

  if (identifier === "agro_practices") {
    base.title = "Cropland area under agroecological practices";
    base.description = "Share of area under agro-ecological practices";
    base.axisY = "Mha cropland";
    base.axisX = "year";
    base.graphType = "bar";
    base.legend = [];
    base.data = sortByYear(filter.map((c) => mapper(c, "agro_practices")));
    base.byCountry = true;
    base.withTarget = true;
  }

  if (identifier === "water_irrigation") {
    base.title = "Water use for irrigation";
    base.description = "Share of irrigated area";
    base.axisY = "km3";
    base.axisX = "year";
    base.graphType = "bar";
    base.legend = [];
    base.maxYAxis = 2600;
    base.data = sortByYear(
      filter
        .filter((a) => a.location === "WORLD")
        .map((c) => mapper(c, "water_irrigation"))
    );
    base.withTarget = true;
  }

  if (identifier === "water_irrigation_by_country") {
    const { array, keys } = generateWorld(filter, "water");
    base.title = "Water use for irrigation by country";
    base.description = "Share of irrigated area";
    base.axisY = "million m3";
    base.axisX = "year";
    base.graphType = "bar";
    base.legend = [];
    base.data = sortByYear(array);
    base.byCountry = true;
    base.keys = keys;
    base.byMultipleCountry = true;
  }

  if (identifier === "annual_co2") {
    base.title =
      "Annual CO2 emissions from land use change and on-farm energy use by source";
    base.description =
      "annual CO2 emissions from land use change and on-farm energy use by source";
    base.axisY = "Gt CO2";
    base.axisX = "year";
    base.graphType = "bar";
    base.legend = [];
    base.data = sortByYear(filter.map((c) => mapper(c, "annual_co2")));
    base.byCountry = true;
  }

  if (identifier === "annual_co2_by_country") {
    const { array, keys } = generateWorld(filter, "annual_co2_by_country");

    base.title =
      "Annual CO2 emissions from land use change and on-farm energy use by country";
    base.description =
      "annual CO2 emissions from land use change and on-farm energy use by source";
    base.axisY = "Gt CO2";
    base.axisX = "year";
    base.graphType = "bar";
    base.legend = [];
    base.data = sortByYear(array);
    base.keys = keys;
    base.byCountry = true;
    base.byMultipleCountry = true;
  }

  if (identifier === "methane_emissions") {
    base.title =
      "Methane emissions from land use change and on-farm energy use by source";
    base.description =
      "methane emissions from land use change and on-farm energy use by source";
    base.axisY = "Mt CH4";
    base.axisX = "year";
    base.graphType = "bar";
    base.legend = [];
    base.data = sortByYear(filter.map((c) => mapper(c, "methane_emissions")));
    base.byCountry = true;
    base.withTarget = true;
  }

  if (identifier === "annual_GHG_by_country") {
    const { array, keys } = generateWorld(filter, "annual_GHG_by_country");
    base.title =
      "Annual GHG emissions from crops and livestock in Gt CO2e by country";
    base.description =
      "annual GHG emissions from crops and livestock in Gt CO2e by country";
    base.axisY = "Gt CO2e";
    base.axisX = "year";
    base.graphType = "bar";
    base.legend = [];
    base.data = sortByYear(array);
    base.keys = keys;
    base.byCountry = true;
    base.byMultipleCountry = true;
  }

  if (identifier === "agro_emissions") {
    base.graphType = "pie";

    base.data = filter
      .filter((y) => y.year === 2050)
      .map((c) => mapper(c, "agro_emissions"));

    base.byCountry = true;
    base.withTarget = true;
  }

  if (identifier === "cumulative_co2") {
    base.graphType = "pie";
    base.title = "Cummulative CO2 emissions";

    base.data = reducerAFOLU(filter
      .filter((y) => y.year >= 2020)
      .map((c) => mapper(c, "cumulative_co2")));

    base.byCountry = true;
    base.withTarget = true;
  }

  if (identifier === "nitrogen_application") {
    base.title = "Nitrogen application";
    base.description = "Share of nitrogen application";
    base.axisY = "1000 tons";
    base.axisX = "year";
    base.graphType = "bar";
    base.legend = [];
    base.data = sortByYear(filter.map((c) => mapper(c, "nitrogen_application")));
    base.byCountry = true;
    base.withTarget = true;
  }

  if (identifier === "phosphorus_application") {
    base.title = "Phosphorus application";
    base.description = "Share of phosphorus application";
    base.axisY = "1000 tons";
    base.axisX = "year";
    base.graphType = "bar";
    base.legend = [];
    base.data = sortByYear(filter.map((c) => mapper(c, "phosphorus_application")));
    base.byCountry = true;
    base.withTarget = true;
  }

  return base;
};
