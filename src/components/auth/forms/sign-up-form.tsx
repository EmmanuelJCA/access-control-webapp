'use client';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import { Box, Avatar, Typography, Grid, TextField, MenuItem, Button, Link } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import { enqueueSnackbar } from 'notistack';

import { EGender, ISignUp } from '@/interfaces'
import { useSignUpMutation } from '@/redux/features/auth';

interface FormData {
  firstName: string;
  lastName: string;
  gender: EGender;
  identification: string;
  email: string;
  password: string;
}

export const SignUpForm = () => {
  const { replace } = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [ signUpApi ] = useSignUpMutation();

  const onSubmit = async({ email, password, ...profile }: FormData) => {
    const signUp: ISignUp = {
      email,
      password,
      profile
    };
    const user = await signUpApi(signUp).unwrap();
    if(user){
      enqueueSnackbar(`Su cuenta se ha registrado exitosamente, bienvenido ${user.profile.firstName} ${user.profile.lastName}`, { variant: 'success' });
      replace('/');
    } 
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
              helperText={errors.firstName?.message}
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
              helperText={errors.lastName?.message}
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
              helperText={errors.gender?.message}
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
              helperText={errors.identification?.message}
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
              helperText={errors.email?.message}
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
              helperText={errors.password?.message}
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
