const Card = ({ text, icon }) => {
  return (
    <div className="card">
      <p>{text}</p>
      {icon}
    </div>
  );
};

export default Card;
