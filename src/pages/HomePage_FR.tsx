import React from 'react';
import { Box, Container, Typography, Button, Grid, Card, CardContent, Chip, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PaletteIcon from '@mui/icons-material/Palette';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const HomePage_FR: React.FC = () => {
  const features = [
    {
      title: 'Intelligence Artistique',
      description: 'Notre IA révolutionnaire transforme vos idées en œuvres cinématographiques. Créez des vidéos avec la finesse de l\'art français.',
      icon: <AutoAwesomeIcon sx={{ fontSize: 40, color: '#9c27b0' }} />,
    },
    {
      title: 'Esthétique Parisienne',
      description: 'Des modèles inspirés par l\'élégance française. Chaque création reflète le raffinement et la sophistication de nos artistes.',
      icon: <PaletteIcon sx={{ fontSize: 40, color: '#9c27b0' }} />,
    },
    {
      title: 'Créativité Sans Limites',
      description: 'Explorez toutes les facettes de votre imagination. De l\'avant-garde au classique, notre plateforme épouse tous les styles.',
      icon: <TheaterComedyIcon sx={{ fontSize: 40, color: '#9c27b0' }} />,
    },
    {
      title: 'Passion & Excellence',
      description: 'Nous mettons notre cœur dans chaque pixel. Une expérience utilisateur pensée avec amour et attention aux détails.',
      icon: <FavoriteIcon sx={{ fontSize: 40, color: '#9c27b0' }} />,
    },
  ];

  const stats = [
    { number: '500K+', label: 'Vidéos Créées' },
    { number: '10K+', label: 'Artistes Satisfaits' },
    { number: 'France', label: 'et International' },
    { number: '99.9%', label: 'Disponibilité' },
  ];

  return (
    <Box sx={{ fontFamily: '"Playfair Display", "Georgia", serif' }}>
      <SEOHead
        title="VEO3 - Plateforme de Génération Vidéo IA | Création Vidéo Professionnelle"
        description="VEO3 est la plateforme française de génération vidéo par IA offrant des outils de création professionnels. Créez des vidéos d'exception avec l'élégance française et la technologie IA de pointe."
        canonical="/home-fr"
        language="fr-FR"
        keywords="génération vidéo IA,vidéo IA,création vidéo automatique,VEO3,intelligence artificielle vidéo,création vidéo professionnelle"
        ogTitle="VEO3 - L'Art Vidéo Réinventé par l'IA Française"
        ogDescription="Créez des vidéos d'exception avec notre IA française. Transformez vos idées en chefs-d'œuvre cinématographiques avec l'élégance et le raffinement français."
      />
      {/* Back Button */}
      <Box
        sx={{
          position: 'fixed',
          top: 20,
          left: 20,
          zIndex: 1000,
        }}
      >
        <Button
          component={Link}
          to="/languages"
          startIcon={<ArrowBackIcon />}
          variant="contained"
          sx={{
            bgcolor: 'rgba(255, 255, 255, 0.9)',
            color: '#9c27b0',
            backdropFilter: 'blur(10px)',
            fontFamily: '"Inter", sans-serif',
            '&:hover': {
              bgcolor: 'white',
            },
          }}
        >
          Langues
        </Button>
      </Box>

      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #9c27b0 0%, #673ab7 30%, #3f51b5 60%, #2196f3 100%)',
          color: 'white',
          py: { xs: 10, md: 14 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Artistic Elements */}
        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            right: '5%',
            width: '250px',
            height: '250px',
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
            borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%',
            zIndex: 0,
            animation: 'morph 8s ease-in-out infinite',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '15%',
            left: '8%',
            width: '180px',
            height: '180px',
            background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
            borderRadius: '38% 62% 63% 37% / 70% 33% 67% 30%',
            zIndex: 0,
            animation: 'morph 10s ease-in-out infinite reverse',
          }}
        />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
              >
                <Chip 
                  label="✨ Nouveauté: IA Créative Française" 
                  sx={{ 
                    mb: 4, 
                    bgcolor: 'rgba(255, 255, 255, 0.2)', 
                    color: 'white',
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    backdropFilter: 'blur(15px)',
                    fontFamily: '"Inter", sans-serif'
                  }}
                />
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    fontWeight: 400,
                    mb: 4,
                    fontSize: { xs: '2.8rem', md: '4.2rem' },
                    lineHeight: 1.2,
                    letterSpacing: '-0.02em',
                    fontFamily: '"Playfair Display", serif',
                    fontStyle: 'italic',
                  }}
                >
                  L'Art Vidéo
                  <br />
                  <span style={{ fontWeight: 700, fontStyle: 'normal' }}>Réinventé</span>
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ 
                    mb: 5, 
                    fontWeight: 300,
                    lineHeight: 1.6,
                    opacity: 0.95,
                    fontFamily: '"Inter", sans-serif',
                    maxWidth: '480px'
                  }}
                >
                  Créez des vidéos d'exception avec notre IA française. 
                  Transformez vos idées en chefs-d'œuvre cinématographiques 
                  en quelques minutes seulement.
                </Typography>
                <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                  <Button
                    component={Link}
                    to="/register"
                    variant="contained"
                    size="large"
                    sx={{
                      bgcolor: 'white',
                      color: '#9c27b0',
                      px: 5,
                      py: 2.5,
                      fontWeight: 600,
                      borderRadius: 50,
                      fontSize: '1.1rem',
                      textTransform: 'none',
                      fontFamily: '"Inter", sans-serif',
                      boxShadow: '0 8px 25px rgba(255, 255, 255, 0.3)',
                      '&:hover': {
                        bgcolor: 'rgba(255,255,255,0.95)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 12px 35px rgba(255, 255, 255, 0.4)',
                      },
                      transition: 'all 0.4s ease',
                    }}
                  >
                    Commencer Gratuitement
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      borderColor: 'white',
                      color: 'white',
                      px: 5,
                      py: 2.5,
                      fontWeight: 500,
                      borderRadius: 50,
                      fontSize: '1.1rem',
                      textTransform: 'none',
                      fontFamily: '"Inter", sans-serif',
                      borderWidth: '2px',
                      '&:hover': {
                        borderColor: 'white',
                        bgcolor: 'rgba(255,255,255,0.15)',
                        borderWidth: '2px',
                      },
                    }}
                  >
                    Voir la Démo
                  </Button>
                </Box>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
              >
                <Paper
                  elevation={20}
                  sx={{
                    height: '450px',
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)',
                    borderRadius: 6,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '3px solid rgba(255,255,255,0.3)',
                    position: 'relative',
                    overflow: 'hidden',
                    transform: 'rotate(2deg)',
                    '&:hover': {
                      transform: 'rotate(0deg) scale(1.02)',
                    },
                    transition: 'all 0.4s ease',
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '8px',
                      background: 'linear-gradient(90deg, #9c27b0 0%, #673ab7 50%, #2196f3 100%)',
                    }}
                  />
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      color: '#666', 
                      fontWeight: 400,
                      fontFamily: '"Playfair Display", serif',
                      fontStyle: 'italic'
                    }}
                  >
                    🎬 Aperçu Artistique
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box sx={{ py: 12, background: 'linear-gradient(135deg, #fafafa 0%, #f0f0f0 100%)' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h3"
              component="h2"
              sx={{ 
                textAlign: 'center', 
                mb: 10, 
                fontWeight: 400,
                color: '#2d2d2d',
                fontSize: { xs: '2.2rem', md: '3rem' },
                fontFamily: '"Playfair Display", serif',
                fontStyle: 'italic'
              }}
            >
              Une Communauté d'Artistes Passionnés
            </Typography>
          </motion.div>
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid key={index} size={{ xs: 6, md: 3 }}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      textAlign: 'center',
                      p: 4,
                      borderRadius: 4,
                      background: 'linear-gradient(135deg, #fff 0%, #fafafa 100%)',
                      border: '1px solid rgba(156, 39, 176, 0.1)',
                      '&:hover': {
                        boxShadow: '0 12px 35px rgba(156, 39, 176, 0.2)',
                        transform: 'translateY(-8px) rotate(1deg)',
                        border: '1px solid rgba(156, 39, 176, 0.3)',
                      },
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    <Typography
                      variant="h2"
                      component="div"
                      sx={{ 
                        fontWeight: 700, 
                        background: 'linear-gradient(135deg, #9c27b0 0%, #673ab7 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        mb: 1,
                        fontSize: { xs: '2rem', md: '2.5rem' },
                        fontFamily: '"Inter", sans-serif'
                      }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      color="text.secondary" 
                      sx={{ 
                        fontWeight: 500,
                        fontFamily: '"Inter", sans-serif'
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 14, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box sx={{ textAlign: 'center', mb: 12 }}>
              <Typography
                variant="h2"
                component="h2"
                sx={{ 
                  fontWeight: 400, 
                  mb: 4,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontFamily: '"Playfair Display", serif',
                  fontStyle: 'italic',
                  color: '#2d2d2d'
                }}
              >
                Pourquoi Choisir VEO3?
              </Typography>
              <Typography 
                variant="h6" 
                color="text.secondary" 
                sx={{ 
                  maxWidth: '700px', 
                  mx: 'auto',
                  lineHeight: 1.7,
                  fontWeight: 300,
                  fontFamily: '"Inter", sans-serif',
                  fontSize: '1.2rem'
                }}
              >
                Découvrez une nouvelle façon de créer, inspirée par l'art français 
                et propulsée par l'intelligence artificielle la plus avancée.
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={5}>
            {features.map((feature, index) => (
              <Grid key={index} size={{ xs: 12, md: 6 }}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      p: 5,
                      borderRadius: 4,
                      background: 'linear-gradient(135deg, #fff 0%, #fefefe 100%)',
                      border: '1px solid rgba(156, 39, 176, 0.08)',
                      '&:hover': {
                        boxShadow: '0 16px 40px rgba(156, 39, 176, 0.15)',
                        transform: 'translateY(-8px) rotate(-1deg)',
                        border: '1px solid rgba(156, 39, 176, 0.2)',
                      },
                      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    <Box sx={{ mb: 4 }}>
                      <Box
                        sx={{
                          display: 'inline-flex',
                          p: 3,
                          borderRadius: 4,
                          background: 'linear-gradient(135deg, rgba(156, 39, 176, 0.1) 0%, rgba(103, 58, 183, 0.1) 100%)',
                        }}
                      >
                        {feature.icon}
                      </Box>
                    </Box>
                    <Typography 
                      variant="h5" 
                      component="h3" 
                      sx={{ 
                        fontWeight: 600, 
                        mb: 3,
                        color: '#2d2d2d',
                        fontFamily: '"Playfair Display", serif'
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      color="text.secondary"
                      sx={{ 
                        lineHeight: 1.8,
                        fontSize: '1.05rem',
                        fontFamily: '"Inter", sans-serif',
                        fontWeight: 300
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: 12,
          background: 'linear-gradient(135deg, #9c27b0 0%, #673ab7 30%, #3f51b5 70%, #2196f3 100%)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            zIndex: 0,
          }}
        />
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                variant="h2"
                component="h2"
                sx={{ 
                  fontWeight: 400, 
                  mb: 4,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  lineHeight: 1.3,
                  fontFamily: '"Playfair Display", serif',
                  fontStyle: 'italic'
                }}
              >
                Prêt à Créer Votre Œuvre?
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  mb: 6, 
                  opacity: 0.95,
                  lineHeight: 1.7,
                  fontWeight: 300,
                  maxWidth: '600px',
                  mx: 'auto',
                  fontFamily: '"Inter", sans-serif',
                  fontSize: '1.2rem'
                }}
              >
                Rejoignez une communauté d'artistes visionnaires qui utilisent 
                VEO3 pour donner vie à leurs créations les plus audacieuses.
              </Typography>
              <Box sx={{ display: 'flex', gap: 4, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button
                  component={Link}
                  to="/register"
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: 'white',
                    color: '#9c27b0',
                    px: 6,
                    py: 3,
                    fontWeight: 600,
                    fontSize: '1.2rem',
                    borderRadius: 50,
                    textTransform: 'none',
                    fontFamily: '"Inter", sans-serif',
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.95)',
                      transform: 'scale(1.05)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Commencer Mon Aventure ✨
                </Button>
                <Button
                  component={Link}
                  to="/pricing"
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    px: 6,
                    py: 3,
                    fontWeight: 500,
                    fontSize: '1.2rem',
                    borderRadius: 50,
                    textTransform: 'none',
                    fontFamily: '"Inter", sans-serif',
                    borderWidth: '2px',
                    '&:hover': {
                      borderColor: 'white',
                      bgcolor: 'rgba(255,255,255,0.15)',
                      borderWidth: '2px',
                    },
                  }}
                >
                  Découvrir les Tarifs
                </Button>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Global Styles */}
      <Box
        component="style"
        sx={{ display: 'none' }}
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes morph {
              0%, 100% { 
                border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
                transform: translateY(0px) rotate(0deg);
              }
              25% { 
                border-radius: 40% 60% 65% 35% / 40% 60% 40% 60%;
                transform: translateY(-10px) rotate(2deg);
              }
              50% { 
                border-radius: 54% 46% 38% 62% / 49% 70% 30% 51%;
                transform: translateY(-5px) rotate(-1deg);
              }
              75% { 
                border-radius: 61% 39% 55% 45% / 61% 38% 62% 39%;
                transform: translateY(-15px) rotate(1deg);
              }
            }
          `
        }}
      />
    </Box>
  );
};

export default HomePage_FR; 