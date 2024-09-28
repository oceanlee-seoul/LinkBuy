import { style } from '@vanilla-extract/css';
import { breakpoints } from '../../../styles/themes.css';

export const sectionTitle = style({
  fontWeight: 'bold',
  fontSize: 20,
  color: '#11827',
  marginBottom: 20,
});

export const bestProducstListWrapper = style({
  display: 'flex',
  '@media': {
    [breakpoints.tablet]: {
      justifyContent: 'space-around',
      gap: 10,
    },
    [breakpoints.desktop]: {
      gap: 15,
    },
  },
});

export const imageWrapper = style({
  position: 'relative',
  width: 343,
  height: 343,
  borderRadius: 20,
  overflow: 'hidden',
  marginBottom: 10,
  '@media': {
    [breakpoints.desktop]: {
      width: 282,
      height: 282,
    },
  },
});

export const image = style({
  objectFit: 'cover',
  width: '100%',
  height: '100%',
});

export const contentWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
});

export const name = style({
  fontSize: 14,
  color: '#1f2937',
});

export const price = style({
  fontSize: 16,
  fontWeight: 'bold',
  color: '#1f2937',
});

export const favoriteCount = style({
  fontSize: 12,
  color: '#4b5563',
});
