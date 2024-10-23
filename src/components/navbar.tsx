import { LogoutOutlined } from '@mui/icons-material';
import { Avatar, Box, Button, Switch } from '@mui/material'
import { useState } from 'react';
import useGetDomain from '../utils/helper.router';

function stringToColor(string: string) {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
}

function stringAvatar(name: string) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}`,
    };
}



function Navbar() {
    const { main } = useGetDomain();
    const [checked, setChecked] = useState(Boolean(main?.subdomain === "elite"));

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setChecked(event.target.checked)
        if (event.target.checked) window.location.href = `http://elite.localhost:5173${window.location.pathname}`
        else window.location.href = `http://nibav.localhost:5173${window.location.pathname}`
    }

    return (
        <div className='fixed z-50 w-full flex justify-between items-center px-4 bg-white border-b border-[#cbcbcb] py-2'>
            <div className="flex gap-4 justify-start items-center">
                <Box sx={{ borderRight: "2px solid #cbcbcb", paddingRight: "10px" }}>

                    <img src={main?.subdomain === "nibav" ?
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMiauOOolp1zfYGFzDJhypBlhvLTNeBSbrrQ&s"
                        :
                        "https://liftsforhomes.com.au/wp-content/uploads/2023/04/New-Elite-Elevators-Logo.png"
                    }
                        className="img-fluid"
                        width={120}
                    />
                </Box>
                <h1 className='text-lg font-[600]'>SOAPS</h1>
            </div>

            <div className='flex justify-between items-center gap-4'>
                <Switch
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                />

                <Button
                    sx={{
                        borderRadius: "12px",
                        background: "#f3f3f4",
                        padding: "3px 10px",
                        textTransform: "none",
                        fontWeight: "500",
                        color: "#000"
                    }}
                    className='flex gap-2 text-normal items-center'>
                    <Avatar {...stringAvatar('Test')} sx={{ width: 30, height: 30 }} />
                    admin@template.com
                </Button>

                <Button
                    variant='outlined'
                    sx={{
                        border: "1px solid rgb(206, 209, 211)",
                        boxShadow: "none",
                        borderRadius: "7px"
                    }}>
                    <LogoutOutlined fontSize='small' color='error' />
                </Button>
            </div>

        </div>
    )
}

export default Navbar