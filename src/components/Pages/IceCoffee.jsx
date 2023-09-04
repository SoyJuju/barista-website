import '../../styles/main.css';

import { useMediaQuery } from '@mui/material';

import Preview from '../Main/Preview';
import RecipeGrid from '../Main/RecipesGrid';

import ice_coffee_background from '../../assets/main_images/ice_coffee_background.png';

import IcedCappuccino from '../../assets/recipe_grid/iced cappuccino.webp';
import IcedMocha from '../../assets/recipe_grid/iced mocha.jpg';
import IcedAmericano from '../../assets/recipe_grid/iced americano.webp';
import IcedBlack from '../../assets/recipe_grid/iced black.jpg';
import IcedChocolate from '../../assets/recipe_grid/iced chocolate.jpg';

import IcedLatte2 from '../../assets/recipe_grid/ice latte.jpg';
import IcedSignatureLatte from '../../assets/recipe_grid/signature latte.jpg';
import IcedMatchaLatte from '../../assets/recipe_grid/ice mocha brew.jpg';
import IcedTaroLatte from '../../assets/recipe_grid/iced taro latte.jpg';
import IcedVanillaLatte from '../../assets/recipe_grid/ice vanilla latte.jpg';
import IcedCaramelLatte from '../../assets/recipe_grid/ice caramel latte.jpg';
import IcedHazelnutLatte from '../../assets/recipe_grid/iced hazelnut.jpg';
import IcedChocolateLatte from '../../assets/recipe_grid/iced chocolate.jpg';

export default function IceCoffee() {
  const IcedCoffee = [
    { src: IcedCappuccino.src, link: '/', label: 'Iced Cappuccino' },
    { src: IcedMocha.src, link: '/', label: 'Iced Mocha' },
    { src: IcedAmericano.src, link: '/', label: 'Iced Americano' },
    { src: IcedBlack.src, link: '/', label: 'Iced Black' },
    { src: IcedChocolate.src, link: '/', label: 'Iced Chocolate' },
  ];

  const IcedLatte = [
    { src: IcedLatte2.src, link: '/', label: 'Iced Latte' },
    { src: IcedSignatureLatte.src, link: '/', label: 'Iced Signature Latte' },
    { src: IcedMatchaLatte.src, link: '/', label: 'Iced Matcha Latte' },
    { src: IcedTaroLatte.src, link: '/', label: 'Iced Taro Latte' },
    { src: IcedVanillaLatte.src, link: '/', label: 'Iced Vanilla Latte' },
    { src: IcedCaramelLatte.src, link: '/', label: 'Iced Caramel Latte' },
    { src: IcedHazelnutLatte.src, link: '/', label: 'Iced Hazelnut Latte' },
    { src: IcedChocolateLatte.src, link: '/', label: 'Iced Chocolate Latte' },
  ];

  const isDesktop = useMediaQuery('(max-width: 690px)');

  return (
    <main>
      {Preview(
        ice_coffee_background.src,
        '5.625rem',
        '5.9375rem',
        isDesktop,
        '13vw',
        '13.7vw',
        'C o l d',
        'C A F F E I N E'
      )}
      <section className="recipe-grid | padding-block-400">
        <div className="container">
          <RecipeGrid Title="Ice Coffee Series" Content={IcedCoffee} />
          <RecipeGrid Title="Ice Latte Series" Content={IcedLatte} />
        </div>
      </section>
    </main>
  );
}
