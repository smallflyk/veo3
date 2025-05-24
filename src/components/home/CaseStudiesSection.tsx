import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Button,
  Avatar,
  Chip
} from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const caseStudies = [
  {
    id: 1,
    title: '电影工作室如何使用VEO3加速预览制作',
    description: 'Promise工作室利用VEO3生成分镜和预览，将制作时间缩短了40%，同时提高了创意探索的可能性。',
    image: 'https://via.placeholder.com/600x400?text=Film+Studio+Case',
    category: '电影制作',
    company: 'Promise Studios',
    logo: 'https://via.placeholder.com/40x40',
  },
  {
    id: 2,
    title: '游戏开发商使用VEO3创建沉浸式体验',
    description: 'Volley游戏公司使用VEO3为其地下城探险游戏生成视觉体验，AI作为主持人、向导和互动角色。',
    image: 'https://via.placeholder.com/600x400?text=Game+Development+Case',
    category: '游戏开发',
    company: 'Volley Games',
    logo: 'https://via.placeholder.com/40x40',
  },
  {
    id: 3,
    title: '教育机构利用VEO3创建互动教学内容',
    description: '某知名大学使用VEO3生成教学视频，使复杂概念可视化，提高学生参与度和理解力。',
    image: 'https://via.placeholder.com/600x400?text=Education+Case',
    category: '教育',
    company: '未来教育',
    logo: 'https://via.placeholder.com/40x40',
  },
];

const CaseStudiesSection: React.FC = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography
            component="h2"
            variant="h3"
            color="text.primary"
            gutterBottom
          >
            客户成功案例
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 2, maxWidth: 700, mx: 'auto' }}>
            了解各行各业如何利用VEO3提升创意工作流程，实现更高效的内容创作
          </Typography>
        </Box>
        
        <Grid container spacing={4}>
          {caseStudies.map((caseStudy, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={caseStudy.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card 
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    overflow: 'hidden',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={caseStudy.image}
                    alt={caseStudy.title}
                    sx={{
                      transition: 'transform 0.5s ease',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      }
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                      <Chip 
                        label={caseStudy.category} 
                        size="small" 
                        color="primary" 
                        variant="outlined" 
                      />
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar 
                          src={caseStudy.logo} 
                          alt={caseStudy.company} 
                          sx={{ width: 24, height: 24, mr: 1 }} 
                        />
                        <Typography variant="caption" color="text.secondary">
                          {caseStudy.company}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography gutterBottom variant="h5" component="h3">
                      {caseStudy.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {caseStudy.description}
                    </Typography>
                    <Button 
                      component={Link} 
                      to={`/case-studies/${caseStudy.id}`} 
                      color="primary"
                      sx={{ mt: 'auto' }}
                    >
                      阅读详情
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
        
        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Button 
            component={Link} 
            to="/case-studies" 
            variant="contained" 
            color="primary" 
            size="large"
          >
            查看所有案例
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default CaseStudiesSection; 