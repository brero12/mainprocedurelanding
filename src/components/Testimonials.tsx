import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import { useTheme } from "@mui/system";
import jorgeAvatar from "../assets/jorge.jpg";
import omarAvatar from "../assets/omar.jpg";

// Definiton of hover style
const avatarHoverStyle = {
  width: 56, 
  height: 56,
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.9)', 
    boxShadow: (theme) => `0 0 16px ${theme.palette.primary.main}`, 
    cursor: 'pointer', 
  },
};

const userTestimonials = [
  {
    avatar: <Avatar sx={{ ...avatarHoverStyle, bgcolor: 'primary.main' }} alt="Bryan Rodriguez" src="/static/images/avatar/1.jpg" />,
    name: "Bryan Rodriguez",
    occupation: "Software Engineer Lead",
    testimonial: `A highly accomplished and dedicated Software Development Lead with over 10 years of experience 
      driving project success and enhancing organizational goals. This professional is a proven leader in architecting 
      robust solutions and guiding development teams. He possess a deep technical expertise across 
      a wide range of technologies. With a strong focus on collaboration and clear communication, 
      he excel at working with clients and partners to deliver innovative solutions that elevate the company brand.`,
  },
  {
    avatar: <Avatar sx={{ ...avatarHoverStyle, bgcolor: 'primary.main' }} alt="Jorge Parra" src={jorgeAvatar} />,
    name: "Jorge Parra",
    occupation: "Product Designer Lead",
    testimonial: `A seasoned technology leader with a Master's degree in Artificial Intelligence and Systems Engineering, 
    he has over two decades of experience transforming business needs into innovative tech solutions. 
    His expertise includes data analysis, Machine Learning model development, and cloud solutions using 
    Python, Azure, TensorFlow, and Keras. With a strong background in data networks and infrastructure, 
    he applies an agile, data-driven approach to deliver scalable 
    and robust solutions that drive digital transformation.`,
  },
  {
    avatar: <Avatar sx={{ ...avatarHoverStyle, bgcolor: 'primary.main' }} alt="Omar Pino" src={omarAvatar} />,
    name: "Omar Pino",
    occupation: "Innovation Lead",
    testimonial: `A results-driven Mechatronic Engineer with over 5 years of experience in applied research, 
    product development, and immersive technologies. He specializes in robotics, VR/AR/MR simulations, 
    and automation systems, delivering cost-effective solutions that enhance performance in healthcare 
    and manufacturing. With strong expertise in Unity 3D, CAD, and sensor integration, 
    he combines engineering precision with creative design to develop innovative processes 
    and immersive digital experiences. Skilled in leading complete project lifecycles, 
    he applies agile methodologies to ensure scalable, optimized, and user-centered solutions. 
    Passionate about innovation and problem-solving, he is dedicated to advancing robotics, simulation, 
    and automation through cutting-edge technology`,
  },
];

const whiteLogos = [
  "",
  "",
  "",
];

const darkLogos = [
  "",
  "",
  "",
];

const logoStyle = {
  width: "64px",
  opacity: 0.3,
};

export default function Testimonials() {
  const theme = useTheme();
  const logos = theme.palette.mode === "light" ? darkLogos : whiteLogos;

  return (
    <Container
      id="testimonials"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
        }}
      >
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{ color: "text.primary" }}
        >
          Who we are
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          Get to know the team behind our success. We're committed to providing
          you with quality, innovation, and reliable support, ensuring a
          comfortable and productive partnership.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {userTestimonials.map((testimonial, index) => (
          <Grid
            size={{ xs: 12, sm: 6, md: 4 }}
            key={index}
            sx={{ display: "flex" }}
          >
            <Card
              variant="outlined"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flexGrow: 1,
              }}
            >
              <CardContent>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ color: "text.secondary" }}
                >
                  {testimonial.testimonial}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <CardHeader
                  avatar={testimonial.avatar}
                  title={testimonial.name}
                  subheader={testimonial.occupation}
                />
                <img
                  src={logos[index]}
                  alt={`Logo ${index + 1}`}
                  style={logoStyle}
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
