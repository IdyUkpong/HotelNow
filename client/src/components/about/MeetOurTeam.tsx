const people = [
    {
      name: 'Idongesit Ukpong',
      role: 'CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',

    },
    {
      name: 'Blossom Esezobor',
      role: 'CFO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        
    },
    {
      name: 'Tolulope Ojo',
      role: 'FullStack Engineer',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        
    },
    {
      name: 'Ibrahim Sani',
      role: 'Software Engineer',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        
    },
    {
      name: 'Tobechukwu Uka',
      role: 'Software Engineer',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        
    }
  ]
  
  export default function MeetOurTeam() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-1 gap-y-20 px-1 lg:px-1 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl mx-5 font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
            <p className="mt-1 mx-5 text-lg leading-8 text-gray-600" style={{padding: '5px 0 10px'}}>
              At HotelNow, we are led by a team of experienced professionals who are dedicated to driving success and growth for our organization. Our leadership team brings a wealth of knowledge and expertise to the table, and they are committed to providing our clients with the highest level of service and support
            </p>
          </div>
          <ul role="list" className="grid gap-x-5 gap-y-6 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center mx-5 gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="Pictures" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  
  