import HeroSection from "../components/HeroSection";
import { Link, useParams } from "react-router-dom";
import { WN_API, WN_API_KEY } from "../env";
import { useState, useEffect, useRef  } from "react";
import ky from "ky";
import Loader from "../components/Loader";

import newsDefaultImage from "./../img/articles/01.webp"
function Article({item}) {
    const {hash} = useParams();
    const [news, setNewsData] = useState({});
    const [loading, setLoading] = useState(true);
    const fetchCount = useRef(0);

    async function fetchOneNews() {
        if(fetchCount.current !== 0){
            return false;
        }
        fetchCount.current++;

        const storageNews = localStorage.getItem(hash);
        if(storageNews !== null){
            setNewsData(JSON.parse(storageNews));
            setLoading(false);
            return false;
        }
        try{
            const url = atob(hash);
            const resp = await ky(`${WN_API}extract-news?api-key=${WN_API_KEY}&url=${url}`).json();
            setNewsData(resp);
            localStorage.setItem(hash, JSON.stringify(resp));
            setLoading(false);
        } catch (err) {
            console.error(err);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchOneNews();
        }, []);
    if(loading){
        return <Loader />
    }
    return (
        <>
            <HeroSection>
                <nav className="page__breadcrumbs breadcrumbs-page">
                    <div className="breadcrumbs-page__container">
                        <ul className="breadcrumbs-page__list">
                            <li className="breadcrumbs-page__item">
                                <Link to="/">Home </Link>
                            </li>
                            <li className="breadcrumbs-page__item">
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li className="breadcrumbs-page__item">
                                <Link to="#">{news.title}</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </HeroSection>
			<section className="page__blog blog">
				<div className="blog__container">
					<div className="blog__content">
						<div data-aos="fade-right" data-aos-duration="500" className="blog__category">
							VRNas
						</div>
						<h1 data-aos="fade-right" data-aos-duration="500" data-aos-delay="200" className="blog__title">
							{news.title}
						</h1>
						<div data-aos="fade-right" data-aos-duration="500" data-aos-delay="400" className="blog__info _subtitle">
							NASYIYA ULFA | 25 NOV 2022
						</div>
						<div data-aos="zoom-in-up" data-aos-duration="500" data-aos-delay="500" className="blog__image blog__image-ibg">
                            <img src={news.image ? news.image : newsDefaultImage} alt={news.title} style={{width:'100%', height: '100%', objectFit: 'cover' }} />
						</div>
						<p data-aos="fade-right" data-aos-duration="500" className="blog__text _text">
							{news.text}
						</p>
						<div className="blog__tags tags-blog">
							<h4 data-aos="fade-right" data-aos-duration="500" className="tags-blog__title">
								Post Tags :
							</h4>
							<p data-aos="fade-right" data-aos-duration="500" data-aos-delay="200" className="tags-blog__text _subtitle">
								#VRDesign #ArchitectureInnovation #VirtualRealityArchitecture
								#BringingDesignsToLife #DesignVisualization
								#ArchitecturalVisualization #RevolutionizingArchitecture
								#BuildingInVR #DesignThinking #VRInArchitecture
							</p>
						</div>
						<div className="blog__share share-blog">
							<h4 data-aos="fade-right" data-aos-duration="500" className="share-blog__title">
								Share :
							</h4>
							<ul data-aos="fade-right" data-aos-duration="500" data-aos-delay="400" className="share-blog__links">
								<li className="share-blog__link _icon-twitter"></li>
								<li className="share-blog__link _icon-facebook"></li>
								<li className="share-blog__link _icon-instagram"></li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</>
    )
}
export default Article;