import "./index.css"

const Offer = () => {
  return (
    <div className="offer" id="offer">
      <div className="offer-container">
        <h2>What we offer</h2>
        <div className="offer-wrapper">
          <div className="offer-col midle-offer-col">
            <img src="images/landing/forms.png" alt="wizzzard forms" />
            {/* <img src="{{asset('img/landing-page/forms.png')}}" alt="forms"> */}
            <h4>Minutes</h4>
            <p>
                Record discussions and meetings instantaneously.
            </p>
            {/* <img src="{{asset('img/landing-page/resources.png')}}" alt="resources"> */}
            <img src="images/landing/resources.png" alt="Wizzzard Resources" />
            <h4>Resources</h4>
            <p>
                Teachers can store and share resources 
                between one another such as FATs, 
                worksheets and intervention.  
            </p>
              
          </div>
          <div className="offer-col" >
              {/* <img src="{{asset('img/landing-page/forms.png')}}" alt="forms"> */}
              <img src="images/landing/forms.png" alt="wizzzard forms" />
              <h4>Forms</h4>
              <p>
                  A range of teacher administration relating <br/>
                  to learners within a className.
              </p>
              {/* <img src="{{asset('img/landing-page/learners.png')}}" alt="learners"> */}
              <img src="images/landing/learners.png" alt="Wizzzard learners" />
              <h4>Learners</h4>
              <p>
                  Learner information is captured and 
                  secured. Information is transferred 
                  when a learner changes schools 
                  or progresses to the next grade.
              </p>
              {/* <img src="{{asset('img/landing-page/caps.png')}}" alt="caps"> */}
              <img src="images/landing/caps.png" alt="Wizzzard caps" />
              <h4>Caps</h4>
              <p>
                  All resources needed by teachers 
                  to make their learning meaningful 
                  and fun. Never be without 
                  your CAPS document again!
              </p>
          </div>
          <div className="offer-col midle-offer-col">
              {/* <img src="{{asset('img/landing-page/admin.png')}}" alt="school-admin" style="max-width: 110px;"> */}
              <img src="images/landing/admin.png" alt="Wizzzard admin" style={{maxWidth:'110px'}}/>
              <h4>School Admin</h4>
              <p>
                  Global admin of the school has the rights 
                  to add and remove teachers, view learner 
                  information of all learners and send 
                  notifications to teachers.
              </p>
              {/* <img src="{{asset('img/landing-page/notes-to-parents.png')}}" alt="notes-to-parents"> */}
              <img src="images/landing/notes_to_parents.png" alt="Wizzzard notes to parents" />
              <h4>Notes to Parents</h4>
              <p>
                  Parent can receive email notifications 
                  relating to their child.
              </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offer