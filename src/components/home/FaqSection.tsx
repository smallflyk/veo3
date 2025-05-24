import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails,
  Button,
  Grid,
  Divider
} from '@mui/material';
import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    question: 'VEO3是如何工作的？',
    answer: 'VEO3使用先进的人工智能技术，结合深度学习和计算机视觉算法，将文本描述转换为高质量视频内容。您只需输入描述或提示，系统就会自动生成符合您需求的视频，并且可以进行进一步的编辑和调整。'
  },
  {
    question: '我需要具备专业视频制作知识才能使用VEO3吗？',
    answer: '不需要。VEO3的设计理念是让任何人都能轻松创建专业级视频内容。我们提供直观的用户界面和丰富的模板，即使您没有任何视频制作经验，也能快速上手并创建出令人印象深刻的视频。'
  },
  {
    question: 'VEO3生成的视频有版权限制吗？',
    answer: '根据您选择的订阅计划，VEO3生成的视频内容归您所有，您可以将其用于商业或非商业用途。但请注意，如果您在生成过程中使用了特定的受版权保护的素材，那么最终视频的使用可能会受到相应的限制。详情请参阅我们的使用条款。'
  },
  {
    question: '我可以自定义生成的视频吗？',
    answer: '当然可以。VEO3提供多种编辑工具，让您能够调整视频的各个方面，包括添加特效、更改场景、调整音频、修改文本等。专业版和企业版用户还可以使用更高级的自定义功能。'
  },
  {
    question: '生成视频需要多长时间？',
    answer: '视频生成时间取决于多种因素，包括视频长度、复杂度、质量设置以及当前系统负载等。一般来说，简短的视频可能只需几分钟，而更复杂的项目可能需要更长时间。企业版用户享有优先渲染权限，可以显著减少等待时间。'
  },
  {
    question: '我可以在移动设备上使用VEO3吗？',
    answer: 'VEO3是一个基于云的平台，可以在任何具有现代网络浏览器的设备上使用，包括智能手机和平板电脑。我们也计划在未来推出专门的移动应用，提供更便捷的移动端体验。'
  },
];

const FaqSection: React.FC = () => {
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
            常见问题
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 2, maxWidth: 700, mx: 'auto' }}>
            了解关于VEO3的常见问题和解答
          </Typography>
        </Box>
        
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 8 }} sx={{ mx: 'auto' }}>
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
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 6 }} />
        
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>
            还有其他问题？
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            我们的支持团队随时为您提供帮助
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Button 
              component={Link} 
              to="/contact" 
              variant="contained" 
              color="primary" 
              size="large"
              sx={{ mr: 2 }}
            >
              联系我们
            </Button>
            <Button 
              component={Link} 
              to="/faq" 
              variant="outlined" 
              color="primary" 
              size="large"
            >
              查看更多问题
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FaqSection; 