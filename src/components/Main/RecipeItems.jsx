import '../../styles/main.css';

export default function RecipeItems(props) {
  return (
    <div className="recipe-items">
      <img className="recipe-items--image" src={props.src} alt="" />
      <a
        href={props.link}
        className="recipe-items--label | text-neutral-100 fw-bold"
      >
        {props.label}
      </a>
    </div>
  );
}
