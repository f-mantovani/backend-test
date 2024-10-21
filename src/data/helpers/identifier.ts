export const identifiers = {
  undernourishment: ["Prevalence of undernourishment"],
  average_calories: ["Kcal Feasability"],
  undernourishment_by_country: ["Prevalence of undernourishment"],
  calories_by_country: ["Kcal Feasability"],
  land_inside_protected: [
    "Forest protected areas",
    "Other natural protected areas",
    "Other protected areas",
    "OECM  areas",
  ],
  natural_processes: [
    "Mature forest",
    "Other mature land",
    "New forest",
    "New other land",
  ],
  forest_loss: ["Forest loss"],
  agro_practices: ["agroeco_cropland", "not_agroeco_cropland"],
  water_irrigation: ["Blue water"],
  water_irrigation_by_country: ["Blue water"],
  annual_co2: ["CO2 from crops", "CO2 equivalent from all sources"],
  annual_co2_by_country: ["total"],
  cumulative_co2: ["CO2 from LUC", "CO2 from on-farm energy use"],
  annual_GHG_by_country: ["calcallagrico2e"],
  agro_emissions: [
    "CH4 from crops",
    "N2O from crops",
    "CO2 from crops",
    "CH4 from livestock",
    "N2O from livestock",
  ],
  methane_emissions: ["CH4 from livestock", "CH4 from crops"],
  nitrogen_application: [
    "Synthetic nitrogen application",
    "Organic nitrogen application on agricultural soils",
    "Nitrogen application through manure left on pasture",
  ],
  phosphorus_application: ["Total phosphorus"],
  production_cost: [
    "Fertilizers cost",
    "Labour cost",
    "Machinery running cost",
    "Diesel cost",
    "Pesticide cost",
  ],
  eat_food_groups: [
    "Sugar",
    "Rice",
    "Roots",
    "Wheat",
    "Legumes",
    "Vegetables",
    "Other grains",
    "Soybeans",
    "Nuts and seeds",
    "Maize",
  ],
  crops_vs_livestock: [
    "Crop: Number of Full Time Equivalent workers",
    "Livestock: Number of Full Time Equivalent workers",
  ],
  socioeconomics: ["eat_food_groups", "production_cost", "crops_vs_livestock"],
  land_cover: [],
  protected_areas: [
    "Protected Areas Forest",
    "Protected Areas Other",
    "Protected Areas Other Natural",
  ],
  biodiversity: [""],
  forest_change: ["Net Forest Change", "Forest gain", "Forest loss"],
  forest_change_by_country: [""],
  ghg_2021: [""],
  ghg_2021_average: [""],
  ghg_2021_average_by_country: [""],
  ghg_2021_by_country: [""],
  average_calories_2019: ["avg_intake"],
  ghg_2019_average: [],
  biodiversity_2019: ["biodiversity"],
  water_irrigation_non_2023: ["Blue water"],
  import_2020: [],
  export_2020: [],
};

export type Identifiers = keyof typeof identifiers;