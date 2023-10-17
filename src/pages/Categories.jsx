import { useState, useEffect } from "react";
const Categories = ({ category }) => {
  const url = ` https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}`;
  const [news, setNews] = useState([]);

  useEffect(() => {
    function fetchNews() {
      fetch(url)
        .then((data) => data.json())
        .then((res) => {
          setNews(res.articles);
        });
    }
    fetchNews();
  }, [url]);
  return (
    <div className="container my-5 main-Div">
      <h1 className="heading">Todays {category} news</h1>
      <div className="row text-center">
        {news.map(
          (element, index) =>
            element.urlToImage && (
              <div key={index} className="col my-3">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={element.urlToImage}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{element.title}</h5>
                    <p className="card-text">{element.description}</p>
                    <a href={element.url} className="btn btn-primary">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Categories;
