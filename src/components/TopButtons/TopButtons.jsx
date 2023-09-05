import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Rancho Cordova",
    },
    {
      id: 2,
      title: "Colombo",
    },
    {
      id: 3,
      title: "Paris",
    },
    {
      id: 4,
      title: "New York",
    },
    {
      id: 5,
      title: "Alaska",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
