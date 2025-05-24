import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  Paper,
  Slider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Switch,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  CircularProgress,
  Alert,
  Divider
} from '@mui/material';
import { motion } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CreateIcon from '@mui/icons-material/Create';
import { useNavigate } from 'react-router-dom';

const CreateVideoPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [formData, setFormData] = useState({
    projectName: '',
    description: '',
    style: 'professional',
    duration: 30,
    resolution: '1920x1080',
    frameRate: 30,
    aspectRatio: '16:9',
    voiceover: false,
    music: true,
    subtitles: true,
    prompt: '',
  });
  const navigate = useNavigate();

  const steps = ['项目设置', 'AI提示词', '视频设置', '生成视频'];

  const videoStyles = [
    { id: 'professional', label: '专业商务', description: '适合企业宣传和商务展示' },
    { id: 'creative', label: '创意艺术', description: '充满想象力的创意视频' },
    { id: 'educational', label: '教育培训', description: '清晰易懂的教学内容' },
    { id: 'entertainment', label: '娱乐休闲', description: '轻松有趣的娱乐内容' },
    { id: 'documentary', label: '纪录片', description: '真实记录的纪录片风格' },
  ];

  const promptTemplates = [
    {
      category: '产品展示',
      templates: [
        '一个现代化的产品在干净的背景下缓慢旋转，展示其精美的设计细节',
        '产品从包装盒中优雅地展现，配合柔和的光线效果',
        '多角度展示产品功能，配合专业的解说和图形元素',
      ]
    },
    {
      category: '企业宣传',
      templates: [
        '现代化办公环境中的团队协作场景，展现企业活力和专业精神',
        '企业发展历程的时间线动画，配合里程碑事件展示',
        '客户满意度调研和成功案例的可视化展示',
      ]
    },
    {
      category: '教育培训',
      templates: [
        '步骤清晰的操作演示，配合箭头指示和文字说明',
        '概念图解和动画演示，帮助理解复杂知识点',
        '互动式学习场景，模拟真实的学习环境',
      ]
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (name: string, value: any) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    
    // 模拟视频生成过程
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setIsGenerating(false);
    // 跳转到仪表板或显示成功消息
    navigate('/dashboard');
  };

  const insertPromptTemplate = (template: string) => {
    setFormData({ ...formData, prompt: template });
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h6" gutterBottom>
              项目基本设置
            </Typography>
            <Grid container spacing={3}>
              <Grid size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  label="项目名称"
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleInputChange}
                  placeholder="为您的视频项目起个名字"
                  required
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  label="项目描述"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  multiline
                  rows={3}
                  placeholder="简要描述这个视频的目的和内容"
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <Typography variant="subtitle1" gutterBottom>
                  选择视频风格
                </Typography>
                <Grid container spacing={2}>
                  {videoStyles.map((style) => (
                    <Grid key={style.id} size={{ xs: 12, sm: 6, md: 4 }}>
                      <Card
                        sx={{
                          cursor: 'pointer',
                          border: formData.style === style.id ? 2 : 1,
                          borderColor: formData.style === style.id ? 'primary.main' : 'grey.300',
                          '&:hover': {
                            borderColor: 'primary.main',
                          },
                        }}
                        onClick={() => handleSelectChange('style', style.id)}
                      >
                        <CardContent>
                          <Typography variant="h6" gutterBottom>
                            {style.label}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {style.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </motion.div>
        );

      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h6" gutterBottom>
              AI提示词设置
            </Typography>
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, md: 8 }}>
                <TextField
                  fullWidth
                  label="视频内容描述"
                  name="prompt"
                  value={formData.prompt}
                  onChange={handleInputChange}
                  multiline
                  rows={6}
                  placeholder="详细描述您想要生成的视频内容，包括场景、动作、风格等..."
                  helperText="提示：越详细的描述，生成的视频越符合您的期望"
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Typography variant="subtitle1" gutterBottom>
                  模板库
                </Typography>
                <Box sx={{ height: 400, overflow: 'auto' }}>
                  {promptTemplates.map((category, index) => (
                    <Accordion key={index}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="subtitle2">{category.category}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        {category.templates.map((template, templateIndex) => (
                          <Box key={templateIndex} sx={{ mb: 1 }}>
                            <Typography variant="body2" sx={{ mb: 1 }}>
                              {template}
                            </Typography>
                            <Button
                              size="small"
                              onClick={() => insertPromptTemplate(template)}
                            >
                              使用此模板
                            </Button>
                            <Divider sx={{ mt: 1 }} />
                          </Box>
                        ))}
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h6" gutterBottom>
              视频参数设置
            </Typography>
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Typography variant="subtitle2" gutterBottom>
                  视频时长 (秒)
                </Typography>
                <Slider
                  value={formData.duration}
                  onChange={(_, value) => handleSelectChange('duration', value)}
                  min={5}
                  max={300}
                  marks={[
                    { value: 15, label: '15s' },
                    { value: 30, label: '30s' },
                    { value: 60, label: '1min' },
                    { value: 120, label: '2min' },
                    { value: 300, label: '5min' },
                  ]}
                  valueLabelDisplay="on"
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <FormControl fullWidth>
                  <InputLabel>分辨率</InputLabel>
                  <Select
                    value={formData.resolution}
                    label="分辨率"
                    onChange={(e) => handleSelectChange('resolution', e.target.value)}
                  >
                    <MenuItem value="1280x720">HD (1280x720)</MenuItem>
                    <MenuItem value="1920x1080">Full HD (1920x1080)</MenuItem>
                    <MenuItem value="2560x1440">2K (2560x1440)</MenuItem>
                    <MenuItem value="3840x2160">4K (3840x2160)</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <FormControl fullWidth>
                  <InputLabel>宽高比</InputLabel>
                  <Select
                    value={formData.aspectRatio}
                    label="宽高比"
                    onChange={(e) => handleSelectChange('aspectRatio', e.target.value)}
                  >
                    <MenuItem value="16:9">16:9 (横屏)</MenuItem>
                    <MenuItem value="9:16">9:16 (竖屏)</MenuItem>
                    <MenuItem value="1:1">1:1 (方形)</MenuItem>
                    <MenuItem value="4:3">4:3 (标准)</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <FormControl fullWidth>
                  <InputLabel>帧率</InputLabel>
                  <Select
                    value={formData.frameRate}
                    label="帧率"
                    onChange={(e) => handleSelectChange('frameRate', e.target.value)}
                  >
                    <MenuItem value={24}>24 FPS</MenuItem>
                    <MenuItem value={30}>30 FPS</MenuItem>
                    <MenuItem value={60}>60 FPS</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid size={{ xs: 12 }}>
                <Typography variant="subtitle1" gutterBottom>
                  音频设置
                </Typography>
                <FormControlLabel
                  control={
                    <Switch
                      checked={formData.voiceover}
                      onChange={(e) => handleSelectChange('voiceover', e.target.checked)}
                    />
                  }
                  label="AI配音"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={formData.music}
                      onChange={(e) => handleSelectChange('music', e.target.checked)}
                    />
                  }
                  label="背景音乐"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={formData.subtitles}
                      onChange={(e) => handleSelectChange('subtitles', e.target.checked)}
                    />
                  }
                  label="自动字幕"
                />
              </Grid>
            </Grid>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h6" gutterBottom>
              确认并生成视频
            </Typography>
            <Card sx={{ mb: 3 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  项目配置总览
                </Typography>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Typography variant="body2" color="text.secondary">
                      项目名称: {formData.projectName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      视频风格: {videoStyles.find(s => s.id === formData.style)?.label}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      时长: {formData.duration}秒
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Typography variant="body2" color="text.secondary">
                      分辨率: {formData.resolution}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      宽高比: {formData.aspectRatio}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      帧率: {formData.frameRate} FPS
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Typography variant="body2" color="text.secondary">
                      提示词: {formData.prompt.slice(0, 100)}...
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            
            {isGenerating ? (
              <Paper sx={{ p: 4, textAlign: 'center' }}>
                <CircularProgress size={60} sx={{ mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  正在生成您的AI视频...
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  这通常需要几分钟时间，请耐心等待
                </Typography>
              </Paper>
            ) : (
              <Alert severity="info" sx={{ mb: 3 }}>
                <Typography variant="body2">
                  生成视频需要消耗 1 个AI积分。您当前余额: 25 积分
                </Typography>
              </Alert>
            )}
          </motion.div>
        );

      default:
        return '未知步骤';
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5', pt: 4, pb: 8 }}>
      <Container maxWidth="lg">
        {/* 页面标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 700,
                background: 'linear-gradient(45deg, #3366FF, #FF7D1A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              AI视频创作工具
            </Typography>
            <Typography variant="h6" color="text.secondary">
              使用AI技术，将您的创意转化为精美视频
            </Typography>
          </Box>
        </motion.div>

        {/* 步骤指示器 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Paper sx={{ p: 3, mb: 4 }}>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Paper>
        </motion.div>

        {/* 步骤内容 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Paper sx={{ p: 4, mb: 4 }}>
            {renderStepContent(activeStep)}
          </Paper>
        </motion.div>

        {/* 操作按钮 */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            variant="outlined"
          >
            上一步
          </Button>
          <Box sx={{ flex: '1 1 auto' }} />
          {activeStep === steps.length - 1 ? (
            <Button
              variant="contained"
              onClick={handleGenerate}
              disabled={isGenerating || !formData.projectName || !formData.prompt}
              startIcon={isGenerating ? <CircularProgress size={20} /> : <CreateIcon />}
              sx={{
                background: 'linear-gradient(45deg, #3366FF, #FF7D1A)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #2952CC, #E56717)',
                },
              }}
            >
              {isGenerating ? '生成中...' : '开始生成'}
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={handleNext}
              disabled={activeStep === 0 && !formData.projectName}
            >
              下一步
            </Button>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default CreateVideoPage; 