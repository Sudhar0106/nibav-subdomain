import { Box, Grid2 } from '@mui/material';
import React from 'react'
import Chart from 'react-apexcharts';


interface WidgtTypes {
    title: string,
    count: number,
    barColors: string
}

const Widgets: React.FC<WidgtTypes> = ({
    title,
    count,
    barColors
}) => {
    return (
        <Grid2 size={3}>
            <Box component="div"
                sx={{
                    background: "#fff",
                    p: 2,
                    borderRadius: "8px",
                    fontWeight: "500",
                    color: "#a2a3a6",
                }}>
                <p className='mb-2 font-semibold text-[14px]'>{title}</p>
                <h2 className='text-black font-[600] text-2xl'>{count}</h2>

                <Chart
                    options={{
                        chart: {
                            id: ``,
                            group: "sparklines",
                            type: "area",
                            height: 160,
                            sparkline: {
                                enabled: true,
                            },
                        },
                        xaxis: {
                            type: "datetime",
                        },
                        yaxis: {
                            labels: { show: false },
                            min: 0,
                        },
                        stroke: { curve: "smooth", width: 2 },
                        tooltip: {
                            enabled: false,
                        },
                    }}
                    color={barColors}
                    series={[
                        {
                            name: "month",
                            data: [...Array(10).keys()].map(() =>
                                Math.floor(Math.random() * 100)
                        ),
                    },
                    ]}
                    height={50}
                    type="line" />

            </Box>
        </Grid2>
    )
}

export default Widgets;