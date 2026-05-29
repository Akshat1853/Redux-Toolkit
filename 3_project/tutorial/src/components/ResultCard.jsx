import React from "react";

const ResultCard = ({ item }) => {
  return (
    <div className="w-[18vw] relative h-80 bg-white rounded-xl overflow-hidden ">
      <a target="_blank" href={item.url} className="h-full">
        {item.type == "photo" ? (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
            alt=""
          />
        ) : (
          ""
        )}
        .
        {item.type == "video" ? (
          <video
            className="h-full w-full object-cover object-center"
            src={item.src}
            autoPlay
            loop
            muted
          ></video>
        ) : (
          ""
        )}
      </a>

      <div
        id="bottom"
        className="text-white absolute bottom-0 w-full px-4 py-6 flex justify-between gap-3 items-center"
      >
        <h2 className="text-xl font-semibold capitalize h-14 overflow-hidden">
          {item.title}
        </h2>

        <button className="bg-indigo-600 active:scale-95 text-white rounded px-3 py-1 cursor-pointer font-medium">
          Save
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
