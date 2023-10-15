/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { useCallback, useEffect, useState } from 'react'
import './navBar.css'
import Menu from 'svg/Menu'
import listLi from 'constants/listLi/index'

function NavBar(props) {
  const { hoveredComponentId } = props

  const [currentItem, setCurrentItem] = useState('#about')
  const [isExtend, setIsExtend] = useState(false)
  const [isShowAvatar, setIsShowAvatar] = useState(false)

  const handleClickItem = useCallback((event) => {
    setCurrentItem(event.target.id)
  }, [])

  useEffect(() => {
    setCurrentItem(hoveredComponentId)
  }, [hoveredComponentId])

  const renderLi = useCallback(() => {
    const render = listLi.map((item, index) => {
      return (
        <li key={index} className="nav_li_menu">
          <a
            onClick={handleClickItem}
            id={item.id}
            href={item.id}
            className={
              currentItem === item.id ? 'nav_menu_link_active' : 'nav_menu_link'
            }
          >
            {item.name}
          </a>
        </li>
      )
    })

    return render
  }, [currentItem, handleClickItem])

  const handleClickMenu = useCallback(() => {
    setIsExtend((e) => !e)
  }, [])

  const handleClickAvatar = useCallback(() => {
    setIsShowAvatar((e) => !e)
  }, [])

  return (
    <div className={isExtend ? 'cover_nav_extend' : 'cover_nav'}>
      <nav className='nav_bar'>
        <div className="nav_bar_name">Nguyễn Ngọc Mẫn</div>

        <div onClick={handleClickAvatar} className="cover_avatar">
          <img
            className="avatar"
            src={require('assets/avatar/avatar.jpg')}
            alt="..."
          />
        </div>

        <div className="cover_menu">
          <ul className="nav_ul">{renderLi()}</ul>
        </div>

        <button onClick={handleClickMenu} className="btn_menu">
          <Menu />
        </button>

        <div
          className={
            isShowAvatar ? 'cover_show_avatar' : 'cover_show_avatar_hiden'
          }
          onClick={handleClickAvatar}
        >
          <img
            className={isShowAvatar ? 'show_avatar' : 'show_avatar_hiden'}
            src={require('assets/avatar/avatar.jpg')}
            alt="..."
          />
        </div>
      </nav>
    </div>
  )
}

export default NavBar
