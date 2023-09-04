import '../../styles/main.css';

export default function RecipeItems(props) {
  return (
    <div className="recipe-items">
      <a href={props.link}>
        <img className="recipe-items--image" src={props.src} alt="" />
      </a>
      <a
        href={props.link}
        className="recipe-items--label | text-neutral-100 fw-bold"
      >
        {props.label}
      </a>
    </div>
  );
}
