import { globalStyle } from '@vanilla-extract/css';
import { notoSans } from './fonts.css.ts';

import './layers.css.ts';
import './reset.css.ts';

globalStyle('body', {
  fontFamily: notoSans,
});
