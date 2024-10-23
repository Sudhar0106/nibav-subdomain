import TopFilters from "./components/filters";
import { Box, Button, Grid2, Typography } from "@mui/material";
import Widgets from "./components/widgets";
import { useEffect, useState } from "react";
import { useAxios } from "../../hooks/axios";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import useGetDomain from "../../utils/helper.router";
import { CustomHeader } from "../module/components/customHeader";

function Dashboard() {
  const { axios } = useAxios();
  const { main } = useGetDomain();
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSomeData();
  }, []);

  const fetchSomeData = async () => {
    const data = await axios.get("/users");
    setUserList(data?.data);
    setLoading(false);
  };

  const columns: GridColDef<(typeof userList)[number]>[] = [
    {
      field: "id",
      headerName: "S.NO",
      editable: false,
      renderCell: (params) => (
        <Typography
          sx={{ display: "flex" }}
          justifyContent={"start"}
          alignItems={"center"}
          minHeight={"52px"}
        >
          {params.value}
        </Typography>
      ),
    },
    {
      field: "email",
      headerName: "Email",
      editable: false,
      renderCell: (params) => (
        <Typography
          sx={{ display: "flex", overflow: "hidden", textOverflow: "ellipsis" }}
          justifyContent={"start"}
          alignItems={"center"}
          minHeight={"52px"}
        >
          {params.value}
        </Typography>
      ),
    },
    {
      field: "username",
      headerName: "User Name",
      editable: false,
      renderCell: (params) => (
        <Typography
          sx={{ display: "flex" }}
          justifyContent={"start"}
          alignItems={"center"}
          minHeight={"52px"}
        >
          {params.value}
        </Typography>
      ),
      sortable: true,
    },
    {
      field: "status",
      headerName: "Status",
      sortable: false,
      renderCell: () => (
        <Button
          variant="outlined"
          sx={{
            borderRadius: "7px",
            border: "none",
            fontWeight: "600",
            lineHeight: "1.334em",
            padding: ".5rem 1rem",
            background: main?.subdomain === "nibav" ? "#3e6ae11a" : "#c93ee11a",
            textTransform: "capitalize",
          }}
        >
          Order Punched
        </Button>
      ),
    },
  ];

  const handleSearch = () => {};

  const data = [
    {
      title: "Total Orders",
      count: 215,
    },
    {
      title: "Waiting For Approval",
      count: 215,
    },
  ];

  const barColors = ["#3e6ae1", "#f3a53d", "#07b609", "#d32f2f"];

  return (
    <section>
      <div className="flex justify-between items-center mb-3">
        <h1 className="text-2xl font-[600]">Dashboard</h1>

        <div className="flex justify-between items-center gap-4">
          <TopFilters />
          <Button
            variant="contained"
            sx={{
              borderRadius: "7px",
              boxShadow: "none",
              background: "#3e6ae1",
              fontWeight: "500",
              textTransform: "none",
              display: "flex",
              gap: 1,
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.91059 14.7078C8.20396 14.5863 8.39525 14.3 8.39525 13.9824V9.20352C8.39525 8.76991 8.04375 8.41841 7.61014 8.41841C7.17654 8.41841 6.82503 8.76991 6.82503 9.20352V12.087L6.57232 11.8343C6.26572 11.5277 5.76861 11.5277 5.46201 11.8343C5.1554 12.1409 5.1554 12.638 5.46201 12.9446L7.05498 14.5376C7.27952 14.7621 7.61721 14.8293 7.91059 14.7078Z"
                fill="#fafbfe"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.05478 14.5376C7.36139 14.8442 7.85849 14.8442 8.16509 14.5376L9.75807 12.9446C10.0647 12.638 10.0647 12.1409 9.75807 11.8343C9.45147 11.5277 8.95436 11.5277 8.64776 11.8343L7.05478 13.4273C6.74818 13.7339 6.74818 14.231 7.05478 14.5376Z"
                fill="#fafbfe"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.88444 3.88456C3.20766 4.56133 2.8201 5.69674 2.8201 7.61052V12.3895C2.8201 14.3032 3.20766 15.4386 3.88444 16.1154C4.56121 16.7922 5.69662 17.1798 7.6104 17.1798H12.3893C14.3031 17.1798 15.4385 16.7922 16.1153 16.1154C16.7921 15.4386 17.1796 14.3032 17.1796 12.3895V8.40701C17.1796 7.97341 17.5311 7.6219 17.9647 7.6219C18.3983 7.6219 18.7499 7.97341 18.7499 8.40701V12.3895C18.7499 14.4581 18.3409 16.1104 17.2256 17.2257C16.1103 18.3411 14.458 18.75 12.3893 18.75H7.6104C5.54175 18.75 3.88945 18.3411 2.77412 17.2257C1.6588 16.1104 1.24988 14.4581 1.24988 12.3895V7.61052C1.24988 5.54187 1.6588 3.88957 2.77412 2.77425C3.88945 1.65892 5.54175 1.25 7.6104 1.25H11.5928C12.0264 1.25 12.378 1.60151 12.378 2.03511C12.378 2.46871 12.0264 2.82022 11.5928 2.82022H7.6104C5.69662 2.82022 4.56121 3.20778 3.88444 3.88456Z"
                fill="#fafbfe"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.2923 1.30979C11.5857 1.18827 11.9233 1.25544 12.1479 1.47998L18.5198 7.85188C18.7443 8.07642 18.8115 8.41411 18.69 8.70748C18.5685 9.00086 18.2822 9.19214 17.9646 9.19214H14.7787C13.5405 9.19214 12.4651 8.9959 11.7345 8.26526C11.0039 7.53463 10.8076 6.45931 10.8076 5.22108V2.03513C10.8076 1.71759 10.9989 1.43131 11.2923 1.30979ZM12.3778 3.93055V5.22108C12.3778 6.37232 12.5798 6.88998 12.8448 7.15495C13.1098 7.41992 13.6274 7.62193 14.7787 7.62193H16.0692L12.3778 3.93055Z"
                fill="#fafbfe"
              ></path>
            </svg>
            <h6>Export</h6>{" "}
          </Button>
        </div>
      </div>

      <Grid2 container spacing={2}>
        {data.map((row, i) => (
          <Widgets
            title={row.title}
            key={i}
            count={row.count}
            barColors={barColors[i]}
          />
        ))}
      </Grid2>

      <Box width={"100%"} sx={{ overflow: "auto" }}>
        <Box
          sx={{
            marginTop: "2rem",
            height: {
              xs: "calc(100vh - 150px)",
              md: "calc(100vh - 205px)",
            },
          }}
        >
          <DataGrid
            loading={loading}
            sx={{
              fontWeight: "500",
              border: "none",
              ".MuiDataGrid-virtualScrollerContent": {
                background: "#fff",
                borderBottomLeftRadius: "5px",
                borderBottomRightRadius: "5px",
              },
              ".MuiDataGrid-columnHeader": {
                backgroundColor:
                  main?.subdomain === "nibav" ? "#d8e1f9" : "#e1bdfc",
              },
              ".MuiDataGrid-footerContainer": {
                border: "0px",
                padding: "0px !important",
              },
              ".MuiDataGrid-container--top [role=row]": {
                background:
                  main?.subdomain === "nibav"
                    ? `#d8e1f9 ! important`
                    : "#e1bdfc",
              },
              ".MuiDataGrid-cell": {
                pl: "15px",
                color: "#000",
                outline: "none !important",
              },
              ".MuiDataGrid-row": {
                cursor: "pointer",
                minHeight: "50px !important",
                borderBottom: "1px solid #F0F0F0",
                display: "flex",
                alignItems: "center",
              },
              ".MuiDataGrid-columnHeader:focus-within": {
                outline: "none",
              },
              ".MuiDataGrid-scrollbar": {
                scrollbarWidth: "thin",
              },
            }}
            rows={userList}
            getRowId={(row: any) => row.id}
            columns={columns.map((column) => ({
              ...column,
              headerAlign: "left",
              width: column?.width ? Number(column.width) : 170,
              minWidth: column?.width ? Number(column.width) : 190,
              flex: 1,
              renderHeader: () => (
                <Grid2>
                  <CustomHeader
                    headerName={column}
                    handleSearch={handleSearch}
                  />
                </Grid2>
              ),
            }))}
            columnHeaderHeight={80}
            hideFooter
            rowHeight={59}
            disableColumnSorting
            disableColumnMenu
            disableColumnResize
            disableColumnFilter
            disableRowSelectionOnClick
          />
        </Box>
      </Box>
    </section>
  );
}

export default Dashboard;
