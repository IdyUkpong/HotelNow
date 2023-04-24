import { Link } from "react-router-dom";
import FadeInOut from "../Animation";

const products = [
  {
    id: 1,
    name: "Nordic Hotel",
    href: "#",
    price: "₦48,000",
    imageSrc:
      "https://images.unsplash.com/photo-1611048267451-e6ed903d4a38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWwlMjBpbnRlcmlvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    imageAlt: "Hotel",
  },
  {
    id: 2,
    name: "Hotel Valerie",
    href: "#",
    price: "₦35,000",
    imageSrc:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    imageAlt: "Hotel Picture",
  },
  {
    id: 3,
    name: "ValleyPoint Hotel",
    href: "#",
    price: "₦85,000",
    imageSrc:
      "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1600",
    imageAlt: "Hotel Picture",
  },
  {
    id: 4,
    name: "Transcorp Hilton Hotel",
    href: "#",
    price: "₦33,000",
    imageSrc:
      "https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg?auto=compress&cs=tinysrgb&w=1600",
    imageAlt: "Hotel Picture",
  },
  {
    id: 5,
    name: "Prime Suite Hotel",
    href: "#",
    price: "₦35,000",
    imageSrc:
      "https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    imageAlt: "Hotel Picture",
  },
  {
    id: 6,
    name: "Protea Hotel",
    href: "#",
    price: "₦32,000",
    imageSrc:
      "https://images.pexels.com/photos/3209049/pexels-photo-3209049.jpeg?auto=compress&cs=tinysrgb&w=1600",
    imageAlt: "Hotel Picture",
  },
  {
    id: 7,
    name: "Hotel Victory",
    href: "#",
    price: "₦39,000",
    imageSrc:
      "https://images.pexels.com/photos/5563472/pexels-photo-5563472.jpeg?auto=compress&cs=tinysrgb&w=1600",
    imageAlt: "Hotel Picture",
  },
  {
    id: 8,
    name: "Finich Hotel and Suites",
    href: "#",
    price: "₦33,000",
    imageSrc:
      "https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg?auto=compress&cs=tinysrgb&w=1600",
    imageAlt: "Hotel Picture",
  },
];

export default function Hotel() {
  return (
    <div className="bg-white">
      <h2 className="text-3xl font-bold text-center mt-16">
        Suggested Hotels In Nigeria
      </h2>
      <div className="mx-auto max-w-2xl px-4 pt-3 pb-16 sm:px-6 sm:pt-12 sm:pb-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <FadeInOut delay={500}>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-center text-gray-700">
                  {product.name}
                </h3>
                <p className="mt-1 text-lg font-medium text-center text-gray-900">
                  {product.price}
                </p>
              </a>
            ))}
          </div>
          <Link to="/ourhotels">
            <button
              className="hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg text-xl mx-auto mt-8 block"
              style={{ backgroundColor: "#a3b18a" }}
            >
              Browse our hotels
            </button>
          </Link>
        </FadeInOut>
      </div>
    </div>
  );
}
