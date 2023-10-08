import Bookmark from 'svg/Bookmark'
import './exp.css'

function Experience() {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <h2 className="experience">experience</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-lx-8">
          <h3 className="company_name">freelancer</h3>

          <div className="exp_des_title">FULL STACK WEB DEVELOPER</div>

          <div className="exp_des">
            <Bookmark />
            Main project with Vietnamese customers:{' '}
            <strong className="strong_exp_des">
              Responsible for develop API Back-end (NodeJS, MongoDB...etc),
              Front-end (ReactJS, NextJS, Bootstrap, Ant Design...etc)
            </strong>{' '}
            for web app (web browsers)
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-lx-4">
          <div className="exp_time">Mar 2023 - persent</div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <hr className="hr_exp" />
        </div>
      </div>
    </>
  )
}

export default Experience