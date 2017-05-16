import React,{Component} from 'react';
import {Link} from 'react-router'
class Desc extends Component{
constructor(props){
    super(props)

}

render(){
    let imgsrc=this.props.desc[0].LargeImage[0].URL[0];
     let author=this.props.desc[0].ItemAttributes[0].Author[0];
    let title=this.props.desc[0].ItemAttributes[0].Title[0];
    let pages=this.props.desc[0].ItemAttributes[0].NumberOfPages[0];
   let label= this.props.desc[0].ItemAttributes[0].Label[0];
    let language= this.props.desc[0].ItemAttributes[0].Languages[0].Language[0].Name[0];
    let publisher= this.props.desc[0].ItemAttributes[0].Publisher[0];
    let PublicationDate=this.props.desc[0].ItemAttributes[0].PublicationDate[0];
    let CustomerReviews=this.props.desc[0].CustomerReviews[0].IFrameURL[0];
    let EditorialReviews=this.props.desc[0].EditorialReviews[0].EditorialReview[0].Content[0];
    let review=EditorialReviews.split('<p>').join('').split('</p>').join('').split('<b>').join('').split('</b>').join('').split('<em>').join('').split('</em>').join('')
    // let hasReview=this.props.desc[0].CustomerReviews[0].HasReviews[0];

  return(<div className=" top-40 shop-product" >
      <div  id="product-section container">

          <div className="row">
              <div className="col-md-6 md-margin-bottom-50s">
                  <img src={imgsrc} alt="" className="image-responsive center-block img-border"/>
              </div>
              <div className="col-md-6 ">
                  <div className="shop-product-heading center">
                      <h2>{title}</h2>
                      <h6>By <span className="ft-clr">{author} </span>(Author)</h6>
                  </div>
                      <div className="container"><h4>Product Details</h4>
                          <ul className="list">
                              <li><b>Series: </b>{pages}</li>
                              <li><b>Paperback:  </b>{label}</li>
                              <li><b>publisher:  </b>{publisher}  {PublicationDate}</li>
                              <li><b>language:  </b>{language}</li>
                              <li><b>Pages:  </b>{pages}</li>
                          </ul>

                      </div>
                  <p>{review}</p>
                  {/*<iframe src={CustomerReviews}></iframe>*/}
                      </div>
                  </div>
                  </div>
          </div>

  )
}
}
export default Desc;