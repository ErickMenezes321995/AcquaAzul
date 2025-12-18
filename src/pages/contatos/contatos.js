import React, { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  Paper,
  TextField,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  useTheme,
  useMediaQuery,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CircularProgress,
  Tabs,
  Tab,
  Card,
  CardContent,
  Chip,
  IconButton
} from '@mui/material';
import {
  Phone as PhoneIcon,
  Email as MailIcon,
  LocationOn as MapPinIcon,
  AccessTime as ClockIcon,
  Directions as DirectionsIcon,
  DirectionsCar as CarIcon,
  Train as TrainIcon,
  DirectionsBus as BusIcon,
  LocalParking as ParkingIcon
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import Header from './../../components/header_galeria/index';


const ContactCard = styled(Paper)(({ theme }) => ({
  borderRadius: theme.spacing(3),
  padding: theme.spacing(4),
  background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
  color: 'white',
  height: '100%',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2.5),
    borderRadius: theme.spacing(2),
  },
}));

const MapContainer = styled(Box)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  height: 300,
  width: '100%',
  position: 'relative',
  boxShadow: theme.shadows[3],
  border: `1px solid ${theme.palette.divider}`,
  '& iframe': {
    border: 0,
    width: '100%',
    height: '100%',
  },
  [theme.breakpoints.down('sm')]: {
    height: 250,
  },
  [theme.breakpoints.up('md')]: {
    height: 350,
  },
}));

const LocationCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  transition: 'all 0.3s ease',
  height: '100%',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[8],
  },
}));

