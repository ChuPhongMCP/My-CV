/* eslint-disable no-undef */
import './theEnd.css'

function TheEnd() {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <h2 className="experience">The End</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="exp_des">
            Finally, I would like to say{' '}
            <strong className="strong_exp_des">&quot;Thank You&quot; </strong>
            for spent time to look at my CV profile.
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="exp_des">
            and now, can you ride large displacement motorcycles with me?
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="cover_ride_motorcycles">
            <img className='gif_ride_motorcycles' src={require('assets/motorcycles/giphy.gif')} alt='...' />
          </div>
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

export default TheEnd
