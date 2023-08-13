import { WN_API, WN_API_KEY, NEWS_CACHE_TIME } from "../env";
import { useEffect, useState, useRef } from "react";
import BlogItem from "./BlogItem";
import ky from "ky";

function BlogList() {
    // const [blogList, setBlogList] = useState([]);
    // const fetchCount = useRef(0);
    // async function fetchArticles() {
    //     if(fetchCount.current !== 0)
    //     return false;

    //     fetchCount.current++;
    //     const storageArticles = localStorage.getItem('blogList');
    //     const lastUpdate = +localStorage.getItem('lastNewsUpdate');
    //     if(storageArticles !== null) {
    //         const now = new Date().getTime();
    //         if((now - lastUpdate) < NEWS_CACHE_TIME){
    //             setBlogList(JSON.parse(storageArticles));
    //             console.log(storageArticles);
    //             return false;
    //         }
    //     }
    //     try {
    //         const resp = await ky(`${WN_API}search-news?api-key=${WN_API_KEY}&text=Virtual reality&language=en&number=9`).json();
    //         console.log(resp);
    //         setBlogList(resp.articles);
    //         localStorage.setItem('blogList', JSON.stringify(resp.articles));
    //         localStorage.setItem('lastNewsUpdate', new Date().getTime());
    //     } catch(err){
    //         console.error(err);
    //     }
      
        
    // }
    // useEffect(() => {
    //     fetchArticles();
    // }, []);
    const [newsLine, setNewsLine] = useState([]);
    const fetchCount = useRef(0);
    async function fetchNews() {
        if(fetchCount.current !== 0)
        return false;

        fetchCount.current++;
        const storageNews = localStorage.getItem('newsLine');
        const lastUpdate = +localStorage.getItem('lastNewsUpdate');
        if(storageNews !== null) {
            const now = new Date().getTime();
            if((now - lastUpdate) < NEWS_CACHE_TIME){
                setNewsLine(JSON.parse(storageNews));
                return false;
            }
        }
        try {
            const resp = await ky(`${WN_API}search-news?api-key=${WN_API_KEY}&text=Virtual reality&language=en&number=9`).json();
            setNewsLine(resp.news);
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
                        {newsLine.map(item => <BlogItem item={item} key={item.id} />)}
                        {/* {blogList.map(item =><BlogItem item={item} key={item.id} />)}   */}
                            
                        
                        <nav className="blogs__pagging pagging-blogs">
                            <ul className="pagging-blogs__list">
                                <li className="pagging-blogs__item pagging-blogs__item_active _button-border">
                                    <a href="#">1</a>
                                </li>
                                <li className="pagging-blogs__item _button-border">
                                    <a href="#">2</a>
                                </li>
                                <li className="pagging-blogs__item _button-border">
                                    <a href="#">3</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
			</section>
    )
}
export default BlogList;