import { yupResolver } from '@hookform/resolvers/yup';
import { Button, InputAdornment, TextField, Typography } from '@mui/material'
import { useGoogleLogin } from '@react-oauth/google';
import { Lock, Mail } from 'lucide-react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { Formvalues, schema, defaultValues } from './constant';


function Login() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm<Formvalues>({
        mode: "onTouched",
        resolver: yupResolver(schema),
        defaultValues
    })

    const onsubmit: SubmitHandler<Formvalues> = (data) => {
        console.log(data)
        reset();
        window.location.href = `https://nibav.${window.location.host}/pages/dashboard`
    }

    const Gllogin = useGoogleLogin({
        flow: 'auth-code',
        onSuccess: tokenResponse => console.log(tokenResponse),
    });


    return (
        <div className="flex justify-center items-center h-screen">
            <div className='bg-white p-4 md:p-8 rounded-lg w-full md:w-[35vw]'>
                <Typography component="h1" variant='h4'>Sign-in to continue.</Typography>
                <form onSubmit={handleSubmit(onsubmit)}>
                    <div className='my-4'>
                        <TextField
                            label='E-mail'
                            variant="outlined"
                            fullWidth
                            slotProps={{
                                inputLabel: {
                                    shrink: true,
                                },
                                input: {
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Mail size={20} />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                            {...register("email")}
                            error={Boolean(errors?.email)}
                            helperText={errors?.email?.message}
                        />
                    </div>
                    <div className='mb-4'>
                        <TextField
                            label='Password'
                            type='password'
                            variant="outlined"
                            fullWidth
                            slotProps={{
                                inputLabel: {
                                    shrink: true,
                                },
                                input: {
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Lock size={20} />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                            {...register("password")}
                            error={Boolean(errors?.password)}
                            helperText={errors?.password?.message}
                        />
                    </div>

                    <div className='flex justify-center'>
                        <button className='rounded-full text-white px-8 py-2 bg-purple-900'>
                            Submit
                        </button>
                    </div>


                    <div className='flex justify-center items-center my-4'>
                        <Button
                            sx={{
                                padding: ".5rem 1rem",
                                borderRadius: "50px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                color: "#000",
                                gap: "5px",
                                fontSize: "14px"
                            }}
                            onClick={Gllogin}
                            className='shadow-lg'>
                            <img src={"https://cdn-icons-png.flaticon.com/256/720/720255.png"} width={20} />
                            Google Sign-in
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login