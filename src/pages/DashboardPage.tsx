import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Avatar,
  Chip,
  LinearProgress,
  IconButton,
  Menu,
  MenuItem,
  Divider,
  Paper
} from '@mui/material';
import { motion } from 'framer-motion';
import AddIcon from '@mui/icons-material/Add';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { useNavigate } from 'react-router-dom';

interface VideoProject {
  id: string;
  title: string;
  status: 'draft' | 'processing' | 'completed' | 'failed';
  thumbnail: string;
  duration: string;
  createdAt: string;
  progress?: number;
}

const DashboardPage: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  // 模拟项目数据
  const projects: VideoProject[] = [
    {
      id: '1',
      title: '产品宣传视频',
      status: 'completed',
      thumbnail: '/api/placeholder/400/300',
      duration: '2:30',
      createdAt: '2024-01-15',
    },
    {
      id: '2',
      title: '企业介绍短片',
      status: 'processing',
      thumbnail: '/api/placeholder/400/300',
      duration: '1:45',
      createdAt: '2024-01-14',
      progress: 65,
    },
    {
      id: '3',
      title: '教学演示视频',
      status: 'draft',
      thumbnail: '/api/placeholder/400/300',
      duration: '3:20',
      createdAt: '2024-01-13',
    },
  ];

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>, projectId: string) => {
    setAnchorEl(event.currentTarget);
    console.log('Selected project:', projectId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const getStatusColor = (status: VideoProject['status']) => {
    switch (status) {
      case 'completed':
        return 'success';
      case 'processing':
        return 'warning';
      case 'draft':
        return 'default';
      case 'failed':
        return 'error';
      default:
        return 'default';
    }
  };

  const getStatusText = (status: VideoProject['status']) => {
    switch (status) {
      case 'completed':
        return '已完成';
      case 'processing':
        return '处理中';
      case 'draft':
        return '草稿';
      case 'failed':
        return '失败';
      default:
        return status;
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5', pt: 4, pb: 8 }}>
      <Container maxWidth="lg">
        {/* 顶部欢迎区域 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Avatar
                sx={{ width: 60, height: 60, mr: 2, bgcolor: 'primary.main' }}
              >
                用
              </Avatar>
              <Box>
                <Typography variant="h4" component="h1" fontWeight="bold">
                  欢迎回来，用户！
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  让我们开始创建惊人的AI视频内容
                </Typography>
              </Box>
            </Box>
          </Box>
        </motion.div>

        {/* 统计卡片 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Paper
                sx={{
                  p: 3,
                  display: 'flex',
                  alignItems: 'center',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                }}
              >
                <VideoLibraryIcon sx={{ fontSize: 40, mr: 2 }} />
                <Box>
                  <Typography variant="h4" fontWeight="bold">
                    12
                  </Typography>
                  <Typography variant="body2">
                    总视频数
                  </Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Paper
                sx={{
                  p: 3,
                  display: 'flex',
                  alignItems: 'center',
                  background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                  color: 'white',
                }}
              >
                <CloudUploadIcon sx={{ fontSize: 40, mr: 2 }} />
                <Box>
                  <Typography variant="h4" fontWeight="bold">
                    8
                  </Typography>
                  <Typography variant="body2">
                    本月生成
                  </Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Paper
                sx={{
                  p: 3,
                  display: 'flex',
                  alignItems: 'center',
                  background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                  color: 'white',
                }}
              >
                <TrendingUpIcon sx={{ fontSize: 40, mr: 2 }} />
                <Box>
                  <Typography variant="h4" fontWeight="bold">
                    2.5GB
                  </Typography>
                  <Typography variant="body2">
                    存储使用
                  </Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Paper
                sx={{
                  p: 3,
                  display: 'flex',
                  alignItems: 'center',
                  background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                  color: 'white',
                }}
              >
                <PlayArrowIcon sx={{ fontSize: 40, mr: 2 }} />
                <Box>
                  <Typography variant="h4" fontWeight="bold">
                    156
                  </Typography>
                  <Typography variant="body2">
                    总播放量
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>

        {/* 快速操作和项目列表 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h5" component="h2" fontWeight="bold">
              我的项目
            </Typography>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={() => navigate('/create-video')}
              sx={{
                background: 'linear-gradient(45deg, #3366FF, #FF7D1A)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #2952CC, #E56717)',
                },
              }}
            >
              创建新视频
            </Button>
          </Box>

          <Grid container spacing={3}>
            {projects.map((project, index) => (
              <Grid key={project.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Box
                      sx={{
                        height: 200,
                        bgcolor: '#e0e0e0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                      }}
                    >
                      <VideoLibraryIcon sx={{ fontSize: 60, color: 'text.secondary' }} />
                      <Box sx={{ position: 'absolute', top: 8, right: 8 }}>
                        <IconButton
                          onClick={(e) => handleMenuClick(e, project.id)}
                          sx={{ bgcolor: 'rgba(255,255,255,0.8)' }}
                        >
                          <MoreVertIcon />
                        </IconButton>
                      </Box>
                    </Box>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" component="h3" gutterBottom>
                        {project.title}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                        <Chip
                          label={getStatusText(project.status)}
                          color={getStatusColor(project.status)}
                          size="small"
                        />
                        <Typography variant="body2" color="text.secondary">
                          {project.duration}
                        </Typography>
                      </Box>
                      {project.status === 'processing' && project.progress && (
                        <Box sx={{ mb: 2 }}>
                          <Typography variant="body2" color="text.secondary" gutterBottom>
                            处理进度: {project.progress}%
                          </Typography>
                          <LinearProgress variant="determinate" value={project.progress} />
                        </Box>
                      )}
                      <Typography variant="body2" color="text.secondary">
                        创建于 {project.createdAt}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" startIcon={<PlayArrowIcon />}>
                        预览
                      </Button>
                      <Button size="small" startIcon={<EditIcon />}>
                        编辑
                      </Button>
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* 项目操作菜单 */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>
            <EditIcon sx={{ mr: 1 }} />
            编辑
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <PlayArrowIcon sx={{ mr: 1 }} />
            预览
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleMenuClose} sx={{ color: 'error.main' }}>
            <DeleteIcon sx={{ mr: 1 }} />
            删除
          </MenuItem>
        </Menu>
      </Container>
    </Box>
  );
};

export default DashboardPage; 