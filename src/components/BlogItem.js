import { Link } from "react-router-dom";
import newsDefaultImage from "./../img/articles/01.webp"
function BlogItem({item}) {
    const hash = btoa(item.url);
    return(
        <div data-aos="fade-up" data-aos-duration="500" className="blogs__item item-blogs _border-gradient">
            <div className="item-blogs__image item-blogs__image-ibg">
            <img src={item.image ? item.image : newsDefaultImage} alt={item.title} style={{width:'100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="item-blogs__content">
                <p className="item-blogs__category">{item.title}</p>
                <h6 className="item-blogs__name">
                    {item.title}
                </h6>
                <Link to={`/blog/${hash}`} className="item-blogs__button _subtitle">read more</Link>
            </div>
		</div>
    )
}
export default BlogItem;