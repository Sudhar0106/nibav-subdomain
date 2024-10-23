import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import React from 'react'

export default function TopFilters() {
    const [age, setAge] = React.useState('all');
    const [country, setCountry] = React.useState('All country');

    const options = [
        {
            value: "all",
            option: "All"
        },
        {
            value: "last-week",
            option: "Last Week"
        },
        {
            value: "last-month",
            option: "Last Month"
        },
        {
            value: "last-year",
            option: "Last Year"
        },
    ]

    const CountryList = ["All country", "India", "Canada", "USA", "Malasya", "UAE"]

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };


    return (
        <div className='flex gap-4'>
            <FormControl fullWidth sx={{ minWidth: "200px" }}>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    onChange={handleChange}
                    sx={{
                        borderRadius: "7px",
                        padding: "0 6px",
                        height: "40px",
                        fontSize: "0.875rem",
                        fontWeight: "400",
                        lineHeight: "1.334em",
                    }}
                >
                    {options.map((row, i) => (
                        <MenuItem
                            value={row.value}
                            key={i}
                            sx={{
                                lineHeight: '18px',
                                '&.Mui-selected:hover': {
                                    backgroundColor: "#3e6ae1",
                                    color: "#fff"
                                },
                                '&.Mui-selected': {
                                    backgroundColor: "#3e6ae1",
                                    color: "#fff"
                                },
                                '&:hover': {
                                    backgroundColor: "#3e6ae1",
                                    color: "#fff"
                                }
                            }}>
                            {row.option}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl fullWidth sx={{ minWidth: "200px" }}>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={country}
                    onChange={e => setCountry(e.target.value)}
                    sx={{
                        borderRadius: "7px",
                        padding: "0 6px",
                        height: "40px",
                        fontSize: "0.875rem",
                        fontWeight: "400",
                        lineHeight: "1.334em",
                    }}
                >
                    {CountryList.map((row, i) => (
                        <MenuItem
                            value={row}
                            key={i}
                            sx={{
                                lineHeight: '18px',
                                '&.Mui-selected:hover': {
                                    backgroundColor: "#3e6ae1",
                                    color: "#fff"
                                },
                                '&.Mui-selected': {
                                    backgroundColor: "#3e6ae1",
                                    color: "#fff"
                                },
                                '&:hover': {
                                    backgroundColor: "#3e6ae1",
                                    color: "#fff"
                                }
                            }}>
                            {row}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    )
}
