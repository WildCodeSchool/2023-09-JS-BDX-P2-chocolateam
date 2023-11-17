const sortCollection = (collection) => {
  //   const myList = [];
  //   console.log(collection);

  //   for (let i = 0; i < 15; i += 1) {
  //     const randomIndice = Math.floor(Math.random() * collection.length);
  //     const randomTrack = collection[randomIndice];
  //     myList.push(randomTrack);
  //   }

  return collection.sort(() => 0.5 - Math.random());
};

export default sortCollection;
