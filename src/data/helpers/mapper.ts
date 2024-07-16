import type { identifiers } from "./identifier";

export const mapper = (c: any, identifier: keyof typeof identifiers) => {
  if (identifier === "annual_GHG_by_country") {
  }
  if (identifier === "annual_co2_by_country") {
  }
  if (identifier === "water_irrigation_by_country") {
  }
  if (identifier === "average_calories") {
    const lowerBound = c.MDER_lowerbound;
    const upperBound = c.MDER_upperbound;
    return {
      valueX: c.location,
      avg_intake: c.kcal_feas,
      lowerBound,
      upperBound,
    };
  }

  if (identifier === "calories_by_country") {
    const lowerBound = c.MDER_lowerbound;
    const upperBound = c.MDER_upperbound;
    return {
      valueX: c.year,
      avg_intake: c.kcal_feas,
      lowerBound,
      upperBound,
      location: c.location,
    };
  }

  if (identifier === "undernourishment") {
    if (typeof c.pou === "string") c.pou = 0.025;
    return {
      valueX: c.location,
      pou: c.pou * 100,
    };
  }

  if (identifier === "undernourishment_by_country") {
    if (typeof c.pou === "string") c.pou = 0.025;
    return {
      valueX: c.year,
      pou: c.pou * 100,
      location: c.location,
    };
  }

  if (identifier === "land_inside_protected") {
    const landProtected: Record<string, any> = {
      valueX: c.year,
      protectedareasforest: c.protectedareasforest / 1000,
      protectedareasothernat: c.protectedareasothernat / 1000,
      protectedareasother: c.protectedareasother / 1000,
      oecmareas: c.oecmareas / 1000,
      location: c.location,
    };

    if (c.year === 2030 && c.location === "WORLD") {
      landProtected.targets = [
        {
          value: 770.362,
          year: 2030,
        },
      ];
    }
    return landProtected;
  }

  if (identifier === "natural_processes") {
    const naturalProcesses: Record<string, any> = {
      valueX: c.year,
      lnppmatureforest: c.lnppmatureforest / 1000,
      lnppmatureotherland: c.lnppmatureotherland / 1000,
      lnppnewforest: c.lnppnewforest / 1000,
      lnppnewotherland: c.lnppnewotherland / 1000,
      location: c.location,
    };
    if (c.year === 2050 && c.location === "WORLD") {
      naturalProcesses.targetValue = 6927.884;
      naturalProcesses.targetYear = 2050;
    }
    return naturalProcesses;
  }

  if (identifier === "forest_loss") {
    const forestLoss: Record<string, any> = {
      valueX: c.year,
      calcforest: c.calcforest / 1000,
      location: c.location,
    };
    return forestLoss;
  }

  if (identifier === "agro_practices") {
    const agroPractices: Record<string, any> = {
      valueX: c.year,
      agroeco_cropland: c.agroeco_cropland / 1000,
      not_agroeco_cropland: c.not_agroeco_cropland / 1000,
      location: c.location,
    };

    if (c.year === 2050 && c.location === "WORLD") {
      agroPractices.targets = [
        {
          value: 925.578,
          year: 2050,
        },
      ];
    }
    return agroPractices;
  }

  if (identifier === "water_irrigation") {
    const waterIrrigation: Record<string, any> = {
      valueX: c.year,
      water_requirement: c.water_requirement / 1000,
      location: c.location,
    };

    if (c.year === 2050 && c.location === "WORLD") {
      waterIrrigation.targets = [
        {
          value: 2453,
          year: 2050,
        },
      ];
    }
    return waterIrrigation;
  }

  if (identifier === "annual_co2") {
    const annualCo2: Record<string, any> = {
      valueX: c.year,
      calccropco2: c.calccropco2 / 1000,
      calcalllandco2e: c.calcalllandco2e / 1000,
      location: c.location,
    };

    return annualCo2;
  }

  if (identifier === "methane_emissions") {
    const methaneEmissions: Record<string, any> = {
      valueX: c.year,
      calclivech4: c.calclivech4_ch4,
      calccropch4: c.calccropch4_ch4,
      location: c.location,
    };

    if (c.location === "WORLD") {
      methaneEmissions.targets = [
        {
          value: 93.07,
          year: 2050,
        },
        {
          value: 101.07,
          year: 2030,
        },
      ];
    }

    return methaneEmissions;
  }

  if (identifier === "agro_emissions") {
    const agroEmissions: Record<string, any> = [
      {
        id: "CH4 from crops",
        label: "CH4 from crops",
        value: c.calccropch4 / 1000,
        color: "hsl(198, 70%, 50%)",
      },
      {
        id: "N2O from crops",
        label: "N2O from crops",
        value: c.calccropn2o / 1000,
        color: "hsl(100, 70%, 50%)",
      },
      {
        id: "CO2 from crops",
        label: "CO2 from crops",
        value: c.calccropco2 / 1000,
        color: "hsl(260, 70%, 50%)",
      },
      {
        id: "CH4 from livestock",
        label: "CH4 from livestock",
        value: c.calclivech4 / 1000,
        color: "hsl(150, 70%, 50%)",
      },
      {
        id: "N2O from livestock",
        label: "N2O from livestock",
        value: c.calcliven2o / 1000,
        color: "hsl(50, 70%, 50%)",
      },
    ];

    return { location: c.location, data: agroEmissions };
  }

  if (identifier === "cumulative_co2") {
    const cumulativeCo2: Record<string, any> = [
      {
        id: "CO2 from LUC",
        label: "CO2 from LUC",
        value: c.calcalllandco2e,
        color: "hsl(260, 70%, 50%)",
      },
      {
        id: "CO2 from on-farm energy use",
        label: "CO2 from on-farm energy use",
        value: c.calccropco2,
        color: "hsl(198, 70%, 50%)",
      },
    ];

    return { location: c.location, data: cumulativeCo2 };
  }

  if (identifier === "nitrogen_application") {
    const nitrogenApplication: Record<string, any> = {
      valueX: c.year,
      calcn_synth: c.calcn_synth / 1000,
      calcn_agsoils: c.calcn_agsoils / 1000,
      calcn_leftpasture: c.calcn_leftpasture / 1000,
      location: c.location,
    };
    if (c.year === 2050 && c.location === "WORLD") {
      nitrogenApplication.targets = [
        {
          value: 68,
          year: 2050,
        },
      ];
    }
    return nitrogenApplication;
  }

  if (identifier === "phosphorus_application") {
    const phosphorusApplication: Record<string, any> = {
      valueX: c.year,
      totalp: c.totalp,
      histp: c.histp,
      location: c.location,
    };
    if (c.year === 2050 && c.location === "WORLD") {
      phosphorusApplication.targets = [
        {
          value: 16000,
          year: 2050,
        },
      ];
    }
    return phosphorusApplication;
  }
};
