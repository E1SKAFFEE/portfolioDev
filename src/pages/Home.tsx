import { FC } from 'react';
import { Box, Typography } from '@mui/material';

export const Home: FC = () => {
  return (
    <>
      <Box
        sx={{
          maxWidth: 'lg',
          mx: 'auto',
          py: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh',
          textAlign: 'center',
          gap: 2,
        }}
      >
        <Typography variant="h1" sx={{ fontSize: '3rem', fontWeight: 'bold' }}>
          Willkommen auf meiner Portfolio-Seite
        </Typography>
        <Typography variant="h5" sx={{ color: 'text.secondary' }}>
          Entdecke meine Projekte und Leidenschaften
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: '600px' }}>
          Hier findest du Informationen über meine Arbeit, Spiele und Fitness-Reisen.
        </Typography>
      </Box>
    </>
  );
};
