import { Box, FormControl, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import React, { Fragment } from 'react'
import styled from 'styled-components';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DeliveryType, headerType, ItemStatus } from '../constant';

const SortingIcons = styled('div')({
    width: '15px',
    height: '15px'
});

export const CustomHeader = ({ headerName, handleSearch }: headerType) => {

    const [type, setType] = React.useState({
        deliveryType: "All",
        status: "All"
    });

    const handleChange = (event: SelectChangeEvent) => {
        setType({ ...type, [event.target.name]: event.target.value });
        handleSearch({ name: event.target.name, value: event.target.value, type: "Select" })
    };

    return (
        <Fragment>

            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
                >
                <Typography
                    sx={{
                        fontSize: "14px",
                        color: "#364152",
                        fontWeight: '700',
                    }}
                >
                    {headerName.headerName}
                </Typography>
                <SortingIcons>
                    <svg viewBox="0 0 32 32" fill="#45484D" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.3684 2.00001C11.4842 2.00001 10.8947 2.58949 10.8947 3.4737V24.9895L7.50526 21.6C6.91579 21.0105 6.03158 21.0105 5.44211 21.6C4.85263 22.1895 4.85263 23.0737 5.44211 23.6632L11.1895 29.4105C11.4842 29.8526 11.7789 30 12.3684 30C12.9579 30 13.5474 29.7053 13.6947 29.1158C13.8421 28.9684 13.8421 28.8211 13.8421 28.5263V3.4737C13.8421 2.58949 13.4 2.00001 12.3684 2.00001Z" />
                        <path d="M12.3684 2.00001C11.4842 2.00001 10.8947 2.58949 10.8947 3.4737V24.9895L7.50526 21.6C6.91579 21.0105 6.03158 21.0105 5.44211 21.6C4.85263 22.1895 4.85263 23.0737 5.44211 23.6632L11.1895 29.4105C11.4842 29.8526 11.7789 30 12.3684 30C12.9579 30 13.5474 29.7053 13.6947 29.1158C13.8421 28.9684 13.8421 28.8211 13.8421 28.5263V3.4737C13.8421 2.58949 13.4 2.00001 12.3684 2.00001Z" />
                        <path d="M19.7368 30C20.621 30 21.2105 29.4105 21.2105 28.5263L21.2105 7.01052L24.6 10.4C25.1895 10.9895 26.0737 10.9895 26.6632 10.4C27.2526 9.81052 27.2526 8.92631 26.6632 8.33684L20.9158 2.58947C20.621 2.14737 20.3263 2 19.7368 2C19.1474 2 18.5579 2.29474 18.4105 2.88421C18.2632 3.03158 18.2632 3.17895 18.2632 3.47368L18.2632 28.5263C18.2632 29.4105 18.7053 30 19.7368 30Z" />
                        <path d="M19.7368 30C20.621 30 21.2105 29.4105 21.2105 28.5263L21.2105 7.01052L24.6 10.4C25.1895 10.9895 26.0737 10.9895 26.6632 10.4C27.2526 9.81052 27.2526 8.92631 26.6632 8.33684L20.9158 2.58947C20.621 2.14737 20.3263 2 19.7368 2C19.1474 2 18.5579 2.29474 18.4105 2.88421C18.2632 3.03158 18.2632 3.17895 18.2632 3.47368L18.2632 28.5263C18.2632 29.4105 18.7053 30 19.7368 30Z" />
                    </svg>
                </SortingIcons>
            </Box>


            <Box
                sx={{
                    width: 'inherit',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                {headerName.field === "deliveryType" ?
                    <FormControl fullWidth sx={{ minWidth: "150px" }}>
                        <Select
                            value={type.deliveryType}
                            size="small"
                            name={headerName.field}
                            defaultValue={headerName.headerName}
                            autoWidth={true}
                            displayEmpty
                            onChange={handleChange}
                            IconComponent={ExpandMoreIcon}
                            sx={{
                                minWidth: '130px',
                                marginTop: '5px',
                                borderRadius: '7px',
                                fontWeight: "500",
                                outline: "none",
                                background: "#f8fafc",

                                position: 'relative',
                                '.MuiOutlinedInput-notchedOutline': { border: 0 },
                                '&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                                    border: 0
                                },
                                '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    border: 0
                                }
                            }}
                            renderValue={(selected) => {
                                return selected ? selected : <Typography sx={{ color: "#aeaeae" }}>
                                    {headerName.headerName}
                                </Typography>
                            }}
                        >
                            {DeliveryType.map((row, i) => (
                                <MenuItem
                                    value={row.value}
                                    key={i}
                                    sx={{
                                        lineHeight: '18px',
                                        '&.Mui-selected:hover, &.Mui-selected, &:hover': {
                                            backgroundColor: "#3e6ae1",
                                            color: "#fff"
                                        },
                                    }}>
                                    {row.option}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    :
                    headerName.field === "status" ?
                        <FormControl fullWidth sx={{ minWidth: "150px" }}>
                            <Select
                                value={type.status}
                                size="small"
                                name={headerName.field}
                                defaultValue={headerName.headerName}
                                autoWidth={true}
                                displayEmpty
                                onChange={handleChange}
                                IconComponent={ExpandMoreIcon}
                                sx={{
                                    minWidth: '130px',
                                    marginTop: '5px',
                                    borderRadius: '7px',
                                    fontWeight: "500",
                                    outline: "none",
                                    background: "#f8fafc",

                                    position: 'relative',
                                    '.MuiOutlinedInput-notchedOutline': { border: 0 },
                                    '&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                                        border: 0
                                    },
                                    '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        border: 0
                                    }
                                }}
                                renderValue={(selected) => {
                                    return selected ? selected : <Typography sx={{ color: "#aeaeae" }}>
                                        {headerName.headerName}
                                    </Typography>
                                }}
                            >
                                {ItemStatus.map((row, i) => (
                                    <MenuItem
                                        value={row.value}
                                        key={i}
                                        sx={{
                                            lineHeight: '18px',
                                            '&.Mui-selected:hover, &.Mui-selected, &:hover': {
                                                backgroundColor: "#3e6ae1",
                                                color: "#fff"
                                            },
                                        }}>
                                        {row.option}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        :
                        <TextField
                            fullWidth
                            name={headerName.field}
                            onChange={(e) => handleSearch({ name: e.target.name, value: e.target.value, type: "search" })}
                            sx={{
                                // minWidth: '130px',
                                marginTop: '5px',
                                borderRadius: '7px',
                                fontWeight: "700",
                                background: "#f8fafc",
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        border: 'none'
                                    },
                                    '&.Mui-focused fieldset': {
                                        border: 'none'
                                    },
                                    '&:hover fieldset': {
                                        border: 'none'
                                    }
                                }
                            }}
                            size="small"
                            placeholder='Search'
                        />
                }
            </Box>
        </Fragment >
    )
}
