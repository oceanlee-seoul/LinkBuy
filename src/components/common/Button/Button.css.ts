import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../../styles/themes.css';

export const buttonBaseStyle = style({
  fontSize: 14,
  borderRadius: 10,
  textAlign: 'center',
  display: 'inline-block',
  transition: 'background-color 0.2s ease',
});

export const buttonVariants = styleVariants({
  primary: {
    backgroundColor: vars.colors.brandPrimary,
    color: '#FFFFFF',
    ':hover': {
      backgroundColor: vars.colors.PrimaryButtonHover,
    },
  },
  destructive: {
    backgroundColor: '#FF4D4D',
    color: '#FFFFFF',
  },
  disabled: {
    backgroundColor: '#eee',
    pointerEvents: 'none',
  },
});
