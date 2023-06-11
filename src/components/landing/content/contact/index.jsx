import "./index.css"

const Contact = () => {
  return (
    <div className="contact" id="contact">
        <div className="container contact-container">
          <h2>Let us contact you</h2>
          <form className="contact" >
            <div className="formfield-group">
              <fieldset>
                <legend>First name:</legend>
                <input type="text" name="name" className="form-control" />
              </fieldset>

              <fieldset>
                <legend>Last name:</legend>
                <input type="text" name="surname" className="form-control" />
              </fieldset>
            </div>


            <div className="formfield-group">

              <fieldset>
                <legend>Contact number:</legend>
                <input type="text" name="phone_number" className="form-control" />
              </fieldset>

              <fieldset>
                <legend>Email address:</legend>
                <input type="email" name="email" className="form-control" />
              </fieldset>
            </div>

            <div className="formfield-group check-group">

              <fieldset className="radio_check">
                <legend>How will we contact you:</legend>
                <div className="checks">
                  <label htmlFor="email_contact">Email</label>
                  <input type="radio" name="contact_type" id="email_contact" className="form-control" />
                </div>
                <div className="checks">

                  <label htmlFor="phone_call">Call</label>
                  <input type="radio" name="contact_type" id="phone_call" className="form-control" />
                </div>
              </fieldset>

              <fieldset>
                <legend>Area:</legend>
                <input type="text" name="area" id="area" className="form-control" />
              </fieldset>
            </div>
            
            <fieldset>
              <legend>Your message:</legend>
              <textarea name="message" className="form-control" ></textarea>
            </fieldset>

          
            <div className="col-sm-4 form-submit-btn">
              <button className="btn send-btn">SEND</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Contact