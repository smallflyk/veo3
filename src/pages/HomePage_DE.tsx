import React from 'react';
import { Box, Container, Typography, Button, Grid, Card, CardContent, Chip, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import VerifiedIcon from '@mui/icons-material/Verified';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const HomePage_DE: React.FC = () => {
  const features = [
    {
      title: 'Präzise AI-Technologie',
      description: 'Hochentwickelte KI-Algorithmen für professionelle Videoproduktion. Deutsche Ingenieurskunst trifft auf modernste Technologie.',
      icon: <PrecisionManufacturingIcon sx={{ fontSize: 40, color: '#1976d2' }} />,
    },
    {
      title: 'Höchste Sicherheitsstandards',
      description: 'DSGVO-konform und nach deutschen Datenschutzrichtlinien entwickelt. Ihre Daten sind bei uns absolut sicher.',
      icon: <SecurityIcon sx={{ fontSize: 40, color: '#1976d2' }} />,
    },
    {
      title: 'Optimale Effizienz',
      description: 'Maximale Produktivität durch systematische Arbeitsabläufe. Reduzieren Sie Ihre Produktionszeit um bis zu 90%.',
      icon: <SpeedIcon sx={{ fontSize: 40, color: '#1976d2' }} />,
    },
    {
      title: 'Zertifizierte Qualität',
      description: 'Nach ISO 9001 zertifizierte Prozesse und geprüfte Qualitätsstandards. Made in Germany Qualität.',
      icon: <VerifiedIcon sx={{ fontSize: 40, color: '#1976d2' }} />,
    },
  ];

  const stats = [
    { number: '500K+', label: 'Erstellte Videos' },
    { number: '10K+', label: 'Zufriedene Kunden' },
    { number: 'DACH', label: 'Regionen' },
    { number: '99.99%', label: 'Verfügbarkeit' },
  ];

  return (
    <Box sx={{ fontFamily: '"Inter", "Roboto", sans-serif' }}>
      <SEOHead
        title="VEO3 - AI-Video-Generierungsplattform | Professionelle KI-Video-Erstellung"
        description="VEO3 ist die führende AI-Video-Generierungsplattform mit deutschen Qualitätsstandards. Erstellen Sie hochwertige Videos mit modernster KI-Technologie - effizient, sicher und DSGVO-konform."
        canonical="/home-de"
        language="de-DE"
        keywords="AI Video Generierung,Video KI,automatische Video Erstellung,VEO3,künstliche Intelligenz Video,professionelle Video Erstellung"
        ogTitle="VEO3 - Präzise AI-Video-Generierung Made in Germany"
        ogDescription="Erstellen Sie professionelle Videos mit deutscher Präzision. VEO3 bietet KI-gestützte Video-Erstellung nach höchsten Qualitäts- und Sicherheitsstandards."
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
            color: '#1976d2',
            backdropFilter: 'blur(10px)',
            '&:hover': {
              bgcolor: 'white',
            },
          }}
        >
          Sprachen
        </Button>
      </Box>

      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 50%, #0d47a1 100%)',
          color: 'white',
          py: { xs: 10, md: 14 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Geometric Grid Pattern */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '50%',
            height: '100%',
            background: 'url("data:image/svg+xml,%3csvg width="60" height="60" xmlns="http://www.w3.org/2000/svg"%3e%3cdefs%3e%3cpattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse"%3e%3cpath d="m 60 0 l 0 60 l -60 0 l 0 -60 l 60 0" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/%3e%3c/pattern%3e%3c/defs%3e%3crect width="100%" height="100%" fill="url(%23grid)" /%3e%3c/svg%3e")',
            opacity: 0.3,
            zIndex: 0,
          }}
        />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <Chip 
                  label="🔧 Neue Funktion: Präzisions-KI" 
                  sx={{ 
                    mb: 4, 
                    bgcolor: 'rgba(255, 255, 255, 0.15)', 
                    color: 'white',
                    fontWeight: 600,
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    backdropFilter: 'blur(10px)'
                  }}
                />
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    fontWeight: 700,
                    mb: 4,
                    fontSize: { xs: '2.5rem', md: '3.8rem' },
                    lineHeight: 1.2,
                    letterSpacing: '-0.01em',
                  }}
                >
                  Professionelle Videos
                  <br />
                  mit deutscher Präzision
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ 
                    mb: 5, 
                    fontWeight: 400,
                    lineHeight: 1.5,
                    opacity: 0.95,
                    maxWidth: '500px'
                  }}
                >
                  Erstellen Sie hochwertige Videos mit unserer 
                  KI-gestützten Plattform. Effizient, sicher und 
                  nach deutschen Qualitätsstandards.
                </Typography>
                <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                  <Button
                    component={Link}
                    to="/register"
                    variant="contained"
                    size="large"
                    sx={{
                      bgcolor: 'white',
                      color: '#1976d2',
                      px: 5,
                      py: 2,
                      fontWeight: 600,
                      borderRadius: 2,
                      fontSize: '1rem',
                      textTransform: 'none',
                      boxShadow: '0 4px 12px rgba(255, 255, 255, 0.3)',
                      '&:hover': {
                        bgcolor: 'rgba(255,255,255,0.95)',
                        boxShadow: '0 6px 16px rgba(255, 255, 255, 0.4)',
                      },
                    }}
                  >
                    Kostenlos testen
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      borderColor: 'white',
                      color: 'white',
                      px: 5,
                      py: 2,
                      fontWeight: 500,
                      borderRadius: 2,
                      fontSize: '1rem',
                      textTransform: 'none',
                      borderWidth: '2px',
                      '&:hover': {
                        borderColor: 'white',
                        bgcolor: 'rgba(255,255,255,0.1)',
                        borderWidth: '2px',
                      },
                    }}
                  >
                    Demo ansehen
                  </Button>
                </Box>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Paper
                  elevation={12}
                  sx={{
                    height: '400px',
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)',
                    borderRadius: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(255,255,255,0.2)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: 'linear-gradient(90deg, #1976d2 0%, #1565c0 50%, #0d47a1 100%)',
                    }}
                  />
                  <Typography variant="h6" sx={{ color: '#666', fontWeight: 500 }}>
                    🎬 Video-Vorschau
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box sx={{ py: 10, bgcolor: '#f8f9fa' }}>
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
                mb: 8, 
                fontWeight: 700,
                color: '#1a1a1a',
                fontSize: { xs: '2rem', md: '2.5rem' }
              }}
            >
              Vertrauen durch Leistung
            </Typography>
          </motion.div>
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid key={index} size={{ xs: 6, md: 3 }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Paper
                    elevation={1}
                    sx={{
                      textAlign: 'center',
                      p: 4,
                      borderRadius: 2,
                      background: 'white',
                      border: '1px solid #e0e0e0',
                      '&:hover': {
                        boxShadow: '0 4px 12px rgba(25, 118, 210, 0.15)',
                        transform: 'translateY(-2px)',
                        border: '1px solid rgba(25, 118, 210, 0.3)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <Typography
                      variant="h3"
                      component="div"
                      sx={{ 
                        fontWeight: 700, 
                        color: '#1976d2', 
                        mb: 1,
                        fontSize: { xs: '1.8rem', md: '2.2rem' }
                      }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 500 }}>
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
      <Box sx={{ py: 12, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ textAlign: 'center', mb: 10 }}>
              <Typography
                variant="h3"
                component="h2"
                sx={{ 
                  fontWeight: 700, 
                  mb: 3,
                  color: '#1a1a1a',
                  fontSize: { xs: '2rem', md: '2.5rem' }
                }}
              >
                Deutsche Ingenieurskunst
              </Typography>
              <Typography 
                variant="h6" 
                color="text.secondary" 
                sx={{ 
                  maxWidth: '700px', 
                  mx: 'auto',
                  lineHeight: 1.6,
                  fontWeight: 400
                }}
              >
                VEO3 kombiniert deutsche Präzision mit modernster KI-Technologie
                für höchste Qualitätsstandards in der Videoproduktion.
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid key={index} size={{ xs: 12, md: 6 }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Paper
                    elevation={1}
                    sx={{
                      height: '100%',
                      p: 4,
                      borderRadius: 2,
                      background: 'white',
                      border: '1px solid #e0e0e0',
                      '&:hover': {
                        boxShadow: '0 8px 24px rgba(25, 118, 210, 0.12)',
                        transform: 'translateY(-4px)',
                        border: '1px solid rgba(25, 118, 210, 0.3)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <Box sx={{ mb: 3 }}>
                      <Box
                        sx={{
                          display: 'inline-flex',
                          p: 2,
                          borderRadius: 2,
                          bgcolor: 'rgba(25, 118, 210, 0.08)',
                        }}
                      >
                        {feature.icon}
                      </Box>
                    </Box>
                    <Typography 
                      variant="h6" 
                      component="h3" 
                      sx={{ 
                        fontWeight: 600, 
                        mb: 2,
                        color: '#1a1a1a'
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      color="text.secondary"
                      sx={{ 
                        lineHeight: 1.6,
                        fontSize: '0.95rem'
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: 10,
          background: 'linear-gradient(135deg, #263238 0%, #37474f 50%, #455a64 100%)',
          color: 'white',
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                variant="h3"
                component="h2"
                sx={{ 
                  fontWeight: 700, 
                  mb: 3,
                  fontSize: { xs: '2rem', md: '2.5rem' }
                }}
              >
                Bereit für den nächsten Schritt?
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  mb: 5, 
                  opacity: 0.95,
                  lineHeight: 1.6,
                  fontWeight: 400,
                  maxWidth: '600px',
                  mx: 'auto'
                }}
              >
                Schließen Sie sich tausenden von Unternehmen an, 
                die bereits auf VEO3 vertrauen für ihre professionelle 
                Videoproduktion.
              </Typography>
              <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button
                  component={Link}
                  to="/register"
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: '#1976d2',
                    px: 5,
                    py: 2,
                    fontWeight: 600,
                    borderRadius: 2,
                    fontSize: '1rem',
                    textTransform: 'none',
                    '&:hover': {
                      bgcolor: '#1565c0',
                    },
                  }}
                >
                  Kostenlose Testversion starten
                </Button>
                <Button
                  component={Link}
                  to="/pricing"
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    px: 5,
                    py: 2,
                    fontWeight: 500,
                    borderRadius: 2,
                    fontSize: '1rem',
                    textTransform: 'none',
                    borderWidth: '2px',
                    '&:hover': {
                      borderColor: 'white',
                      bgcolor: 'rgba(255,255,255,0.1)',
                      borderWidth: '2px',
                    },
                  }}
                >
                  Preise ansehen
                </Button>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage_DE; 