import { FC } from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const Navbar: FC = () => {
  const leftLinks: Array<{ label: string; path: string }> = [
    { label: 'Home', path: '/' },
  ];

  const centerLinks: Array<{ label: string; path: string }> = [
    { label: 'Games', path: '/games' },
    { label: 'Gym', path: '/gym' },
  ];

  const rightLinks: Array<{ label: string; path: string }> = [
    { label: 'About Me', path: '/about' },
  ];

  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Home Links - Ganz Links */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          {leftLinks.map((link: { label: string; path: string }) => (
            <Button
              key={link.path}
              color="inherit"
              component={RouterLink}
              to={link.path}
              sx={{
                "&:hover": {
                  color: "secondary.main",
                  bgcolor: "primary.contrastText",
                }
              }}
            >
              {link.label}
            </Button>
          ))}
        </Box>

        {/* Center Links - Mittig */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          {centerLinks.map((link: { label: string; path: string }) => (
            <Button
              key={link.path}
              color="inherit"
              component={RouterLink}
              to={link.path}
              sx={{
                "&:hover": {
                  color: "secondary.main",
                  bgcolor: "primary.contrastText",
                }
              }}
            >
              {link.label}
            </Button>
          ))}
        </Box>

        {/* About Me - Ganz Rechts */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          {rightLinks.map((link: { label: string; path: string }) => (
            <Button
              key={link.path}
              color="inherit"
              component={RouterLink}
              to={link.path}
              sx={{
                "&:hover": {
                  color: "secondary.main",
                  bgcolor: "primary.contrastText",
                }
              }}
            >
              {link.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
