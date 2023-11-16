import { Box, Container, Typography } from '@mui/material';
import QRCode from 'react-qr-code';

export default function HomePage() {
  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h1">
          Access control
        </Typography>
        <QRCode 
          value='Profe no nos raspe'
          viewBox={`0 0 256 256`}
        />
      </Box>
    </Container>
  )
}
