import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

// SVG hexagon + V mark logo inline component
const HexLogo = ({ size = 28 }) => (
    <Box
        component="svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 40 40"
        sx={{ width: size, height: size, flexShrink: 0 }}
    >
        <defs>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C9A84C" />
                <stop offset="100%" stopColor="#E8B94F" />
            </linearGradient>
        </defs>
        {/* Hexagon */}
        <polygon
            points="20,2 35,11 35,29 20,38 5,29 5,11"
            fill="#1A1A1A"
            stroke="url(#goldGrad)"
            strokeWidth="2"
        />
        {/* V mark */}
        <path
            d="M12 14 L20 26 L28 14"
            stroke="url(#goldGrad)"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
        />
        {/* Bottom dot accent */}
        <circle cx="20" cy="26" r="1.8" fill="#E8B94F" />
    </Box>
);

// Full logo: hex mark + wordmark
const Logo = ({ size = 28, textSize = '1.25rem', linkTo = '/home', noLink = false }) => {
    const inner = (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2, textDecoration: 'none', cursor: 'pointer' }}>
            <HexLogo size={size} />
            <Typography sx={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 700,
                fontSize: textSize,
                background: 'linear-gradient(135deg, #C9A84C 30%, #E8B94F 70%, #F5D68A 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '0.04em',
                lineHeight: 1,
            }}>
                VeritasChain
            </Typography>
        </Box>
    );

    if (noLink) return inner;

    return (
        <Box component={Link} to={linkTo} sx={{ textDecoration: 'none' }}>
            {inner}
        </Box>
    );
};

export { HexLogo };
export default Logo;
