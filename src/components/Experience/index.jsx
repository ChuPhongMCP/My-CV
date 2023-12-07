/* eslint-disable react/prop-types */
import Bookmark from 'svg/Bookmark'
import './exp.css'

function Experience(props) {
  const { onMouseEnter } = props

  return (
    <div id="experience" onMouseEnter={() => onMouseEnter()}>
      <div className="row">
        <div className="col-12">
          <h2 className="experience">experience</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-lx-8">
          <h3 className="company_name">intern</h3>

          <div className="exp_des_title">
            Wiicamp Company |{' '}
            <a
              className="link_email_address"
              href="https://wiicamp.com/"
              rel="noreferrer"
              target="_blank"
            >
              https://wiicamp.com/
            </a>{' '}
            | FULL STACK WEB DEVELOPER
          </div>

          <div className="exp_des">
            <Bookmark />
            Main project with customers:{' '}
            <strong className="strong_exp_des">
              Responsible for develop API Back-end (NodeJS, MongoDB, ...etc),
              Front-end (ReactJS, NextJS, Bootstrap, Ant Design, Tailwind,
              ...etc)
            </strong>{' '}
            for web app (web browsers)
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-lx-4">
          <div className="exp_time">Jun 2023 - present</div>
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

export default Experience
