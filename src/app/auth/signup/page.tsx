"use client"
import NextLink from 'next/link';
import { Container, Box, Avatar, Typography, Grid, TextField, Button, Link, MenuItem } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { IMaskInput } from 'react-imask';
import { NumericFormat, NumericFormatProps } from 'react-number-format';
import { useForm } from 'react-hook-form';
import { ISignUp } from '@/interfaces';

const SignUpPage = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<ISignUp>();

  const onSubmit = (data: ISignUp) => {
    console.log(data);
    console.log(errors);
    
  };

  return (
    <Container component="main" maxWidth="sm">
        <Box
          sx={{
            marginTop: 8,
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
                  { ...register('firstName', {
                    required: 'Este campo es requerido',
                    minLength: { value: 2, message: 'Mínimo 2 caracteres' }
                  })}
                error={ !!errors.firstName }
                helperText={ errors.firstName?.message }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Apellido"
                  { ...register('lastName', {
                    required: 'Este campo es requerido',
                    minLength: { value: 2, message: 'Mínimo 2 caracteres' }
                  })}
                  error={ !!errors.lastName }
                  helperText={ errors.lastName?.message }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterLuxon}>
                  <DatePicker
                    label="Fecha de nacimiento"
                    value={null}                    
                    onChange={() => {}}
                    slotProps={{ 
                      textField: { 
                        fullWidth: true,
                        ...register('birthdate', {
                          required: 'Este campo es requerido',
                          valueAsDate: true,
                        }),
                        error: !!errors.lastName,
                        helperText: errors.lastName?.message,
                      }
                    }}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                label="Género"
                { ...register('gender', {
                  required: 'Este campo es requerido',
                })}
                error={ !!errors.gender }
                helperText={ errors.gender?.message }
              >
                <MenuItem value="Male">Masculino</MenuItem>
                <MenuItem value="Female">Femenino</MenuItem>
              </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Identificación"
                  { ...register('identification', {
                    required: 'Este campo es requerido',
                  })}
                  error={ !!errors.identification }
                  helperText={ errors.identification?.message }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Teléfono"
                  { ...register('phone', {
                    required: 'Este campo es requerido',
                  })}
                  error={ !!errors.phone }
                  helperText={ errors.phone?.message }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  { ...register('email', {
                    required: 'Este campo es requerido',
                  })}
                  error={ !!errors.email }
                  helperText={ errors.email?.message }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Contraseña"
                  type="password"
                  { ...register('password', {
                    required: 'Este campo es requerido',
                  })}
                  error={ !!errors.password }
                  helperText={ errors.password?.message }
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
            <Link component={ NextLink } href="/auth/signin" variant="body2" underline="hover">
              ¿Posees una cuenta? Inicia sesión
            </Link>
          </Box>
        </Box>
      </Container>
  )
}

export default SignUpPage;
