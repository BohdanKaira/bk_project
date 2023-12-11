

function ContactMap() {
    
    return (
        <section data-aos="zoom-in-up" data-aos-duration="500" className="page__map map">
            <div className="map__container">
                <div className="map__frame map__frame-ibg">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8168824391714!2d109.34765347585989!3d-0.048643635527511886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e1d59beca32647d%3A0x8101c9806a864d8!2sJl.%20Tanjung%20Sari%20No.48%2C%20Bansir%20Laut%2C%20Kec.%20Pontianak%20Tenggara%2C%20Kota%20Pontianak%2C%20Kalimantan%20Barat%2078113%2C%20Indonesia!5e0!3m2!1sen!2sgr!4v1695474503468!5m2!1sen!2sgr" 
                        width="600" 
                        height="450" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </section>
    )
}
export default ContactMap;