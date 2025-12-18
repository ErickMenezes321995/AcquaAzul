import React from 'react';
import { 
  Container, 
  Grid, 
  Typography, 
  Box, 
  Card, 
  CardContent, 
  List, 
  ListItem, 
  ListItemIcon,
  Button,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Baby, Users, Trophy, Sparkles } from 'lucide-react';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: 24,
  padding: theme.spacing(4),
  height: '80%',
  width:"90%",
  margin:"10px",
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: theme.shadows[8],
    transform: 'translateY(-4px)',
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(3),
  },
}));

const IconContainer = styled(Box)(({ theme, color }) => ({
  width: 64,
  height: 64,
  borderRadius: 16,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  background: color,
  [theme.breakpoints.down('md')]: {
    width: 56,
    height: 56,
  },
}));

const FeatureDot = styled(Box)(({ theme }) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  minWidth: 8,
  marginRight: theme.spacing(1),
}));

function Programs() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const programs = [
    {
      icon: Baby,
      title: 'Bebês (6-24 meses)',
      description: 'Adaptação aquática com os pais. Atividades lúdicas que estimulam o desenvolvimento motor e a confiança na água.',
      features: ['Aulas com os pais', 'Água aquecida', 'Material lúdico', 'Músicas e brincadeiras'],
      gradient: 'linear-gradient(135deg, #ec4899, #f43f5e)',
    },
    {
      icon: Sparkles,
      title: 'Iniciantes (2-5 anos)',
      description: 'Primeiros movimentos e flutuação. Desenvolvimento da coordenação motora através de jogos e atividades divertidas.',
      features: ['Turmas pequenas', 'Metodologia lúdica', 'Boias e materiais', 'Professores especializados'],
      gradient: 'linear-gradient(135deg, #fbbf24, #f97316)',
    },
    {
      icon: Users,
      title: 'Intermediário (6-9 anos)',
      description: 'Aperfeiçoamento das técnicas de nado. Crawl, costas, peito e exercícios de resistência aquática.',
      features: ['Técnica de nado', 'Exercícios específicos', 'Mergulho básico', 'Competições internas'],
      gradient: 'linear-gradient(135deg, #22d3ee, #3b82f6)',
    },
    {
      icon: Trophy,
      title: 'Avançado (10-12 anos)',
      description: 'Treinamento técnico e competitivo. Preparação para competições e aperfeiçoamento de todas as modalidades.',
      features: ['Treinamento intensivo', 'Quatro estilos', 'Viradas e saídas', 'Preparação competitiva'],
      gradient: 'linear-gradient(135deg, #a855f7, #4f46e5)',
    },
  ];

  return (
    <Box
      component="section"
      id="programas"
      sx={{
        py: { xs: 8, md: 10 },
        px: { xs: 2, md: 4 },
        background: 'linear-gradient(to bottom, #f0f9ff, #ffffff)',
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={{ xs: 6, md: 8 }}>
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
            Programas
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
            Aulas para Todas as Idades
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: 'text.secondary',
              maxWidth: 800,
              mx: 'auto',
              fontSize: { xs: '1rem', md: '1.25rem' },
            }}
          >
            Programas especialmente desenvolvidos para cada faixa etária, 
            respeitando o desenvolvimento e as necessidades de cada criança.
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 2, md: 3 }} sx={{display: { xs: 'block', md: 'flex' }, alignItems:"center", justifyContent:"center"}}>
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Grid item xs={12} sm={6} lg={3} key={index} sx={{ width: { xs: '100%', md: '40%' }, display:"flex", alignItems:"center", justifyContent:"center"}}>
                <StyledCard>
                  <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
                    <IconContainer color={program.gradient}>
                      <Icon size={isMobile ? 28 : 32} color="#ffffff" />
                    </IconContainer>
                    
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                        color: 'text.primary',
                        fontSize: { xs: '1.25rem', md: '1.5rem' },
                      }}
                    >
                      {program.title}
                    </Typography>
                    
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        mb: 3,
                        lineHeight: 1.6,
                      }}
                    >
                      {program.description}
                    </Typography>
                    
                    <List dense disablePadding>
                      {program.features.map((feature, idx) => (
                        <ListItem key={idx} disableGutters sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 'auto', mr: 1 }}>
                            <FeatureDot />
                          </ListItemIcon>
                          <Typography variant="body2" color="text.primary">
                            {feature}
                          </Typography>
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </StyledCard>
              </Grid>
            );
          })}
        </Grid>

        <Box textAlign="center" mt={{ xs: 6, md: 8 }}>
          <Button
            component="a"
            href="/contato"
            variant="contained"
            size="large"
            sx={{
              background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
              borderRadius: 50,
              px: 6,
              py: 2,
              fontSize: { xs: '1rem', md: '1.125rem' },
              fontWeight: 600,
              textTransform: 'none',
              '&:hover': {
                background: 'linear-gradient(135deg, #0891b2, #2563eb)',
                boxShadow: theme.shadows[4],
              },
            }}
          >
            Agende uma Aula Experimental Gratuita
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default  Programs;