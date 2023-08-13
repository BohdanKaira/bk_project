import React, { useState } from 'react';
import SuccessModal from './SuccessModal'; 

function Subscribe() {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showModal, setShowModal] = useState(false); 
    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email) {
            setErrorMessage('Please enter a valid email address.');
        } else {
            
            setShowModal(true); 
            setEmail('');
            setErrorMessage('');
        }
    };

    const closeModal = () => {
        setShowModal(false); 
    };

    return (
        <section data-aos="zoom-in-up" data-aos-duration="500" className="page__subscribe subscribe">
            <div className="subscribe__container">
                <div className="subscribe__body">
                    <h4 className="subscribe__title">
                        Subscribe to our newsletter for latest updates
                    </h4>
                    <form className="subscribe__form" onSubmit={handleSubmit}>
                        <div className="subscribe__item _icon-message">
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email address"
                                className="subscribe__input"
                                value={email}
                                onChange={handleInputChange}
                            />
                            <button type="submit" className="subscribe__button _icon-send"></button>
                        </div>
                        {errorMessage && <p className="subscribe__error">{errorMessage}</p>}
                        {showModal && <SuccessModal onClose={closeModal} />}
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Subscribe;