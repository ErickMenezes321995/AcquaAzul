import React, { useEffect } from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  IconButton
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import { styled } from '@mui/material/styles';
import Header from '../../components/header_galeria/index';

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: 20,
  overflow: 'hidden',
  position: 'relative',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer',
  minHeight: 420,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fff',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[10],
  },
}));

function Gallery() {

  // 🔑 Carrega script oficial do Instagram
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // 🔁 Sempre reprocessa embeds após render
  useEffect(() => {
    if (window.instgrm) {
      setTimeout(() => {
        window.instgrm.Embeds.process();
      }, 200);
    }
  }, []);

  // ✅ Agora são POSTS, não imagens
  const posts = [
    { id: 1, url: 'https://www.instagram.com/p/DNUW8-hsAoU/' },
    { id: 2, url: 'https://www.instagram.com/p/DRvhWP4kbh8/?img_index=1' },
    { id: 3, url: 'https://www.instagram.com/p/DRBJbZ3EWUh/?img_index=1' },
    { id: 4, url: 'https://www.instagram.com/p/DP6ggJsDojn/' },
    { id: 5, url: 'https://www.instagram.com/p/DPZU8N4kZuS/' },
    { id: 6, url: 'https://www.instagram.com/p/DNrEmTMZMb1/' },
  ];

  return (
    <>
      <Header />

      <Box
        component="section"
        id="galeria"
        sx={{
          py: { xs: 8, md: 10 },
          px: { xs: 2, md: 4 },
          background: 'linear-gradient(to bottom, #e0f2fe, #ffffff)',
        }}
      >
        <Container maxWidth="lg">

          {/* Header */}
          <Box textAlign="center" mb={{ xs: 6, md: 8 }}>
            <Typography
              variant="overline"
              sx={{
                color: 'primary.main',
                fontWeight: 600,
                letterSpacing: 1,
                mb: 1,
                display: 'block'
              }}
            >
              Galeria
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 2,
                fontSize: { xs: '2rem', md: '3rem' },
              }}
            >
              Momentos de Alegria e Aprendizado
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{
                color: 'text.secondary',
                maxWidth: 700,
                mx: 'auto',
                fontSize: { xs: '1rem', md: '1.25rem' },
              }}
            >
              Veja nossos alunos se divertindo e aprendendo em um ambiente seguro e acolhedor.
            </Typography>
          </Box>

    
          <Grid container spacing={{ xs: 2, md: 3 }} sx={{display:"flex", alignItems:"center", justifyContent:"center" }}>
            {posts.map(post => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <StyledCard>
                  <blockquote
                    className="instagram-media"
                    data-instgrm-permalink={post.url}
                    data-instgrm-version="14"
                    style={{
                      width: '100%',
                      minWidth: '100%',
                      margin: 0
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 1,
                        p: 3
                      }}
                    >
                      <InstagramIcon color="primary" />
                      <Typography fontWeight={500}>
                        Carregando post do Instagram…
                      </Typography>
                    </Box>
                  </blockquote>
                </StyledCard>
              </Grid>
            ))}
          </Grid>

          <Box textAlign="center" mt={{ xs: 6, md: 8 }}>
            <Typography
              variant="body1"
              sx={{ color: 'text.secondary', mb: 2 }}
            >
              Siga-nos no Instagram <strong>@acquazulnatacaomanaus</strong> para ver mais fotos e vídeos!
            </Typography>

            <IconButton
              href="https://www.instagram.com/aquakids"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'primary.dark',
                },
              }}
            >
              <InstagramIcon />
            </IconButton>
          </Box>

        </Container>
      </Box>
    </>
  );
}

export default Gallery;
