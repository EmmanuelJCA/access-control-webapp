import { Metadata } from 'next';
import { Container } from '@mui/material';

import { SignUpForm } from '@/components';

export const metadata: Metadata = {
  title: 'Access-control-app | Registro',
}

const SignUpPage = () => {
  return (
    <Container component="main" maxWidth="sm">
        <SignUpForm />
    </Container>
  )
}

export default SignUpPage;
