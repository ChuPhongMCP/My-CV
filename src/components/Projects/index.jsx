/* eslint-disable react/prop-types */
import './projects.css'
import Trophy from 'svg/Trophy'
import SVGUser from 'svg/User'

function Projects(props) {
  const { onMouseEnter } = props

  return (
    <div
      id="projects"
      onMouseEnter={() => onMouseEnter()}
    >
      <div className="row">
        <div className="col-12">
          <h2 className="experience">Projects</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
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
              (ReactJS, Javascript...){' '}
            </strong>
            for web app (web browsers), you can view{' '}
            <a
              className="link_demo_project"
              target="_blank"
              href="https://github.com/ChuPhongMCP/registerShopeeFood"
              rel="noreferrer"
            >
              source code
            </a>
          </div>

          <div className="exp_des">
            <Trophy />
            Full stack develop at{' '}
            <a
              className="link_demo_project"
              target="_blank"
              href="https://e-shop-741ea.web.app/"
              rel="noreferrer"
            >
              E-Shop
            </a>
            , Responsible for develop Front-end
            <strong className="strong_exp_des">
              {' '}
              (ReactJS, NextJS, Javascript...){' '}
            </strong>
            and for develop Back-end
            <strong className="strong_exp_des"> (NodeJS, MongoDB...) </strong>
            for web app (web browsers), source code{' '}
            <a
              className="link_demo_project"
              target="_blank"
              href="https://github.com/ThiOanh/E-Shop"
              rel="noreferrer"
            >
              here
            </a>
          </div>

          <div className="exp_des">
            <SVGUser />
            Full stack develop at{' '}
            <a
              className="link_demo_project"
              target="_blank"
              href="https://ereacttobenodejs.web.app/"
              rel="noreferrer"
            >
              Basic CRUD E-Commerce
            </a>
            , Responsible for develop Front-end
            <strong className="strong_exp_des">
              {' '}
              (ReactJS, Javascript...){' '}
            </strong>
            and for develop Back-end
            <strong className="strong_exp_des"> (NodeJS, MongoDB...) </strong>
            for web app (web browsers), this is{' '}
            <a
              className="link_demo_project"
              target="_blank"
              href="https://github.com/ChuPhongMCP/E-CRUD-ReactJS-NodeJS"
              rel="noreferrer"
            >
              source code
            </a>
          </div>

          <div className="exp_des">
            <SVGUser />
            And design this{' '}
            <strong className="strong_exp_des">
              {' '}
              &quot;CV profile online&quot;{' '}
            </strong>
            , you can view{' '}
            <a
              className="link_demo_project"
              target="_blank"
              href="https://github.com/ChuPhongMCP/My-CV"
              rel="noreferrer"
            >
              source code
            </a>
          </div>
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
