import '../../styles/main.css';

export default function Preview(
  background,
  font_size_1,
  font_size_2,
  isDesktop
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
              style={{ fontSize: `${font_size_1}` }}
            >
              L e t ' s
            </p>
            <p
              className="preview--heading-2 | fw-bold"
              style={{ fontSize: `${font_size_2}` }}
            >
              B R E W
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
