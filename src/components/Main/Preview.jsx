import '../../styles/main.css';

export default function Preview(
  background,
  font_size_1,
  font_size_2,
  isDesktop,
  font_size_1_small,
  font_size_2_small,
  title_1,
  title_2
) {
  return (
    <section
      className="preview"
      style={
        isDesktop
          ? { backgroundImage: `url(${background})` }
          : { backgroundImage: 'none' }
      }
    >
      <div className="container">
        <div className="preview--container">
          <div className="preview--heading-container">
            <p
              className="preview--heading-1"
              style={
                isDesktop
                  ? { fontSize: `${font_size_1}` }
                  : { fontSize: `${font_size_1_small}` }
              }
            >
              {title_1}
            </p>
            <p
              className="preview--heading-2 | fw-bold"
              style={
                isDesktop
                  ? { fontSize: `${font_size_2}` }
                  : { fontSize: `${font_size_2_small}` }
              }
            >
              {title_2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
