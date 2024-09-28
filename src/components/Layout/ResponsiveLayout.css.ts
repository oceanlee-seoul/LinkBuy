import { style } from '@vanilla-extract/css';
import { breakpoints } from '../../styles/themes.css';

export const LayoutWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const ResponsiveLayoutStyle = style({
  width: '100%',
  paddingInline: 16,
  border: '1px solid black',
  '@media': {
    [breakpoints.tablet]: {
      maxWidth: 744,
      paddingInline: 0,
    },
    [breakpoints.desktop]: {
      maxWidth: 1200,
      paddingInline: 0,
    },
  },
});
