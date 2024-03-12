import { useNavigate, useParams, useLocation,Link } from "react-router-dom";
import PRODUCTS from "../data";

const SingleProduct = () => {
  const navigate=useNavigate();
  const {pathname}=useLocation();
  const {productId}= useParams();

  const singleProduct=PRODUCTS.find((product)=>{
    return product.id===parseInt(productId)
  });
  // //use == instead of === if useparams fails to get the ID or just check data type or use parseInt

  const {id,name,price,image,details}=singleProduct;


  return (
    <main>
      <div className="pg-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1> {id} {name} </h1>
              <p>{pathname}</p>
            </div>
            <div className="col-lg-5">
              <nav>
                <ol className="breadcrumb.justify-content-end">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/products">Products</Link>
                  </li>
                  <li className="breadcrumb-item active">{name}</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="container content">
        <div className="row">
          <div className="col-lg-5"><img src={image} className="img-fluid" alt=""></img></div>
          <div className="col-lg-7">
            <h2>{name}</h2> <p className="price"><strong>{price}</strong></p> <p>{details}...</p>
            <br />
            <button className="btn btn-primary btn-sm" onClick={()=>{navigate(-1)}}>BACK</button>
            <button className="btn btn-primary btn-sm" onClick={()=>navigate('/products')}>Navigate to Products</button>
            <Link to="/products" className="btn btn-primary btn-sm">
              PRODUCTS
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleProduct;
