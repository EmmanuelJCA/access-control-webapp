'use client';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import { Box, Avatar, Typography, Grid, TextField, Button, Link } from "@mui/material";
import { LockOutlined } from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import { enqueueSnackbar } from 'notistack';

import { ISignIn } from '@/interfaces'
import { useSignInMutation } from '@/redux/features/auth';

export const SignInForm = () => {
  const { replace } = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<ISignIn>();

  const [ signInApi ] = useSignInMutation();

  const onSubmit = async(credentials: ISignIn) => {
    const user = await signInApi(credentials).unwrap();
    if(user){
      enqueueSnackbar(`Bienvenido ${user.profile.firstName} ${user.profile.lastName}`, { variant: 'success' });
      replace('/');
    }
  }

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
        Iniciar sesión
      </Typography>
      <Box component="form" onSubmit={ handleSubmit(onSubmit) } sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="email"
              label="Email"
              autoFocus
              {...register('email', {
                required: 'Este campo es requerido'
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
          Ingresar
        </Button>
        <Grid container>
          <Grid item xs>
            <Link component={NextLink} href="#" variant="body2" underline="hover">
              ¿Olvidaste tu contraseña?
            </Link>
          </Grid>
          <Grid item>
            <Link component={NextLink} href="/auth/signup" variant="body2" underline="hover">
              ¿No estás registrado?
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
