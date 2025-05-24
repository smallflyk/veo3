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
  Avatar,
  Switch,
  FormControlLabel,
  Divider,
  Alert,
  Tab,
  Tabs,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { motion } from 'framer-motion';
import EditIcon from '@mui/icons-material/Edit';
import SecurityIcon from '@mui/icons-material/Security';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`settings-tabpanel-${index}`}
      aria-labelledby={`settings-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const UserSettingsPage: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    name: '用户',
    email: 'user@example.com',
    phone: '',
    company: '',
    bio: '',
  });
  const [notifications, setNotifications] = useState({
    emailMarketing: true,
    emailUpdates: true,
    smsNotifications: false,
    pushNotifications: true,
  });
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleNotificationChange = (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setNotifications({ ...notifications, [name]: e.target.checked });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData({ ...passwordData, [name]: value });
  };

  const handleSaveProfile = () => {
    // 保存个人资料
    console.log('保存个人资料:', profileData);
  };

  const handleChangePassword = () => {
    // 修改密码
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert('新密码确认不匹配');
      return;
    }
    console.log('修改密码');
  };

  const handleDeleteAccount = () => {
    // 删除账户
    console.log('删除账户');
    setDeleteDialogOpen(false);
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
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 700,
                background: 'linear-gradient(45deg, #3366FF, #FF7D1A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              账户设置
            </Typography>
            <Typography variant="h6" color="text.secondary">
              管理您的个人信息、安全设置和偏好
            </Typography>
          </Box>
        </motion.div>

        {/* 标签页 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Paper sx={{ mb: 3 }}>
            <Tabs value={tabValue} onChange={handleTabChange} variant="fullWidth">
              <Tab
                icon={<AccountBoxIcon />}
                label="个人资料"
                id="settings-tab-0"
                aria-controls="settings-tabpanel-0"
              />
              <Tab
                icon={<SecurityIcon />}
                label="安全设置"
                id="settings-tab-1"
                aria-controls="settings-tabpanel-1"
              />
              <Tab
                icon={<NotificationsIcon />}
                label="通知设置"
                id="settings-tab-2"
                aria-controls="settings-tabpanel-2"
              />
            </Tabs>
          </Paper>
        </motion.div>

        {/* 个人资料面板 */}
        <TabPanel value={tabValue} index={0}>
          <Grid container spacing={4}>
            {/* 头像部分 */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Card>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Avatar
                    sx={{
                      width: 120,
                      height: 120,
                      mx: 'auto',
                      mb: 2,
                      bgcolor: 'primary.main',
                      fontSize: '3rem',
                    }}
                  >
                    用
                  </Avatar>
                  <Typography variant="h6" gutterBottom>
                    {profileData.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {profileData.email}
                  </Typography>
                  <Button variant="outlined" startIcon={<EditIcon />}>
                    更换头像
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            {/* 个人信息表单 */}
            <Grid size={{ xs: 12, md: 8 }}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    个人信息
                  </Typography>
                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="姓名"
                        name="name"
                        value={profileData.name}
                        onChange={handleProfileChange}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="邮箱"
                        name="email"
                        type="email"
                        value={profileData.email}
                        onChange={handleProfileChange}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="手机号"
                        name="phone"
                        value={profileData.phone}
                        onChange={handleProfileChange}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="公司"
                        name="company"
                        value={profileData.company}
                        onChange={handleProfileChange}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label="个人简介"
                        name="bio"
                        multiline
                        rows={3}
                        value={profileData.bio}
                        onChange={handleProfileChange}
                      />
                    </Grid>
                  </Grid>
                  <Box sx={{ mt: 3 }}>
                    <Button variant="contained" onClick={handleSaveProfile}>
                      保存更改
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </TabPanel>

        {/* 安全设置面板 */}
        <TabPanel value={tabValue} index={1}>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    修改密码
                  </Typography>
                  <TextField
                    fullWidth
                    label="当前密码"
                    name="currentPassword"
                    type={showPassword ? 'text' : 'password'}
                    value={passwordData.currentPassword}
                    onChange={handlePasswordChange}
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    fullWidth
                    label="新密码"
                    name="newPassword"
                    type={showPassword ? 'text' : 'password'}
                    value={passwordData.newPassword}
                    onChange={handlePasswordChange}
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    fullWidth
                    label="确认新密码"
                    name="confirmPassword"
                    type={showPassword ? 'text' : 'password'}
                    value={passwordData.confirmPassword}
                    onChange={handlePasswordChange}
                    sx={{ mb: 2 }}
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={showPassword}
                        onChange={(e) => setShowPassword(e.target.checked)}
                      />
                    }
                    label="显示密码"
                    sx={{ mb: 2 }}
                  />
                  <Button variant="contained" onClick={handleChangePassword} fullWidth>
                    更新密码
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    登录设备
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Chrome on MacOS"
                        secondary="当前设备 - 2024年1月15日"
                      />
                      <ListItemSecondaryAction>
                        <IconButton edge="end">
                          <VisibilityIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Safari on iPhone"
                        secondary="2024年1月10日"
                      />
                      <ListItemSecondaryAction>
                        <IconButton edge="end">
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  </List>
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="h6" gutterBottom>
                    危险操作
                  </Typography>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => setDeleteDialogOpen(true)}
                  >
                    删除账户
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </TabPanel>

        {/* 通知设置面板 */}
        <TabPanel value={tabValue} index={2}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                通知偏好
              </Typography>
              <List>
                <ListItem>
                  <ListItemText
                    primary="邮件营销"
                    secondary="接收产品更新、优惠和营销邮件"
                  />
                  <ListItemSecondaryAction>
                    <Switch
                      checked={notifications.emailMarketing}
                      onChange={handleNotificationChange('emailMarketing')}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="系统更新"
                    secondary="接收重要的系统更新和安全通知"
                  />
                  <ListItemSecondaryAction>
                    <Switch
                      checked={notifications.emailUpdates}
                      onChange={handleNotificationChange('emailUpdates')}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="短信通知"
                    secondary="重要操作和安全提醒的短信通知"
                  />
                  <ListItemSecondaryAction>
                    <Switch
                      checked={notifications.smsNotifications}
                      onChange={handleNotificationChange('smsNotifications')}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="推送通知"
                    secondary="浏览器推送通知"
                  />
                  <ListItemSecondaryAction>
                    <Switch
                      checked={notifications.pushNotifications}
                      onChange={handleNotificationChange('pushNotifications')}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </TabPanel>

        {/* 删除账户确认对话框 */}
        <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
          <DialogTitle>删除账户</DialogTitle>
          <DialogContent>
            <Alert severity="error" sx={{ mb: 2 }}>
              此操作不可撤销！删除账户将永久移除您的所有数据。
            </Alert>
            <Typography>
              请输入您的邮箱地址确认删除账户：
            </Typography>
            <TextField
              fullWidth
              placeholder={profileData.email}
              sx={{ mt: 2 }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDeleteDialogOpen(false)}>取消</Button>
            <Button onClick={handleDeleteAccount} color="error" variant="contained">
              确认删除
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
};

export default UserSettingsPage; 