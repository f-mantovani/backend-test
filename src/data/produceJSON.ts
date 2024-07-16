import { promises as fsp } from "fs";

import completeData  from "../../data-full.json";
import type { Identifiers } from "./helpers/identifier";
import { formatter } from "./helpers/formatter";
import { filtering } from "./helpers/filtering";
import { goalIdentifier } from "./helpers/goalIdentifier";

export async function writeToFile({
  pathway,
  adjustment,
  identifier,
  year, 
}: {
  pathway: "CT" | "NC" | "GS";
  adjustment: "Yes" | "No";
  year?: number | string;
  identifier: keyof typeof goalIdentifier;
}) {
  const filter = (completeData as Array<any>).filter((d: any) =>
    filtering(d, pathway, adjustment)
  );

  let formatted: any[] = goalIdentifier[identifier].map((i: Identifiers) => formatter(filter, i));

  await fsp
    .writeFile(`data-formatted.json`, JSON.stringify(formatted, null, 2))
  // await fsp
  //   .writeFile(`${year}-${identifier}-${pathway}-${adjustment}.json`, JSON.stringify(formatted, null, 2))
    .catch((e) => console.error(`Something went wrong: ${e}`));
  return formatted;
}
