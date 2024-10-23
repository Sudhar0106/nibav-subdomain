import React from 'react';
import { SimpleDialog } from './tabs/addUser';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
// import axios from 'axios';
import { Box, Button, Grid2, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { CustomHeader } from './components/customHeader';
import tableData from './components/data.json';
import eliteData from './components/elite.json';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import { SearchParams } from './constant';
import useGetDomain from '../../utils/helper.router';

function TableModules() {

    const { main } = useGetDomain();
    const fetchAllData = main?.subdomain === "nibav" ? tableData : eliteData;

    const [dataList, setDataList] = React.useState(fetchAllData);

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const columns: GridColDef<(typeof dataList)[number]>[] = [
        {
            field: 'orderId',
            headerName: 'Order ID',
            editable: false,
            renderCell: (params) => (
                <Typography sx={{ display: 'flex' }} justifyContent={'start'} alignItems={'center'} minHeight={'52px'}>
                    {params.value}
                </Typography>
            )
        },
        {
            field: 'customerName',
            headerName: 'Customer Name',
            editable: false,
            renderCell: (params) => (
                <Typography sx={{ display: 'flex', overflow: "hidden", textOverflow: "ellipsis" }} justifyContent={'start'} alignItems={'center'} minHeight={'52px'}>
                    {params.value}
                </Typography>
            )
        },
        {
            field: 'model',
            headerName: 'Modal',
            editable: false,
            renderCell: (params) => (
                <Typography sx={{ display: 'flex' }} justifyContent={'start'} alignItems={'center'} minHeight={'52px'}>
                    {params.value}
                </Typography>
            )
        },
        {
            field: 'floor',
            headerName: 'Floor',
            sortable: false,
            renderCell: (props) => (
                <Typography sx={{ display: 'flex' }} justifyContent={'start'} alignItems={'center'} minHeight={'52px'}>
                    {props.value || ''}
                </Typography>
            ),
        },
        {
            field: 'deliveryType',
            headerName: 'Delivery',
            sortable: false,
            renderCell: (props) => (
                <Button variant='outlined'
                    sx={{
                        borderRadius: "7px",
                        border: "1px solid",
                        borderColor: props.value === "standard" ? "#3e6ae1" : "#fa9e05",
                        background: props.value === "standard" ? "#ecf0fc" : "#fef5e6",
                        color: props.value === "standard" ? "#3e6ae1" : "#fa9e05",
                        fontSize: '12px',
                        fontWeight: '500',
                        textTransform: "capitalize"
                    }}
                >
                    <LocalShippingOutlinedIcon fontSize='small' className='mr-2' />  {props.value}
                </Button>
            ),
        },
        {
            field: 'status',
            headerName: 'Status',
            sortable: false,
            renderCell: (props) => (
                <Button variant='outlined'
                    sx={{
                        border: "none",
                        color: props.value === "approved" ? "green" : props.value === "rejected" ? "red" : "orange",
                        fontWeight: '500',
                        textTransform: "capitalize"
                    }}
                >
                    {props.value}
                </Button>
            ),
        },
    ];


    const handleSearch = ({ name, value, type }: SearchParams) => {

        let filteredData: Array<object> = [];

        if (!value) setDataList(fetchAllData)
        else if (type === "Select")
            filteredData = !value || value === "All" ? fetchAllData : dataList.filter(item => item[name] == value)
        else {
            filteredData = dataList.filter(str => {
                const text: string = str[name].toString();
                return text.includes(value.toString())
            });

        }

        setDataList(filteredData)
    }

    return (
        <div className=''>
            <div className='flex justify-between items-center mb-3'>
                <h2 className="text-2xl font-[600]">Table Module</h2>
                <Button variant='contained'
                    onClick={handleClickOpen}
                    sx={{
                        borderRadius: "7px",
                        boxShadow: "none",
                        background: "#3e6ae1",
                        fontWeight: "500",
                        textTransform: "none"
                    }}
                >Modal</Button>
            </div>


            <Box width={'100%'} sx={{ overflow: 'auto' }}>
                <Box
                    sx={{
                        height: {
                            xs: 'calc(100vh - 150px)',
                            md: 'calc(100vh - 205px)'
                        }
                    }}
                >
                    <DataGrid
                        loading={false}
                        sx={{
                            fontWeight: '500',
                            border: 'none',
                            '.MuiDataGrid-virtualScrollerContent': {
                                background: "#fff",
                                borderBottomLeftRadius: '5px',
                                borderBottomRightRadius: '5px'
                            },
                            '.MuiDataGrid-columnHeader': {
                                backgroundColor: main?.subdomain === "nibav" ? "#d8e1f9" : "#e1bdfc"
                            },
                            '.MuiDataGrid-footerContainer': {
                                border: '0px',
                                padding: '0px !important'
                            },
                            '.MuiDataGrid-container--top [role=row]': {
                                background: main?.subdomain === "nibav" ? `#d8e1f9 ! important` : "#e1bdfc"
                            },
                            '.MuiDataGrid-cell': {
                                pl: '15px',
                                color: "#000",
                                outline: 'none !important'
                            },
                            '.MuiDataGrid-row': {
                                cursor: 'pointer',
                                minHeight: '50px !important',
                                borderBottom: '1px solid #F0F0F0',
                                display: 'flex',
                                alignItems: 'center'
                            },
                            '.MuiDataGrid-columnHeader:focus-within': {
                                outline: 'none'
                            },
                            '.MuiDataGrid-scrollbar': {
                                scrollbarWidth: 'thin'
                            },
                        }}
                        rows={dataList}
                        getRowId={(row) => row.orderId}
                        columns={columns.map((column) => ({
                            ...column,
                            headerAlign: 'left',
                            width: column?.width ? Number(column.width) : 170,
                            minWidth: column?.width ? Number(column.width) : 190,
                            flex: 1,
                            renderHeader: () => (
                                <Grid2>
                                    <CustomHeader headerName={column} handleSearch={handleSearch} />
                                </Grid2>
                            )
                        }))}
                        columnHeaderHeight={80}
                        rowHeight={59}
                        hideFooter
                        disableColumnSorting
                        disableColumnMenu
                        disableColumnResize
                        disableColumnFilter
                        disableRowSelectionOnClick
                    />
                </Box>
            </Box>

            <LocalizationProvider dateAdapter={AdapterMoment}>
                <SimpleDialog
                    open={open}
                    onClose={handleClose}
                />
            </LocalizationProvider>
        </div>
    )
}

export default TableModules