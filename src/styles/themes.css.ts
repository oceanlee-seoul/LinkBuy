import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  colors: {
    brandPrimary: '#0BC1CC',
    PrimaryButtonHover: '#0dd0db',
  },
});

export const breakpoints = {
  mobile: 'screen and (min-width: 480px)',
  tablet: 'screen and (min-width: 768px)',
  desktop: 'screen and (min-width: 1280px)',
};
