// import { Link } from "react-router-dom";
import { TELEGRAM_TOKEN, TELEGRAM_ID, TELEGRAM_API } from "./../env"
import { useState } from "react";
import ContactImage from "./../img/decor/contact.webp"
import ky from "ky";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import InputField from "./InputField";
function ContactForm() {
	
	const [values, setValue] = useState({
		FirstName: '',
		LastName: '',
		Email: '',
		Phone: '',
		Message: ''
	})
	
	const [errors, setError] = useState({});
	const [disabled, setDisabled] = useState(false)
	function blurHandler(target){
		if(values[target.name] !== '' && errors[target.name] && errors[target.name] !== ''){
			setError({...errors, [target.name] : ''})
		}
	}
	function changeHandler(target){
		setValue({...values, [target.name] : target.value})
	}

	function isValidEmail(email) {
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(email);
	}
	function isValidPhone(phone) {
        const regex = /^\+380\d{9}$/;
        return regex.test(phone);
    }
	function validate(values){
		const errors = []
		if(values.FirstName === '')
			errors.FirstName = 'Enter your First name'
		if(values.LastName === '')
			errors.LastName = 'Enter your Last name'
		if(values.Email === '')
			errors.Email = 'Enter your Email'
		else if(!isValidEmail(values.Email))
			errors.Email = 'Invalid Email'
		if(values.Phone === '')
			errors.Phone = 'Enter your phone number'
		else if(!isValidPhone(values.Phone))
			errors.Phone = 'Invalid phone number'
		if(values.Message === '')
			errors.Message = 'Enter message text'
		return errors
	}
	async function submitHandler(event){
		event.preventDefault()
		
		const errorMessages = validate(values)
		setError(errorMessages)
		if (Object.keys(errorMessages).length) {
            setDisabled(false)
            return false
        }
		const text = `
<b>First Name:</b> ${values.FirstName}
<b>Last Name:</b> ${values.LastName}
<b>Email:</b> ${values.Email}
<b>Phone:</b> ${values.Phone}
<b>Message:</b> ${values.Message}
			`;
		const formData = new FormData();
		formData.append('chat_id', TELEGRAM_ID);	
		formData.append('text', text);	
		formData.append('parse_mode', 'HTML');	
		try {
			const resp = await ky.post(`${TELEGRAM_API}${TELEGRAM_TOKEN}/sendMessage`, {
			body: formData,
		}).json();
		console.log(resp);
		if(resp.ok){
			toast.success('Thanks! Your Message succesfully sent')
			setValue({
				FirstName: '',
				LastName: '',
				Email: '',
				Phone: '',
				Message: ''
			})
		}
		} catch (error){
			toast.error('Some error. Please try again later.')
		}
	    }
    return (
        <section className="page__contact contact">
				<div className="contact__container">
					<div data-aos="zoom-in-up" data-aos-duration="400" className="contact__left">
						<div className="contact__image">
							<img src={ContactImage} alt="" />
						</div>
						<a href="https://twitter.com" rel="noreferrer nofollow" target="_blank" className="contact__item contact__item_1">
							<img src="img/icons/twitter-circle.svg" alt="" />
						</a>
						<a href="https://www.facebook.com" rel="noreferrer nofollow" target="_blank" className="contact__item contact__item_2">
							<img src="img/icons/facebook-circle.svg" alt="" />
						</a>
						<a href="https://www.instagram.com" rel="noreferrer nofollow" target="_blank" className="contact__item contact__item_3">
							<img src="img/icons/instagram-circle.svg" alt="" />
						</a>
						<a href="https://github.com" rel="noreferrer nofollow" target="_blank" className="contact__item contact__item_4">
							<img src="img/icons/git-circle.svg" alt="" />
						</a>
					</div>
					<div className="contact__content">
						<h3 data-aos="fade-left" data-aos-duration="500" className="contact__subtitle _subtitle">
							CONTACT US
						</h3>
						<h2 data-aos="fade-left" data-aos-duration="500" data-aos-delay="200" className="contact__title _title">
							Get in Touch
						</h2>
						<p data-aos="fade-left" data-aos-duration="500" data-aos-delay="300" className="contact__text _text">
							At VRNas, we're always happy to hear from our clients and
							potential clients. Whether you have a question about our VR
							services, want to discuss a potential project, or just want to
							say hello, we're here to help.
						</p>
						<form onSubmit={submitHandler} className="contact__form form-contact">
							<InputField 
								multy={false} 
								label="First Name" 
								name="FirstName"
								value={values.FirstName} 
								change={changeHandler}
								blur={blurHandler} 
								error={errors.FirstName || ''} 
							/>
							<InputField 
								multy={false} 
								label="Last Name" 
								name="LastName"
								value={values.LastName} 
								change={changeHandler}
								blur={blurHandler} 
								error={errors.LastName || ''} 
							/>
							<InputField 
								multy={false} 
								label="Your email" 
								name="Email"
								value={values.Email} 
								change={changeHandler} 
								blur={blurHandler}
								error={errors.Email || ''} 
							/>
							<InputField 
								multy={false} 
								label="Your phone number" 
								name="Phone"
								value={values.Phone} 
								change={changeHandler} 
								blur={blurHandler}
								error={errors.Phone || ''} 
							/>
							<InputField 
								multy={true} 
								label="Message" 
								name="Message"
								value={values.Message} 
								change={changeHandler}
								blur={blurHandler} 
								error={errors.Message || ''} 
							/>
							<button type="submit" className="form-contact__button _button">
								send message
							</button>
						</form>
					</div>
				</div>
			</section>
    )
}
export default ContactForm;