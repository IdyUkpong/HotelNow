import FadeInOut from "../Animation";

export default function CustomerTestimonial() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-10 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <figure>
              <blockquote className="text-center text-xl font-semibold leading-8 text-black sm:text-2xl sm:leading-9">
                "I recently used HotelNow to book an hotel and was thrilled
                with the results. The website was user-friendly, and the booking
                process was smooth. The hotel I stayed in was amazing - clean,
                comfortable, and staffed with friendly people. I had a fantastic
                experience and would recommend this to anyone looking
                for a stress-free hotel booking experience."
              </blockquote>
            </figure>
          </div>
          <FadeInOut delay={500}>
          <div className="lg:col-span-1 flex flex-col items-center">
            <img
              className="mx-auto h-32 w-32 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="text-center">
              <div className="font-semibold text-black">Judith Black</div>
              <div className="text-gray-600">CEO of HotelNow</div>
            </div>
          </div>
          </FadeInOut>
        </div>
      </div>
    </section>
  );
}
