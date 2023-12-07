/* eslint-disable react/prop-types */
import Map from 'svg/Map'
import './about.css'
import AddressCard from 'svg/FAAddress'
import Email from 'svg/Email'
import NodeJS from 'svg/NodeJS'
import Phone from 'svg/Phone'
import ReactJS from 'svg/ReactJS'
import GitHubDefault from 'svg/Github'
import Facebook from 'svg/Facebook'
import Zalo from 'svg/Zalo'

function About(props) {
  const { onMouseEnter } = props

  return (
    <div id="about" onMouseEnter={() => onMouseEnter()}>
      <div className="row">
        <div className="col-12">
          <h1 className="my_name">
            NGUYỄN NGỌC <span className="first_name">MẪN</span>
          </h1>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="major">
            <AddressCard /> · fullstack developers
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="address">
            <div className="cover_map_icon">
              <Phone />
            </div>{' '}
            · 0901 942 151
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="address">
            <div className="cover_map_icon">
              <Map />
            </div>{' '}
            · 22 Bau Cau 6, Hoa Chau, Hoa Vang, Da Nang, 550000
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="email_address">
            <Email /> ·
            <a
              className="link_email_address"
              href="mailto:man.nguyen.cit@gmail.com"
            >
              man.nguyen.cit@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <p className="welcome">Welcome to visit my CV profile online!</p>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="cover_backend">
            <div className="cover_nodejs">
              <NodeJS />
            </div>

            <p className="backend">
              <strong className="strong">Back-End: </strong>I am experienced in
              <strong className="strong">
                {' '}
                Javascript, MongoDB, SQL Server,
              </strong>{' '}
              on{' '}
              <strong className="strong">
                Node.JS (Express-app, Nodemon, Mongoose SchemaTypes, Mongoose
                Built-in Validators, Mongoose Model, Mongoose Virtuals, Virtuals
                with Lean, CRUD With Mongoose, Query with Mongoose, Query
                Selectors, Yup, JWT, Passport, Postman, Multer, S3 Service).{' '}
              </strong>
              Experience in using
              <strong className="strong"> Onrender, Firebase, Vercel.</strong>
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="cover_frontend">
            <div className="cover_nodejs">
              <ReactJS />
            </div>

            <p className="backend">
              <strong className="strong">Front-End: </strong>I am experienced in
              <strong className="strong">
                {' '}
                Javascript on ReactJS (Event, Components, React-hook-form,
                Formik, Yup, Fetch, Axios Interceptor, React Hook,
                React-router-dom, Redux, Saga, Zustand) & NextJS (Page Router,
                App Router, Routing, Data Fetching, CSR, SSR, ISR, Components,
                Functions, Next Auth, Zustand, Eslint, Eslint-config-airbnb).
              </strong>{' '}
              Experience in using
              <strong className="strong">
                {' '}
                Bootstrap, Ant Design, Material UI, Tailwind.
              </strong>
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="cover_group_icon">
            <a
              className="link_github"
              href="https://github.com/ChuPhongMCP"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubDefault />
            </a>

            <a
              className="link_fb"
              href="https://www.facebook.com/m2nda1c2"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook />
            </a>

            <a
              className="link_fb"
              href="https://zalo.me/0901942151"
              target="_blank"
              rel="noreferrer"
            >
              <Zalo />
            </a>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <hr className="hr_about" />
        </div>
      </div>
    </div>
  )
}

export default About
