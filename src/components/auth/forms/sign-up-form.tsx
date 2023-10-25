'use client';
import NextLink from 'next/link';
import { Box, Avatar, Typography, Grid, TextField, MenuItem, Button, Link } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { useForm } from 'react-hook-form';

import { ISignUp } from '@/interfaces'

export const SignUpForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ISignUp>();

  const onSubmit = (data: any) => {
    console.log(data);
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
            <LocalizationProvider dateAdapter={AdapterLuxon}>
              <DatePicker
                label="Fecha de nacimiento"
                onChange={() => { }}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    ...register('birthdate', {
                      required: 'Este campo es requerido',
                      valueAsDate: true,
                    }),
                    error: !!errors.lastName,
                  }
                }}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              value={'Male'}
              fullWidth
              label="Género"
              {...register('gender', {
                required: 'Este campo es requerido',
              })}
              error={!!errors.gender}
            >
              <MenuItem value="Male">Masculino</MenuItem>
              <MenuItem value="Female">Femenino</MenuItem>
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
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Teléfono"
              {...register('phone', {
                required: 'Este campo es requerido',
              })}
              error={!!errors.phone}
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
