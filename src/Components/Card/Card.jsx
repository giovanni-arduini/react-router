import style from "./Card.module.css";

function Card(props) {
  const { id, image, title, category, content, tags, published } = props;

  return (
    <>
      <div className={style.card}>
        <img
          className={style.thumbnail}
          src={image ? image : "placeholder"}
          alt=""
        />

        <div className={style.body}>
          <h3 className={style.title}>{title}</h3>
          <div key={id}>
            {tags.map((tag) => (
              <span
                key={tag}
                className={` ${style.cardTag} ${
                  style[tag.split(" ").join("")]
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className={style.description}>{content}</div>
          <div className={style.description}>{category}</div>

          {/* <div className={style.buttons}>
            <div>
              <Button />
            </div>
            <div>
              <CancelBtn posts={props} />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Card;
