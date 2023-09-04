import '../../styles/main.css';

export default function Preview(
  background,
  font_size_1,
  font_size_2,
  isDesktop,
  font_size_1_small,
  font_size_2_small
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
              L e t ' s
            </p>
            <p
              className="preview--heading-2 | fw-bold"
              style={
                isDesktop
                  ? { fontSize: `${font_size_2}` }
                  : { fontSize: `${font_size_2_small}` }
              }
            >
              B R E W
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
