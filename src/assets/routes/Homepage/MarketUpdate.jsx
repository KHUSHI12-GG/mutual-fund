import React, { useEffect, useState } from 'react';

const MarketUpdate = () => {
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    try {
      const response = await fetch(
        `https://newsdata.io/api/1/news?apikey=pub_ce6bcc23228c4b4cb6d10c7547939582&country=in&category=business&language=en`
      );
      const data = await response.json();
      console.log(data); // Debug
      setNews(data.results || []);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">📢 Market Updates</h2>
      <div className="space-y-4">
        {news.length === 0 ? (
          <p className="text-gray-500">No news available.</p>
        ) : (
          news.slice(0, 5).map((item, index) => (
            <div key={index} className="bg-white shadow p-4 rounded-md">
              <h3 className="text-md font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.pubDate}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm underline"
              >
                Read More
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MarketUpdate;
