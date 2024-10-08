import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css';

export const background = style({
  width: '100vw',
  height: '100vh',
  backgroundColor: vars.colors.brandPrimary,
  position: 'relative',
});

export const container = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: '#FFFAF3',
  borderRadius: 10,
  padding: 20,
  display: 'flex',
  flexDirection: 'column',
  gap: 15,
  boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
});

export const authHeader = style({
  fontSize: 32,
  fontWeight: 700,
});

export const authInputBox = style({
  display: 'flex',
  flexDirection: 'column',
});

export const authLabel = style({
  fontSize: 14,
  marginBottom: 4,
});

export const authInput = style({
  border: '1px solid',
  borderColor: '#eee',
  padding: 10,
  borderRadius: 5,
  selectors: {
    '&:focus': { borderColor: vars.colors.brandPrimary },
  },
});

export const errorMessage = style({
  fontSize: 12,
  color: '#FF4D4D',
});
