import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { wishlistActions } from "../store/wishlist-slice";
// const like = false;

const ProductItem = ({ product, like }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const detailPageHandler = () => {
    navigate(`${product.id}`);
  };

  const wishlistHandler = (event) => {
    event.stopPropagation();
    dispatch(wishlistActions.toggleItemToWishlist(product.id));
  };

  return (
    <div className="col-md-3 mb-3" role="button" onClick={detailPageHandler}>
      <div className="main-card card h-100 p-3">
        <i
          className={`wishlistIcon fa fa-heart${like ? "" : "-o"}`}
          role="button"
          onClick={wishlistHandler}
        />
        <img
          src={product.image}
          className="card-img-top"
          alt={product.title}
          height="250px"
        />
        <div className="card-body">
          <h5 className="card-title mb-1">
            {product.title.substring(0, 18)}...
          </h5>
          <div className="row">
            <div className="col-md-3">
              <span className="badge text-bg-success text-start">
                {product.rating && product.rating.rate}{" "}
                <i className="fa fa-star"></i>
              </span>
            </div>
            <div className="col-md-4">
              <p className="fw-bolder mb-2">
                {product.rating && `(${product.rating.count})`}{" "}
              </p>
            </div>
          </div>
          <p className="card-text lead fw-bold">${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
