import '../../styles/main.css';

import { useMediaQuery } from '@mui/material';

import Preview from '../Main/Preview';

import hot_coffee_background from '../../assets/main_images/hot_coffee_background.jpg';

export default function HotCoffee() {
  const isDesktop = useMediaQuery('(min-width: 630px)');

  return Preview(
    hot_coffee_background.src,
    '6.875rem',
    '10rem',
    isDesktop,
    '17.4vw',
    '25.3vw'
  );
}