function Contatos() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [activeLocation, setActiveLocation] = useState(0);
  const theme = useTheme();
  
 
  const isXSmall = useMediaQuery(theme.breakpoints.down('xs'));
  const isSmall = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
  const isMedium = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isLarge = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isXLarge = useMediaQuery(theme.breakpoints.up('lg'));

 
  const locations = [
    {
      id: 1,
      title: 'Cidade Nova',
      address: 'R. Paraná Mirim, 68 - Cidade Nova',
      phone: '(92) 90000-0000',
      hours: 'Segunda a Sábado: 07:00 - 20:00',
      coordinates: '-3.032250028703939, -59.98770195582299',
      transport: [
        { type: 'parking', text: 'Estacionamento gratuito' },
        { type: 'bus', text: 'Várias linhas de ônibus' }
      ],
     
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.9951096549203!2d-59.9877556!3d-3.0325767999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c1b007ecf825b%3A0x427d9bfb536ad14f!2sAcqua%20Azul%20Nata%C3%A7%C3%A3o%20Cidade%20Nova!5e1!3m2!1spt-BR!2sbr!4v1766016228774!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
    },
    {
      id: 2,
      title: 'Campos Eliseos',
      address: 'Av. Des. João Machado, 1265 - Planalto',
      phone: '(92) 90000-0000',
      hours: 'Segunda a Sábado: 06:00 - 22:00',
      coordinates: '-3.0714866560082297, -60.052821783735794',
      transport: [
        { type: 'parking', text: 'Estacionamento gratuito' },
        { type: 'bus', text: 'Várias linhas de ônibus' }
      ],
      // Coordenadas da Av. Brigadeiro Faria Lima (exemplo)
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d393.61007877529977!2d-60.05306452342822!3d-3.0716426695332903!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c105eeec44673%3A0x18282f2a6e8ba257!2sAcademia%20Top%20Life!5e1!3m2!1spt-BR!2sbr!4v1766021242238!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
    },
    {
      id: 3,
      title: 'Nova Esperança',
      address: 'R. Nova Aurora - Nova Esperança',
      phone: '(92) 90000-0000',
      hours: 'Segunda a Sábado: 06:00 - 22:00',
      coordinates: '-3.0833595014254622, -60.061219253975196',
      transport: [
        { type: 'parking', text: 'Estacionamento gratuito' },
        { type: 'bus', text: 'Várias linhas de ônibus' }
      ],
   
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6297.689164527881!2d-60.061348!3d-3.0838416!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c1048eb99b269%3A0xcc3d57fbc9a28d1a!2sAcademia%20Rozana%20Fitness!5e1!3m2!1spt-BR!2sbr!4v1766021510095!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
    }
  ];

  const getTransportIcon = (type) => {
    switch (type) {
      case 'parking': return <ParkingIcon fontSize="small" />;
      case 'train': return <TrainIcon fontSize="small" />;
      case 'bus': return <BusIcon fontSize="small" />;
      default: return <DirectionsIcon fontSize="small" />;
    }
  };

  const getFieldSize = () => {
    if (isXSmall) return 'small';
    if (isSmall) return 'small';
    if (isMedium) return 'medium';
    return 'medium';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      alert('Obrigado pelo contato! Em breve entraremos em contato com você.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        childName: '',
        childAge: '',
        message: '',
      });
      setLoading(false);
    }, 1000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTabChange = (event, newValue) => {
    setActiveLocation(newValue);
  };

  const contactItems = [
    {
      icon: <PhoneIcon />,
      title: 'Telefone / WhatsApp',
      content: '(11) 98765-4321',
    },
    {
      icon: <MailIcon />,
      title: 'Email',
      content: 'contato@aquakids.com.br',
    },
    {
      icon: <ClockIcon />,
      title: 'Horário de Funcionamento',
      content: 'Segunda a Sábado',
      subContent: '07:00 - 20:00',
    },
  ];

  const features = [
    'Piscina aquecida e tratada com ozônio',
    'Turmas com no máximo 6 alunos',
    'Professores certificados e especializados',
    'Estacionamento gratuito',
    'Vestiários adaptados para crianças',
  ];

  const ageOptions = [
    { value: '', label: 'Selecione...' },
    { value: '6-24 meses', label: '6-24 meses' },
    { value: '2-5 anos', label: '2-5 anos' },
    { value: '6-9 anos', label: '6-9 anos' },
    { value: '10-12 anos', label: '10-12 anos' },
  ];

  return (
    <>
      <Header />
      <Box
        component="section"
        id="contato"
        sx={{
          py: { 
            xs: 4,
            sm: 5,
            md: 6,
            lg: 8,
            xl: 10
          },
          px: { 
            xs: 1.5,
            sm: 2,
            md: 3,
            lg: 4,
            xl: 6
          },
          background: 'linear-gradient(to bottom, #e0f2fe, #ffffff)',
        }}
      >
        <Container maxWidth="xl">
          <Box textAlign="center" mb={{ 
            xs: 3,
            sm: 4,
            md: 5,
            lg: 6,
            xl: 8
          }}>
            <Typography
              variant="overline"
              sx={{
                color: 'primary.main',
                fontWeight: 600,
                letterSpacing: 1,
                display: 'block',
                mb: 1,
                fontSize: {
                  xs: '0.7rem',
                  sm: '0.75rem',
                  md: '0.8125rem',
                  lg: '0.875rem'
                }
              }}
            >
              Contato
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                color: 'text.primary',
                mb: 2,
                fontSize: { 
                  xs: '1.75rem',
                  sm: '2.25rem',
                  md: '2.75rem',
                  lg: '3rem',
                  xl: '3.5rem'
                },
                lineHeight: {
                  xs: 1.2,
                  sm: 1.3,
                  md: 1.35
                }
              }}
            >
              Agende uma Aula Experimental
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: 'text.secondary',
                maxWidth: { 
                  xs: '100%',
                  sm: 600,
                  md: 700,
                  lg: 800,
                  xl: 900
                },
                mx: 'auto',
                fontSize: { 
                  xs: '0.875rem',
                  sm: '1rem',
                  md: '1.125rem',
                  lg: '1.25rem',
                  xl: '1.375rem'
                },
                lineHeight: {
                  xs: 1.4,
                  sm: 1.5,
                  md: 1.6
                }
              }}
            >
              Entre em contato conosco e venha conhecer nossa estrutura. 
              A primeira aula é gratuita!
            </Typography>
          </Box>

          
          <Box mb={{ xs: 4, sm: 5, md: 6, lg: 8 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                mb: 3,
                textAlign: 'center',
                color: 'text.primary',
                fontSize: { 
                  xs: '1.5rem',
                  sm: '1.75rem',
                  md: '2rem',
                  lg: '2.25rem'
                },
              }}
            >
              Nossas Unidades
            </Typography>
            
           
            <Box sx={{ mb: 4 }}>
              <Tabs
                value={activeLocation}
                onChange={handleTabChange}
                centered
                variant={isXSmall ? "scrollable" : "standard"}
                scrollButtons={isXSmall ? "auto" : false}
                sx={{
                  '& .MuiTab-root': {
                    fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
                    minWidth: { xs: 120, sm: 150, md: 180 },
                  }
                }}
              >
                {locations.map((location, index) => (
                  <Tab 
                    key={location.id} 
                    label={location.title}
                    sx={{ 
                      fontWeight: activeLocation === index ? 700 : 500,
                    }}
                  />
                ))}
              </Tabs>
            </Box>

          
            <Grid container spacing={{ xs: 3, sm: 4, md: 4, lg: 6 }} sx={{display:"flex", alignItems:"center", justifyContent:"center"}} >
              <Grid item xs={12} md={7} lg={8}>
                <MapContainer>
                  <iframe
                    src={locations[activeLocation].embedUrl}
                    title={`Mapa - ${locations[activeLocation].title}`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </MapContainer>
                
               
                <Box sx={{ 
                  mt: 2, 
                  display: 'flex', 
                  gap: 1, 
                  flexWrap: 'wrap',
                  justifyContent: { xs: 'center', sm: 'flex-start' }
                }}>
                  <Button
                    variant="contained"
                    size={isXSmall ? "small" : "medium"}
                    startIcon={<DirectionsIcon />}
                    href={`https://www.google.com/maps/dir/?api=1&destination=${locations[activeLocation].coordinates}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ 
                      backgroundColor: 'primary.main',
                      '&:hover': { backgroundColor: 'primary.dark' }
                    }}
                  >
                    Como Chegar
                  </Button>
                  
                
                  <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                    {locations[activeLocation].transport.map((trans, idx) => (
                      <Chip
                        key={idx}
                        icon={getTransportIcon(trans.type)}
                        label={trans.text}
                        size="small"
                        variant="outlined"
                        sx={{ 
                          m: 0.5,
                          fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8125rem' }
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </Grid>

            
              <Grid item xs={12} md={5} lg={4}>
                <LocationCard elevation={3}>
                  <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        fontWeight: 700, 
                        mb: 2, 
                        color: 'text.primary',
                        fontSize: { xs: '1.125rem', sm: '1.25rem', md: '1.375rem' }
                      }}
                    >
                      {locations[activeLocation].title}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                      {/* Endereço */}
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                        <MapPinIcon sx={{ color: 'primary.main', mt: 0.5, flexShrink: 0 }} />
                        <Box>
                          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
                            Endereço
                          </Typography>
                          <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', sm: '0.9375rem' } }}>
                            {locations[activeLocation].address}
                          </Typography>
                        </Box>
                      </Box>

                      {/* Telefone */}
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <PhoneIcon sx={{ color: 'primary.main', flexShrink: 0 }} />
                        <Box>
                          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
                            Telefone
                          </Typography>
                          <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', sm: '0.9375rem' } }}>
                            {locations[activeLocation].phone}
                          </Typography>
                        </Box>
                      </Box>

                      {/* Horário */}
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                        <ClockIcon sx={{ color: 'primary.main', mt: 0.5, flexShrink: 0 }} />
                        <Box>
                          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
                            Horário
                          </Typography>
                          <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', sm: '0.9375rem' } }}>
                            {locations[activeLocation].hours}
                          </Typography>
                        </Box>
                      </Box>

                      {/* Botão para ligar */}
                      <Button
                        variant="outlined"
                        fullWidth
                        startIcon={<PhoneIcon />}
                        href={`tel:${locations[activeLocation].phone.replace(/\D/g, '')}`}
                        sx={{ 
                          mt: 2,
                          py: 1.5,
                          fontSize: { xs: '0.875rem', sm: '0.9375rem' }
                        }}
                      >
                        Ligar para esta Unidade
                      </Button>
                    </Box>
                  </CardContent>
                </LocationCard>
              </Grid>
            </Grid>
          </Box>

  
          <Grid container spacing={{ xs: 3, sm: 4, md: 6 }} sx={{display:"flex", alignItems:"center", justifyContent:"center"}}>
            <Grid item xs={12} lg={6}>
              <Paper
                elevation={4}
                sx={{
                  borderRadius: 3,
                  p: { xs: 3, sm: 4 },
                  boxShadow: theme.shadows[4],
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    mb: { xs: 3, sm: 3.5, md: 4 },
                    color: 'text.primary',
                    fontSize: { 
                      xs: '1.375rem',
                      sm: '1.5rem',
                      md: '1.625rem'
                    },
                  }}
                >
                  Solicite uma Aula Experimental
                </Typography>

                <Box 
                  component="form" 
                  onSubmit={handleSubmit} 
                  sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: { 
                      xs: 2,
                      sm: 2.5,
                      md: 3
                    }
                  }}
                >
                  <TextField
                    label="Nome do Responsável *"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    fullWidth
                    variant="outlined"
                    size={getFieldSize()}
                  />

                  <TextField
                    label="Email *"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    fullWidth
                    variant="outlined"
                    size={getFieldSize()}
                  />

                  <TextField
                    label="Telefone / WhatsApp *"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    fullWidth
                    variant="outlined"
                    size={getFieldSize()}
                  />

                  <TextField
                    label="Nome da Criança *"
                    name="childName"
                    value={formData.childName}
                    onChange={handleChange}
                    required
                    fullWidth
                    variant="outlined"
                    size={getFieldSize()}
                  />

                  <FormControl fullWidth size={getFieldSize()}>
                    <InputLabel id="childAge-label">Idade da Criança *</InputLabel>
                    <Select
                      labelId="childAge-label"
                      label="Idade da Criança *"
                      name="childAge"
                      value={formData.childAge}
                      onChange={handleSelectChange}
                      required
                    >
                      {ageOptions.map((option) => (
                        <MenuItem 
                          key={option.value} 
                          value={option.value}
                          sx={{ fontSize: getFieldSize() === 'small' ? '0.875rem' : '1rem' }}
                        >
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <TextField
                    label="Mensagem (opcional)"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    multiline
                    rows={isXSmall ? 3 : 4}
                    fullWidth
                    variant="outlined"
                    size={getFieldSize()}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={loading}
                    sx={{
                      background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                      color: 'white',
                      py: { 
                        xs: 1.5,
                        sm: 1.75,
                        md: 2
                      },
                      borderRadius: 2,
                      fontSize: { 
                        xs: '0.875rem',
                        sm: '0.9375rem',
                        md: '1rem'
                      },
                      fontWeight: 600,
                      textTransform: 'none',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #0891b2, #2563eb)',
                        boxShadow: theme.shadows[6],
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                      mt: { xs: 1, sm: 1.5, md: 2 },
                    }}
                  >
                    {loading ? (
                      <CircularProgress size={isXSmall ? 20 : 24} color="inherit" />
                    ) : (
                      'Enviar Solicitação'
                    )}
                  </Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Contatos;