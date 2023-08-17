import React, { Component } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  results = [];
  static defaultProps = {
    country: "in",
    category: "top",
    pageSize: 10
  };
   header = new Headers({ "Access-Control-Allow-Origin": "*" });
  constructor() {
    super();
    this.state = {
      results: this.results,
      loading: false,
      page: 1,
      totalResults:0
    };
  }
  async componentDidMount() {
    this.props.setProgress(50)
    this.setState({ loading: true });
    let url = `https://newsdata.io/api/1/news?country=${this.props.country}&category=${this.props.category}&apiKey=pub_952453c6591d42a9c213b83272b28e4dc5c7`;
    let data = await fetch(url,{header:this.header});
    let parsedData = await data.json();
    this.props.setProgress(70)
    this.setState({
      results: parsedData.results,
      totalResults: parsedData.totalResults,
      loading: false,
      page: this.state.page + 1
    });
    this.props.setProgress(100)
  }
  // handleNext = async () => {
  //   this.setState({ loading: true });
  //   let url = `https://newsdata.io/api/1/news?country=${
  //     this.props.country
  //   }&category=${
  //     this.props.category
  //   }&apiKey=pub_952453c6591d42a9c213b83272b28e4dc5c7&page=${
  //     this.state.page + 1
  //   }`;
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   this.setState({
  //     results: parsedData.results,
  //     page: this.state.page + 1,
  //     loading: false,
  //   });
  // };
  // handlePrev = async () => {
  //   this.setState({ loading: true });
  //   let url = `https://newsdata.io/api/1/news?country=${
  //     this.props.country
  //   }&category=${
  //     this.props.category
  //   }&apiKey=pub_952453c6591d42a9c213b83272b28e4dc5c7&page=${
  //     this.state.page - 1
  //   }`;
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   this.setState({
  //     results: parsedData.results,
  //     page: this.state.page - 1,
  //     loading: false,
  //   });
  // };
  capitalise=(word)=>{
    word=word.slice(0,1).toUpperCase() + word.slice(1);
    return word;
}

fetchMoreData = async () => {
  const url = `https://newsdata.io/api/1/news?country=${this.props.country}&category=${this.props.category}&apiKey=pub_952453c6591d42a9c213b83272b28e4dc5c7&page=${this.state.page}`;
  let data = await fetch(url);
  let parsedData = await data.json()
  this.setState({
      results: this.state.results.concat(parsedData.results),
      totalResults: parsedData.totalResults,
      loading: false,
      page:this.state.page+1,
  })
};
  render() {
    return (
      <>
        <h1 className="text-center" style={{ marginTop: "80px",
      marginBottom:"20px",fontFamily:'Roboto Slab', textShadow: "#21a1ca 2px 2px 4px"}}>
          KwikNews - Top {this.props.category==="top"?null:this.capitalise(this.props.category)} Headlines
        </h1>
        {this.state.loading && (
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="sr-only"></span>
            </div>
          </div>
        )}
        
        <InfiniteScroll style={{overflow:"hidden"}}
          dataLength={this.state.results.length}
          next={this.fetchMoreData}
          hasMore={this.state.results.length!==this.state.totalResults}
          loader={this.state.page <
            Math.ceil(this.state.totalResults / this.props.pageSize) 
            && <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
        </div>}
        >
          <div className="container my-3">
        <div className="row">
          {
            this.state.results.map((element) => {
              return  element.image_url && <div className="col-sm-4 my-2" key={element.title}>
                  <NewsItem 
                    title={element.title ? element.title :""}
                    newsUrl={element.link}
                    description={element.description ?( element.description.length<380?element.description:element.description.slice(0,370)+"...") :""}
                    imgUrl={element.image_url}
                    author={element.creator}
                    publishedAt={element.pubDate}
                    source={element.source_id}
                  />
                </div>
            })}
        </div>
        {/* <div className="d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark btn-lg"
            onClick={this.handlePrev}
          >
            &larr; Previous Page
          </button>
          <button
            disabled={
              this.state.page >=
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark btn-lg"
            onClick={this.handleNext}
          >
            Next Page &rarr;
          </button>
        </div> */}
         </div>
        </InfiniteScroll>
     </>
    );
  }
}
