export const goalIdentifier = {
  food_security: [
    "undernourishment",
    "average_calories",
    "undernourishment_by_country",
    "calories_by_country",
  ],
  land: [
    "land_inside_protected",
    "natural_processes",
    "forest_loss",
    "agro_practices",
  ],
  water: ["water_irrigation", "water_irrigation_by_country"],
  ghg: [
    "annual_co2",
    "annual_co2_by_country",
    "methane_emissions",
    "annual_GHG_by_country",
    "cumulative_co2",
    "agro_emissions",
  ],
  nitro_and_phospho: ["nitrogen_application", "phosphorus_application"],
} as const;
