import React, { useState, useEffect } from "react";
import {
    Box,
    Button,
    Typography,
    Container,
    AppBar,
    Toolbar,
    IconButton,
    useMediaQuery,
    useTheme,
    Fade,
    Slide,
    Grow,
    Drawer,
    List,
    ListItem
} from "@mui/material";
import {
    Phone as PhoneIcon,
    Menu as MenuIcon,
    Pool,
    Info,
    Star,
    Photo,
    ContactMail,
    Close
} from "@mui/icons-material";
import { keyframes } from "@mui/system";

// Animations
const floatAnimation = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const waveAnimation = keyframes`
  0% { transform: translateX(0) translateY(0) rotate(0deg); }
  50% { transform: translateX(-20px) translateY(-10px) rotate(5deg); }
  100% { transform: translateX(0) translateY(0) rotate(0deg); }
`;

const pulseAnimation = keyframes`
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 193, 7, 0.4); }
  70% { transform: scale(1.05); box-shadow: 0 0 0 20px rgba(255, 193, 7, 0); }
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 193, 7, 0); }
`;

function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const navItems = [
        { label: 'Inicio', href: '/', icon: <Info sx={{ mr: 1, fontSize: 18 }} /> },
        { label: 'Galeria', href: '/galeria', icon: <Photo sx={{ mr: 1, fontSize: 18 }} /> },
        { label: 'Contato', href: '/contato', icon: <ContactMail sx={{ mr: 1, fontSize: 18 }} /> }
    ];

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawerContent = (
        <Box sx={{ 
            width: 280, 
            height: '100%',
            background: 'linear-gradient(135deg, #1976d2 0%, #00bcd4 100%)',
            color: 'white',
            p: 2
        }}>
            <Box sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                mb: 3,
                pt: 2
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Box sx={{
                        width: 40,
                        height: 40,
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.3)'
                    }}>
                        <img
                            src="/assets/logo.png"
                            alt="Logo"
                            style={{ width: '80%', height: '80%', objectFit: 'contain' }}
                        />
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 800 }}>
                        Acqua Azul
                    </Typography>
                </Box>
                <IconButton 
                    onClick={handleDrawerToggle} 
                    sx={{ color: 'white' }}
                    aria-label="fechar menu"
                >
                    <Close />
                </IconButton>
            </Box>

            <List>
                {navItems.map((item) => (
                    <ListItem key={item.label} disablePadding sx={{ mb: 1 }}>
                        <Button
                            href={item.href}
                            onClick={handleDrawerToggle}
                            sx={{
                                width: '100%',
                                justifyContent: 'flex-start',
                                color: 'white',
                                textTransform: 'none',
                                py: 1.5,
                                borderRadius: '8px',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                                }
                            }}
                            startIcon={item.icon}
                        >
                            {item.label}
                        </Button>
                    </ListItem>
                ))}
            </List>

            <Box sx={{ mt: 3, p: 2 }}>
                <Button
                    variant="contained"
                    href="#contato"
                    fullWidth
                    startIcon={<PhoneIcon />}
                    onClick={handleDrawerToggle}
                    sx={{
                        backgroundColor: '#ffd600',
                        color: '#1976d2',
                        py: 1.5,
                        borderRadius: '50px',
                        fontWeight: 'bold',
                        textTransform: 'none',
                        '&:hover': {
                            backgroundColor: '#ffca28'
                        }
                    }}
                >
                    Ligar Agora
                </Button>
            </Box>
        </Box>
    );

   
    if (!mounted) {
        return null;
    }

    return (
        <Box 
            component="header"
            sx={{ 
                position: 'relative', 
                minHeight: '30vh', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                overflow: 'hidden',
               
            }}
        >
         
            <Box sx={{ 
                position: 'absolute', 
                inset: 0, 
                zIndex: 0 
            }}>
                <Box
                    component="img"
                    src="https://images.unsplash.com/photo-1761519092908-82b7946946c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHN3aW1taW5nJTIwcG9vbCUyMGhhcHB5fGVufDF8fHx8MTc2NTU4NjM5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Crianças felizes na piscina"
                    sx={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        position: 'absolute'
                    }}
                    onError={(e) => {
                        e.target.src = "/assets/fallback-hero.jpg";
                    }}
                />
                <Box sx={{ 
                    position: 'absolute', 
                    inset: 0, 
                    background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.85) 0%, rgba(0, 188, 212, 0.85) 100%)'
                }} />
            </Box>

           
            <AppBar
                position="absolute"
                sx={{
                    background: 'transparent',
                    boxShadow: 'none',
                    py: { xs: 2, md: 3 }
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar sx={{ 
                        display: 'flex', 
                        justifyContent: 'space-between',
                        px: { xs: 0, sm: 2 }
                    }}>
                        
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                            <Box sx={{
                                width: { xs: 70, md: 90 },
                                height: { xs: 70, md: 90 },
                                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255, 255, 255, 0.3)',
                                animation: `${waveAnimation} 3s ease-in-out infinite`
                            }}>
                                <Box
                                    component="img"
                                    src="/assets/logo.png"
                                    alt="Logo Acqua Azul"
                                    sx={{ width: "90%", height: "90%", objectFit: 'contain' }}
                                />
                            </Box>
                            <Typography
                                variant="h5"
                                sx={{
                                    color: 'white',
                                    fontWeight: 800,
                                    fontSize: { xs: '1.5rem', md: '2rem' },
                                    letterSpacing: '-0.5px'
                                }}
                            >
                                Acqua Azul
                            </Typography>
                        </Box>

                       
                        {!isMobile ? (
                            <Box sx={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: { md: 3, lg: 4 }
                            }}>
                                {navItems.map((item) => (
                                    <Button
                                        key={item.label}
                                        href={item.href}
                                        sx={{
                                            color: 'white',
                                            textTransform: 'none',
                                            fontSize: '1rem',
                                            fontWeight: 500,
                                            '&:hover': {
                                                color: '#ffd600'
                                            },
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        {item.label}
                                    </Button>
                                ))}
                                <Button
                                    variant="contained"
                                    href="#contato"
                                    startIcon={<PhoneIcon />}
                                    sx={{
                                        backgroundColor: '#ffd600',
                                        color: '#1976d2',
                                        px: 3,
                                        py: 1,
                                        borderRadius: '50px',
                                        fontWeight: 'bold',
                                        textTransform: 'none',
                                        fontSize: '0.9rem',
                                        '&:hover': {
                                            backgroundColor: '#ffca28',
                                            transform: 'translateY(-2px)',
                                            boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
                                        },
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    Ligar
                                </Button>
                            </Box>
                        ) : (
                            <IconButton
                                onClick={handleDrawerToggle}
                                sx={{
                                    color: 'white',
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                    backdropFilter: 'blur(10px)',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.3)'
                                    }
                                }}
                                aria-label="abrir menu"
                            >
                                <MenuIcon />
                            </IconButton>
                        )}
                    </Toolbar>
                </Container>
            </AppBar>

          
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                variant="temporary"
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { 
                        boxSizing: 'border-box', 
                        width: 280 
                    },
                }}
            >
                {drawerContent}
            </Drawer>

            
          

            {/* Wave Decoration */}
            <Box sx={{ 
                position: 'absolute', 
                bottom: 0, 
                left: 0, 
                right: 0, 
                zIndex: 5,
                overflow: 'hidden'
            }}>
                <svg 
                    viewBox="0 0 1440 120" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ 
                        width: '100%', 
                        height: 'auto',
                        display: 'block'
                    }}
                >
                    <path 
                        d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 80C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
                        fill="white"
                    />
                    <path 
                        d="M0 100L60 95C120 90 240 80 360 75C480 70 600 70 720 73C840 76 960 82 1080 82C1200 82 1320 76 1380 73L1440 70V120H0V100Z" 
                        fill="rgba(255, 255, 255, 0.3)"
                    />
                </svg>
            </Box>

            {/* Floating Elements */}
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                overflow: 'hidden',
                pointerEvents: 'none',
                zIndex: 1
            }}>
                {mounted && [...Array(8)].map((_, i) => (
                    <Box
                        key={i}
                        sx={{
                            position: 'absolute',
                            width: 20 + i * 10,
                            height: 20 + i * 10,
                            background: `radial-gradient(circle, rgba(255,255,255,0.${2 + i % 3}) 0%, transparent 70%)`,
                            borderRadius: '50%',
                            top: `${10 + i * 10}%`,
                            left: `${5 + i * 12}%`,
                            animation: `${floatAnimation} ${10 + i * 2}s ease-in-out infinite`,
                            animationDelay: `${i * 0.5}s`
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
}

export default Header;