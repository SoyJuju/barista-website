import '../../styles/main.css';

import { useMediaQuery } from '@mui/material';

import Preview from '../Main/Preview';
import RecipeGrid from '../Main/RecipesGrid';

import hot_coffee_background from '../../assets/main_images/hot_coffee_background.jpg';

import Espresso from '../../assets/recipe_grid/espresso.jpeg';
import Macchiato from '../../assets/recipe_grid/macchiato.jpg';
import Companna from '../../assets/recipe_grid/conpanna.jpg';
import Romano from '../../assets/recipe_grid/romano.jpg';
import Cappuccino from '../../assets/recipe_grid/Cappuccino.webp';
import FlatWhite from '../../assets/recipe_grid/flat white.jpg';
import CafeMocha from '../../assets/recipe_grid/cafe mocha.png';
import HotChoclate from '../../assets/recipe_grid/hot chocolate.jpg';
import Americano from '../../assets/recipe_grid/americano.webp';
import Black from '../../assets/recipe_grid/black.jpg';
import LongBlack from '../../assets/recipe_grid/long black.jpeg';
import HandDrip from '../../assets/recipe_grid/hand drip.jpg';

import Latte from '../../assets/recipe_grid/latte.jpg';
import MatchaLatte from '../../assets/recipe_grid/matcha latte.jpg';
import TaroLatte from '../../assets/recipe_grid/taro latte.webp';
import VanillaLatte from '../../assets/recipe_grid/Hot vanilla latte.webp';
import CaramelLatte from '../../assets/recipe_grid/Hot caramel latte.jpg';
import HazelnutLatte from '../../assets/recipe_grid/Hot hazelnut latte.jpg';
import ChocolateLatte from '../../assets/recipe_grid/Hot chocolate latte.jpg';

import MayMyoBrew from '../../assets/recipe_grid/may myo brew.jpg';
import MochaBrew from '../../assets/recipe_grid/mocha brew.jpg';
import BrewBlack from '../../assets/recipe_grid/brew black coffee.jpg';
import BrewAmericano from '../../assets/recipe_grid/brew americano.jpg';

export default function HotCoffee() {
  const HotCoffee = [
    { src: Espresso.src, link: '/HotCoffee/espresso', label: 'Espresso' },
    {
      src: Macchiato.src,
      link: '/HotCoffee/macchiato',
      label: 'Espresso Macchiato',
    },
    {
      src: Companna.src,
      link: '/HotCoffee/companna',
      label: 'Espresso Companna',
    },
    { src: Romano.src, link: '/HotCoffee/romano', label: 'Espresso Romano' },
    { src: Cappuccino.src, link: '/HotCoffee/cappuccino', label: 'Cappuccino' },
    { src: FlatWhite.src, link: '/HotCoffee/flatWhite', label: 'Flat White' },
    { src: CafeMocha.src, link: '/HotCoffee/cafeMocha', label: 'Cafe Mocha' },
    {
      src: HotChoclate.src,
      link: '/HotCoffee/hotChocolate',
      label: 'Hot Chocolate',
    },
    { src: Americano.src, link: '/HotCoffee/americano', label: 'Americano' },
    { src: Black.src, link: '/HotCoffee/black', label: 'Black' },
    { src: LongBlack.src, link: '/HotCoffee/longBlack', label: 'Long Black' },
    { src: HandDrip.src, link: '/HotCoffee/handDrip', label: 'Hand Drip' },
  ];

  const HotLatte = [
    { src: Latte.src, link: '/HotCoffee/latte', label: 'Latte' },
    {
      src: MatchaLatte.src,
      link: '/HotCoffee/matchaLatte',
      label: 'Matcha Latte',
    },
    { src: TaroLatte.src, link: '/HotCoffee/taroLatte', label: 'Taro Latte' },
    {
      src: VanillaLatte.src,
      link: '/HotCoffee/vanillaLatte',
      label: 'Vanilla Latte',
    },
    {
      src: CaramelLatte.src,
      link: '/HotCoffee/caramelLatte',
      label: 'Caramel Latte',
    },
    {
      src: HazelnutLatte.src,
      link: '/HotCoffee/hazelnutLatte',
      label: 'Hazelnut Latte',
    },
    {
      src: ChocolateLatte.src,
      link: '/HotCoffee/chocolateLatte',
      label: 'Chocolate Latte',
    },
  ];

  const HotBrew = [
    {
      src: MayMyoBrew.src,
      link: '/HotCoffee/mayMyoBrew',
      label: 'May Myo Brew Coffee',
    },
    { src: MochaBrew.src, link: '/HotCoffee/mochaBrew', label: 'Mocha Brew' },
    {
      src: BrewBlack.src,
      link: '/HotCoffee/brewBlack',
      label: 'Black Coffee Brew',
    },
    {
      src: BrewAmericano.src,
      link: '/HotCoffee/brewAmericano',
      label: 'Americano Brew',
    },
  ];

  const isDesktop = useMediaQuery('(min-width: 630px)');

  return (
    <main>
      {Preview(
        hot_coffee_background.src,
        '6.875rem',
        '10rem',
        isDesktop,
        '17.4vw',
        '25.3vw',
        "L e t ' s",
        'B R E W'
      )}
      <section className="recipe-grid | padding-block-400">
        <div className="container">
          <RecipeGrid Title="Hot Coffee Series" Content={HotCoffee} />
          <RecipeGrid Title="Hot Latte Series" Content={HotLatte} />
          <RecipeGrid Title="May Myo Brew Series" Content={HotBrew} />
        </div>
      </section>
    </main>
  );
}
