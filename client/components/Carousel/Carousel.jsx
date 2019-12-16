import React from 'React';
import axios from 'axios';
import faker from 'faker';

import Style from './Carousel.css';

import Footer from '../Footer/Footer.jsx';
import Scroller from '../Scroller/Scroller.jsx';
import ImageBar from '../ImageBar/ImageBar.jsx';
import SellerModal from '../SellerModal/SellerModal.jsx';
import EnlargedImage from '../EnlargedImage/EnlargedImage.jsx'
import FavoriteModal from '../FavoriteModal/FavoriteModal.jsx';

class Carousel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      productId: null,
      favorite: null,
      url_avatar: null,
      url_75x75s: [],
      url_fullxfulls: [],
      seller: null,
      shop: null,
      index: 0,
      lefthovering: false,
      righthovering: false,
      hearthovering: false,
      imageZoom: false,
      favoriteModal: false,
      unfavoriteModal: false,
      sellerModal: false,
      sellerMessage: 'Write a message'
    }
    // Bind any functions passed as props to parent
    this.overHeart = this.overHeart.bind(this);
    this.exitHeart = this.exitHeart.bind(this);
    this.overArrow = this.overArrow.bind(this);
    this.exitArrow = this.exitArrow.bind(this);
    this.getImages = this.getImages.bind(this);
    this.scrollLeft = this.scrollLeft.bind(this);
    this.selectImage = this.selectImage.bind(this);
    this.scrollRight = this.scrollRight.bind(this);
    this.readyMessage = this.readyMessage.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
    this.toggleFavorite = this.toggleFavorite.bind(this);
    this.toggleImageZoom = this.toggleImageZoom.bind(this);
    this.toggleSellerModal = this.toggleSellerModal.bind(this);
    this.updateSellerMessage = this.updateSellerMessage.bind(this);
  }

  scrollRight(){
    this.setState({
      index: (this.state.index === this.state.url_fullxfulls.length - 1) ? 0 : this.state.index + 1,
    })
  }
  
  scrollLeft(){
    this.setState({
      index: (this.state.index === 0) ? this.state.url_fullxfulls.length - 1 : this.state.index - 1,
    })
  }

  overHeart(){
    this.setState({
      hearthovering: true
    })
  }

  exitHeart(){
    this.setState({
      hearthovering: false
    })
  }

  overArrow(direction){
    if(direction === 1){
      this.setState({
        lefthovering: true,
      })
    }else{
        this.setState({
          righthovering: true,
        })
    }
  }

  exitArrow(){
    this.setState({
      lefthovering: false,
      righthovering: false,
    })
  }

  selectImage(index){
    this.setState({
      index: index
    })
  }

  updateSellerMessage(e){
      this.setState({
        sellerMessage: e.target.value
      })
  }

  readyMessage(){
    this.setState({
      sellerMessage: ''
    })
  }

  toggleImageZoom(){
    if(!this.state.lefthovering && !this.state.righthovering && !this.state.hearthovering){
      this.setState({
        imageZoom: !this.state.imageZoom
      })
    }
  }

  toggleSellerModal(){
    this.setState({
      sellerModal: !this.state.sellerModal,
      sellerMessage: 'Write a message'
    })
  }

  toggleFavorite(){
    let http = 'http://ec2-18-219-198-117.us-east-2.compute.amazonaws.com/urls/update';
    // let http = 'http://localhost:3003/urls/update';
    axios.post(http, {
      params: {
        productId: this.state.productId,
        favorite: !this.state.favorite
      }
    })
    .then((data) => {
      if(this.state.favorite){
        // If CURRENTLY favorited, we are UN-favoriting now
        this.setState({
          favorite: !this.state.favorite,
          unfavoriteModal: true
        }, () => {
          setTimeout(()=> {
            this.setState({
              unfavoriteModal: false
            })
          }, 2700);
        })
      }else{
        this.setState({
          favorite: !this.state.favorite,
          favoriteModal: true
        }, () => {
            setTimeout(()=>{
              this.setState({
              favoriteModal: false
            })
          }, 2700)
        })
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }
  
  updateLocation(){
    let productId = window.location.pathname;
    productId = productId.replace(/\//, '');
    if(Number(productId) !== this.state.productId){
      this.getImages(productId);
    }
  }

  componentDidMount(){
    window.addEventListener('click', this.updateLocation);
    this.getImages(this.props.match.params.productId);
  }

  componentWillUnmount(){
    window.removeEventListener('click', this.updateLocation);
  }

  getImages(productId){
    // let http = 'http://ec2-18-219-198-117.us-east-2.compute.amazonaws.com/urls';
    let http = 'http://localhost:3003/urls/random';
    axios.get(http, {
      params: {
        productId: productId,
      }
    })
    .then(({ data }) => {
      faker.seed(data.shopId)
      this.setState({
        productId: data.productId,
        favorite: data.favorite,
        url_75x75s: data.seventyFives.slice(0, 8),
        url_fullxfulls: data.fulls.slice(0, 8),
        url_avatar: faker.fake("{{image.avatar}}"),
        seller: faker.fake("{{name.firstName}}"),
        shop: data.shop
      })
    })
    .catch((err) => {
      console.log(err)
      if(err.response.status === 422){
        console.log('No Product Found with that Id')
      }else{
        console.log('No images found for that product!')
      }
    })
  }

  render(){
    if(this.state.productId){
      return (
        <div className={Style.container}>
        <EnlargedImage 
          image_url={this.state.url_fullxfulls[this.state.index]}
          toggleImageZoom={this.toggleImageZoom}
          imageZoom={this.state.imageZoom}/>
        <FavoriteModal
          favorited={this.state.favoriteModal}
          unfavorited={this.state.unfavoriteModal}/>
        <SellerModal 
          shop={this.state.shop}
          seller={this.state.seller}
          url={this.state.url_avatar} 
          display={this.state.sellerModal}
          message={this.state.sellerMessage}
          readyMessage={this.readyMessage}
          toggleSellerModal={this.toggleSellerModal}
          updateSellerMessage={this.updateSellerMessage}
          />
          <div className={Style.carousel}>
            <Scroller 
              favorited={this.state.favorite}
              imageZoom={this.state.imageZoom}
              overHeart={this.overHeart}
              exitHeart={this.exitHeart}
              overArrow={this.overArrow}
              exitArrow={this.exitArrow}
              scrollLeft={this.scrollLeft}
              scrollRight={this.scrollRight}
              toggleFavorite={this.toggleFavorite}
              toggleImageZoom={this.toggleImageZoom}
              url={this.state.url_fullxfulls[this.state.index]}
            />
            <ImageBar urls={this.state.url_75x75s} index={this.state.index} selectImage={this.selectImage}/>
            <Footer url={this.state.url_avatar} 
                    display={this.state.sellerModal}
                    toggleSellerModal={this.toggleSellerModal}/>
          </div>
        </div>
      )
    }else{
      return (
        <div className={Style.container}>
          <div className={Style.carousel}>
            <h2>Loading...</h2>
          </div>
        </div>
      )
    }
  }
}

export default Carousel;