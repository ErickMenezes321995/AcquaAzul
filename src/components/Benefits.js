import React, {useEffect, useRef, useState} from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  Paper,
  Button,
  useTheme,
  useMediaQuery,
  CircularProgress,
  Link
} from '@mui/material';
import {
  Favorite as HeartIcon,
  Psychology as BrainIcon,
  EmojiEmotions as SmileIcon,
  Security as ShieldIcon,
  EmojiEvents as TrophyIcon,
  People as Users2Icon,
  Instagram
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const BenefitCard = styled(Paper)(({ theme }) => ({
  borderRadius: 24,
  padding: theme.spacing(4),
  height: '80%',
  width:"80%",
  background: 'linear-gradient(135deg, #e0f2fe, #cffafe)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[8],
    background: 'linear-gradient(135deg, #cffafe, #e0f2fe)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
    borderRadius: 20,
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: 56,
  height: 56,
  borderRadius: 16,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
  transition: 'transform 0.3s ease',
  [theme.breakpoints.down('sm')]: {
    width: 48,
    height: 48,
    marginBottom: theme.spacing(2),
  },
}));

const HighlightBanner = styled(Box)(({ theme }) => ({
  borderRadius: 24,
  padding: theme.spacing(6),
  background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4),
    borderRadius: 20,
  },
}));

function Benefits() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);
    const instagramRef = useRef();

  const benefits = [
    {
      icon: HeartIcon,
      title: 'Saúde Cardiovascular',
      description: 'Fortalece o coração e melhora a circulação sanguínea, promovendo uma vida mais saudável.',
    },
    {
      icon: BrainIcon,
      title: 'Desenvolvimento Cognitivo',
      description: 'Estimula o cérebro, melhora concentração, memória e capacidade de aprendizado.',
    },
    {
      icon: SmileIcon,
      title: 'Autoconfiança',
      description: 'Superar desafios na água aumenta a autoestima e confiança em outras áreas da vida.',
    },
    {
      icon: ShieldIcon,
      title: 'Segurança Aquática',
      description: 'Habilidades essenciais para segurança em piscinas, praias e ambientes aquáticos.',
    },
    {
      icon: TrophyIcon,
      title: 'Disciplina e Foco',
      description: 'Desenvolve disciplina, persistência e capacidade de seguir instruções.',
    },
    {
      icon: Users2Icon,
      title: 'Socialização',
      description: 'Interação com outras crianças promove habilidades sociais e trabalho em equipe.',
    },
  ];

   useEffect(() => {
  
          const script = document.createElement('script');
          script.src = "https://www.instagram.com/embed.js";
          script.async = true;
          document.body.appendChild(script);
  
          script.onload = () => {
              if (window.instgrm) {
                  window.instgrm.Embeds.process();
              }
          };
  
          const fetchInstagramPosts = async () => {
              try {
                  setTimeout(() => {
                      setPost([
                          {
                              id: '1',
                              url: 'https://www.instagram.com/p/DQfGsH1kj2g/',
                              title: 'Post 1 da TiccaStore'
                          },
                          
                      ]);
                      setLoading(false);
                  }, 1000);
              } catch (error) {
                  console.error('Erro ao carregar posts:', error);
                  setLoading(false);
              }
          };
  
          fetchInstagramPosts();
  
          return () => {
              document.body.removeChild(script);
          };
      }, []);
  
        useEffect(() => {
          if (!loading && window.instgrm) {
              setTimeout(() => {
                  window.instgrm.Embeds.process();
              }, 100);
          }
      }, [loading]);
  
      if (loading) {
          return (
              <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
                  <CircularProgress />
              </Box>
          );
      }

  return (
    <Box
      component="section"
      id="beneficios"
      sx={{
        py: { xs: 8, md: 10 },
        px: { xs: 2, md: 4 },
        backgroundColor: '#65a7f3ff',
      }}
    >
        
      <Container maxWidth="lg">
        <Box sx={{
                display: { xs: "flex", md: "flex" },
                flexDirection: { xs: "column-reverse", md: "row" }, 
                padding: "25px",
                gap: { xs: 4, md: 6 }
                }}> 
                
                <Box sx={{
                    width: "100%",
                    textAlign: "center",
                    mb: { xs: 6, md: 8 }
                }}>
                    <Typography
                    variant="overline"
                    sx={{
                        color: 'primary.main',
                        fontWeight: 600,
                        letterSpacing: 1,
                        display: 'block',
                        mb: 1,
                    }}
                    >
                    Benefícios
                    </Typography>
                    <Typography
                    variant="h2"
                    sx={{
                        fontWeight: 800,
                        color: 'text.primary',
                        mb: 2,
                        fontSize: { xs: '2rem', md: '3rem' },
                    }}
                    >
                    Por Que Natação para Crianças?
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
                    A natação é muito mais do que um esporte. É uma atividade completa que 
                    traz benefícios físicos, mentais e emocionais para toda a vida.
                    </Typography>
                </Box>
                </Box>

        <Grid container spacing={{ xs: 3, md: 4 }} sx={{display: { xs: 'block', md: 'flex' }, alignItems:"center", justifyContent:"center"}}>
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Grid item xs={12} sm={6} md={4} key={index} sx={{ width: { xs: '100%', md: '40%' }, margin:{xs:"10px", md:"0px"}  , display:"flex", alignItems:"center", justifyContent:"center"}}>
                <BenefitCard elevation={0}>
                  <IconWrapper>
                    <Icon sx={{ fontSize: 28, color: 'white' }} />
                  </IconWrapper>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      color: 'text.primary',
                      fontSize: { xs: '1.25rem', md: '1.5rem' },
                    }}
                  >
                    {benefit.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.6,
                    }}
                  >
                    {benefit.description}
                  </Typography>
                </BenefitCard>
              </Grid>
            );
          })}
        </Grid>

        {/* img para ficar melhor  */}

        <Box mt={{ xs: 6, md: 8 }}>
          <HighlightBanner>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                mb: 3,
                color: 'white',
                fontSize: { xs: '1.75rem', md: '2.5rem' },
              }}
            >
              Investir na natação é investir no futuro do seu filho
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255, 255, 255, 0.9)',
                mb: 4,
                maxWidth: 700,
                mx: 'auto',
                fontSize: { xs: '1rem', md: '1.25rem' },
              }}
            >
              Além de ser uma atividade divertida, a natação desenvolve habilidades que 
              acompanharão seu filho por toda a vida.
            </Typography>
            <Button
              component="a"
              href="/contato"
              variant="contained"
              size="large"
              sx={{
                backgroundColor: '#fbbf24',
                color: '#1e40af',
                borderRadius: 50,
                px: 6,
                py: 2,
                fontSize: { xs: '1rem', md: '1.125rem' },
                fontWeight: 700,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#f59e0b',
                  boxShadow: theme.shadows[4],
                },
              }}
            >
              Comece Hoje Mesmo
            </Button>
          </HighlightBanner>
        </Box>
      </Container>
    </Box>
  );
}

export default Benefits;