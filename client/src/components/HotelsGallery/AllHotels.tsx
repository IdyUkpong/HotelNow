import "../../../public/styles/Hotelpage.css";

const FlipCard = ({
  imageUrl,
  title,
  description,
  price,
  isVertical = false,
}: {
  imageUrl: string;
  title: string;
  description: string;
  price: string;
  isVertical?: boolean;
}) => {
  return (
    <div className={`flip ${isVertical ? "flip-vertical" : ""} mx-3`}>
      <div className="front" style={{ backgroundImage: `url(${imageUrl})` }}>
        <h1 className="text-shadow">{title}</h1>
      </div>
      <div className="back">
        <a
          href="#"
          className="inline-block px-6 py-2 font-medium text-white rounded-lg hover:bg-blue-600"
          style={{ backgroundColor: "#a3b18a" }}
        >
          Book Now
        </a>
        <p>{description}</p>
        <span>{price}</span>
      </div>
    </div>
  );
};

const FlipCards = () => {
  return (
    <>
      <div className="container pt-4">
        <h1 className="text-4xl text-white pb-5">Our Hotels </h1>{" "}
      </div>
      <FlipCard
        imageUrl="https://images.unsplash.com/photo-1611048267451-e6ed903d4a38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWwlMjBpbnRlcmlvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        title="Prime Suite"
        description="Standard room"
        price="₦25,000"
      />
      <FlipCard
        imageUrl="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        title="The Moorhouse Hotel"
        description="1 King Bed"
        price="₦34,000"
      />
      <FlipCard
        imageUrl="https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1600"
        title="Pier Harbour"
        description="2 Queen Bed"
        price="₦35,000"
      />

      <br />
      <br />

      <FlipCard
        imageUrl="https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg?auto=compress&cs=tinysrgb&w=1600"
        title="Radisson Blu Hotel"
        description="Double Room with Two Double Beds"
        price="₦45,000"
        isVertical
      />
      <FlipCard
        imageUrl="https://images.pexels.com/photos/5563472/pexels-photo-5563472.jpeg?auto=compress&cs=tinysrgb&w=1600"
        title="BWC Hotel"
        description="Standard Queen Room with Two Queen Beds"
        price="₦46,000"
        isVertical
      />
      <FlipCard
        imageUrl="https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg?auto=compress&cs=tinysrgb&w=1600"
        title="Sheraton Hotel"
        description="Standard Double Room"
        price="₦37,000"
        isVertical
      />
    </>
  );
};

export default FlipCards;
