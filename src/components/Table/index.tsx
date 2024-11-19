import { ReactNode } from "react";

interface Column<T> {
  header: string;
  accessor: (row: T) => ReactNode;
}

interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
}

const Table = <T,>({ data, columns }: TableProps<T>) => {
  return (
    <table style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th
              key={index}
              style={{ border: "1px solid #ddd", padding: "8px" }}
            >
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col, colIndex) => (
              <td
                key={colIndex}
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  textAlign: "left",
                }}
              >
                {col.accessor(row)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
