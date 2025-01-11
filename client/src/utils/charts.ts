export const createChartData = (
  populationHistory: { year: number; value: number }[]
) => ({
  labels: populationHistory.map((data) => data.year.toString()), // X-axis labels
  datasets: [
    {
      label: "Population Over Time",
      data: populationHistory.map((data) => data.value), // Y-axis data
      borderColor: "rgba(75, 192, 192, 1)", // Line color
      backgroundColor: "rgba(75, 192, 192, 0.2)", // Fill color under the line
      borderWidth: 2, // Line thickness
      fill: true, // Enable area fill
    },
  ],
});

export const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true, // Display the legend
    },
  },
};
