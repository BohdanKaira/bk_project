import { WN_API, WN_API_KEY, NEWS_CACHE_TIME } from "../env";
import { useEffect, useState, useRef } from "react";
import BlogItem from "./BlogItem";
import ky from "ky";

function BlogList() {
    const [news, setNews] = useState([]);
    const fetchCount = useRef(0);
    
    async function fetchNews() {
        if(fetchCount.current !== 0){
            return false;
        }
        fetchCount.current++;
        const storageNews = localStorage.getItem('newsList');
        const lastUpdate = +localStorage.getItem('lastNewsUpdate');
        if(storageNews !== null) {
            const now = new Date().getTime();
            if((now - lastUpdate) < NEWS_CACHE_TIME){
                setNews(JSON.parse(storageNews));
                return false;
            }
        }
        try {
            const resp = await ky(`${WN_API}search-news?api-key=${WN_API_KEY}&text=virtual reality news&language=en&number=12`).json();
            setNews(resp.news);
            localStorage.setItem('newsList', JSON.stringify(resp.news));
            localStorage.setItem('lastNewsUpdate', new Date().getTime());
        } catch(err){
            console.error(err);
                 
    }
}
        useEffect(() => {
            fetchNews();
        }, []);
    

    return (
        <section className="page__blogs blogs">
				<div className="blogs__container">
                    <div className="blogs__body">
                        {news.map(item => <BlogItem item={item} key={item.id} />)}
                    </div>
                    <nav className="blogs__pagging pagging-blogs">
                        <ul className="pagging-blogs__list">
                            <li className="pagging-blogs__item pagging-blogs__item_active _button-border">
                                <a href="#">1</a>
                            </li>
                        </ul>
                    </nav>
                </div>
			</section>
    )
}
export default BlogList;