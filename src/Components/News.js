import React, {useEffect, useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props){

    const[articles, setArticles] = useState([]);
    const[loader, setLoader] = useState(false);
    const[page, setPage] = useState(1);
    const[totalResults, setTotalResults] = useState(0);

    useEffect(() => {
        async function fetchData() {
            let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=12`;
            setLoader(true);
            let data = await fetch(url);
            let parsedData = await data.json();
            setArticles(parsedData.articles);
            setTotalResults(parsedData.totalResults);
            setLoader(false);
        }
        fetchData();
        // eslint-disable-next-line
    }, []);

    const fetchMoreData = async() => {
        // this.setState({page: this.state.page + 1});

        let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&apiKey=d9ed9ca8b5c44398a7d40832dbedf716&page=${page + 1}&pageSize=12`;
        setLoader(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setLoader(false);
        setPage(page+1);
    }
    
    return (
      <>
        {loader && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
            <div className="container mt-3">
                <div className="row">
                    {articles.map((element)=>{
                        return <div key={element.urlToImage} className="col-md-4">
                            <NewsItem
                            title={element.title}
                            description={element.description}
                            imageUrl={element.urlToImage}
                            url={element.url}
                            />
                        </div>
                    })}
                </div>
            </div>
        </InfiniteScroll>
      </>
    );
}