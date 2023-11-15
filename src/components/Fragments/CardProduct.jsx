const CardProduct = (props) => {
    const {children} = props;
  return <div className="card w-60 bg-base-100 shadow-xl">{children}</div>;
};

const CardImage = (props) => {
    const {image, alt} = props;
  return (
    <figure>
      <img src={image} alt={alt} />
    </figure>
  );
};

const CardBody = (props) => {
    const {children, title, handleCard, id} = props;
  return (
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <p>{children}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary" onClick={() => handleCard(id)}>Buy Now</button>
      </div>
    </div>
  );
};

CardProduct.image = CardImage;
CardProduct.body = CardBody;

export default CardProduct;
