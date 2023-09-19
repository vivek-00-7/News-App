import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
  articles = [
    {
      "source": { "id": "al-jazeera-english", "name": "Al Jazeera English" },
      "author": "Hafsa Adil",
      "title": "LIVE: India vs Sri Lanka – 2023 Asia Cup cricket final",
      "description": "Follow live updates as defending champions Sri Lanka play seven-time winners India in the Asia Cup final in Colombo.",
      "url": "http://www.aljazeera.com/sports/liveblog/2023/9/17/live-india-vs-sri-lanka-2023-asia-cup-cricket-final",
      "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/09/AP23255453736935-1694868799.jpg?resize=1920%2C1440",
      "publishedAt": "2023-09-17T07:33:11Z",
      "content": "blinking-dot\r\nLive updatesLive updates, \r\nFollow live updates as defending champions Sri Lanka play seven-time winners India in the Asia Cup final in Colombo."
    },
    {
      "source": { "id": "al-jazeera-english", "name": "Al Jazeera English" },
      "author": "Hafsa Adil",
      "title": "‘Every day is a struggle’: Sri Lanka banks on Asia Cup cricket tournament",
      "description": "Cricket is bringing temporary relief to a struggling Sri Lankan economy reeling from post-COVID shortages and inflation.",
      "url": "http://www.aljazeera.com/sports/2023/9/16/sri-lanka-banks-on-asia-cup-cricket-tournament",
      "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/09/33V82NE-highres-1694809059.jpg?resize=1920%2C1440",
      "publishedAt": "2023-09-16T09:42:46Z",
      "content": "Colombo, Sri Lanka Until a few months ago, SMS Senaratne struggled to put three meals on the table for his family.\r\nWhen the economic crisis struck the country two years ago it took away our savings,… [+4157 chars]"
    },
    {
      "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ]
  constructor(){
    super();
    this.state = {
        articles : this.articles,
        pageno: 1,
        loading : false
    }
  }
  async componentDidMount(){
    const url =  `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&&apiKey=d7c8e1f4a6a2478eb60cc34872c22b80&page=${this.state.pageno}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    const data = await fetch(url)
    const parsedData = await data.json()
    this.setState({
        articles : parsedData.articles,
        totalResults : parsedData.totalResults,
        loading: false
    });
  }
  handleNextClick = async () =>{
    const url =  `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&&category=${this.props.category}&&apiKey=d7c8e1f4a6a2478eb60cc34872c22b80&page=${this.state.pageno+1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    const data = await fetch(url)
    const parsedData = await data.json()
    this.setState({
        articles : parsedData.articles,
        pageno : this.state.pageno+1,
        loading : false
    });
  }
  handlePrevClick = async () =>{
    const url =  `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&&apiKey=d7c8e1f4a6a2478eb60cc34872c22b80&page=${this.state.pageno-1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    const data = await fetch(url)
    const parsedData = await data.json()
    this.setState({
        articles : parsedData.articles,
        pageno : this.state.pageno-1,
        loading: false
    });
  }
  render() {
    return (
      <>
      <div className="container">
        <div className="text-center">
        <h2>News App - Top Headlines</h2>
        {this.state.loading && <Spinner/>}
        </div>
        <div className="row">
            {!this.state.loading && this.state.articles.map((element)=>{
                return <div className="col-md-4 my-3"><NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage?element.urlToImage:"https://www.aljazeera.com/wp-content/uploads/2023/09/AP23255453736935-1694868799.jpg?resize=1920%2C1440"} newsUrl={element.url} /></div>
            })}   
        </div>
      </div>
      <div className="container d-flex justify-content-between">
      <button disabled={this.state.pageno<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
      <button disabled={this.state.pageno+1>Math.ceil(this.state.totalResults/20)}  type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
      </div>
      </>
    )
  }
}

export default News