import { FC } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const PageNotFound: FC = () => {
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
        <Typography variant="h1" sx={{ fontSize: '4rem', fontWeight: 'bold' }}>
          404
        </Typography>
        <Typography variant="h4">Seite nicht gefunden</Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Der angeforderte Pfad existiert nicht.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={RouterLink}
          to="/"
          sx={{ mt: 2 }}
        >
          Zur Startseite
        </Button>
      </Box>
    </>
  );
};

