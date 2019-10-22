import React from 'React';
import axios from 'axios';
import faker from 'faker';

import Style from './App.css';

import Scroller from './components/Scroller/Scroller.jsx';
import ImageBar from './components/ImageBar/ImageBar.jsx';
import Footer from './components/Footer/Footer.jsx';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      productId: null,
      favorite: null,
      url_avatar: null,
      url_75x75s: [],
      url_170x135s: [],
      url_570xNs: [],
      url_fullxfulls: [],
      index: 0,
      lefthovering: false,
      righthovering: false,
    }
    this.scrollRight = this.scrollRight.bind(this);
    this.scrollLeft = this.scrollLeft.bind(this);
    this.toggleFavorite = this.toggleFavorite.bind(this);
    this.overArrow = this.overArrow.bind(this);
    this.exitArrow = this.exitArrow.bind(this);
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

  toggleFavorite(){
    // let http = 'http://ec2-3-15-175-239.us-east-2.compute.amazonaws.com/urls/update';
    let http = 'http://localhost:3003/urls/update';
    axios.post(http, {
      params: {
        productId: this.state.productId,
        favorite: !this.state.favorite
      }
    })
    .then((data) => {
      this.setState({
        favorite: !this.state.favorite
      })
      console.log(data.data.favorite);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  componentDidMount(){
    // let http = 'http://ec2-3-15-175-239.us-east-2.compute.amazonaws.com/urls/random';
    let http = 'http://localhost:3003/urls/random';
    axios.get(http, {
      params: {
        // Will use current product ID when passed from other service
        // For now a random product will be displayed
        productId: 729513146
      }
    })
    .then(({ data }) => {
      this.setState({
        productId: data.productId,
        favorite: data.favorite,
        url_75x75s: data.seventyFives,
        url_170x135s: data.oneSeventies,
        url_570xNs: data.fiveSeventies,
        url_fullxfulls: data.fulls,
        url_avatar: faker.image.avatar()
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
    return (
      <div>
        <div className={Style.carousel}>
          <Scroller 
            url={this.state.url_fullxfulls[this.state.index]}
            scrollLeft={this.scrollLeft}
            scrollRight={this.scrollRight}
            toggleFavorite={this.toggleFavorite}
            overArrow={this.overArrow}
            exitArrow={this.exitArrow}
            favorited={this.state.favorite}
            lefthovering={this.state.lefthovering}
            righthovering={this.state.righthovering}
          />
          <ImageBar urls={this.state.url_75x75s} index={this.state.index}/>
          <Footer url={this.state.url_avatar}/>
        </div>
      </div>
    )
  }
}

export default App;