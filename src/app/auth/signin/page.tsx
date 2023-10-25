import { Metadata } from 'next';
import { Container } from '@mui/material';

import { SignInForm } from '@/components';

export const metadata: Metadata = {
  title: 'Access-control-app | Ingresar',
}

const SignInPage = () => {
  return (
    <Container component="main" maxWidth="sm">
      <SignInForm />
    </Container>
  )
}

export default SignInPage;
