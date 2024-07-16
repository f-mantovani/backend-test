export const filtering = (
  c: any,
  pathway: any,
  adjustment: any,
) => {
  let base =
    c.pathway_id.toLowerCase() === pathway.toLowerCase() &&
    c.tradeadjustment.toLowerCase() === adjustment.toLowerCase();

  return base;
};
