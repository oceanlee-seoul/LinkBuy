import { style } from '@vanilla-extract/css';
import { breakpoints, vars } from '../../styles/themes.css';

export const HeaderWrapper = style({
  borderBottom: '1px solid #DFDFDF',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 70,
});

export const HeaderContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  paddingInline: 16,
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

export const LogoWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: 5,
  marginRight: 15,
});

export const HeaderLogo = style({
  height: 40,
  width: 40,
  borderRadius: 8,
});

export const LogoTitle = style({
  fontSize: 25,
  fontWeight: '700',
  marginBottom: 2,
  color: vars.colors.brandPrimary,
  display: 'none',
  '@media': {
    [breakpoints.tablet]: {
      display: 'block',
    },
  },
});

export const NavWrapper = style({
  flex: 1,
  display: 'flex',
  gap: 10,
});

export const NavItem = style({
  fontSize: 16,
  fontWeight: '700',
  color: '#4B5563',
  transition: 'color 0.2s ease',
  ':hover': {
    color: vars.colors.brandPrimary,
  },
  '@media': {
    [breakpoints.tablet]: {
      fontSize: 18,
    },
  },
});
