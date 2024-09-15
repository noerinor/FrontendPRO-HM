import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ p: 2, backgroundColor: 'primary.main', color: 'white', textAlign: 'center' }}>
      <Typography variant="body1">Contact: your-email@example.com</Typography>
    </Box>
  );
};

export default Footer;
