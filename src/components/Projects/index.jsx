/* eslint-disable react/prop-types */
import './projects.css'
import Trophy from 'svg/Trophy'
import SVGUser from 'svg/User'

function Projects(props) {
  const { onMouseEnter } = props

  return (
    <div id="projects" onMouseEnter={() => onMouseEnter()}>
      <div className="row">
        <div className="col-12">
          <h2 className="experience">Projects</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-lx-8">
          <div className="exp_des">
            <Trophy />
            Front-End develop at{' '}
            <a
              className="link_demo_project"
              target="_blank"
              href="https://vivumall.com/"
              rel="noreferrer"
            >
              Vivumall
            </a>
            , Responsible for develop Front-end
            <strong className="strong_exp_des">
              {' '}
              (ReactJS, NextJS, HTML/CSS...){' '}
            </strong>
            for web app (web browsers), build module register, login, payment vnpay... and
            responsible for SEO this website & admin page for customer.
            <strong className="strong_exp_des"> Member: 14 </strong>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-lx-4">
          <div className="exp_time">Sep 2022 - Dec 2023</div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-lx-8">
          <div className="exp_des">
            <SVGUser />
            Front-End develop at{' '}
            <a
              className="link_demo_project"
              target="_blank"
              href="https://register-shopeefood.web.app/"
              rel="noreferrer"
            >
              Register ShopeeFood
            </a>
            , Responsible for develop Front-end
            <strong className="strong_exp_des">
              {' '}
              (ReactJS, MailJS, HTML/CSS...){' '}
            </strong>
            for web app (web browsers), Design and build full source code this
            website for customer.{' '}
            <strong className="strong_exp_des"> Member: 1 </strong>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-lx-4">
          <div className="exp_time">Jun 2022 - Jun 2022</div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-lx-8">
          <div className="exp_des">
            <SVGUser />
            And design this{' '}
            <strong className="strong_exp_des">
              {' '}
              &quot;CV profile online&quot;{' '}
            </strong>
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

export default Projects
