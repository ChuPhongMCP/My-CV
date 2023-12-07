import { useCallback, useEffect, useState } from 'react'
import { notification } from 'antd'

import './App.css'
import NavBar from 'components/navBar'
import listComponent from 'constants/listComponent/index'

function App() {
  const [api, contextHolder] = notification.useNotification()

  useEffect(() => {
    const openNotification = () => {
      api.open({
        message: 'Hello! Have a nice day, Thank you for visiting my CV profile online!',
        description:
          '',
        duration: 5,
        className: 'notification'
      })
    }

    openNotification()
  }, [api])

  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0)
  }, [])

  const [hoveredComponentId, setHoveredComponentId] = useState('#about')

  const renderComponents = useCallback(() => {
    const render = listComponent.map((item, index) => {
      return (
        <div key={index}>
          <item.name
            onMouseEnter={() => setHoveredComponentId(item.id)}
          />
        </div>
      )
    })

    return render
  }, [])

  return (
    <>
      {contextHolder}

      <div className="container-fluid">
        <div className='content'>
          <NavBar hoveredComponentId={hoveredComponentId} />

          {renderComponents()}
        </div>
      </div>
    </>
  )
}

export default App
