import "../../public/styles/Dashboard.css";
import HeaderHotel from "./HotelsGallery/HeaderHotel";


function Dashboard() {
  type HotelData = {
    id: number;
    email: string;
    name: string;
    location: string;
    description: string;
    price: string;
    adminName: string;
  };

  const hotel: HotelData = {
    id: 123,
    email: "hotel@example.com",
    name: "Hotel ABC",
    location: "New York",
    description: "A luxurious hotel with stunning views of the city",
    price: "$200 per night",
    adminName: "John Doe",
  };
  return (
    <div>
     <HeaderHotel />
      <div>
        <div className="container mx-auto my-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Welcome <span style={{color:"#01497c"}}>Super Admin</span>
            </h1>
          </div>
        </div>

        <table style={{ marginTop: "2em" }}>
          <thead>
            <tr>
              <th>Hotel ID</th>
              <th>Email</th>
              <th>Hotel name</th>
              <th>Location</th>
              <th>Hotel Description</th>
              <th>Price</th>
              <th>Admin Name</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-row">
              <td>{hotel.id}</td>
              <td>{hotel.email}</td>
              <td>{hotel.name}</td>
              <td>{hotel.location}</td>
              <td>{hotel.description}</td>
              <td>{hotel.price}</td>
              <td>{hotel.adminName}</td>
              <td className="icon-delete" style={{ margin: "0.5rem" }}>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 svg-icon"
                    style={{ margin: "0.25rem" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
     
    </div>
  );
}
export default Dashboard;
