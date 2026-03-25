import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export function Navbar() {
  const links: Array<{ label: string; path: string }> = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ display: 'flex', gap: 2, ml: 'auto' }}>
          {links.map((link: { label: string; path: string }) => (
            <Button
              key={link.path}
              color="inherit"
              component={RouterLink}
              to={link.path}
            >
              {link.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
