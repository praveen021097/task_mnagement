import React from 'react'
import Tasks from '../components/Tasks'
import styles from "./Homepage.module.css";
const Homepage = () => {
  return (
    <div className={styles.container}>
      <Tasks />
    </div>
  )
}

export default Homepage

