import React, { useContext, useEffect, useState } from "react";
import items from "./data";

const RoomContext = React.createContext();

const ContextProvider = ({ children }) => {
  const [data, setData] = useState({
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
  });
  //get data

  useEffect(() => {
    let rooms = formatData(items);
    let featuredRooms = rooms.filter(room => room.featured === true);

    setData({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
    });
  }, []);

  const formatData = (items) => {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  };

  const getRoom = slug => {
    let tempRooms = [...data.rooms]
    const room = tempRooms.find((room) => room.slug === slug)
    return room;

  }
  console.log(getRoom.slug)

  console.log(data,'data')

  return (
    <RoomContext.Provider value={{ ...data, getRoom: getRoom() }}>{children}</RoomContext.Provider>
  );
};


export const useGlobalContext = () => {
  return useContext(RoomContext);
};

export { RoomContext, ContextProvider };
