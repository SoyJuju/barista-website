import RecipeItems from './RecipeItems';

export default function RecipeGrid({ Title, Content }) {
  const Items = Content.map((element, index) => (
    <li key={index}>
      <RecipeItems
        src={element.src}
        link={element.link}
        label={element.label}
      />
    </li>
  ));

  console.log('Items', Items);

  return (
    <div className="recipe-grid--series">
      <h1 className="recipe-grid--heading | fs-small-800 fw-regular text-neutral-100">
        {Title}
      </h1>
      <ul
        role="list"
        className="recipe-grid--container | grid padding-block-700"
      >
        {Items}
      </ul>
    </div>
  );
}
