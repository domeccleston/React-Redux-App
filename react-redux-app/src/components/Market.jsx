import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import { stockReducer } from "../state/reducers";

export function Market(props) {
  console.log(props);
  return (
    <div>
      <Cart stock={props.stock} cart={props.cart} />
      <ItemsList items={props.stock.fruits} addToCart = {props.addToCart}/>
    </div>
  );
}

function Cart(props) {
  return (
    <>
      <h5>Cart:</h5>{" "}
      {props.cart.map(itemId => {
        const allItems = props.stock.meats.concat(props.stock.fruits);
        const theItem = allItems.find(item => item.id === itemId);
        return <div>{theItem.name}</div>;
      })}
    </>
  );
}

function Item(props) {
  return (
    <div>
      <span>{props.item.name}</span>
      <button onClick={() => props.addToCart(props.item.id)}>
        Add To Cart
      </button>
    </div>
  );
}

export function ItemsList(props) {
  return (
    <>
      {props.items.map(item => {
        return <Item key={item.id} item={item} addToCart={props.addToCart}></Item>;
      })}
    </>
  );
}

export default connect(
  state => state,
  actionCreators
)(Market);
