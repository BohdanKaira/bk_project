import React from 'react';

function SuccessModal({ onClose }) {
    return (
        <div className="overlay">
            <div className="modal__content">
                <p>Thank you for subscribing!</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default SuccessModal;