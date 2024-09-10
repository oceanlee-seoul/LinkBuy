import { globalFontFace } from '@vanilla-extract/css';

const notoSans = 'Noto Sans KR';

globalFontFace(notoSans, {
  src: 'url(https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap)',
});

export { notoSans };
