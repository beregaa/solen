import { useState } from "react"
import { navigate } from "vike/client/router"
import Drawer from 'antd/es/drawer'
import Menu from 'antd/es/menu'
import MenuOutlined from '@ant-design/icons/es/icons/MenuOutlined'

import styles from "./BurgerMenu.module.css"
import CallButton from "../CallButton/CallButton"

const BurgerMenu = () => {
  const [open, setOpen] = useState(false)

  const items = [
    // {
    //   key: "services",
    //   label: "სერვისები",
    //   onClick: () => {
    //     navigate("/services")
    //     setOpen(false)
    //   },
    // },
    {
      key: "inventory",
      label: "ინვენტარი",
      onClick: () => {
        navigate('/inventory/italy')
        setOpen(false)
      },
    },
    {
      key: "gallery",
      label: "გალერეა",
      onClick: () => {
        navigate("/gallery")
        setOpen(false)
      },
    },
    {
      key: "call",
      label: (
        <CallButton
          number="568883279"
          className={styles.consultationButton}
        >
          <img className={styles.call} src="/call.png" alt="" />
          კონსულტაცია
        </CallButton>
      ),
    },
    {
      key: "fb",
      label: (
        <div className={styles.socialIcon}>
          <a className={styles.facebook} target="_blank" href="https://www.facebook.com/profile.php?id=100085867923367">
            <img className={styles.facebookImage} src="/facebook.png" alt="" />
          </a>
      <span>ფეისბუქი</span>
        </div>
      ),
    },
  ]


  return (
    <div className={styles.BurgerMenu}>

      <button
        className={styles.burger}
        onClick={() => setOpen(true)}
      >
        <MenuOutlined />
      </button>

      <Drawer
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
        size={260}
      >
        <Menu
          mode="inline"
          items={items}

        />
      </Drawer>

    </div>
  )
}

export default BurgerMenu