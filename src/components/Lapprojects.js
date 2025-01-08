export default function Lapprojects() {
    const destinations = [
      {
        title: "Kelingking Beach",
        location: "Nusa Penida, Bali",
        image: "/pexels-christa-grover-977018-2121121 (1).jpg", // Replace with your image
        colSpan: "col-span-2",
        rowSpan: "row-span-2",
      },
      {
        title: "Grand Palace",
        location: "Bangkok, Thailand",
        image: "/pexels-marketingtuig-87223.jpg",
        colSpan: "col-span-1",
        rowSpan: "row-span-1",
      },
      {
        title: "Cappadocia",
        location: "Turkey",
        image: "/pexels-expect-best-79873-323775.jpg",
        colSpan: "col-span-1",
        rowSpan: "row-span-1",
      },
      {
        title: "Padar Island",
        location: "East Nusa Tenggara, Indonesia",
        image: "/pexels-expect-best-79873-323780 (1).jpg",
        colSpan: "col-span-2",
        rowSpan: "row-span-1",
      },
    ];
  
    return (
      <div className="grid grid-cols-4 gap-4 auto-rows-fr h-4/5 w-full ">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className={`relative group overflow-hidden rounded-lg shadow-lg ${destination.colSpan} ${destination.rowSpan}`}
          >
            <img
              src={destination.image}
              alt={destination.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition duration-300"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-2xl font-bold">{destination.title}</h3>
              <p className="text-xl">{destination.location}</p>
            </div>
            <div className="absolute bottom-4 right-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
              
            </div>
          </div>
        ))}
      </div>
    );
  }