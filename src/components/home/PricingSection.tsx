import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardHeader,
  CardActions,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Switch,
  FormGroup,
  FormControlLabel,
  Divider
} from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const plans = [
  {
    title: '免费版',
    price: {
      monthly: 0,
      yearly: 0,
    },
    description: '体验基础AI视频生成功能',
    features: [
      { text: '基础视频生成', included: true },
      { text: '720p视频质量', included: true },
      { text: '每月5个视频额度', included: true },
      { text: '基础模板库', included: true },
      { text: '音频同步生成', included: false },
      { text: '高级编辑功能', included: false },
      { text: '优先渲染', included: false },
    ],
    buttonText: '免费开始',
    buttonVariant: 'outlined',
    popular: false,
  },
  {
    title: '专业版',
    price: {
      monthly: 99,
      yearly: 79,
    },
    description: '适合专业创作者和小型团队',
    features: [
      { text: '高级视频生成', included: true },
      { text: '1080p视频质量', included: true },
      { text: '每月50个视频额度', included: true },
      { text: '完整模板库', included: true },
      { text: '音频同步生成', included: true },
      { text: '高级编辑功能', included: true },
      { text: '优先渲染', included: false },
    ],
    buttonText: '选择专业版',
    buttonVariant: 'contained',
    popular: true,
  },
  {
    title: '企业版',
    price: {
      monthly: 299,
      yearly: 249,
    },
    description: '适合企业和大型团队需求',
    features: [
      { text: '最高级视频生成', included: true },
      { text: '4K视频质量', included: true },
      { text: '无限视频额度', included: true },
      { text: '专属模板定制', included: true },
      { text: '高级音频同步生成', included: true },
      { text: '全部编辑功能', included: true },
      { text: '最高优先级渲染', included: true },
    ],
    buttonText: '联系销售',
    buttonVariant: 'contained',
    popular: false,
  },
];

const PricingSection: React.FC = () => {
  const [annually, setAnnually] = useState(false);

  const handleBillingChange = () => {
    setAnnually(!annually);
  };

  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography
            component="h2"
            variant="h3"
            color="text.primary"
            gutterBottom
          >
            选择适合您的计划
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4, maxWidth: 700, mx: 'auto' }}>
            灵活的定价方案，满足不同规模团队和个人的需求
          </Typography>
          
          <FormGroup sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
            <FormControlLabel 
              control={
                <Switch 
                  checked={annually} 
                  onChange={handleBillingChange} 
                  color="primary" 
                />
              } 
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="body1" sx={{ mr: 1 }}>按月付费</Typography>
                  <Typography variant="body1">按年付费</Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      ml: 1,
                      bgcolor: 'secondary.main',
                      color: 'secondary.contrastText',
                      px: 1,
                      py: 0.5,
                      borderRadius: 1,
                    }}
                  >
                    省20%
                  </Typography>
                </Box>
              }
              labelPlacement="end"
            />
          </FormGroup>
        </Box>
        
        <Grid container spacing={4} alignItems="flex-start">
          {plans.map((plan, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={plan.title}>
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
                    position: 'relative',
                    border: plan.popular ? '2px solid' : '1px solid',
                    borderColor: plan.popular ? 'primary.main' : 'divider',
                    boxShadow: plan.popular ? '0 8px 24px rgba(51, 102, 255, 0.15)' : 'none',
                  }}
                >
                  {plan.popular && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 12,
                        right: 12,
                        bgcolor: 'primary.main',
                        color: 'primary.contrastText',
                        px: 2,
                        py: 0.5,
                        borderRadius: 1,
                        fontSize: '0.75rem',
                        fontWeight: 'bold',
                      }}
                    >
                      最受欢迎
                    </Box>
                  )}
                  <CardHeader
                    title={plan.title}
                    titleTypographyProps={{ align: 'center', variant: 'h5' }}
                    sx={{ bgcolor: plan.popular ? 'primary.light' : 'transparent' }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ textAlign: 'center', mb: 2 }}>
                      <Typography component="h3" variant="h3" color="text.primary">
                        ¥{annually ? plan.price.yearly : plan.price.monthly}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {annually ? '/月 (年付)' : '/月'}
                      </Typography>
                    </Box>
                    <Typography variant="subtitle1" align="center" sx={{ fontStyle: 'italic', mb: 2 }}>
                      {plan.description}
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <List dense>
                      {plan.features.map((feature) => (
                        <ListItem key={feature.text} disableGutters>
                          <ListItemIcon sx={{ minWidth: 36 }}>
                            {feature.included ? (
                              <CheckIcon color="primary" />
                            ) : (
                              <CloseIcon color="disabled" />
                            )}
                          </ListItemIcon>
                          <ListItemText 
                            primary={feature.text} 
                            primaryTypographyProps={{
                              color: feature.included ? 'text.primary' : 'text.disabled',
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                  <CardActions sx={{ justifyContent: 'center', pb: 3 }}>
                    <Button
                      component={Link}
                      to="/register"
                      variant={plan.buttonVariant as 'outlined' | 'contained'}
                      color="primary"
                      size="large"
                      fullWidth
                    >
                      {plan.buttonText}
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
        
        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary" paragraph>
            所有计划均包含基础技术支持。企业版客户可享受专属客户经理服务。
          </Typography>
          <Button 
            component={Link} 
            to="/pricing" 
            color="primary"
          >
            查看完整定价详情
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default PricingSection; 