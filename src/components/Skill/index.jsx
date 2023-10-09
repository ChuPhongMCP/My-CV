/* eslint-disable react/prop-types */
import { useCallback, useState } from 'react'

import './skill.css'
import listSkill from 'constants/listSkill/index'

function Skill(props) {
  const { onMouseEnter } = props

  const [curentItem, setCurentItem] = useState('')

  const handleMouseEnter = useCallback((event, name) => {
    event.stopPropagation()

    setCurentItem(name)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setCurentItem('')
  }, [])

  return (
    <div
      id="skill"
      onMouseEnter={() => onMouseEnter()}
    >
      <div className="row">
        <div className="col-12">
          <h2 className="experience">Skill</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="exp_des_title">PROGRAMMING LANGUAGES & TOOLS</div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="group_skill">
            {listSkill.map((item, index) => (
              <div className="cover_icon_group" key={index}>
                <div
                  onMouseEnter={(event) => handleMouseEnter(event, item.name)}
                  onMouseLeave={handleMouseLeave}
                  className="skill_icon"
                >
                  <item.Component />
                </div>

                <div
                  className={
                    curentItem === item.name ? 'skill_tip' : 'skill_tip_hide'
                  }
                >
                  {item.name}
                </div>
              </div>
            ))}
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

export default Skill
