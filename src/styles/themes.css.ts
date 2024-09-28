import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  colors: {
    brandPrimary: '#0BC1CC',
    PrimaryButtonHover: '#0dd0db',
  },
});

export const breakpoints = {
  mobile: 'screen and (max-width: 479px)',
  tablet: 'screen and (min-width: 480px) and (max-width: 767px)',
  desktop: 'screen and (min-width: 1280px)',
};
