import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";

const MRTModule = () => {
  const data = [
    {
      name: "John",
      age: 30,
    },
    {
      name: "Sara",
      age: 25,
    },
  ];

  const columns = useMemo(
    () => [
      {
        accessorKey: "name", //simple recommended way to define a column
        header: "Name",
        muiTableHeadCellProps: { sx: { color: "green" } }, //optional custom props
        Cell: ({ cell }: any) => <span>{cell.getValue()}</span>, //optional custom cell render
      },
      {
        accessorFn: (row: any) => row.age, //alternate way
        id: "age", //id required if you use accessorFn instead of accessorKey
        header: "Age",
        Header: () => <i>Age</i>, //optional custom header render
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
    enableRowSelection: true,
    initialState: {
      pagination: { pageSize: 5, pageIndex: 0 },
      showGlobalFilter: true,
    },
    //customize the MRT components
    muiPaginationProps: {
      rowsPerPageOptions: [5, 10, 15],
      variant: "outlined",
    },
    paginationDisplayMode: "pages",
  });

  return (
    <MaterialReactTable table={table} /> //other more lightweight MRT sub components also available
  );
};

export default MRTModule;
