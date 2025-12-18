import React, { useEffect, useRef, useState } from "react";
import {
    Box,
    Typography,
    Container,
    Grid,
    Card,
    useMediaQuery,
    useTheme,
    Fade,
    Grow,
    Slide,
    CircularProgress,
    Link
} from "@mui/material";
import {
    EmojiEvents as AwardIcon,
    People as UsersIcon,
    Favorite as HeartIcon,
    Security as ShieldIcon,
    Instagram,
} from "@mui/icons-material";


function About() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);
    const instagramRef = useRef();


    const stats = [
        { 
            icon: <AwardIcon sx={{ fontSize: 20, color: 'white' }} />, 
            number: '15+', 
            label: 'Anos de Experiência',
            gradient: 'linear-gradient(135deg, #00bcd4 0%, #2196f3 100%)'
        },
        { 
            icon: <UsersIcon sx={{ fontSize: 20, color: 'white' }} />, 
            number: '500+', 
            label: 'Alunos Ativos',
            gradient: 'linear-gradient(135deg, #2196f3 0%, #1976d2 100%)'
        },
        { 
            icon: <HeartIcon sx={{ fontSize: 32, color: 'white' }} />, 
            number: '100%', 
            label: 'Satisfação',
            gradient: 'linear-gradient(135deg, #f44336 0%, #e91e63 100%)'
        },
        { 
            icon: <ShieldIcon sx={{ fontSize: 32, color: 'white' }} />, 
            number: '24h', 
            label: 'Segurança',
            gradient: 'linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)'
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
                            url: 'https://www.instagram.com/p/DNUW8-hsAoU/',
                            title: 'Post 1 da TiccaStore'
                        },
                        {
                            id: '2',
                            url: 'https://www.instagram.com/p/DJS6y8ET_q7/',
                            title: 'Post 2 da TiccaStore'
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
            id="sobre" 
            component="section" 
            sx={{ 
                py: { xs: 10, md: 15, lg: 20 },
                px: { xs: 2, sm: 3, md: 4 },
                backgroundColor: 'white',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <Container maxWidth="lg">
                {/* Header Section */}
                <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 12 } }}>
                    <Fade in timeout={800}>
                        <Typography
                            variant="overline"
                            sx={{
                                color: '#00bcd4',
                                fontWeight: 600,
                                letterSpacing: 2,
                                fontSize: { xs: '0.75rem', md: '0.875rem' },
                                display: 'block',
                                mb: 1
                            }}
                        >
                            SOBRE NÓS
                        </Typography>
                    </Fade>
                    
                    <Slide direction="down" in timeout={1000}>
                        <Typography
                            variant="h2"
                            sx={{
                                fontSize: { 
                                    xs: '2rem', 
                                    sm: '2.5rem', 
                                    md: '3rem', 
                                    lg: '3.5rem' 
                                },
                                fontWeight: 900,
                                color: '#1a1a1a',
                                lineHeight: 1.1,
                                mb: 2
                            }}
                        >
                            A Melhor Escola de Natação<br />
                            para Seu Filho
                        </Typography>
                    </Slide>
                </Box>

                {/* Content Section */}
               <Box sx={{ mb: { xs: 10, md: 12 } }}>
    {/* Mobile: Coluna (imagem acima, texto abaixo) */}
                <Box sx={{ 
                    display: { xs: 'flex', md: 'none' },
                    flexDirection: 'column',
                    gap: 6
                }}>
                    {/* Imagem no mobile */}
                    <Box 
                        ref={instagramRef}
                        sx={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 3
                        }}
                        >
                        {post
                        .filter(post => post.id === '1')
                        .map((post) => (
                            <Box
                            key={post.id}
                            sx={{
                                width: "100%",
                                maxWidth: "400px",
                                height: { xs: "650px", md: "700px" },
                                display: "flex",
                                justifyContent: "center",
                                borderRadius: "20px",
                                overflow: 'hidden',
                                boxShadow: "0 20px 60px rgba(139, 69, 19, 0.15)",
                                backgroundColor: "white",
                                transition: "all 0.3s ease",
                                border: "2px solid rgba(212, 175, 55, 0.2)",
                                '&:hover': {
                                transform: "translateY(-5px)",
                                boxShadow: "0 25px 80px rgba(139, 69, 19, 0.25)"
                                }
                            }}
                            >
                            <blockquote 
                                className="instagram-media"
                                data-instgrm-permalink={post.url}
                                data-instgrm-version="14"
                                style={{ 
                                width: "100%",
                                minWidth: "300px"
                                }}
                            >
                                <Link 
                                href={post.url} 
                                underline="none"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 2,
                                    p: 3,
                                    backgroundColor: 'grey.50',
                                    border: '1px solid',
                                    borderColor: 'grey.200',
                                    borderRadius: 2,
                                    fontWeight: 'medium',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                    backgroundColor: 'white',
                                    boxShadow: 2,
                                    }
                                }}
                                >
                                <Box sx={{ display: 'flex', gap: 0.5 }}>
                                    {[0, 1, 2].map((item) => (
                                    <Box
                                        key={item}
                                        sx={{
                                        width: 8,
                                        height: 8,
                                        backgroundColor: 'primary.main',
                                        borderRadius: '50%',
                                        animation: 'pulse 1.4s ease-in-out infinite both',
                                        animationDelay: `${item * 0.2}s`,
                                        '@keyframes pulse': {
                                            '0%, 80%, 100%': {
                                            transform: 'scale(0.8)',
                                            opacity: 0.5,
                                            },
                                            '40%': {
                                            transform: 'scale(1)',
                                            opacity: 1,
                                            },
                                        },
                                        }}
                                    />
                                    ))}
                                </Box>
                                <Instagram color="primary" sx={{ fontSize: 28 }} />
                                <Typography variant="body1" color="text.primary" fontWeight="500">
                                    Carregando post do Instagram...
                                </Typography>
                                </Link>
                            </blockquote>
                            </Box>
                        ))}
                        </Box>

                    {/* Texto no mobile */}
                    <Box sx={{ textAlign: 'center' }}>
                        <Grow in timeout={1200}>
                            <Box>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontSize: '1.75rem',
                                        fontWeight: 800,
                                        color: '#333',
                                        mb: 4,
                                        lineHeight: 1.2
                                    }}
                                >
                                    Desenvolvendo nadadores<br />
                                    confiantes desde 2014
                                </Typography>
                                
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                    <Typography
                                        sx={{
                                            color: '#666',
                                            fontSize: '1rem',
                                            lineHeight: 1.7
                                        }}
                                    >
                                        Na Acqua Azul, acreditamos que aprender a nadar é uma habilidade 
                                        essencial para a vida. Nossa metodologia exclusiva combina técnica, 
                                        diversão e segurança para garantir que cada criança desenvolva 
                                        amor pela água.
                                    </Typography>
                                    
                                    <Typography
                                        sx={{
                                            color: '#666',
                                            fontSize: '1rem',
                                            lineHeight: 1.7
                                        }}
                                    >
                                        Nossos professores são certificados e especializados em natação 
                                        infantil, com formação em pedagogia aquática e primeiros socorros. 
                                        Utilizamos uma abordagem lúdica que respeita o ritmo de cada criança.
                                    </Typography>
                                    
                                    <Typography
                                        sx={{
                                            color: '#666',
                                            fontSize: '1rem',
                                            lineHeight: 1.7
                                        }}
                                    >
                                        Com turmas reduzidas e atenção individualizada, garantimos que seu 
                                        filho receba o melhor acompanhamento em cada etapa do aprendizado.
                                    </Typography>
                                </Box>
                            </Box>
                        </Grow>
                    </Box>
                </Box>

                {/* Desktop: Linha (texto à esquerda, imagem à direita) */}
                <Box sx={{ 
                    display: { xs: 'none', md: 'flex' },
                    alignItems: 'center',
                    gap: 8
                }}>

                     {/* Imagem no desktop */}
                   <Box 
                        ref={instagramRef}
                        sx={{
                            width: "50%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 3
                        }}
                        >
                        {post
                        .filter(post => post.id === '1')
                        .map((post) => (
                            <Box
                            key={post.id}
                            sx={{
                                width: "100%",
                                maxWidth: "400px",
                                height: { xs: "650px", md: "700px" },
                                display: "flex",
                                justifyContent: "center",
                                borderRadius: "20px",
                                overflow: 'hidden',
                                boxShadow: "0 20px 60px rgba(139, 69, 19, 0.15)",
                                backgroundColor: "white",
                                transition: "all 0.3s ease",
                                border: "2px solid rgba(212, 175, 55, 0.2)",
                                '&:hover': {
                                transform: "translateY(-5px)",
                                boxShadow: "0 25px 80px rgba(139, 69, 19, 0.25)"
                                }
                            }}
                            >
                            <blockquote 
                                className="instagram-media"
                                data-instgrm-permalink={post.url}
                                data-instgrm-version="14"
                                style={{ 
                                width: "100%",
                                minWidth: "300px"
                                }}
                            >
                                <Link 
                                href={post.url} 
                                underline="none"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 2,
                                    p: 3,
                                    backgroundColor: 'grey.50',
                                    border: '1px solid',
                                    borderColor: 'grey.200',
                                    borderRadius: 2,
                                    fontWeight: 'medium',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                    backgroundColor: 'white',
                                    boxShadow: 2,
                                    }
                                }}
                                >
                                <Box sx={{ display: 'flex', gap: 0.5 }}>
                                    {[0, 1, 2].map((item) => (
                                    <Box
                                        key={item}
                                        sx={{
                                        width: 8,
                                        height: 8,
                                        backgroundColor: 'primary.main',
                                        borderRadius: '50%',
                                        animation: 'pulse 1.4s ease-in-out infinite both',
                                        animationDelay: `${item * 0.2}s`,
                                        '@keyframes pulse': {
                                            '0%, 80%, 100%': {
                                            transform: 'scale(0.8)',
                                            opacity: 0.5,
                                            },
                                            '40%': {
                                            transform: 'scale(1)',
                                            opacity: 1,
                                            },
                                        },
                                        }}
                                    />
                                    ))}
                                </Box>
                                <Instagram color="primary" sx={{ fontSize: 28 }} />
                                <Typography variant="body1" color="text.primary" fontWeight="500">
                                    Carregando post do Instagram...
                                </Typography>
                                </Link>
                            </blockquote>
                            </Box>
                        ))}
                        </Box>

                    {/* Texto no desktop */}
                    <Box sx={{ flex: 1 }}>
                        <Grow in timeout={1200}>
                            <Box>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontSize: '2.25rem',
                                        fontWeight: 800,
                                        color: '#333',
                                        mb: 5,
                                        lineHeight: 1.2
                                    }}
                                >
                                    Desenvolvendo nadadores<br />
                                    confiantes desde 2014
                                </Typography>
                                
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                    <Typography
                                        sx={{
                                            color: '#666',
                                            fontSize: '1.1rem',
                                            lineHeight: 1.7
                                        }}
                                    >
                                        Na Acqua Azul, acreditamos que aprender a nadar é uma habilidade 
                                        essencial para a vida. Nossa metodologia exclusiva combina técnica, 
                                        diversão e segurança para garantir que cada criança desenvolva 
                                        amor pela água.
                                    </Typography>
                                    
                                    <Typography
                                        sx={{
                                            color: '#666',
                                            fontSize: '1.1rem',
                                            lineHeight: 1.7
                                        }}
                                    >
                                        Nossos professores são certificados e especializados em natação 
                                        infantil, com formação em pedagogia aquática e primeiros socorros. 
                                        Utilizamos uma abordagem lúdica que respeita o ritmo de cada criança.
                                    </Typography>
                                    
                                    <Typography
                                        sx={{
                                            color: '#666',
                                            fontSize: '1.1rem',
                                            lineHeight: 1.7
                                        }}
                                    >
                                        Com turmas reduzidas e atenção individualizada, garantimos que seu 
                                        filho receba o melhor acompanhamento em cada etapa do aprendizado.
                                    </Typography>
                                </Box>
                            </Box>
                        </Grow>
                    </Box>

                   
                </Box>
            </Box>

                {/* Stats Section */}
              <Grid 
                container 
                spacing={{ xs: 2, md: 3, lg: 4 }} // Mobile: 2px, Desktop: mantém original
                sx={{ px: { xs: 1, md: 0 }, display:"flex", alignItems:"center", justifyContent:"center", gap:"25px" }} // Mobile tem padding lateral
            >
                {stats.map((stat, index) => (
                    <Grid 
                        item 
                        xs={6} 
                        sm={6} 
                        md={3} 
                        key={index}
                    >
                        <Grow in timeout={{ xs: 600 + index * 150, md: 1000 + index * 200 }}>
                            <Card
                                sx={{
                                    textAlign: 'center',
                                    p: { xs: 2, md: 4 }, // Mobile compacto: 2, Desktop: 4
                                    borderRadius: { xs: 2.5, md: 4 }, // Mobile: 2.5, Desktop: 4
                                    boxShadow: { 
                                        xs: '0 4px 12px rgba(0,0,0,0.08)', 
                                        md: '0 10px 30px rgba(0,0,0,0.08)' 
                                    },
                                    border: '1px solid rgba(0,0,0,0.05)',
                                    height: { xs: 'auto', md: '65%' },
                                    width: { xs: '92%', md: '70%' }, // Mobile: 92%, Desktop: 70%
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: { xs: 'center', md: 'flex-start' },
                                    transition: 'all 0.3s ease',
                                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                    backdropFilter: 'blur(10px)',
                                    mx: 'auto',
                                    minHeight: { xs: 140, md: 'auto' }, // Mobile: altura mínima fixa
                                    '&:hover': {
                                        transform: { xs: 'none', md: 'translateY(-8px)' }, // Só hover no desktop
                                        boxShadow: { 
                                            xs: '0 4px 12px rgba(0,0,0,0.08)', 
                                            md: '0 20px 40px rgba(0,0,0,0.15)' 
                                        }
                                    },
                                    '&:active': {
                                        transform: { xs: 'scale(0.98)', md: 'none' } // Feedback tátil só no mobile
                                    }
                                }}
                            >
                                <Box
                                    sx={{
                                        width: { xs: 48, md: 70 }, // Mobile: 48px, Desktop: 70px
                                        height: { xs: 48, md: 70 },
                                        background: stat.gradient,
                                        borderRadius: { xs: 1.5, md: 3 }, // Mobile: 1.5, Desktop: 3
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mb: { xs: 1.5, md: 3 }, // Mobile: 1.5, Desktop: 3
                                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                                    }}
                                >
                                    {React.cloneElement(stat.icon, { 
                                        sx: { fontSize: { xs: 24, md: 32 } } // Mobile: 24px, Desktop: 32px
                                    })}
                                </Box>
                                
                                <Typography
                                    variant="h2"
                                    sx={{
                                        fontSize: { xs: '1rem', md: '2rem' }, // Mobile: 1.75rem, Desktop: 3rem
                                        fontWeight: { xs: 800, md: 900 },
                                        color: '#1a1a1a',
                                        mb: { xs: 0.5, md: 1 },
                                        lineHeight: 1,
                                        background: 'linear-gradient(135deg, #1a1a1a 0%, #424242 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        letterSpacing: { xs: '-0.5px', md: 'normal' } // Mobile mais compacto
                                    }}
                                >
                                    {stat.number}
                                </Typography>
                                
                                <Typography
                                    sx={{
                                        color: { xs: '#555', md: '#666' },
                                        fontSize: { xs: '0.75rem', md: '1rem' }, 
                                        fontWeight: { xs: 600, md: 500 },
                                        lineHeight: { xs: 1.2, md: 1.4 },
                                        maxWidth: { xs: 100, md: 150 },
                                        px: { xs: 0.5, md: 0 },
                                        textTransform: { xs: 'uppercase', md: 'none' }, 
                                        letterSpacing: { xs: '0.3px', md: 'normal' }
                                    }}
                                >
                                    {stat.label}
                                </Typography>
                            </Card>
                        </Grow>
                    </Grid>
                ))}
            </Grid>

            <Box
                sx={{
                    position: 'absolute',
                    top: 50,
                    right: 50,
                    width: 100,
                    height: 100,
                    background: 'radial-gradient(circle, rgba(0,188,212,0.1) 0%, transparent 70%)',
                    borderRadius: '50%',
                    display: { xs: 'none', md: 'block' }
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 100,
                    left: 30,
                    width: 80,
                    height: 80,
                    background: 'radial-gradient(circle, rgba(33,150,243,0.1) 0%, transparent 70%)',
                    borderRadius: '50%',
                    display: { xs: 'none', md: 'block' }
                }}
            />
            </Container>
        </Box>
    );
}

export default About;