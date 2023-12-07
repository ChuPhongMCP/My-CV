/* eslint-disable react/prop-types */
import Bookmark from 'svg/Bookmark'
import './edu.css'

function Education(props) {
  const { onMouseEnter } = props

  return (
    <div
      id="education"
      onMouseEnter={() => onMouseEnter()}
    >
      <div className="row">
        <div className="col-12">
          <h2 className="experience">education</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-lx-8">
          <h3 className="company_name">
            College of Information Technology - Danang University
          </h3>

          <div className="exp_des_title">
            I graduated from college with a major in information technology
          </div>

          <div className="exp_des">
            <Bookmark />
            When I was a student, I studied a lot about career development in
            information technology and then I decided to choose web programming
            because I particularly like customize and draw on my websites.
          </div>

          <div className="exp_des">
            <Bookmark />I received a scholarship for good students in the first,
            third and final semesters, and graduated with{' '}
            <strong className="strong_exp_des">GPA of ~3.5.</strong>
          </div>

          <div className="exp_des">
            <Bookmark />
            After 3 years of college, I succeeded with my graduation thesis on
            web programming, building the web-based game{' '}
            <strong className="strong_exp_des">Ai La Trieu Phu.</strong>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-lx-4">
          <div className="exp_time"> </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-lx-8">
          <h3 className="cover_school_name">
            <a
              className="school_name"
              href="https://www.aptech-danang.edu.vn/"
              target="_blank"
              rel="noreferrer"
            >
              Softech Aptech Da Nang international programmer training center
            </a>
          </h3>

          <div className="exp_des_title">
            I achieved the M.E.R.N stack international programmer certificate
          </div>

          <div className="exp_des">
            <Bookmark />
            Here I continue to add more knowledge about{' '}
            <strong className="strong_exp_des">
              ReactJS, NodeJs, MongoDB, NextJS, SQL Server...etc
            </strong>
          </div>

          <div className="exp_des">
            <Bookmark />I graduated with a teamwork project to build an
            <strong className="strong_exp_des"> e-commerce website</strong>{' '}
            using the technologies learned here
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-lx-4">
          <div className="study_time"> </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <hr className="hr_exp" />
        </div>
      </div>
    </div>
  )
}

export default Education
