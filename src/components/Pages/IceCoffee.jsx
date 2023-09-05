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

import IceLatte from '../../assets/recipe_grid/ice latte.jpg';
import IcedSignatureLatte from '../../assets/recipe_grid/signature latte.jpg';
import IcedMatchaLatte from '../../assets/recipe_grid/ice mocha brew.jpg';
import IcedTaroLatte from '../../assets/recipe_grid/iced taro latte.jpg';
import IcedVanillaLatte from '../../assets/recipe_grid/ice vanilla latte.jpg';
import IcedCaramelLatte from '../../assets/recipe_grid/ice caramel latte.jpg';
import IcedHazelnutLatte from '../../assets/recipe_grid/iced hazelnut.jpg';
import IcedChocolateLatte from '../../assets/recipe_grid/iced chocolate.jpg';

import CappuccinoBlended from '../../assets/recipe_grid/blended cappuccino.jpg';
import MochaBlended from '../../assets/recipe_grid/mocha blended.jpg';
import VanillaBlended from '../../assets/recipe_grid/vanilla blended.jpg';
import CaramelBlended from '../../assets/recipe_grid/caramel frappe.jpg';
import HazelnutBlended from '../../assets/recipe_grid/hazelnut frappe.jpg';
import ChocolateBlended from '../../assets/recipe_grid/chocolate coffee blended.webp';

import MangoFrappe from '../../assets/recipe_grid/mango frappe.jpg';
import ChocolateFrappe from '../../assets/recipe_grid/chocolate frappe.jpg';
import MatchaFrappe from '../../assets/recipe_grid/matcha frappe.jpg';
import BlueberryFrappe from '../../assets/recipe_grid/blueberry frappe.jpg';
import OreoFrappe from '../../assets/recipe_grid/oreo frappe.jpg';

import IcedMayMyoBrew from '../../assets/recipe_grid/ice brew.webp';
import IcedMochaBrew from '../../assets/recipe_grid/mocha brew.jpg';
import IcedBlackBrew from '../../assets/recipe_grid/ice brew black.jpg';
import IcedAmericanoBrew from '../../assets/recipe_grid/ice brew americano.jpg';

export default function IceCoffee() {
  const IceBrew = [
    {
      src: IcedMayMyoBrew.src,
      link: '/IceCoffee/mayMyoBrew',
      label: 'Iced May Myo Brew',
    },
    {
      src: IcedMochaBrew.src,
      link: '/IceCoffee/mochaBrew',
      label: 'Iced Mocha Brew',
    },
    {
      src: IcedBlackBrew.src,
      link: '/IceCoffee/blackBrew',
      label: 'Iced Black Brew',
    },
    {
      src: IcedAmericanoBrew.src,
      link: '/IceCoffee/americanoBrew',
      label: 'Iced Americano Brew',
    },
  ];

  const IceFrappe = [
    {
      src: MangoFrappe.src,
      link: '/IceCoffee/mangoFrappe',
      label: 'Mango Frappe',
    },
    {
      src: ChocolateFrappe.src,
      link: '/IceCoffee/chocolateFrappe',
      label: 'Chocolate Frappe',
    },
    {
      src: MatchaFrappe.src,
      link: '/IceCoffee/matchaFrappe',
      label: 'Matcha Frappe',
    },
    {
      src: BlueberryFrappe.src,
      link: '/IceCoffee/blueberryFrappe',
      label: 'Blueberry Frappe',
    },
    {
      src: OreoFrappe.src,
      link: '/IceCoffee/oreoFrappe',
      label: 'Oreo Frappe',
    },
  ];

  const IceBlended = [
    {
      src: CappuccinoBlended.src,
      link: '/IceCoffee/cappuccinoBlended',
      label: 'Cappuccino Blended',
    },
    {
      src: MochaBlended.src,
      link: '/IceCoffee/mochaBlended',
      label: 'Mocha Blended',
    },
    {
      src: VanillaBlended.src,
      link: '/IceCoffee/vanillaBlended',
      label: 'Vanilla Coffee Blended',
    },
    {
      src: CaramelBlended.src,
      link: '/IceCoffee/caramelBlended',
      label: 'Caramel Coffee Blended',
    },
    {
      src: HazelnutBlended.src,
      link: '/IceCoffee/hazelnutBlended',
      label: 'Hazelnut Coffee Blended',
    },
    {
      src: ChocolateBlended.src,
      link: '/IceCoffee/chocolateBlended',
      label: 'Chocolate Coffee Blended',
    },
  ];

  const IcedCoffee = [
    {
      src: IcedCappuccino.src,
      link: '/IceCoffee/cappuccino',
      label: 'Iced Cappuccino',
    },
    { src: IcedMocha.src, link: '/IceCoffee/mocha', label: 'Iced Mocha' },
    {
      src: IcedAmericano.src,
      link: '/IceCoffee/americano',
      label: 'Iced Americano',
    },
    { src: IcedBlack.src, link: '/IceCoffee/black', label: 'Iced Black' },
    {
      src: IcedChocolate.src,
      link: '/IceCoffee/chocolate',
      label: 'Iced Chocolate',
    },
  ];

  const IcedLatte = [
    { src: IceLatte.src, link: '/IceCoffee/latte', label: 'Iced Latte' },
    {
      src: IcedSignatureLatte.src,
      link: '/IceCoffee/signatureLatte',
      label: 'Iced Signature Latte',
    },
    {
      src: IcedMatchaLatte.src,
      link: '/IceCoffee/matchaLatte',
      label: 'Iced Matcha Latte',
    },
    {
      src: IcedTaroLatte.src,
      link: '/IceCoffee/taroLatte',
      label: 'Iced Taro Latte',
    },
    {
      src: IcedVanillaLatte.src,
      link: '/IceCoffee/vanillaLatte',
      label: 'Iced Vanilla Latte',
    },
    {
      src: IcedCaramelLatte.src,
      link: '/IceCoffee/caramelLatte',
      label: 'Iced Caramel Latte',
    },
    {
      src: IcedHazelnutLatte.src,
      link: '/IceCoffee/hazelnutLatte',
      label: 'Iced Hazelnut Latte',
    },
    {
      src: IcedChocolateLatte.src,
      link: '/IceCoffee/chocolateLatte',
      label: 'Iced Chocolate Latte',
    },
  ];

  const isDesktop = useMediaQuery('(min-width: 690px)');

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
          <RecipeGrid Title="Iced Coffee Series" Content={IcedCoffee} />
          <RecipeGrid Title="Iced Latte Series" Content={IcedLatte} />
          <RecipeGrid Title="Iced Blended Coffee Series" Content={IceBlended} />
          <RecipeGrid Title="Iced Frappe Series" Content={IceFrappe} />
          <RecipeGrid Title="Iced Brew Coffee Series" Content={IceBrew} />
        </div>
      </section>
    </main>
  );
}
