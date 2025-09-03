import "./HotelCard.css";

export const HotelCard = ({ hotel }) => {
    const { _id, name, image, city, state, country, rating, price } = hotel;

    return (
        <div className="relative hotelcard-container shadow cursor-pointer">
            <div>
                <img className="img" src={image} alt={name} />
                <div className="hotelcard-details">
                    <div className="d-flex align-center">
                        {/* ✅ Show city + state instead of category */}
                        <span className="location">{city}, {state}, {country}</span>
                        <span className="rating d-flex align-center">
                            <span className="material-icons-outlined">star</span>
                            <span>{rating}</span>
                        </span>
                    </div>

                    <p className="hotel-name">{name}</p>
                    <p className="price-details">
                        <span className="price">₹{price}</span>
                        <span> / night</span>
                    </p>
                </div>
            </div>

            <button className="button btn-wishlist absolute">
                <span className="material-icons favourite cursor">favorite</span>
            </button>
        </div>
    );
};
