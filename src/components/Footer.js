import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  Link,
  IconButton,
  Divider,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Waves as WavesIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  YouTube as YouTubeIcon
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[900],
  color: 'white',
  padding: theme.spacing(8, 2),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(12, 4),
  },
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  color: 'white',
  width: 40,
  height: 40,
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    transform: 'translateY(-2px)',
  },
  transition: 'all 0.3s ease',
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.grey[400],
  textDecoration: 'none',
  display: 'block',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: theme.palette.primary.light,
  },
}));

function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <FooterContainer component="footer">
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {/* Logo e descrição */}
          <Grid item xs={12} md={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
              <Box
                component="img"
                src="/assets/logo.png"
                alt="Logo Acqua Azul"
                sx={{ width: "30%", height: "50%", objectFit: 'contain' }}
            />
              <Typography variant="h5" component="span" sx={{ fontWeight: 700 }}>
                Acqua Azul
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: 'grey.400', lineHeight: 1.6 }}>
              Desenvolvendo nadadores confiantes desde 2014.
            </Typography>
          </Grid>

          {/* Links rápidos */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ mb: 3, fontSize: '1.125rem', fontWeight: 600 }}>
              Links Rápidos
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <FooterLink href="#sobre">
                Sobre
              </FooterLink>
              <FooterLink href="#programas">
                Programas
              </FooterLink>
              <FooterLink href="#beneficios">
                Benefícios
              </FooterLink>
              <FooterLink href="#galeria">
                Galeria
              </FooterLink>
            </Box>
          </Grid>

          {/* Contato */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 3, fontSize: '1.125rem', fontWeight: 600 }}>
              Contato
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Typography variant="body2" sx={{ color: 'grey.400' }}>
                (92) 90000-0000
              </Typography>
              <Typography variant="body2" sx={{ color: 'grey.400' }}>
                contato@Acquaazul.com.br
              </Typography>
              <Typography variant="body2" sx={{ color: 'grey.400' }}>
                Rua ex, 123
              </Typography>
              <Typography variant="body2" sx={{ color: 'grey.400' }}>
                Manaus, AM
              </Typography>
            </Box>
          </Grid>

          {/* Redes sociais */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 3, fontSize: '1.125rem', fontWeight: 600 }}>
              Redes Sociais
            </Typography>
            <Typography variant="body2" sx={{ color: 'grey.400', mb: 3 }}>
              Siga-nos para acompanhar nossas novidades e atividades.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <SocialButton
                href="#"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </SocialButton>
              <SocialButton
                href="https://www.instagram.com/acquazulnatacaomanaus"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </SocialButton>
              <SocialButton
                href="#"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTubeIcon />
              </SocialButton>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 6, borderColor: 'grey.800' }} />

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: 'grey.400' }}>
            &copy; {new Date().getFullYear()} Acqua Azul - Escola de Natação. Todos os direitos reservados.
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
}

export default Footer;