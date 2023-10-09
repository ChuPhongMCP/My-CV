/* eslint-disable react/prop-types */
import './interests.css'
import SwiperMotorcycles from './swiperMotorcycles'

function Interests(props) {
  const { onMouseEnter } = props

  return (
    <div
      id="interests"
      onMouseEnter={() => onMouseEnter()}
    >
      <div className="row">
        <div className="col-12">
          <h2 className="experience">Interests</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="exp_des">
            You know, I have a special passion for{' '}
            <strong className="strong_exp_des">
              large displacement motorcycles
            </strong>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
          <div className="exp_des">
            <SwiperMotorcycles />
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

export default Interests
