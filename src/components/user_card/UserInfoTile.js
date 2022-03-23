import "./user_card.scss";

const UserInfoTile = (props) => {
  return (
    <>
      <div className="UserInfoTile">
        <h4 className="TileTitle">{props.title}</h4>
        <p className="TileInfo">{props.info}</p>
        <img className="TileIcon" src={props.tileIcon} alt="Info tile icon" />
      </div>
    </>
  );
};

export default UserInfoTile;
