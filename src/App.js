import React from 'react';
import {
    ThemeProvider,
    createTheme,
    CssBaseline,
    Box,
    Typography,
    Button,
    Container,
    Grid,
    TextField,
    AppBar,
    Toolbar,
    IconButton,
    Chip,
} from '@mui/material';
import {
    LinkedIn,
    GitHub,
    Twitter,
    Instagram,
} from '@mui/icons-material';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#D3E97A',
        },
        background: {
            default: '#0A0A0A',
            paper: '#111111',
        },
        text: {
            primary: '#ffffff',
            secondary: '#A0A0A0',
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                '*': {
                    boxSizing: 'border-box',
                },
                html: {
                    scrollBehavior: 'smooth',
                },
                body: {
                    margin: 0,
                    fontFamily: '"Kanit", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                    backgroundColor: '#0a0a0a',
                    color: '#ffffff',
                    overflowX: 'hidden',
                },
                '::-webkit-scrollbar': {
                    width: '8px',
                },
                '::-webkit-scrollbar-track': {
                    background: '#0a0a0a',
                },
                '::-webkit-scrollbar-thumb': {
                    background: '#333',
                    borderRadius: '4px',
                },
                '::-webkit-scrollbar-thumb:hover': {
                    background: '#555',
                },
                'code': {
                    fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
                },
            },
        },
    },
    typography: {
        fontFamily: '"Kanit", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontSize: '7rem',
            fontWeight: 700,
            lineHeight: 0.85,
            letterSpacing: '-0.04em',
        },
        h2: {
            fontSize: '4.5rem',
            fontWeight: 700,
            marginBottom: '2rem',
            letterSpacing: '-0.02em',
        },
        h3: {
            fontSize: '1.5rem',
            fontWeight: 500,
            marginBottom: '1rem',
            letterSpacing: '-0.01em',
        },
        h6: {
            fontWeight: 600,
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.6,
            fontWeight: 300,
        },
        body2: {
            fontSize: '0.9rem',
            lineHeight: 1.7,
            fontWeight: 300,
        },
        button: {
            fontWeight: 600,
            fontFamily: '"Kanit", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        },
    },
});

