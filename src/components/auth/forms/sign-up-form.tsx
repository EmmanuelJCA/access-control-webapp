'use client';
import NextLink from 'next/link';
import { Box, Avatar, Typography, Grid, TextField, MenuItem, Button, Link } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { useForm } from 'react-hook-form';

import { EGender, ISignUp } from '@/interfaces'
import { useSignUpMutation } from '@/redux/features/auth/authApiSlice';

interface FormData {
  firstName: string;
  lastName: string;
  gender: EGender;
  identification: string;
  email: string;
  password: string;
}

export const SignUpForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [ signUpApi ] = useSignUpMutation();

  const onSubmit = async({ email, password, ...profile }: FormData) => {
    const signUp: ISignUp = {
      email,
      password,
      profile
    };
    const res = await signUpApi(signUp).unwrap();
    console.log(res);
    
  };

  return (
    <Box
      sx={{
        marginTop: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlined />
      </Avatar>
      <Typography component="h1" variant="h5">
        Registro
      </Typography>
      <Box component="form" sx={{ mt: 3 }} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Nombre"
              autoFocus
              {...register('firstName', {
                required: 'Este campo es requerido',
                minLength: { value: 2, message: 'Mínimo 2 caracteres' }
              })}
              error={!!errors.firstName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Apellido"
              {...register('lastName', {
                required: 'Este campo es requerido',
                minLength: { value: 2, message: 'Mínimo 2 caracteres' }
              })}
              error={!!errors.lastName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              value={'M'}
              fullWidth
              label="Género"
              {...register('gender', {
                required: 'Este campo es requerido',
              })}
              error={!!errors.gender}
            >
              <MenuItem value="M">Masculino</MenuItem>
              <MenuItem value="F">Femenino</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Identificación"
              {...register('identification', {
                required: 'Este campo es requerido',
              })}
              error={!!errors.identification}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              {...register('email', {
                required: 'Este campo es requerido',
              })}
              error={!!errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Contraseña"
              type="password"
              {...register('password', {
                required: 'Este campo es requerido',
              })}
              error={!!errors.password}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Registrar
        </Button>
        <Link component={NextLink} href="/auth/signin" variant="body2" underline="hover">
          ¿Posees una cuenta? Inicia sesión
        </Link>
      </Box>
    </Box>
  )
}
