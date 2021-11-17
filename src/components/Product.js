import React, { Component } from "react";
import { actFetchProductsRequest, AddCart } from "../actions";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { connect } from "react-redux";
export class Product extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actFetchProductsRequest();
  }

  render() {
    const { _products } = this.props._products;
    if (_products.length > 0) {
      return (
        <div className="row" style={{ marginTop: "10px" }}>
          <div className="col-md-12">
            <div className="row">
              {_products.map((item, index) => (
                <div
                  key={index}
                  className="col-md-3"
                  style={{ marginBottom: "10px" }}
                >
                  <LazyLoadImage
                    src={item.image}
                    className="img-resposive"
                    style={{ width: "90%", height: "150px" }}
                    placeholderSrc={`${process.env.PUBLIC_URL}/default.png`}
                  />
                  <h5>{item.name}</h5>
                  <h6>{item.price}$</h6>
                  <span
                    className="badge badge-primary"
                    style={{ cursor: "pointer", fontSize: '15px' }}
                    onClick={() => this.props.AddCart(item)}
                  >
                    Add To Cart
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="row">
        <h2>Loading...!</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    _products: state._todoProduct,
  };
};
function mapDispatchToProps(dispatch) {
  return {
    actFetchProductsRequest: () => dispatch(actFetchProductsRequest()),
    AddCart: (item) => dispatch(AddCart(item)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Product);
