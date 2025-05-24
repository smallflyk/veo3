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
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
      { text: '导出无水印', included: false },
      { text: '技术支持', included: false },
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
      { text: '导出无水印', included: true },
      { text: '标准技术支持', included: true },
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
      { text: '导出无水印', included: true },
      { text: '专属客户经理', included: true },
    ],
    buttonText: '联系销售',
    buttonVariant: 'contained',
    popular: false,
  },
];

const faqs = [
  {
    question: '如何选择适合我的计划？',
    answer: '选择计划时，请考虑您的视频生成需求量、所需视频质量以及预算。免费版适合初次尝试或偶尔使用；专业版适合定期创建内容的创作者；企业版则适合需要大量高质量视频内容的团队和公司。'
  },
  {
    question: '我可以随时更改我的订阅计划吗？',
    answer: '是的，您可以随时升级或降级您的订阅计划。升级将立即生效，您可以立即使用新计划的功能。降级将在当前计划结束后生效，以确保您能够充分利用已支付的服务。'
  },
  {
    question: '视频额度是如何计算的？',
    answer: '每生成一个视频（无论长度）消耗一个视频额度。编辑现有视频不会消耗额外额度。未使用的额度不会累积到下个月。企业版提供无限额度，无需担心使用限制。'
  },
  {
    question: '是否提供退款？',
    answer: '我们提供30天的退款保证。如果您在购买后30天内对服务不满意，可以申请全额退款。年付用户如果在30天后取消，将按已使用月份比例退款。'
  },
  {
    question: '可以添加多个用户到我的账户吗？',
    answer: '专业版允许添加最多3个用户，企业版则根据您的需求提供自定义用户数量。每个额外用户可能需要支付额外费用，具体取决于您选择的计划。'
  },
];

const PricingPage: React.FC = () => {
  const [annually, setAnnually] = useState(false);

  const handleBillingChange = () => {
    setAnnually(!annually);
  };

  return (
    <Box sx={{ py: { xs: 4, md: 8 } }}>
      <SEOHead
        title="VEO3 定价方案 | AI视频生成平台价格表"
        description="查看VEO3 AI视频生成平台的详细定价方案。提供免费版、专业版、企业版等多种选择，满足个人和企业的不同需求。支持按月或按年付费。"
        canonical="/pricing"
        language="zh-CN"
        keywords="VEO3定价,AI视频价格,视频生成价格,VEO3价格表,AI视频制作费用"
        ogTitle="VEO3 定价方案 - 灵活的AI视频生成价格"
        ogDescription="选择适合您的VEO3定价计划：免费版体验、专业版创作、企业版无限制。按年付费享受20%折扣。"
      />
      {/* Hero Section */}
      <Box 
        sx={{ 
          bgcolor: 'background.paper', 
          py: { xs: 6, md: 10 },
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography
            component="h1"
            variant="h2"
            color="text.primary"
            gutterBottom
          >
            选择适合您的计划
          </Typography>
          <Typography 
            variant="h5" 
            color="text.secondary" 
            paragraph
            sx={{ mb: 4 }}
          >
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
        </Container>
      </Box>
      
      {/* Pricing Cards */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
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
      </Container>
      
      {/* Features Comparison Table */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom>
            功能详细对比
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 4 }}>
            查看各计划包含的详细功能列表
          </Typography>
          
          <TableContainer component={Paper} sx={{ mt: 4, boxShadow: 3 }}>
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: 'primary.light' }}>
                  <TableCell sx={{ fontWeight: 'bold' }}>功能</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>免费版</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>专业版</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>企业版</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">视频生成质量</TableCell>
                  <TableCell align="center">基础</TableCell>
                  <TableCell align="center">高级</TableCell>
                  <TableCell align="center">最高级</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">视频分辨率</TableCell>
                  <TableCell align="center">720p</TableCell>
                  <TableCell align="center">1080p</TableCell>
                  <TableCell align="center">4K</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">每月视频额度</TableCell>
                  <TableCell align="center">5个</TableCell>
                  <TableCell align="center">50个</TableCell>
                  <TableCell align="center">无限</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">模板库</TableCell>
                  <TableCell align="center">基础模板</TableCell>
                  <TableCell align="center">完整模板库</TableCell>
                  <TableCell align="center">专属定制</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">音频同步生成</TableCell>
                  <TableCell align="center"><CloseIcon color="disabled" /></TableCell>
                  <TableCell align="center"><CheckIcon color="primary" /></TableCell>
                  <TableCell align="center"><CheckIcon color="primary" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">高级编辑功能</TableCell>
                  <TableCell align="center"><CloseIcon color="disabled" /></TableCell>
                  <TableCell align="center"><CheckIcon color="primary" /></TableCell>
                  <TableCell align="center"><CheckIcon color="primary" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">优先渲染</TableCell>
                  <TableCell align="center"><CloseIcon color="disabled" /></TableCell>
                  <TableCell align="center"><CloseIcon color="disabled" /></TableCell>
                  <TableCell align="center"><CheckIcon color="primary" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">导出无水印</TableCell>
                  <TableCell align="center"><CloseIcon color="disabled" /></TableCell>
                  <TableCell align="center"><CheckIcon color="primary" /></TableCell>
                  <TableCell align="center"><CheckIcon color="primary" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">技术支持</TableCell>
                  <TableCell align="center">社区支持</TableCell>
                  <TableCell align="center">标准支持</TableCell>
                  <TableCell align="center">专属客户经理</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>
      
      {/* FAQ Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          常见问题
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 4 }}>
          关于我们定价和计划的常见问题解答
        </Typography>
        
        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
          {faqs.map((faq, index) => (
            <Accordion 
              key={index} 
              elevation={0} 
              sx={{
                mb: 2,
                border: '1px solid',
                borderColor: 'divider',
                '&:before': {
                  display: 'none',
                },
                borderRadius: '8px !important',
                overflow: 'hidden',
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                sx={{
                  backgroundColor: 'rgba(0, 0, 0, 0.01)',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.03)',
                  },
                }}
              >
                <Typography variant="subtitle1" fontWeight={500}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" color="text.secondary">
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
      
      {/* Call to Action */}
      <Box 
        sx={{ 
          bgcolor: 'primary.main', 
          py: 8,
          color: 'primary.contrastText',
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" gutterBottom>
            准备好开始创作了吗？
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            立即注册，体验VEO3的强大功能
          </Typography>
          <Button 
            component={Link}
            to="/register"
            variant="contained" 
            color="secondary" 
            size="large"
            sx={{ 
              px: 4, 
              py: 1.5,
              fontSize: '1.1rem',
              boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
            }}
          >
            免费试用
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default PricingPage; 