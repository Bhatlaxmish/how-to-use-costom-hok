import { initialStore } from "./store";
const configurestore=()=>{

    const actions={
        TOGGLE_FAV:(curstate,productId)=>{
             const prodIndex = curstate.products.findIndex(p => p.id === productId);
      const newFavStatus = !curstate.products[prodIndex].isFavorite;
      const updatedProducts = [...curstate.products];
      updatedProducts[prodIndex] = {
        ...curstate.products[prodIndex],
        isFavorite: newFavStatus,
        };
        return {products:updatedProducts};
    }
};
initialStore(actions,{products:[
    {
      id: 'p1',
      title: 'Red Scarf',
      description: 'A pretty red scarf.',
      isFavorite: false
    },
    {
      id: 'p2',
      title: 'Blue T-Shirt',
      description: 'A pretty blue t-shirt.',
      isFavorite: false
    },
    {
      id: 'p3',
      title: 'Green Trousers',
      description: 'A pair of lightly green trousers.',
      isFavorite: false
    },
    {
      id: 'p4',
      title: 'Orange Hat',
      description: 'Street style! An orange hat.',
      isFavorite: false
    }
  ]}) 

};
export default configurestore;