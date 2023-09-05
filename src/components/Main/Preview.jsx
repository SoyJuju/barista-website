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
  const Background = isDesktop
    ? { backgroundImage: `url(${background})` }
    : { backgroundImage: 'none' };

  const Font_1 = isDesktop
    ? { fontSize: `${font_size_1}` }
    : { fontSize: `${font_size_1_small}` };

  const Font_2 = isDesktop
    ? { fontSize: `${font_size_2}` }
    : { fontSize: `${font_size_2_small}` };

  return (
    <section className="preview" style={Background}>
      <div className="container">
        <div className="preview--container">
          <div className="preview--heading-container">
            <p className="preview--heading-1" style={Font_1}>
              {title_1}
            </p>
            <p className="preview--heading-2 | fw-bold" style={Font_2}>
              {title_2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
