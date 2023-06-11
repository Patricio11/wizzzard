import "./index.css"


function Registration() {
  return (
    <div className='register-container'>
      <div className="auth-header">
        <h1 className="">SIGN UP</h1>
      </div> 
      <div className="forms-container">
        <form>
          <div className="form-group">
            <fieldset>
              <legend>Name</legend>
              <input type="text" name="emis_number" id="schl-emis" />
            </fieldset>
            <fieldset>
              <legend>Surname</legend>
              <input type="text" name="emis_number" id="schl-emis" />
            </fieldset>
          </div>
          <div className="form-group">
            <fieldset>
              <legend>School Name</legend>
              <input type="text" name="emis_number" id="schl-emis" />
            </fieldset>
            <fieldset >
              <legend><label htmlFor="school-type">School Type</label></legend>
              <select className="form-control" name="school_type" id="school-type">
                <option value="lsen">LSEN</option>
                <option value="primary">Primary School</option>
                <option value="secondary">Secondary School</option>
                <option value="private">Private School</option>
              </select>
            </fieldset>
          </div>
          
          <div className="form-group">
            <fieldset >
              <legend><label htmlFor="email">Email Address</label></legend>
              <input type="email" name="email" id="" />
            </fieldset>

            <fieldset>
              <legend>Emis number</legend>
              <input type="text" name="emis_number" id="schl-emis" />
            </fieldset>
          </div>

          <fieldset className="form-group">
            <legend><label htmlFor="address">Address</label></legend>
            <textarea className="form-control" name="address" rows="3" id="address"></textarea>
          </fieldset>
        
          <button type="submit" className="auth-btn">REGISTER</button>
        </form>
      </div>
    </div>
  )
}

export default Registration