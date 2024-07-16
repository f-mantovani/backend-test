export const identifiers = {
  undernourishment: ["pou"],
  average_calories: ["avg_intake"],
  undernourishment_by_country: ["pou"],
  calories_by_country: ["avg_intake"],
  land_inside_protected: [
    "protectedareasforest",
    "protectedareasothernat",
    "protectedareasother",
    "oecmareas",
  ],
  natural_processes: [
    "lnppmatureforest",
    "lnppmatureotherland",
    "lnppnewforest",
    "lnppnewotherland",
  ],
  forest_loss: ["calcforest"],
  agro_practices: ["agroeco_cropland", "not_agroeco_cropland"],
  water_irrigation: ["water_requirement"],
  water_irrigation_by_country: ["water_requirement"],
  annual_co2: ["calccropco2", "calcalllandco2e"],
  annual_co2_by_country: ["total"],
  cumulative_co2: ["calccropco2", "calcalllandco2e"],
  annual_GHG_by_country: ["calcallagrico2e"],
  agro_emissions: [
    "calccropch4",
    "calccropn2o",
    "calccropco2",
    "calclivech4",
    "calcliven2o",
  ],
  methane_emissions: ["calccropch4", "calclivech4"],
  nitrogen_application: ["calcn_synth", "calcn_agsoils", "calcn_leftpasture"],
  phosphorus_application: ["totalp", "histp"],
};

export type Identifiers = keyof typeof identifiers;
