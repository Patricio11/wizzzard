import "./index.css"

const Abount = () => {
  return (
    <div className="abunt" id="about">
    <div className="container">
            <h2>About us</h2>
            <p>Wizzzard was founded in 2017 by teaching specialists, Wazeer Small and Nabeel Davids, with the main aim of improving education within South Africa. During our teaching career we identified challenges teachers have with constant administration duties and saw an opportunity to assist teachers to create more one on one time for teaching. </p>
            <p>Wizzzard is a Management System specifically designed for teachers within the South African Educational System to assist teachers with a resource to simplify the administration process.</p>
            <p>In order to create a 360 degree solution, we conducted surveys, focus groups and meetings with various groups of teachers and stakeholders across numerous executive levels within the South African Educational System. </p>
        </div>
        <div className="img">
            <img src="/images/landing/wizzard_image.png" className= "main-img-about" alt="wizzzard-about" />
            {/* <img class = "main-img-about"src="{{asset('img/landing-page/wizzard_image.png')}}" alt=""> */}
        </div>
    </div>
  )
}

export default Abount