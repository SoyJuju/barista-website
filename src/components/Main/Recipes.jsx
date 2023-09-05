import '../../styles/main.css';

export default function Recipes(props) {
  const { Ingredients, Directions } = props;

  const Requirements = Ingredients.map((ingredient, index) => (
    <li
      className="text-neutral-100"
      key={index}
      dangerouslySetInnerHTML={{ __html: ingredient }}
    />
  ));

  const Methods = Directions.map((direction, index) => (
    <li
      className="text-neutral-100"
      key={index}
      dangerouslySetInnerHTML={{ __html: direction }}
    />
  ));

  return (
    <div class="recipe-list">
      <div>
        <h3 className="recipe-list--heading">Ingredients</h3>
        <ul class="recipe-list--items">{Requirements}</ul>
      </div>
      <div>
        <h3 className="recipe-list--heading">Directions</h3>
        <ul class="recipe-list--items">{Methods}</ul>
      </div>
    </div>
  );
}
