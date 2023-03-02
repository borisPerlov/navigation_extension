const properties = {
  showTitles: true,
  qHyperCubeDef: {
    qInitialDataFetch: [{ qWidth: 20, qHeight: 100 }],
  },
  definition: {
    type: "items",
    component: "accordion",
    items: {
      dimensions: {
        uses: "dimensions",
        min: 1,
        max: 6,
      },
      measures: {
        uses: "measures",
        min: 2,
        max: 2,
      },
      sorting: {
        uses: "sorting",
      },
      settings: {
        uses: "settings",
      },
    }
  },
  barColor: "red",
};

export default properties;