function App() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ backgroundColor: '#0A0A0A' }}>

                {/* Navigation Bar */}
                <AppBar position="sticky" sx={{ backgroundColor: 'rgba(10, 10, 10, 0.7)', backdropFilter: 'blur(10px)', boxShadow: 'none' }}>
                    <Container maxWidth="lg">
                        <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: { xs: 0.5, md: 1 } }}>
                            <Typography variant="h6" sx={{
                                fontWeight: 500,
                                letterSpacing: '0.05em',
                                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.25rem' }
                            }}>
                                CHANINTORN CHALERMSUK
                            </Typography>
                            <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 3 }}>
                                <Button color="inherit" sx={{ fontWeight: 400 }} onClick={() => scrollToSection('home')}>WORK</Button>
                                <Button color="inherit" sx={{ fontWeight: 400 }} onClick={() => scrollToSection('about')}>ABOUT</Button>
                                <Button color="inherit" sx={{ fontWeight: 400 }} onClick={() => scrollToSection('contact')}>CONTACT</Button>
                            </Box>
                            <Box sx={{ display: { xs: 'flex', sm: 'none' }, gap: 1 }}>
                                <Button color="inherit" size="small" sx={{ fontWeight: 400, fontSize: '0.8rem', minWidth: 'auto', px: 1 }} onClick={() => scrollToSection('home')}>WORK</Button>
                                <Button color="inherit" size="small" sx={{ fontWeight: 400, fontSize: '0.8rem', minWidth: 'auto', px: 1 }} onClick={() => scrollToSection('about')}>ABOUT</Button>
                                <Button color="inherit" size="small" sx={{ fontWeight: 400, fontSize: '0.8rem', minWidth: 'auto', px: 1 }} onClick={() => scrollToSection('contact')}>CONTACT</Button>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>

                <main>
                    {/* Hero Section */}
                    <Container maxWidth="lg" sx={{ pt: { xs: 4, md: 8 }, pb: { xs: 4, md: 8 } }} id="home">
                        <Grid container alignItems="center" justifyContent="space-between" spacing={{ xs: 4, md: 0 }}>
                            <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
                                <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                                    <Typography variant="h1" sx={{
                                        fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5rem' },
                                        lineHeight: { xs: 1.1, md: 0.9 },
                                        mb: { xs: 2, md: 0 }
                                    }}>
                                        HI, I AM<br />
                                        CHANINTORN C.
                                    </Typography>
                                    <Typography variant="body1" sx={{
                                        my: { xs: 2, md: 3 },
                                        maxWidth: { xs: '100%', md: '480px' },
                                        fontSize: { xs: '1rem', md: '1.1rem' },
                                        mx: { xs: 'auto', md: 0 }
                                    }}>
                                        นักพัฒนาเว็บไซต์ฟร้อนท์เอนด์จากประเทศไทย ที่มีความหลงใหลในการสร้าง เว็บไซต์ที่เข้าถึงได้และเป็นมิตรกับผู้ใช้
                                    </Typography>
                                    <Box sx={{
                                        display: 'flex',
                                        gap: 1.5,
                                        alignItems: 'center',
                                        mt: { xs: 3, md: 4 },
                                        justifyContent: { xs: 'center', md: 'flex-start' },
                                        flexWrap: { xs: 'wrap', sm: 'nowrap' }
                                    }}>
                                        <Button
                                            variant="contained"
                                            endIcon={<Box sx={{ width: 6, height: 6, bgcolor: 'black', borderRadius: '50%' }} />}
                                            sx={{
                                                backgroundColor: 'primary.main',
                                                color: 'black',
                                                px: { xs: 2.5, md: 3 },
                                                py: { xs: 1.2, md: 1.5 },
                                                borderRadius: 50,
                                                fontWeight: 600,
                                                fontSize: { xs: '0.8rem', md: '0.9rem' },
                                                '&:hover': { backgroundColor: 'primary.main' }
                                            }}
                                        >
                                            CONTACT ME
                                        </Button>
                                        <IconButton sx={{
                                            backgroundColor: '#222222',
                                            color: 'primary.main',
                                            width: { xs: 40, md: 45 },
                                            height: { xs: 40, md: 45 },
                                            ml: { xs: 0.5, md: 1 }
                                        }}>
                                            <LinkedIn fontSize="small" />
                                        </IconButton>
                                        <IconButton sx={{
                                            backgroundColor: '#222222',
                                            color: 'primary.main',
                                            width: { xs: 40, md: 45 },
                                            height: { xs: 40, md: 45 }
                                        }}>
                                            <GitHub fontSize="small" />
                                        </IconButton>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={5} order={{ xs: 1, md: 2 }}>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: { xs: 'center', md: 'flex-end' },
                                    alignItems: 'center',
                                    width: '100%',
                                    mt: { xs: 0, md: 0 }
                                }}>
                                    <Box sx={{
                                        width: { xs: 280, sm: 320, md: 380 },
                                        height: { xs: 350, sm: 400, md: 480 },
                                        borderRadius: 3,
                                        overflow: 'hidden',
                                        bgcolor: '#a39be8',
                                        mx: { xs: 'auto', md: 0 }
                                    }}>
                                        <img src="/myprofile 1.png" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>

                    {/* Divider */}
                    <Box sx={{ borderTop: '1px solid #333', mx: 'auto', maxWidth: 'lg' }} />

                    {/* About Me Section */}
                    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }} id="about">
                        <Box sx={{
                            display: { xs: 'block', md: 'flex' },
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            gap: 4
                        }}>
                            <Box sx={{ flex: '0 0 auto', mb: { xs: 4, md: 0 } }}>
                                <Typography variant="h2" sx={{
                                    fontSize: { xs: '2.5rem', sm: '3rem', md: '4.5rem' },
                                    textAlign: { xs: 'center', md: 'left' }
                                }}>
                                    ABOUT ME
                                </Typography>
                            </Box>
                            <Box sx={{ flex: '1', maxWidth: { xs: '100%', md: '60%' } }}>
                                <Typography variant="h3" sx={{
                                    fontSize: { xs: '1.4rem', sm: '1.6rem', md: '1.8rem' },
                                    lineHeight: 1.4,
                                    mb: 3,
                                    fontWeight: 500,
                                    textAlign: { xs: 'center', md: 'left' }
                                }}>
                                    ผมเป็นนักพัฒนาเว็บไซต์ฟร้อนท์เอนด์ที่ทำงานอยู่ 'ใน กรุงเทพฯ' กำลังมองหาโอกาสที่น่าตื่นเต้นในการทำงาน มีพื้นฐานการศึกษาด้านวิศวกรรมซอฟต์แวร์
                                </Typography>
                                <Typography variant="body2" sx={{
                                    mb: 4,
                                    color: 'text.secondary',
                                    lineHeight: 1.6,
                                    textAlign: { xs: 'center', md: 'left' },
                                    fontSize: { xs: '0.9rem', md: '0.9rem' }
                                }}>
                                    ชอบให้ความสำคัญกับการเข้าถึง (accessibility) เพื่อพัฒนาเว็บไซต์ มีความกระตือรือร้นและอยากรู้ อยากเห็นเกี่ยวกับแก้ไขปัญหาต่างๆ ปัจจุบันกำลังศึกษาเรียนรู้เกี่ยวกับ React.js และการออกแบบเว็บไซต์เล่าปล่อยเพื่อไม่ได้มีผลโปรแกรม ดิฉัน/ผมชอบเล่นฟุตบอล Diablo กำลังเรียนรู้เพิ่มเติมเพื่อพัฒนาทักษะอยู่เสมอ
                                </Typography>
                                <Box sx={{
                                    display: 'flex',
                                    gap: 1.5,
                                    alignItems: 'center',
                                    justifyContent: { xs: 'center', md: 'flex-start' },
                                    flexWrap: { xs: 'wrap', sm: 'nowrap' }
                                }}>
                                    <Button
                                        variant="contained"
                                        endIcon={<Box sx={{ width: 6, height: 6, bgcolor: 'black', borderRadius: '50%' }} />}
                                        sx={{
                                            backgroundColor: 'primary.main',
                                            color: 'black',
                                            px: { xs: 2.5, md: 3 },
                                            py: { xs: 1.2, md: 1.5 },
                                            borderRadius: 50,
                                            fontWeight: 600,
                                            fontSize: { xs: '0.8rem', md: '0.9rem' },
                                            '&:hover': { backgroundColor: 'primary.main' }
                                        }}
                                    >
                                        DOWNLOAD RESUME
                                    </Button>
                                    <IconButton sx={{
                                        backgroundColor: '#222222',
                                        color: 'primary.main',
                                        width: { xs: 40, md: 45 },
                                        height: { xs: 40, md: 45 },
                                        ml: { xs: 0.5, md: 1 }
                                    }}>
                                        <LinkedIn fontSize="small" />
                                    </IconButton>
                                    <IconButton sx={{
                                        backgroundColor: '#222222',
                                        color: 'primary.main',
                                        width: { xs: 40, md: 45 },
                                        height: { xs: 40, md: 45 }
                                    }}>
                                        <GitHub fontSize="small" />
                                    </IconButton>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{
                            mt: { xs: 6, md: 8 },
                            borderRadius: 3,
                            overflow: 'hidden',
                            height: { xs: 350, sm: 500, md: 800 }
                        }}>
                            <img src="/image 1.png" alt="Chanintorn with colorful sculptures" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </Box>
                    </Container>

                    {/* Divider */}
                    <Box sx={{ borderTop: '1px solid #333', mx: 'auto', maxWidth: 'lg' }} />

                    {/* My Capabilities Section */}
                    <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
                        <Box sx={{
                            display: { xs: 'block', md: 'flex' },
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            gap: 4
                        }}>
                            <Box sx={{ flex: '0 0 auto', mb: { xs: 4, md: 0 } }}>
                                <Typography variant="h2" sx={{
                                    fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.5rem' },
                                    textAlign: { xs: 'center', md: 'left' }
                                }}>
                                    MY CAPABILITIES
                                </Typography>
                            </Box>
                            <Box sx={{
                                flex: '1',
                                maxWidth: { xs: '100%', md: '50%' },
                                paddingTop: { xs: 0, md: '1rem' }
                            }}>
                                <Typography variant="body1" sx={{
                                    mb: 4,
                                    color: 'text.secondary',
                                    textAlign: { xs: 'center', md: 'left' },
                                    fontSize: { xs: '0.95rem', md: '1rem' }
                                }}>
                                    ผมมองหาโอกาสในการเพิ่มทักษะใหม่ๆ อยู่เสมอ ทั้งการพัฒนาฟร้อนท์เอนด์ แบล็กเอนด์ การออกแบบ UX/UI ฐานข้อมูล
                                </Typography>
                                <Box sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: { xs: 1, md: 1.5 },
                                    justifyContent: { xs: 'center', md: 'flex-start' }
                                }}>
                                    {['HTML', 'CSS', 'JAVASCRIPT', 'FLUTTER', 'DART', 'IOT', 'REACT', 'DATABASE'].map(skill => (
                                        <Chip
                                            key={skill}
                                            label={skill}
                                            variant="outlined"
                                            sx={{
                                                borderRadius: 50,
                                                px: { xs: 1.5, md: 2 },
                                                py: { xs: 2, md: 2.5 },
                                                fontSize: { xs: '0.8rem', md: '0.9rem' },
                                                borderColor: '#444',
                                                minWidth: { xs: '100px', md: '120px' },
                                                textAlign: 'center'
                                            }}
                                        />
                                    ))}
                                </Box>
                            </Box>
                        </Box>
                    </Container>

                    {/* Divider */}
                    <Box sx={{ borderTop: '1px solid #333', mx: 'auto', maxWidth: 'lg' }} />

                    {/* My Experience Section */}
                    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 9 } }} id="experience">
                        <Box sx={{
                            display: { xs: 'block', md: 'flex' },
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            gap: 4
                        }}>
                            <Box sx={{ flex: '0 0 auto', mb: { xs: 4, md: 0 } }}>
                                <Typography variant="h2" sx={{
                                    fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.5rem' },
                                    textAlign: { xs: 'center', md: 'left' }
                                }}>
                                    MY EXPERIENCE
                                </Typography>
                            </Box>
                            <Box sx={{ flex: '1', maxWidth: { xs: '100%', md: '50%' } }}>
                                <Box>
                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                    }}>
                                        <Typography variant="h3" sx={{
                                            fontSize: { xs: '1.3rem', md: '1.5rem' }
                                        }}>
                                            Freelance Developer
                                        </Typography>
                                        <Typography color="text.secondary" sx={{ fontSize: { xs: '0.8rem', md: '0.9rem' } }}>
                                            Nov 2023 – Present
                                        </Typography>
                                    </Box>
                                    <Typography variant="body2" color="text.secondary" sx={{
                                        lineHeight: 1.6,
                                        fontSize: { xs: '0.85rem', md: '0.9rem' },
                                        mb: 4
                                    }}>
                                        พัฒนาและปรับปรุงส่วนติดต่อผู้ใช้สำหรับเว็บแอปพลิเคชันโดยใช้ React.js ทำงานร่วมกับทีมออกแบบ UX/UI เพื่อสร้างประสบการณ์ผู้ใช้ที่น่าประทับใจ ปรับปรุงความเร็วในการโหลดเว็บไซต์ด้วยเทคนิคการเพิ่มประสิทธิภาพต่างๆ ร่วมพัฒนาและดูแลโค้ดเบสของโครงการในแต่ละสปรินต์
                                    </Typography>

                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        marginTop: '3rem',
                                    }}>
                                        <Typography variant="h3" sx={{
                                            fontSize: { xs: '1.3rem', md: '1.5rem' }
                                        }}>
                                            Front-End Intern
                                        </Typography>
                                        <Typography color="text.secondary" sx={{ fontSize: { xs: '0.8rem', md: '0.9rem' } }}>
                                            Sep 2023 – Nov 2023
                                        </Typography>
                                    </Box>
                                    <Typography variant="body2" color="text.secondary" sx={{
                                        lineHeight: 1.6,
                                        fontSize: { xs: '0.85rem', md: '0.9rem' }
                                    }}>
                                        พัฒนาเว็บไซต์โดยใช้ลูกค้ากำหนดโดยใช้ HTML, CSS และ JavaScript ช่วยปรับปรุงการเข้าถึง (Accessibility) ของเว็บไซต์ให้สอดคล้องกับมาตรฐาน WCAG ทำงานร่วมกับทีมแบ็กเอนด์เพื่อเชื่อมต่อ API
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Container>

                    {/* Divider */}
                    <Box sx={{ borderTop: '1px solid #333', mx: 'auto', maxWidth: 'lg' }} />

                    {/* Let's Connect Section */}
                    <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }} id="contact">
                        <Box sx={{
                            display: { xs: 'block', md: 'flex' },
                            justifyContent: 'space-between',
                            alignItems: { xs: 'center', md: 'stretch' },
                            gap: 4
                        }}>
                            <Box sx={{
                                flex: '0 0 auto',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                minHeight: { xs: 'auto', md: '450px' },
                                mb: { xs: 6, md: 0 },
                                textAlign: { xs: 'center', md: 'left' }
                            }}>
                                <Box>
                                    <Typography variant="h2" sx={{
                                        mb: 3,
                                        fontSize: { xs: '2.2rem', sm: '2.8rem', md: '4.5rem' }
                                    }}>
                                        LET'S CONNECT
                                    </Typography>
                                    <Typography variant="body1" sx={{ fontSize: { xs: '0.95rem', md: '1rem' } }}>
                                        Say hello at <Box component="span" sx={{ color: 'primary.main' }}>chanintornc@sau.ac.th</Box>
                                    </Typography>
                                    <Typography variant="body1" sx={{
                                        mb: 3,
                                        fontSize: { xs: '0.95rem', md: '1rem' }
                                    }}>
                                        For more info, here's my <Box component="span" sx={{ textDecoration: 'underline' }}>resume</Box>
                                    </Typography>
                                    <Box sx={{
                                        display: 'flex',
                                        gap: 2,
                                        justifyContent: { xs: 'center', md: 'flex-start' }
                                    }}>
                                        <IconButton color="primary" sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
                                            <LinkedIn />
                                        </IconButton>
                                        <IconButton color="primary" sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
                                            <GitHub />
                                        </IconButton>
                                        <IconButton color="primary" sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
                                            <Twitter />
                                        </IconButton>
                                        <IconButton color="primary" sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
                                            <Instagram />
                                        </IconButton>
                                    </Box>
                                </Box>
                                <Typography variant="body2" color="text.primary" sx={{
                                    fontSize: { xs: '0.75rem', md: '0.8rem' },
                                    mt: { xs: 6, md: 4 }
                                }}>
                                    © 2025 Chanintorn Chalermsuk
                                </Typography>
                            </Box>
                            <Box sx={{
                                flex: '1',
                                maxWidth: { xs: '100%', md: '50%' },
                                minHeight: { xs: 'auto', md: '450px' }
                            }}>
                                <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                                    <Box>
                                        <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>Name</Typography>
                                        <TextField fullWidth variant="filled" hiddenLabel sx={{ bgcolor: '#1C1C1C', borderRadius: 2, '.MuiInputBase-input': { py: 1.5, px: 2 } }} />
                                    </Box>
                                    <Box>
                                        <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>Email</Typography>
                                        <TextField fullWidth variant="filled" hiddenLabel sx={{ bgcolor: '#1C1C1C', borderRadius: 2, '.MuiInputBase-input': { py: 1.5, px: 2 } }} />
                                    </Box>
                                    <Box>
                                        <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>Subject</Typography>
                                        <TextField fullWidth variant="filled" hiddenLabel sx={{ bgcolor: '#1C1C1C', borderRadius: 2, '.MuiInputBase-input': { py: 1.5, px: 2 } }} />
                                    </Box>
                                    <Box>
                                        <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>Message</Typography>
                                        <TextField multiline rows={4} fullWidth variant="filled" hiddenLabel sx={{ bgcolor: '#1C1C1C', borderRadius: 2, '.MuiInputBase-input': { py: 1.5, px: 2 } }} />
                                    </Box>
                                    <Button variant="contained" sx={{ mt: 1, backgroundColor: 'primary.main', color: 'black', alignSelf: 'flex-start', px: 4, py: 1.5, borderRadius: 50, '&:hover': { backgroundColor: 'primary.main' } }}>
                                        SUBMIT
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Container>

                </main>
            </Box>
        </ThemeProvider >
    );
}

export default App; 