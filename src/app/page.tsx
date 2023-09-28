import { Box, Container, Typography } from '@mui/material';

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
      </Box>
    </Container>
  )
}
