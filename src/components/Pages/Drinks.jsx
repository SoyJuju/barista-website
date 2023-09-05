import '../../styles/main.css';

import { useMediaQuery } from '@mui/material';

import Preview from '../Main/Preview';
import RecipeGrid from '../Main/RecipesGrid';

import drinks_background from '../../assets/main_images/soda_background.jpg';

import Mojito from '../../assets/recipe_grid/mojito.jpg';
import PassionMojito from '../../assets/recipe_grid/passionmojito.jpg';
import RaspberryMojito from '../../assets/recipe_grid/raspberry mojito.jpg';
import LimeCoffeeSoda from '../../assets/recipe_grid/lime coffee soda.jpg';
import HoneyLemonSoda from '../../assets/recipe_grid/honey lemon soda.jpg';
import LemonPeachTeaSoda from '../../assets/recipe_grid/lemon peach tea soda.jpg';

import TaiwanMilkTea from '../../assets/recipe_grid/taiwan milk tea.jpg';
import ChocolateBobaLatte from '../../assets/recipe_grid/chocolate boba.jpg';
import MatchaBobaLatte from '../../assets/recipe_grid/matcha boba latte.jpg';
import TaroBobaLatte from '../../assets/recipe_grid/taro milk tea.jpg';

import IceLemonTea from '../../assets/recipe_grid/ice lemon tea.jpg';
import HoneyLemonTea from '../../assets/recipe_grid/honey lemon tea.webp';
import PassionLemonTea from '../../assets/recipe_grid/passion lemon tea.jpg';
import PeachFruitTea from '../../assets/recipe_grid/peach fruit tea.jpg';
import PeachGreenTea from '../../assets/recipe_grid/peach green tea.webp';
import JasmineGreenTea from '../../assets/recipe_grid/jasmine green tea.webp';

import CheeseMango from '../../assets/recipe_grid/cheese mango.webp';
import CheeseGrape from '../../assets/recipe_grid/cheese grape.jpg';
import CheesePineapple from '../../assets/recipe_grid/cheese pineapple.webp';
import CheeseStrawberry from '../../assets/recipe_grid/cheese strawberry.jpg';
import CheeseChocolate from '../../assets/recipe_grid/cheese chocolate.jpg';
import CheeseMatcha from '../../assets/recipe_grid/matcha cheese.jpg';
import CheeseTaro from '../../assets/recipe_grid/cheese taro.jpg';

export default function IceCoffee() {
  const CheeseDrinks = [
    { src: CheeseMango.src, link: '/', label: 'Cheese Mango' },
    { src: CheeseGrape.src, link: '/', label: 'Cheese Grape' },
    { src: CheesePineapple.src, link: '/', label: 'Cheese Pineapple' },
    { src: CheeseStrawberry.src, link: '/', label: 'Cheese Strawberry' },
    { src: CheeseChocolate.src, link: '/', label: 'Cheese Chocolate' },
    { src: CheeseMatcha.src, link: '/', label: 'Cheese Matcha' },
    { src: CheeseTaro.src, link: '/', label: 'Cheese Taro' },
  ];

  const FruitTea = [
    { src: IceLemonTea.src, link: '/', label: 'Ice Lemon Tea' },
    { src: HoneyLemonTea.src, link: '/', label: 'Honey Lemon Tea' },
    { src: PassionLemonTea.src, link: '/', label: 'Passion Lemon Tea' },
    { src: PeachFruitTea.src, link: '/', label: 'Peach Fruit Tea' },
    { src: PeachGreenTea.src, link: '/', label: 'Peach Green Tea' },
    { src: JasmineGreenTea.src, link: '/', label: 'Jasmine Green Tea' },
  ];

  const MilkTea = [
    { src: TaiwanMilkTea.src, link: '/', label: 'Taiwan Milk Tea' },
    { src: ChocolateBobaLatte.src, link: '/', label: 'Chocolate Boba Latte' },
    { src: MatchaBobaLatte.src, link: '/', label: 'Matcha Boba Latte' },
    { src: TaroBobaLatte.src, link: '/', label: 'Taro Boba Latte' },
  ];

  const Soda = [
    { src: Mojito.src, link: '/', label: 'Mojito' },
    { src: PassionMojito.src, link: '/', label: 'Passion Mojito' },
    { src: RaspberryMojito.src, link: '/', label: 'Raspberry Mojito' },
    { src: LimeCoffeeSoda.src, link: '/', label: 'Lime Coffee Soda' },
    { src: HoneyLemonSoda.src, link: '/', label: 'Honey Lemon Soda' },
    { src: LemonPeachTeaSoda.src, link: '/', label: 'Lemon Peach Tea Soda' },
  ];

  const isDesktop = useMediaQuery('(min-width: 670px)');

  return (
    <main>
      {Preview(
        drinks_background.src,
        '5.3rem',
        '6.56rem',
        isDesktop,
        '12.6vw',
        '15.6vw',
        'T a s t y',
        'D E L I G H T'
      )}
      <section className="recipe-grid | padding-block-400">
        <div className="container">
          <RecipeGrid Title="Soda Series" Content={Soda} />
          <RecipeGrid Title="Boba Milk Tea Series" Content={MilkTea} />
          <RecipeGrid Title="Fruit Tea Series" Content={FruitTea} />
          <RecipeGrid Title="Cheese Series" Content={CheeseDrinks} />
        </div>
      </section>
    </main>
  );
}
