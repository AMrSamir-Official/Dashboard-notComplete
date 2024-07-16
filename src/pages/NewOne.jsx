/* eslint-disable react/self-closing-comp */
/* eslint-disable no-new */
/* eslint-disable quotes */
/* eslint-disable react/jsx-props-no-spreading */
import { Chart } from "chart.js/auto";
import React, { useEffect, useMemo, useRef } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

// Example data for columns and table
const exampleColumns = [
  { Header: "Name", accessor: "name" },
  { Header: "Age", accessor: "age" },
  { Header: "City", accessor: "city" },
];

const exampleTableData = [
  { id: 1, name: "John Doe", age: 28, city: "New York" },

  { id: 2, name: "Jane Smith", age: 32, city: "Los Angeles" },
  { id: 3, name: "Tom Brown", age: 24, city: "Chicago" },
  { id: 4, name: "Alice Johnson", age: 35, city: "San Francisco" },
];

export default function CheckTable(props) {
  const { columnsData = exampleColumns, tableData = exampleTableData } = props;

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 10 }, // Set initial page size
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow } =
    tableInstance;

  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      // Create chart instance using Chart.js
      const ctx = chartRef.current.getContext("2d");
      new Chart(ctx, {
        type: "line",
        data: {
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
          ],
          datasets: [
            {
              label: "Progressive Line",
              data: [10, 30, 20, 40, 30, 50, 40],
              fill: false,
              borderColor: "rgba(75, 192, 192, 1)",
              tension: 0.4,
              pointStyle: "circle", // Point style for each data point
              pointRadius: 5, // Radius of the point
              pointBorderColor: "rgba(75, 192, 192, 1)", // Border color of the point
              pointBackgroundColor: "rgba(75, 192, 192, 1)", // Fill color of the point
            },
            {
              label: "Secondary Line",
              data: [20, 10, 30, 15, 25, 20, 35],
              fill: false,
              borderColor: "rgba(54, 162, 235, 1)",
              tension: 0.4,
              pointStyle: "triangle", // Different point style
              pointRadius: 5,
              pointBorderColor: "rgba(54, 162, 235, 1)",
              pointBackgroundColor: "rgba(54, 162, 235, 1)",
            },
          ],
        },
        options: {
          animation: {
            duration: 2000, // Animation duration in milliseconds
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, []);

  return (
    <div>
      <h2>Check Table</h2>
      <div style={{ marginBottom: "20px" }}>
        <canvas ref={chartRef} width="400" height="200"></canvas>
      </div>
      <table
        {...getTableProps()}
        className="w-full my-[20px] max-w-[96%]  mx-[10px] border-collapse border border-gray-200 dark:border-gray-800"
      >
        <thead className="bg-gray-100 dark:bg-gray-700">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  key={column.id}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody
          {...getTableBodyProps()}
          className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700"
        >
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.id}>
                {row.cells.map((cell) => {
                  let content = cell.render("Cell");

                  // Example: Conditional rendering for specific columns
                  if (cell.column.id === "age") {
                    content = (
                      <div className="text-sm text-gray-900 dark:text-white">
                        {cell.value}
                      </div>
                    );
                  }

                  return (
                    <td
                      {...cell.getCellProps()}
                      key={cell.column.id}
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white"
                    >
                      {content}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
