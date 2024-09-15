import { Box, Typography, Grid, Paper } from "@mui/material";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import BrushIcon from "@mui/icons-material/Brush";
import CodeIcon from "@mui/icons-material/Code";
import AccessibilityIcon from "@mui/icons-material/Accessibility";

const Home = () => {
  return (
    <Box sx={{ my: 4, px: 2 }}>
      <Typography
        variant="h4"
        sx={{ color: "primary.main", fontWeight: "bold", mb: 2 }}
      >
        Привет!
      </Typography>
      <Typography variant="h5" sx={{ mb: 4 }}>
        Я графический дизайнер и моушен-дизайнер. Люблю создавать из ничего,
        оживлять идеи и привносить что-то новое в этот мир. Моей страстью
        является создание визуальных решений, которые не только радуют глаз, но
        и решают конкретные задачи.
      </Typography>

      <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
        Мои навыки:
      </Typography>

      {/* Hard Skills */}
      <Typography variant="h6" sx={{ color: "primary.main", mb: 2 }}>
        Hard Skills:
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              backgroundColor: "#1e1e1e",
              color: "white",
              height: "100%",
            }}
          >
            <DesignServicesIcon
              sx={{ fontSize: 50, color: "primary.main", mb: 2 }}
            />
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              Графический дизайн
            </Typography>
            <Typography variant="body1">
              Создание уникальных брендов, логотипов и визуальной айдентики.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              backgroundColor: "#1e1e1e",
              color: "white",
              height: "100%",
            }}
          >
            <BrushIcon sx={{ fontSize: 50, color: "primary.main", mb: 2 }} />
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              Моушен-дизайн
            </Typography>
            <Typography variant="body1">
              Анимация для видеороликов, рекламы и социальных сетей.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              backgroundColor: "#1e1e1e",
              color: "white",
              height: "100%",
            }}
          >
            <CodeIcon sx={{ fontSize: 50, color: "primary.main", mb: 2 }} />
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              Adobe Creative Suite
            </Typography>
            <Typography variant="body1">
              Профессиональное владение Adobe Photoshop, Illustrator, After
              Effects и Premiere Pro.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              backgroundColor: "#1e1e1e",
              color: "white",
              height: "100%",
            }}
          >
            <AccessibilityIcon
              sx={{ fontSize: 50, color: "primary.main", mb: 2 }}
            />
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              UX/UI дизайн
            </Typography>
            <Typography variant="body1">
              Проектирование удобных интерфейсов и пользовательских
              взаимодействий.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Soft Skills */}
      <Typography variant="h6" sx={{ color: "primary.main", mt: 4, mb: 2 }}>
        Soft Skills:
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              backgroundColor: "#1e1e1e",
              color: "white",
              height: "100%",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              Креативное мышление
            </Typography>
            <Typography variant="body1">
              Нахожу нестандартные решения для сложных задач.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              backgroundColor: "#1e1e1e",
              color: "white",
              height: "100%",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              Коммуникация
            </Typography>
            <Typography variant="body1">
              Легко работаю в команде и взаимодействую с клиентами для
              достижения наилучших результатов.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              backgroundColor: "#1e1e1e",
              color: "white",
              height: "100%",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              Внимание к деталям
            </Typography>
            <Typography variant="body1">
              Сосредоточен на мельчайших деталях, которые делают проект
              уникальным.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              backgroundColor: "#1e1e1e",
              color: "white",
              height: "100%",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              Адаптивность
            </Typography>
            <Typography variant="body1">
              Гибко подхожу к разным задачам и быстро осваиваю новые
              инструменты.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              backgroundColor: "#1e1e1e",
              color: "white",
              height: "100%",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              Управление временем
            </Typography>
            <Typography variant="body1">
              Эффективно распределяю задачи для соблюдения дедлайнов.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
